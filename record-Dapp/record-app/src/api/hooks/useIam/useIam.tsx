import { useCallback, useContext } from 'react';
import { CacheServerClient, ENSNamespaceTypes, IAM, IRoleDefinition } from 'iam-client-lib';

import { IamContext } from 'api/context/iam/iamContext/IamContext';
import { UserRole } from 'context/user/userContext/UserContext.types';
import { assets } from '../../../mocks/assets';
import { AssetShare, AssetShareStatuses, Holder } from '../../../hooks/useAssetShares/useAssetShares.types';

import { TokenData, useIamReturnType } from './useIam.types';

export const useIam: () => useIamReturnType = () => {
  const iamContext = useContext(IamContext);

  if (iamContext === undefined) {
    throw new Error('IamContext is unavailable, make sure you are using IamContextController');
  }

  const login = async (privateKey?: string) => {
    const cacheClient = new CacheServerClient({
      url: process.env.REACT_APP_CACHE_SERVER as string,
    });

    const iam = new IAM({
      rpcUrl: process.env.REACT_APP_RPC_PROVIDER as string,
      chainId: 73799,
      cacheClient,
      privateKey,
    });
    iamContext.setIam(iam);

    if (privateKey) {
      localStorage.setItem('ETH_PRIVATE_KEY', privateKey);
    }
    try {
      const result = await iam.initializeConnection({
        useMetamaskExtension: !privateKey,
      });
      return {
        connected: result.connected,
      };
    } catch {
      return {
        connected: false,
      };
    }
  };

  const logout = async () => {
    const { iam, setIam } = iamContext;

    localStorage.removeItem('ETH_PRIVATE_KEY');
    if (iam.current && iam.current.isConnected()) {
      await iam.current.closeConnection();
      setIam(null);
    }
    localStorage.removeItem('walletconnect');
  };

  const mintAssetShares = async (assetRef: string, metadataUri: string) => {
    const { contract, iam } = iamContext;
    const user = iam.current?.getSigner();
    if (contract && user) {
      const transaction = await contract.connect(user).mintAssetShares(assetRef, metadataUri);
      await transaction.wait();
      return true;
    }
    return false;
  };

  const divideAssetShares = async (shareHolders: string[], assetRef: string, shares: number[]) => {
    const { contract, iam } = iamContext;
    const user = iam.current?.getSigner();
    if (contract && user) {
      const transaction = await contract
        .connect(user)
        .divideAssetShares(user.getAddress(), shareHolders, assetRef, shares, []);
      await transaction.wait();
      return true;
    }
    return false;
  };

  const transferAssetShares = async (assetRef: string, holderTo: string, shares: number) => {
    const { contract, iam } = iamContext;
    const user = iam.current?.getSigner();
    if (contract && user) {
      const transaction = await contract.connect(user).transfer(user.getAddress(), holderTo, assetRef, shares, []);
      await transaction.wait();
      return true;
    }
    return false;
  };

  const mintedAssetSharesBy = async () => {
    const { contract, iam } = iamContext;

    const user = iam.current?.getSigner();

    if (user && contract) {
      const userAddress = await user.getAddress();
      return await contract.connect(user).mintedAssetSharesBy(userAddress);
    }
    return [];
  };

  const ownedAssetSharesWithBalances = async () => {
    const { contract, iam } = iamContext;

    const user = iam.current?.getSigner();

    if (user && contract) {
      const userAddress = await user.getAddress();
      const ownedAssetSharesWithBalances = await contract.connect(user).ownedAssetSharesWithBalances(userAddress);
      return ownedAssetSharesWithBalances;
    }
    return [];
  };

  const getMintedAssetShares = async () => {
    const mintedAssetUids = await mintedAssetSharesBy();
    const address = await getAddress();

    const assetShares: AssetShare[] = [];
    assets
      .filter(asset => {
        return mintedAssetUids.indexOf(asset.id) !== -1;
      })
      .forEach(asset => {
        const id = asset.id;
        const currentHolder: Holder = { id: address, name: '', shares: 1000 };
        const holders: Holder[] = [];
        holders.push(currentHolder);
        assetShares.push({
          id: id,
          asset: asset,
          holders: holders,
          currentHolder: currentHolder,
          status: AssetShareStatuses.MINTED,
        });
      });
    return assetShares;
  };

  const getOwnedAssetShares = async () => {
    const assetShares: AssetShare[] = [];
    const address = await getAddress();
    const [ownedAssetShares, ownedAssetSharesBalances] = await ownedAssetSharesWithBalances();

    for (let i = 0; i < ownedAssetShares.length; i++) {
      const id = ownedAssetShares[i];
      const holders = await getHolders(ownedAssetShares[i]);
      const asset = assets.find(({ id }) => id === ownedAssetShares[i]);
      if (asset) {
        const shares = parseFloat(ownedAssetSharesBalances[i]);
        const currentHolder: Holder = { id: address, name: '', shares: shares };
        assetShares.push({
          id: id,
          asset: asset,
          holders: holders.map(holder => {
            return { id: holder.id, name: holder.name, shares: parseFloat(holder.shares.toString()) };
          }),
          currentHolder: currentHolder,
          status: AssetShareStatuses.DIVIDED,
        });
      }
    }

    return assetShares;
  };

  const getHolders = async (assetRef: string) => {
    const { contract, iam } = iamContext;

    const user = iam.current?.getSigner();
    const assetShareHolders: Holder[] = [];
    if (user) {
      const [holders, balances] = await contract.connect(user).shareHoldersWithBalance(assetRef);
      for (let i = 0; i < holders.length; i++) {
        assetShareHolders.push({ id: holders[i], name: '', shares: balances[i] });
      }
    }

    return assetShareHolders;
  };

  const getAddress = async () => {
    const { iam } = iamContext;

    if (iam.current && iam.current.isConnected()) {
      const address = await iam.current.getSigner()?.getAddress();
      return address ?? '';
    }

    return '';
  };

  const getUserData = async () => {
    const { iam } = iamContext;

    const address = await getAddress();
    const avatar = `https://blockies.shipchain.io/${address}.png?size=large`;

    const did = iam.current?.getDid() as string;
    const acceptedClaims = (await iam.current?.getRequestedClaims({ did, isAccepted: true })) ?? [];
    if (acceptedClaims.length === 0) {
      return {
        role: null,
        name: '',
        avatar,
        address,
      };
    }

    const data = (await iam.current?.decodeJWTToken({
      token: acceptedClaims[0].token,
    })) as TokenData;

    const role = (await iam.current?.getDefinition({
      type: ENSNamespaceTypes.Roles,
      namespace: acceptedClaims[0].claimType,
    })) as IRoleDefinition;

    return {
      role: role.roleName as UserRole,
      name: data.claimData.fields.find(field => field.key === 'Name')?.value,
      avatar,
      address,
    };
  };

  return {
    isConnected: useCallback(() => !!iamContext.iam.current && iamContext.iam.current.isConnected(), [iamContext.iam]),
    login,
    logout,
    getAddress,
    getUserData,
    mintAssetShares,
    divideAssetShares,
    transferAssetShares,
    getMintedAssetShares,
    getOwnedAssetShares,
  };
};

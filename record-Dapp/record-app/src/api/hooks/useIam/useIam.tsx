import { useCallback, useContext } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Contract } from 'ethers';
import { CacheServerClient, ENSNamespaceTypes, IAM, IRoleDefinition } from 'iam-client-lib';

import { IamContext } from 'api/context/iam/iamContext/IamContext';
import { ProxyMetadata } from 'hooks/useAssets/useAssets.types';
import { UserRole } from 'context/user/userContext/UserContext.types';

import { TokenData, useIamReturnType } from './useIam.types';

const getDataFromTokens = async (tokensUid: string[], contract: Contract) => {
  return (
    await Promise.all<ProxyMetadata>(
      tokensUid.map(async (tokenUid: string) => {
        const uri = await contract.uri(tokenUid);
        if (uri) {
          const response = await fetch(uri, { cache: 'no-store' });
          return response.json();
        } else {
          return {
            id: tokenUid,
          };
        }
      }),
    )
  ).filter(Boolean);
};

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

  const createClaim = async (data: Record<string, unknown>) => {
    const { iam } = iamContext;

    if (iam.current && iam.current.isConnected()) {
      await iam.current.createSelfSignedClaim({ data });
    }
  };

  const getAllTokens = async () => {
    const { contract } = iamContext;
    if (contract) {
      const tokensUid = await contract.allTokens();
      return getDataFromTokens(tokensUid, contract);
    }
    return [];
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
    createClaim,
    getAddress,
    getAllTokens,
    getUserData,
  };
};

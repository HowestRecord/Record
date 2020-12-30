import { useCallback, useContext } from 'react';

import { AssetSharesContext } from 'context/assetShares/assetShares/AssetSharesContext';
import { useIam } from 'api/hooks/useIam/useIam';
import { useUser } from 'hooks/useUser/useUser';

import { AssetShare } from './useAssetShares.types';

export const useAssetShares = () => {
  const context = useContext(AssetSharesContext);
  const { getMintedAssetShares, getOwnedAssetShares } = useIam();
  const { user } = useUser();

  if (context === undefined) {
    throw new Error('useAssets must be used within an AssetsContextController');
  }

  const getCachedMintedAssetShares = useCallback(async () => {
    if (context.mintedAssetShares) {
      return context.mintedAssetShares;
    }
    return [];
  }, [context.mintedAssetShares]);

  const getCachedOwnedAssetShares = useCallback(async () => {
    if (context.ownedAssetShares) {
      return context.ownedAssetShares;
    }
    return [];
  }, [context.ownedAssetShares]);

  const getOwnedAssetSharesBalance = useCallback(async () => {
    if (user) {
      const assetShares = await getOwnedAssetShares();
      context.setOwnedAssetShares(assetShares);
      return assetShares;
    }
    return [];
  }, [context.ownedAssetShares]);

  const getMintedAssetSharesBalance = useCallback(async () => {
    if (user) {
      const assetShares = await getMintedAssetShares();
      context.setMintedAssetShares(assetShares);
      return assetShares;
    }
    return [];
  }, [context.mintedAssetShares]);

  return {
    mintedAssetShares: context.mintedAssetShares,
    ownedAssetShares: context.ownedAssetShares,
    getCachedMintedAssetShares,
    getCachedOwnedAssetShares,
    getMintedAssetSharesBalance,
    getOwnedAssetSharesBalance,
    getOwnedAssetShareById: (id: string) => context.ownedAssetShares?.find(assetShare => assetShare.id === id),
    getMintedAssetShareById: (id: string) => context.mintedAssetShares?.find(assetShare => assetShare.id === id),
    setChachedMintedAssetShares(assetShares: AssetShare[]) {
      return context.setMintedAssetShares(assetShares);
    },
    setCachedOwnedAssetShares(assetShares: AssetShare[]) {
      return context.setOwnedAssetShares(assetShares);
    },
  };
};

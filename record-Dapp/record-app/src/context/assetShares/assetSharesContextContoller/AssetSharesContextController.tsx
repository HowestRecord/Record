import React, { useState } from 'react';

import { AssetShare } from 'hooks/useAssetShares/useAssetShares.types';
import { AssetSharesContext } from '../assetShares/AssetSharesContext';

import { AssetSharesContextControllerProps } from './AssetSharesContextController.types';

export const AssetSharesContextController = ({ children }: AssetSharesContextControllerProps) => {
  const [ownedAssetShares, setOwnedAssetShares] = useState<AssetShare[]>([]);
  const [mintedAssetShares, setMintedAssetShares] = useState<AssetShare[]>([]);

  return (
    <AssetSharesContext.Provider
      value={{ ownedAssetShares, mintedAssetShares, setOwnedAssetShares, setMintedAssetShares }}
    >
      {children}
    </AssetSharesContext.Provider>
  );
};

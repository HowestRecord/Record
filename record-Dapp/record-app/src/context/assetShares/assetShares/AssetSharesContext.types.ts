import { AssetShare } from 'hooks/useAssetShares/useAssetShares.types';

export type AssetsSharesContextType = {
  mintedAssetShares: AssetShare[];
  setMintedAssetShares: React.Dispatch<React.SetStateAction<AssetShare[]>>;
  ownedAssetShares: AssetShare[];
  setOwnedAssetShares: React.Dispatch<React.SetStateAction<AssetShare[]>>;
};

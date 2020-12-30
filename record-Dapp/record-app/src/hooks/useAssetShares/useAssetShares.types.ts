import { Asset } from '../useAssets/useAssets.types';

export type useAssetShareReturnType = {
  getMintedAssetShares: () => Promise<AssetShare[]>;
  getOwnedAssetShares: () => Promise<AssetShare[]>;
};

export type AssetShare = {
  id: string;
  asset: Asset;
  holders: Holder[];
  currentHolder: Holder;
  status: AssetShareStatuses;
};

export enum AssetShareStatuses {
  MINTED = 'MINTED',
  DIVIDED = 'DIVIDED',
}

export type Holder = {
  id: string;
  name: string;
  shares: number;
};

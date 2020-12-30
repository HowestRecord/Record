import { Asset } from 'hooks/useAssets/useAssets.types';

export type AssetsContextType = {
  assets: Asset[] | null;
  setAssets: React.Dispatch<React.SetStateAction<Asset[] | null>>;
};

import { Asset } from 'hooks/useAssets/useAssets.types';

export type AssetProps = Pick<Asset, 'name' | 'subtitle' | 'status' | 'id'>;

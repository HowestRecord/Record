import { AssetShare } from 'hooks/useAssetShares/useAssetShares.types';

export interface AssetShareProps extends Pick<AssetShare, 'id' | 'asset' | 'currentHolder' | 'status' | 'holders'> {
  handleOnClick: () => void;
  handleOnActionClick: () => void;
  showActionButtons?: boolean;
}

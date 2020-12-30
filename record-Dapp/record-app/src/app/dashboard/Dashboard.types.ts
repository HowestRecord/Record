import { AssetShare } from '../../hooks/useAssetShares/useAssetShares.types';

import { MintAssetTokenForm } from './dashboards/MintAssetToken.types';

export type DashboardProps = {
  isLoading: boolean;
  onMintAssetToken: (values: MintAssetTokenForm) => Promise<void>;
  mintedAssetShares: AssetShare[];
  ownedAssetShares: AssetShare[];
};

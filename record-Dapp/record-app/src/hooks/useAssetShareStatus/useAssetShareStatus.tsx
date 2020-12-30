import React from 'react';

import { AssetActiveIcon, AssetIssuedIcon } from 'ui/icons';
import { AssetShareStatuses } from '../useAssetShares/useAssetShares.types';

import { UseAssetShareStatusTypes } from './useAssetShareStatus.types';

export const useAssetShareStatus: () => UseAssetShareStatusTypes = () => {
  const mapStatusIcon = {
    [AssetShareStatuses.MINTED]: AssetActiveIcon,
    [AssetShareStatuses.DIVIDED]: AssetIssuedIcon,
  };

  const mapStatusToTranslation: Record<string, string> = {
    [AssetShareStatuses.MINTED]: 'assetshare_status.minted',
    [AssetShareStatuses.DIVIDED]: 'assetshare_status.divided',
  };

  const getIcon = (name: AssetShareStatuses) => {
    const Element = mapStatusIcon[name];

    return <Element />;
  };

  return {
    getIcon,
    getLabel: (name: AssetShareStatuses) => mapStatusToTranslation[name],
    getIconElement: (name: AssetShareStatuses) => mapStatusIcon[name],
  };
};

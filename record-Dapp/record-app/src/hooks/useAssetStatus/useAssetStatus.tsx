import React from 'react';

import { AssetStatuses } from 'hooks/useAssets/useAssets.types';
import { AssetActiveIcon, AssetInactiveIcon, AssetIssuedIcon, AssetPendingIcon, AssetVerifiedIcon } from 'ui/icons';

import { UseAssetStatusReturnType } from './useAssetStatus.types';

export const useAssetStatus: () => UseAssetStatusReturnType = () => {
  const mapStatusIcon = {
    [AssetStatuses.ACTIVE]: AssetActiveIcon,
    [AssetStatuses.INACTIVE]: AssetInactiveIcon,
    [AssetStatuses.INSTALLED]: AssetPendingIcon,
    [AssetStatuses.VERIFIED]: AssetVerifiedIcon,
    [AssetStatuses.ISSUED]: AssetIssuedIcon,
  };

  const mapStatusToTranslation: Record<string, string> = {
    [AssetStatuses.ACTIVE]: 'asset_status.active',
    [AssetStatuses.INACTIVE]: 'asset_status.inactive',
    [AssetStatuses.INSTALLED]: 'asset_status.pending',
    [AssetStatuses.VERIFIED]: 'asset_status.verified',
    [AssetStatuses.ISSUED]: 'asset_status.issued',
  };

  const getIcon = (name: AssetStatuses) => {
    const Element = mapStatusIcon[name];

    return <Element />;
  };

  return {
    getIcon,
    getLabel: (name: AssetStatuses) => mapStatusToTranslation[name],
    getIconElement: (name: AssetStatuses) => mapStatusIcon[name],
  };
};

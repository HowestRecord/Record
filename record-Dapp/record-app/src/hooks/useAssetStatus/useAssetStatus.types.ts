import { FunctionComponent, ReactNode } from 'react';
import { SvgIconProps } from '@material-ui/core';

import { AssetStatuses } from 'hooks/useAssets/useAssets.types';

export type UseAssetStatusReturnType = {
  getIcon: (name: AssetStatuses) => ReactNode;
  getIconElement: (name: AssetStatuses) => FunctionComponent<SvgIconProps>;
  getLabel: (name: AssetStatuses) => string;
};

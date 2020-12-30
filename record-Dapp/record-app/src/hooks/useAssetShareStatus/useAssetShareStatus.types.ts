import { FunctionComponent, ReactNode } from 'react';
import { SvgIconProps } from '@material-ui/core';

import { AssetShareStatuses } from '../useAssetShares/useAssetShares.types';

export type UseAssetShareStatusTypes = {
  getIcon: (name: AssetShareStatuses) => ReactNode;
  getIconElement: (name: AssetShareStatuses) => FunctionComponent<SvgIconProps>;
  getLabel: (name: AssetShareStatuses) => string;
};

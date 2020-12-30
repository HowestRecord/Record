import React, { useState } from 'react';

import { Asset } from 'hooks/useAssets/useAssets.types';
import { AssetsContext } from '../assetsContext/AssetsContext';

import { AssetsContextControllerProps } from './AssetsContextController.types';

export const AssetsContextController = ({ children }: AssetsContextControllerProps) => {
  const [assets, setAssets] = useState<Asset[] | null>(null);

  return <AssetsContext.Provider value={{ assets, setAssets }}>{children}</AssetsContext.Provider>;
};

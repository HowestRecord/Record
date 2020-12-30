import { createContext } from 'react';

import { AssetsSharesContextType } from './AssetSharesContext.types';

export const AssetSharesContext = createContext<AssetsSharesContextType | undefined>(undefined);

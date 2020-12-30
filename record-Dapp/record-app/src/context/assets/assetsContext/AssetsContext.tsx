import { createContext } from 'react';

import { AssetsContextType } from './AssetsContext.types';

export const AssetsContext = createContext<AssetsContextType | undefined>(undefined);

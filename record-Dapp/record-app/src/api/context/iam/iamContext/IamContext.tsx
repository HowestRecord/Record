import { createContext } from 'react';

import { IamContextType } from './IamContext.types';

export const IamContext = createContext<IamContextType | undefined>(undefined);

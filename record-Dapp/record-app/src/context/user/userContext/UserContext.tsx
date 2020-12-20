import { createContext } from 'react';

import { UserContextType } from './UserContext.types';

export const UserContext = createContext<UserContextType | undefined>(undefined);

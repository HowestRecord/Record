import React, { useState } from 'react';

import { UserContext } from '../userContext/UserContext';
import { User } from '../userContext/UserContext.types';

import { UserContextControllerProps } from './UserContextController.types';

export const UserContextController = ({ children }: UserContextControllerProps) => {
  const [user, setUser] = useState<User>();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

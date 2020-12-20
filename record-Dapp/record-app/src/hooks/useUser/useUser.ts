import { useContext } from 'react';

import { UserContext } from 'context/user/userContext/UserContext';
import { User } from 'context/user/userContext/UserContext.types';

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within an UserContextController');
  }

  const setUser = (user: Partial<User>) => {
    context.setUser(u => {
      if (u) {
        const newUser = { ...u, ...user };

        localStorage.setItem('user', JSON.stringify(newUser));
        return newUser;
      }
      const newUser = user as User;
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    });
  };

  const clearUserInfo = () => {
    context.setUser(undefined);
    localStorage.removeItem('user');
  };

  return {
    user: context.user,
    setUser,
    clearUserInfo,
  };
};

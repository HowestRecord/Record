import { ProxyMetadata } from 'hooks/useAssets/useAssets.types';
import { UserRole } from 'context/user/userContext/UserContext.types';

export type useIamReturnType = {
  login: (privateKey?: string) => Promise<InitializeData>;
  logout: VoidFunction;
  getAddress: () => Promise<string>;
  isConnected: () => boolean;
  getUserData: () => Promise<UserData>;
};

export type UserData = {
  role: UserRole | null;
  name?: string;
  avatar: string;
  address: string;
};

export type InitializeData = {
  connected: boolean;
};

export type TokenData = {
  claimData: {
    fields: {
      key: string;
      value: string;
    }[];
  };
};

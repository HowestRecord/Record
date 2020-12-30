import { UserRole } from 'context/user/userContext/UserContext.types';
import { AssetShare } from '../../../hooks/useAssetShares/useAssetShares.types';

export type useIamReturnType = {
  login: (privateKey?: string) => Promise<InitializeData>;
  logout: VoidFunction;
  mintAssetShares: (tokenref: string, metadataUri: string) => Promise<boolean>;
  divideAssetShares: (shareHolders: string[], assetRef: string, shares: number[]) => Promise<boolean>;
  transferAssetShares: (assetRef: string, holderTo: string, shares: number) => Promise<boolean>;
  getAddress: () => Promise<string>;
  isConnected: () => boolean;
  getUserData: () => Promise<UserData>;
  getMintedAssetShares: () => Promise<AssetShare[]>;
  getOwnedAssetShares: () => Promise<AssetShare[]>;
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

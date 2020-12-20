export type User = {
  role: UserRole | null;
  name?: string;
  avatar: string;
  address: string;
};

export enum UserRole {
  Owner = 'batteryuser',
  Verifier = 'verifier',
  Installer = 'installer',
  Manufacturer = 'manufacturer',
  GoverningBody = 'governingBody',
}

export type UserContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

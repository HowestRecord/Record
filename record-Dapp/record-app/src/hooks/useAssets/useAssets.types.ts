export type ProxyUser = {
  name: string;
  address: string;
};

export type ProxyMetadata = {
  id: string;
  capacity?: string;
  chemicalType?: string;
  model?: string;
  serialNumber?: string;
  status?: string;
  weight?: string;
  manufacturer?: ProxyUser | string;
  origin?: string;
  dateOfIssue?: string;
  dateOfInstallation?: string;
  dateOfRegistration?: string;
  dateOfVerification?: string;
  installer?: ProxyUser | string;
  verifier?: ProxyUser | string;
  owner?: ProxyUser | string;
  power?: string;
  maximumVoltage?: string;
  meterSerial?: string;
  location?: {
    latitude: string;
    longitude: string;
  };
  installationPhoto?: string;
  certPhoto?: string;
  comment?: string;
  fee?: number;
  address?: string;
};

export type Asset = {
  id: string;
  name: string;
  subtitle: string;
  status: AssetStatuses;
  manufacturer?: ProxyUser;
  origin: string;
  transactionHash: string;
  blockNumber: number;
  confirmations: number;
  dateOfIssue: string;
  capacity: string;
  weight: string;
  power: string;
  maxVoltage: string;
  installer?: ProxyUser;
  manufacturerSN?: string;
  fee?: number;
  chemicalType?: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  verifier?: ProxyUser;
  digitalMeter?: string;
  owner?: ProxyUser;
  pickupDate?: string;
  dateOfInstallation?: string;
  dateOfVerification?: string;
  dateOfRegistration?: string;
  comment?: string;
  originalData?: ProxyMetadata;
  installationPhoto?: string;
  certPhoto?: string;
};

export type AssetsKeys = keyof Asset;
export type AssetDate =
  | 'dateOfRegistration'
  | 'pickupDate'
  | 'dateOfInstallation'
  | 'dateOfVerification'
  | 'dateOfIssue';

export enum AssetStatuses {
  ISSUED = 'ISSUED',
  INSTALLED = 'INSTALLED',
  VERIFIED = 'VERIFIED',
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

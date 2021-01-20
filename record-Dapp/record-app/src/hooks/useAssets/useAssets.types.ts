export type ProxyUser = {
  name: string;
  address: string;
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
  installationPhoto?: string;
  certPhoto?: string;
};

export enum AssetStatuses {
  ISSUED = 'ISSUED',
  INSTALLED = 'INSTALLED',
  VERIFIED = 'VERIFIED',
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

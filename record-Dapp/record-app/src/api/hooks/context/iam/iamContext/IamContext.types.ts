import { IAM } from 'iam-client-lib';
import { Contract } from 'ethers';
import { MutableRefObject } from 'react';

export type IamContextType = {
  iam: MutableRefObject<IAM | null>;
  setIam: (newIam: IAM | null) => void;
  contract: Contract;
};

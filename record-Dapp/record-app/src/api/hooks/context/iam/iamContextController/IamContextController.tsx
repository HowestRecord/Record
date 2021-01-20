import React, { useRef } from 'react';
import { IAM } from 'iam-client-lib';
import { Contract, providers } from 'ethers';

import { IamContext } from '../iamContext/IamContext';

import { IamContextControllerProps } from './IamContextController.types';
import { abi as eth1155Abi } from './Record.json';

const eth1155 = process.env.REACT_APP_ETH1155_ADDRESS as string;
//const proxyFactory = process.env.REACT_APP_PROXY_ADDRESS as string;

const contract = new Contract(
  eth1155,
  eth1155Abi,
  new providers.JsonRpcProvider(process.env.REACT_APP_RPC_PROVIDER as string),
);

/*const proxyContract = new Contract(
  proxyFactory,
  proxyFactoryAbi,
  new providers.JsonRpcProvider(process.env.REACT_APP_RPC_PROVIDER as string)
);*/

export const IamContextController = ({ children }: IamContextControllerProps) => {
  const iam = useRef<IAM | null>(null);

  const setIam = (newIam: IAM | null) => {
    iam.current = newIam;
  };

  return (
    <IamContext.Provider
      value={{
        iam: iam,
        setIam,
        contract,
      }}
    >
      {children}
    </IamContext.Provider>
  );
};

import { useCallback, useContext } from 'react';

//import { uInt8StringToBlob } from 'form/fields/uploadField/UploadField.utils';
import { AssetsContext } from 'context/assets/assetsContext/AssetsContext';
import { Asset, AssetStatuses, ProxyUser } from 'hooks/useAssets/useAssets.types';

import { ProxyMetadata } from './useAssets.types';

const mapUser = (user?: ProxyUser | string): ProxyUser | undefined => {
  if (typeof user === 'string') {
    return {
      name: user,
      address: '',
    };
  }

  return user;
};

export const useAssets = () => {
  const context = useContext(AssetsContext);

  if (context === undefined) {
    throw new Error('useAssets must be used within an AssetsContextController');
  }

  const setAssetsFromClaims = useCallback((claims: ProxyMetadata[]) => {
    const assets: Asset[] = claims.map(claim => {
      return {
        id: claim.id,
        name: claim.model ?? '',
        subtitle: claim.chemicalType ?? '',
        model: claim.model ?? '',
        chemicalType: claim.chemicalType ?? '',
        status: (claim.status || AssetStatuses.INACTIVE) as AssetStatuses,
        manufacturer: mapUser(claim.manufacturer),
        origin: claim.origin ?? '',
        transactionHash: '',
        blockNumber: 123,
        confirmations: 32,
        dateOfIssue: claim.dateOfIssue || new Date().toISOString(),
        dateOfRegistration: claim.dateOfRegistration,
        dateOfInstallation: claim.dateOfInstallation,
        dateOfVerification: claim.dateOfVerification,
        capacity: claim.capacity ?? '',
        weight: claim.weight ?? '',
        power: claim.power ?? '',
        maxVoltage: claim.maximumVoltage ?? '',
        digitalMeter: claim.meterSerial,
        latitude: Number(claim.location?.latitude),
        longitude: Number(claim.location?.longitude),
        originalData: claim,
        installationPhoto: 'uInt8StringToBlob(claim.installationPhoto)',
        certPhoto: 'uInt8StringToBlob(claim.certPhoto)',
        comment: claim.comment,
        installer: mapUser(claim.installer),
        verifier: mapUser(claim.verifier),
        fee: claim.fee,
        owner: mapUser(claim.owner),
        address: claim.address,
      };
    });
    context.setAssets(assets);

    return assets;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAssets = useCallback(async () => {
    if (context.assets) {
      return context.assets;
    }

    setAssetsFromClaims([]);
  }, [context.assets]);

  return {
    assets: context.assets,
    getAssets,
    setAssets: (assets: Asset[] | null) => context.setAssets(assets),
    getAssetById: (id: string) => context.assets?.find(asset => asset.id === id),
    setAssetsFromClaims,
  };
};

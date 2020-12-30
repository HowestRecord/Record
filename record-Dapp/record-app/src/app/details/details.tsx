import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';

//import { AssetDetails } from 'ui/assetDetails/AssetDetails';
import { useAssetShares, useLocale } from 'hooks';
import { Loader, Page } from 'ui';
import { AssetShareDetails } from '../../ui/assetShareDetails/AssetShareDetails';
//import {useStyles} from "../divideAssetShares/DivideAssetShares.styles";
//import {useIam} from "../../api/hooks/useIam/useIam";

export const Details = () => {
  const { getOwnedAssetShareById, getOwnedAssetSharesBalance } = useAssetShares();
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  //const classes = useStyles();
  const assetShare = getOwnedAssetShareById(id);
  //const { divideAssetShares } = useIam();

  useEffect(() => {
    if (!assetShare) {
      getOwnedAssetSharesBalance();
    }
  }, []);

  const displayContent = () => {
    if (!assetShare)
      return (
        <Box justifyContent="center">
          <Loader text={formatMessage({ id: 'dashboard.loading' })} />
        </Box>
      );

    return <AssetShareDetails {...assetShare} />;
  };

  return <Page title={formatMessage({ id: 'assetshare_details.page_title' })}>{displayContent()}</Page>;
};

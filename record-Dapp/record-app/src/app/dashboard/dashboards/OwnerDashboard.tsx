import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

import { Button, Loader } from 'ui';
import { useLocale } from 'hooks';
import { TabMenu } from '../../../ui';
import { Form } from '../../../form/form/Form';
import { GenericField } from '../../../form/fields';
import { useStyles } from '../Dashboard.styles';
import { DashboardProps } from '../Dashboard.types';
import { AssetShare } from '../../../ui/assetShare/AssetShare';
import { uuid } from '../../../form/validators/uuid/uuid';
import { TerminateIcon } from '../../../ui/icons';
import { UploadField } from '../../../form/fields/uploadField/UploadField';

import { MintAssetTokenForm } from './MintAssetToken.types';
export const OwnerDashboard = ({
  isLoading,
  onMintAssetToken,
  mintedAssetShares,
  ownedAssetShares,
}: DashboardProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const classes = useStyles();
  const renderMyShares = () => {
    return isLoading ? (
      <Grid container justify="center" direction="column" alignItems="center">
        <Loader text={formatMessage({ id: 'dashboard.loading' })} />
      </Grid>
    ) : (
      <Grid container spacing={1}>
        {ownedAssetShares.length > 0 &&
          ownedAssetShares.map(({ id, status, asset, currentHolder }) => (
            <Grid key={id} item xs={6}>
              <AssetShare
                status={status}
                id={id}
                currentHolder={currentHolder}
                asset={asset}
                holders={[]}
                handleOnClick={() => {
                  handleDetailAssetShares(id);
                }}
                handleOnActionClick={() => {
                  handleTransferAssetShares(id);
                }}
                showActionButtons={true}
              />
            </Grid>
          ))}
      </Grid>
    );
  };

  const renderMintAssetShares = () => {
    return isLoading ? (
      <Grid container justify="center" direction="column" alignItems="center">
        <Loader text={formatMessage({ id: 'dashboard.minting_shares' })} />
      </Grid>
    ) : (
      <Grid item xs={12} justify="center" alignContent="center" direction="row" container>
        <Form<MintAssetTokenForm>>
          {({ handleSubmit }) => (
            <Grid item xs={12} lg={3} container justify="center">
              <Grid item xs={12} lg={3} container justify="flex-end">
                <IconButton type="reset" aria-label="reset" size="small">
                  <TerminateIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item xs={12} lg={3}>
                <GenericField
                  name={'assetUuid'}
                  label={formatMessage({ id: 'ownerdashboard.assetuuid' })}
                  className={classes.input}
                  required
                  validation={{
                    validate: uuid,
                  }}
                />
                <UploadField label={formatMessage({ id: 'ownerdashboard.uri' })} name="mintingDocument" compressImage />
              </Grid>
              <Grid
                item
                xs={12}
                lg={3}
                justify="center"
                alignContent="center"
                container
                className={classes.buttonContainer}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onMintAssetToken)}
                  className={classes.button}
                >
                  {formatMessage({ id: 'ownerdashboard.mint' })}
                </Button>
              </Grid>
            </Grid>
          )}
        </Form>
      </Grid>
    );
  };

  const renderDivideAssetShares = () => {
    return isLoading ? (
      <Grid container justify="center" direction="column" alignItems="center">
        <Loader text={formatMessage({ id: 'dashboard.loading' })} />
      </Grid>
    ) : (
      <Grid container spacing={1}>
        {mintedAssetShares.length > 0 &&
          mintedAssetShares.map(({ id, status, asset, currentHolder }) => (
            <Grid key={id} item xs={6}>
              <AssetShare
                status={status}
                id={id}
                currentHolder={currentHolder}
                asset={asset}
                holders={[]}
                handleOnClick={() => {}}
                handleOnActionClick={() => {
                  handleDivideAssetShares(id);
                }}
                showActionButtons={true}
              />
            </Grid>
          ))}
      </Grid>
    );
  };

  const handleTransferAssetShares = (id: string) => {
    push(`/transferAssetShares/${id}`);
  };

  const handleDivideAssetShares = (id: string) => {
    push(`/divideAssetShares/${id}`);
  };

  const handleDetailAssetShares = (id: string) => {
    push(`/assetShareDetails/${id}`);
  };

  return (
    <TabMenu
      tabs={[
        {
          label: formatMessage({ id: 'dashboard.your_shares' }),
          content: renderMyShares(),
        },
        {
          label: formatMessage({ id: 'dashboard.mint_shares' }),
          content: renderMintAssetShares(),
        },
        {
          label: formatMessage({ id: 'dashboard.divide_shares' }),
          content: renderDivideAssetShares(),
        },
      ]}
    />
  );
};

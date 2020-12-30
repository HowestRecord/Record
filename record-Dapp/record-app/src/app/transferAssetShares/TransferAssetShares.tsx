import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { useParams } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import IconButton from '@material-ui/core/IconButton';

import { truncateString } from '../../helpers';
import { useAssetShares, useLocale, useUser } from '../../hooks';
import { AppRoute } from '../../routing/AppRoute.enum';
import { Button, Loader, Page } from '../../ui';
import { Form } from '../../form/form/Form';
import { GenericField } from '../../form/fields';
import { useIam } from '../../api/hooks/useIam/useIam';
import { ethAddress } from '../../form/validators/ethAddress/ethAddress';
import { TerminateIcon } from '../../ui/icons';

import { TransferAssetSharesTypesForm } from './TransferAssetShares.types';
import { useStyles } from './TransferAssetShares.styles';
export const TransferAssetShares = () => {
  const { id } = useParams<{ id: string }>();
  const { getOwnedAssetShareById, getOwnedAssetSharesBalance } = useAssetShares();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const assetShare = getOwnedAssetShareById(id);
  const { user } = useUser();
  const { transferAssetShares } = useIam();
  const { replace } = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!assetShare) {
      getOwnedAssetSharesBalance();
    }
  }, []);

  const handleTransferAssetShares = async ({ ...values }: TransferAssetSharesTypesForm) => {
    setIsLoading(true);
    setError(false);
    if (user && assetShare) {
      try {
        await transferAssetShares(id, values.shareHolderToAddress, values.shares);
        setIsLoading(false);
        setMessage(formatMessage({ id: 'assetshare_shares.transfer.successfully' }));
        setOpen(true);
      } catch (e) {
        setOpen(true);
        setError(true);
        setMessage(formatMessage({ id: 'assetshare_shares.transfer.error' }));
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    replace(AppRoute.dashboard);
  };

  const alert = () => {
    if (error) {
      return (
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="warning">
          {message}
        </MuiAlert>
      );
    } else {
      return (
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          {message}
        </MuiAlert>
      );
    }
  };

  const displayContent = () => {
    if (!assetShare)
      return (
        <Box justifyContent="center">
          <Loader text={formatMessage({ id: 'dashboard.loading' })} />
        </Box>
      );

    let formContent = (
      <Form<TransferAssetSharesTypesForm>>
        {({ handleSubmit, reset }) => (
          <Grid item xs={12} lg={3} container justify="center">
            <Grid item xs={12} lg={3} container justify="flex-end">
              <IconButton type="reset" aria-label="reset" size="small">
                <TerminateIcon fontSize="inherit" />
              </IconButton>
            </Grid>
            <Grid item xs={12} lg={3}>
              <GenericField
                name={'shareHolderFromAddress'}
                aria-readonly={true}
                value={assetShare.currentHolder.id}
                label={formatMessage({ id: 'assetshare_holder.from' })}
                className={classes.input}
                required
              />
              <GenericField
                name={'shareHolderToAddress'}
                label={formatMessage({ id: 'assetshare_holder.to' })}
                className={classes.input}
                required
                validation={{
                  validate: ethAddress,
                }}
              />
              <GenericField
                name={'shares'}
                label={formatMessage({ id: 'assetshare_shares' })}
                className={classes.input}
                required
                type={'number'}
                validation={{
                  min: { value: 1, message: 'validation.shares.min' },
                  max: { value: 1000, message: 'validation.shares.max' },
                }}
              />
            </Grid>
            <Grid container item xs={12} lg={3} justify="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit(handleTransferAssetShares)}
                className={classes.button}
              >
                {formatMessage({ id: 'assetshare_transfer.transfer' })}
              </Button>
            </Grid>
          </Grid>
        )}
      </Form>
    );

    if (isLoading) {
      formContent = (
        <Grid container justify="center" direction="column" alignItems="center">
          <Loader text={formatMessage({ id: 'assetshare_transfer.transfering' })} />
        </Grid>
      );
    }

    return (
      <Grid container>
        <Grid container alignItems="center" justify="center" alignContent="center" className={classes.mainContainer}>
          <Grid item xs={12} alignItems="center" direction="column" container>
            <Typography className={classes.assetId}>
              {truncateString({ maxLength: 20, string: assetShare.asset.id })}
            </Typography>
            <Typography className={classes.assetName}>{assetShare.asset.name}</Typography>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {alert()}
        </Snackbar>
        <Grid item xs={12} justify="center" alignContent="center" direction="row" container>
          {formContent}
        </Grid>
      </Grid>
    );
  };

  return (
    <Page title={formatMessage({ id: 'assetshare_transfer.page_title' })} backPage={AppRoute.dashboard}>
      {displayContent()}
    </Page>
  );
};

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useHistory } from 'react-router';
import IconButton from '@material-ui/core/IconButton';

import { TerminateIcon } from 'ui/icons';
import { Button, Loader, Page } from 'ui';
import { useAssetShares, useLocale, useUser } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { truncateString } from 'helpers';
import { Form } from '../../form/form/Form';
import { GenericField } from '../../form/fields';
import { Holder } from '../../hooks/useAssetShares/useAssetShares.types';
import { useIam } from '../../api/hooks/useIam/useIam';
import { GlobeIcon, SuccessIcon } from '../../ui/icons';
import { ethAddress } from '../../form/validators/ethAddress/ethAddress';
import { ShareBlock } from '../../ui/shareBlock/ShareBlock';

import { useStyles } from './DivideAssetShares.styles';
import { DivideAssetSharesTypesForm } from './DivideAssetShares.types';
export const DivideAssetShares = () => {
  const { getMintedAssetShareById, getMintedAssetSharesBalance } = useAssetShares();
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const assetShare = getMintedAssetShareById(id);
  const { divideAssetShares } = useIam();
  const { replace } = useHistory();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [holders, setHolders] = useState<Holder[]>([]);
  const [dividedSharesCount, setDividedSharesCount] = useState(0);
  useEffect(() => {
    if (!assetShare) {
      getMintedAssetSharesBalance();
      setDividedSharesCount(0);
    }
  }, []);

  const handleDivideAssetShares = async () => {
    if (user && assetShare) {
      setIsLoading(true);
      setError(false);
      try {
        const shareHolders = holders.map(holder => {
          return holder.id;
        });
        const amounts = holders.map(holder => {
          return holder.shares;
        });
        await divideAssetShares(shareHolders, assetShare.id, amounts);
        setIsLoading(false);
        setMessage(formatMessage({ id: 'assetshare_shares.divided.successfully' }));
        setOpen(true);
      } catch (e) {
        setOpen(true);
        setError(true);
        setMessage(formatMessage({ id: 'assetshare_shares.divided.error' }));
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  const addDevideAssetShares = async ({ ...values }: DivideAssetSharesTypesForm) => {
    const shares: number = +values.shares;
    const filteredArrayWithoutSelected = holders.filter(holder => holder.id !== values.shareHolderAddress);
    const filteredArrayWithSelected = holders.filter(holder => holder.id === values.shareHolderAddress);

    if (filteredArrayWithSelected.length > 0) {
      filteredArrayWithSelected[0].shares += shares;
      filteredArrayWithoutSelected.push(filteredArrayWithSelected[0]);
    } else {
      filteredArrayWithoutSelected.push({ id: values.shareHolderAddress, name: '', shares: shares });
    }

    const sharesCount = filteredArrayWithoutSelected.reduce((total, holder) => (total = total + holder.shares), 0);

    setHolders(filteredArrayWithoutSelected);
    setDividedSharesCount(sharesCount);
  };

  const handleDeleteHolder = (id: string) => {
    const filteredArray = holders.filter(holder => holder.id !== id);
    const sharesCount = filteredArray.reduce((total, holder) => (total = total + holder.shares), 0);

    setHolders(filteredArray);
    setDividedSharesCount(sharesCount);
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
      <Form<DivideAssetSharesTypesForm>>
        {({ handleSubmit }) => (
          <>
            <Grid item xs={12} lg={3} container>
              <Grid item xs={12} lg={3} container justify="flex-end">
                <IconButton type="reset" aria-label="reset" size="small">
                  <TerminateIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid item xs={12} lg={3} container>
                <GenericField
                  name={'shareHolderAddress'}
                  label={formatMessage({ id: 'assetshare_holder' })}
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
              <Grid item xs={12} lg={3} justify="center" container>
                {dividedSharesCount < 1000 && (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(addDevideAssetShares)}
                      className={classes.button}
                      disabled={dividedSharesCount === 1000}
                      hidden={dividedSharesCount === 1000}
                    >
                      {formatMessage({ id: 'assetshare_divide.add' })}
                    </Button>
                  </>
                )}
              </Grid>
            </Grid>
          </>
        )}
      </Form>
    );

    if (isLoading) {
      formContent = (
        <Grid container justify="center" direction="column" alignItems="center">
          <Loader text={formatMessage({ id: 'assetshare_divide.dividing' })} />
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
        {holders.length > 0 &&
          holders.map(({ id, shares }) => (
            <Grid key={id} container direction="column" justify="space-between" onClick={() => handleDeleteHolder(id)}>
              <Grid item xs={12} className={classes.container}>
                <ShareBlock
                  shares={shares}
                  items={[
                    {
                      text: truncateString({ maxLength: 20, string: id }),
                      label: formatMessage({ id: 'assetshare_detail.holder' }),
                      textIcon: GlobeIcon,
                      labelIcon: SuccessIcon,
                    },
                    {
                      text: shares.toString(),
                      label: formatMessage({ id: 'assetshare_detail.shares' }),
                      textIcon: GlobeIcon,
                      labelIcon: SuccessIcon,
                    },
                  ]}
                />
              </Grid>
            </Grid>
          ))}
        <Grid item xs={12} alignItems="center" direction="column" container>
          {dividedSharesCount === 1000 && (
            <Button
              variant="contained"
              color="primary"
              onClick={e => handleDivideAssetShares()}
              className={classes.button}
              disabled={dividedSharesCount !== 1000}
              hidden={dividedSharesCount !== 1000}
            >
              {formatMessage({ id: 'assetshare_divide.divide' })}
            </Button>
          )}
        </Grid>
      </Grid>
    );
  };

  return (
    <Page title={formatMessage({ id: 'assetshare_divide.page_title' })} backPage={AppRoute.dashboard}>
      {displayContent()}
    </Page>
  );
};

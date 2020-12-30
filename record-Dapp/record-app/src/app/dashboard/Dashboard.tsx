import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useLocale, useUser } from 'hooks';
import { Page, ProfileHeader } from 'ui';
import { UserRole } from 'context/user/userContext/UserContext.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useIam } from '../../api/hooks/useIam/useIam';
import { AssetShare } from '../../hooks/useAssetShares/useAssetShares.types';
import { useAssetShares } from 'hooks/useAssetShares/useAssetShares';

import { OwnerDashboard } from './dashboards/OwnerDashboard';
import { useStyles } from './Dashboard.styles';
import { MintAssetTokenForm } from './dashboards/MintAssetToken.types';

export const Dashboard = () => {
  const { user } = useUser();
  const { formatMessage } = useLocale();
  const { mintAssetShares } = useIam();
  const { getMintedAssetSharesBalance, getOwnedAssetSharesBalance } = useAssetShares();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [mintedAssetShares, setMintedAssetShares] = useState<AssetShare[]>([]);
  const [ownedAssetShares, setOwnedAssetShares] = useState<AssetShare[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useHistory();
  const classes = useStyles();

  const fetchData = async () => {
    if (user) {
      setIsLoading(true);
      const mintedAssetSharesResult = await getMintedAssetSharesBalance();
      const ownedAssetSharesResult = await getOwnedAssetSharesBalance();
      setMintedAssetShares(mintedAssetSharesResult);
      setOwnedAssetShares(ownedAssetSharesResult);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMintAssetTokens = async ({ ...values }: MintAssetTokenForm) => {
    if (user) {
      setIsLoading(true);
      setError(false);
      try {
        await mintAssetShares(values.assetUuid, '');
        setIsLoading(false);
        setMessage(formatMessage({ id: 'dashboard.minted.successfully' }));
        setOpen(true);
      } catch (e) {
        setOpen(true);
        setError(true);
        setMessage(formatMessage({ id: 'dashboard.minted.error' }));
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  const getDashboard = () => {
    const dashboards = {
      [UserRole.Owner]: (
        <OwnerDashboard
          onMintAssetToken={handleMintAssetTokens}
          isLoading={isLoading}
          mintedAssetShares={mintedAssetShares}
          ownedAssetShares={ownedAssetShares}
        />
      ),
    };
    if (!user) return <div />;
    return dashboards[UserRole.Owner];
  };
  if (!user) {
    push(AppRoute.home);
    return <div />;
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const getName = () => {
    if (user.name) {
      return user.name;
    }

    return '';
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

  return (
    <Page title={formatMessage({ id: 'dashboard.page_title' })} backPage={AppRoute.home}>
      <Grid container>
        <Grid item xs={12}>
          <ProfileHeader name={getName()} avatar={user.avatar} address={user.address} />
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {alert()}
        </Snackbar>
        <Grid item xs={12} className={classes.container}>
          {getDashboard()}
        </Grid>
      </Grid>
    </Page>
  );
};

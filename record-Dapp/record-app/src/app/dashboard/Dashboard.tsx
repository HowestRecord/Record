import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useLocale, useUser } from 'hooks';
import { Page, ProfileHeader } from 'ui';
import { UserRole } from 'context/user/userContext/UserContext.types';
import { AppRoute } from 'routing/AppRoute.enum';

import { OwnerDashboard } from './dashboards/OwnerDashboard';
import { useStyles } from './Dashboard.styles';

export const Dashboard = () => {
  const { user } = useUser();
  const { formatMessage } = useLocale();

  const { push } = useHistory();
  const classes = useStyles();

  const getDashboard = () => {
    const dashboards = {
      [UserRole.Owner]: <OwnerDashboard />,
    };
    if (!user) return <div />;
    return dashboards[UserRole.Owner];
  };
  if (!user) {
    push(AppRoute.home);
    return <div />;
  }

  const getName = () => {
    if (user.name) {
      return user.name;
    }

    return '';
  };

  return (
    <Page title={formatMessage({ id: 'dashboard.page_title' })} backPage={AppRoute.home}>
      <Grid container>
        <Grid item xs={12}>
          <ProfileHeader name={getName()} avatar={user.avatar} address={user.address} />
        </Grid>
        <Grid item xs={12} className={classes.container}>
          {getDashboard()}
        </Grid>
      </Grid>
    </Page>
  );
};

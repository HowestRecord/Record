import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useLocale, useUser } from 'hooks';
import { Page, ProfileHeader } from 'ui';
import { AppRoute } from 'routing/AppRoute.enum';
import { ArrowRightIcon, SettingIcon } from 'ui/icons';
import { User } from 'context/user/userContext/UserContext.types';

import { useStyles } from './Settings.styles';

const pages = [
  {
    url: AppRoute.settingsGeneral,
    name: 'general',
    icon: <SettingIcon color="primary" />,
  },
];

export const Settings = () => {
  const classes = useStyles();
  const { user = {} as User } = useUser();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <Page title={formatMessage({ id: 'settings.title' })}>
      <Grid container>
        <Grid item xs={12}>
          <ProfileHeader name={'' + user.name} avatar={user.avatar} address={user.address} />
        </Grid>
        <Grid item container xs={12} className={classes.container}>
          {pages.map(page => (
            <Grid item xs={12} onClick={() => page.url && push(page.url)} className={classes.item} key={page.name}>
              <div className={classes.itemTitle}>
                {page.icon}
                <Typography>{formatMessage({ id: `settings.${page.name}` })}</Typography>
              </div>
              <ArrowRightIcon />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Page>
  );
};

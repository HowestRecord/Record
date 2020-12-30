import React from 'react';
import { FormControlLabel, Grid, Switch } from '@material-ui/core';

import { useLocale, useThemeOptions, useUser } from 'hooks';
import { Button, Page, ProfileHeader } from 'ui';
import { AppLocale } from 'context/locale/AppLocale.enum';
import { useStyles } from '../Settings.styles';
import { User } from 'context/user/userContext/UserContext.types';

export const General = () => {
  const classes = useStyles();
  const { user = {} as User } = useUser();
  const { setDarkTheme, isDarkTheme } = useThemeOptions();

  const { formatMessage, setLocale, locale: appLocale } = useLocale();

  return (
    <Page title={formatMessage({ id: 'settings.title' })}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProfileHeader name={`${user.name}`} avatar={user.avatar} address={user.address} />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.languageContent}>
            {Object.values(AppLocale).map(locale => (
              <Button
                variant={appLocale === locale ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => setLocale(locale)}
                key={locale}
              >
                {formatMessage({ id: `locale.${locale}` })}
              </Button>
            ))}
          </div>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={() => setDarkTheme(s => !s)} color="primary" />}
            label={formatMessage({ id: 'settings.dark_mode' })}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

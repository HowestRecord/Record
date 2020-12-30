import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import { HomeProps, LoginScreens } from 'app/home/home/Home.types';
import { CompanyIcon } from 'ui/icons/companyIcon/CompanyIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Button, Loader, Page } from 'ui';

import { useStyles } from './Home.styles';

export const Home = ({ onLogin, isLoading, errorMessageId }: HomeProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [loginScreen, setLoginScreen] = useState(LoginScreens.LOGIN_OPTIONS);

  const loginOptions = () => {
    return (
      <>
        <Grid item xs={12} lg={3}>
          <Button variant="contained" color="primary" onClick={onLogin} className={classes.button}>
            {formatMessage({ id: 'home.login' })}
          </Button>
        </Grid>
      </>
    );
  };

  const renderContent = () => {
    const contentByOption = {
      [LoginScreens.LOGIN_OPTIONS]: loginOptions,
    };

    return contentByOption[loginScreen]();
  };

  return (
    <Page
      hideMenu
      hideBack={loginScreen === LoginScreens.LOGIN_OPTIONS || isLoading}
      onBackClick={() => setLoginScreen(LoginScreens.LOGIN_OPTIONS)}
      hideUserInfo
    >
      <Grid container className={classes.container}>
        <Grid item container className={classes.content} spacing={2}>
          {isLoading ? <Loader text={formatMessage({ id: 'home.login_progress' })} /> : renderContent()}
        </Grid>
        {errorMessageId && (
          <Grid item>
            <Typography className={classes.errorMessage}>{formatMessage({ id: errorMessageId })}</Typography>
          </Grid>
        )}
        <Grid item className={classes.footerContainer}>
          <a href="https://www.energyweb.org/" className={classes.link}>
            <Box className={classes.footer}>
              <Typography className={classes.poweredBy}>{formatMessage({ id: 'common.powered_by' })}</Typography>
              <CompanyIcon className={classes.companyIcon} />
              <Typography className={classes.companyName}>{formatMessage({ id: 'common.company_name' })}</Typography>
            </Box>
          </a>
          <Box className={classes.version}>
            <Typography className={classes.poweredBy}>v{process.env.REACT_APP_VERSION}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Page>
  );
};

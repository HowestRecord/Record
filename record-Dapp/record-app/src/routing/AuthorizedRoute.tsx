import React, { useEffect, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { useIam } from 'api/hooks/useIam/useIam';
import { Loader, Page } from 'ui';
import { useLocale } from 'hooks/useLocale/useLocale';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRouteProps } from './AuthorizedRoute.types';

export const AuthorizedRoute = (props: AuthorizedRouteProps) => {
  const { login, isConnected } = useIam();
  const { formatMessage } = useLocale();
  const [isLogged, setIsLogged] = useState(isConnected());
  const [ifRedirectToLogin, setIfRedirectToLogin] = useState(false);
  const { replace } = useHistory<{ redirect: string }>();
  const { pathname } = useLocation();

  useEffect(() => {
    async function init() {
      const privateKey = localStorage.getItem('ETH_PRIVATE_KEY') ?? undefined;
      const result = await login(privateKey);

      if (!result.connected) {
        return setIfRedirectToLogin(true);
      }

      setIsLogged(result.connected);

      /*const data = await getUserData();
      const role = data.role;
      if (role) {
        const user = userData[role];
        setUser({ ...user, ...data, role });
        setIsLogged(result.connected);
      } else {
        setIfRedirectToLogin(true);
      }*/
    }

    if (!isConnected()) {
      init();
    }
  }, []);

  if (ifRedirectToLogin) {
    replace(AppRoute.home, { redirect: pathname });
  }

  if (isLogged) {
    return <Route {...props} />;
  }

  return (
    <Page hideMenu hideBack hideUserInfo>
      <Box justifyContent="center">
        <Loader text={formatMessage({ id: 'home.login_progress' })} />
      </Box>
    </Page>
  );
};

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { HomeDesktopContainer } from 'app/containers/home/HomeDesktopContainer/HomeDesktopContainer';
import { HomeContainer } from 'app/containers/home/HomeContainer/HomeContainer';

import { AppRoute } from './AppRoute.enum';

const MobileApp = () => (
  <Switch>
    <Route path={AppRoute.home} exact component={HomeContainer} />

    <Redirect to={AppRoute.home} />
  </Switch>
);

const DesktopApp = () => (
  <Switch>
    <Route path={AppRoute.home} exact component={HomeDesktopContainer} />
  </Switch>
);

export const AppRoutes = () => {
  return isMobile ? <MobileApp /> : <DesktopApp />;
};

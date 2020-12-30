import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { HomeDesktopContainer } from 'app/home/homeDesktopContainer/HomeDesktopContainer';
import { HomeContainer } from 'app/home/homeContainer/HomeContainer';
import { Dashboard } from 'app/dashboard/Dashboard';
import { DivideAssetShares } from '../app/divideAssetShares/DivideAssetShares';
import { Details } from '../app/details/details';
import { Settings } from '../app/settings/Settings';
import { General } from '../app/settings/pages/General';
import { TransferAssetShares } from '../app/transferAssetShares/TransferAssetShares';

import { AppRoute } from './AppRoute.enum';
import { AuthorizedRoute } from './AuthorizedRoute';

const MobileApp = () => (
  <Switch>
    <Route path={AppRoute.home} exact component={HomeContainer} />
    <AuthorizedRoute path={AppRoute.dashboard} exact component={Dashboard} />
    <AuthorizedRoute path={AppRoute.assetShareDetails} exact component={Details} />
    <AuthorizedRoute path={AppRoute.divideAssetShares} exact component={DivideAssetShares} />
    <AuthorizedRoute path={AppRoute.transferAssetShares} exact component={TransferAssetShares} />
    <AuthorizedRoute path={AppRoute.settings} exact component={Settings} />
    <AuthorizedRoute path={AppRoute.settingsGeneral} exact component={General} />
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

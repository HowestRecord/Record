import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Theme } from 'theme/Theme';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { ErrorBoundary } from 'app/errorBoundary/ErrorBoundary';
import { UserContextController } from 'context/user/userContextController/UserContextController';
import { AssetsContextController } from 'context/assets/assetsContextController/AssetsContextController';
import { ThemeOptionsContextController } from 'context/themeOptions/themeOptionsContextController/ThemeOptionsContextController';
import { DevModeContextController } from 'context/devMode/devModeContextController/DevModeContextController';
import { IamContextController } from '../api/context/iam/iamContextController/IamContextController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeOptionsContextController>
    <Theme>
      <LocaleContextController>
        <UserContextController>
          <IamContextController>
            <AssetsContextController>
              <DevModeContextController>
                <ErrorBoundary>
                  <Router>{children}</Router>
                </ErrorBoundary>
              </DevModeContextController>
            </AssetsContextController>
          </IamContextController>
        </UserContextController>
      </LocaleContextController>
    </Theme>
  </ThemeOptionsContextController>
);

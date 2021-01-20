import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeOptionsContextController } from 'context/themeOptions/themeOptionsContextController/ThemeOptionsContextController';
import { Theme } from 'theme/Theme';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { IamContextController } from 'api/hooks/context/iam/iamContextController/IamContextController';
import { UserContextController } from 'context/user/userContextController/UserContextController';
import { AssetSharesContextController } from '../context/assetShares/assetSharesContextContoller/AssetSharesContextController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeOptionsContextController>
    <Theme>
      <LocaleContextController>
        <UserContextController>
          <IamContextController>
            <AssetSharesContextController>
              <Router>{children}</Router>
            </AssetSharesContextController>
          </IamContextController>
        </UserContextController>
      </LocaleContextController>
    </Theme>
  </ThemeOptionsContextController>
);

import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Home } from 'app/home/home/Home';
import { useUser } from 'hooks/useUser/useUser';
import { AppRoute } from 'routing/AppRoute.enum';
import { useIam } from 'api/hooks/useIam/useIam';
import { useAssets } from 'hooks/useAssets/useAssets';

export const HomeContainer = () => {
  const { login, logout, getUserData } = useIam();
  const { push } = useHistory();
  const { setAssets } = useAssets();
  const { clearUserInfo, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessageId, setErrorMessageId] = useState<undefined | string>(undefined);
  const { state } = useLocation<{ redirect?: string } | undefined>();

  useEffect(() => {
    async function init() {
      setAssets(null);
      clearUserInfo();
      await logout();
    }
    init();
  }, []);

  const fetchUserData = async () => {
    try {
      if (!document.hidden) {
        const data = await getUserData();

        setUser({ ...data });
        push(state?.redirect ? state.redirect : AppRoute.dashboard);
        document.removeEventListener('visibilitychange', fetchUserData);
      }
    } catch (e) {
      setErrorMessageId('common.error');
      setIsLoading(false);
    }
  };

  const loginToAccount = async (key?: string) => {
    setIsLoading(true);
    const result = await login(key);
    if (result.connected) {
      document.addEventListener('visibilitychange', fetchUserData, false);
      if (!document.hidden) {
        fetchUserData();
      }
    } else {
      setIsLoading(false);
      logout();
    }
  };

  const handleLogin = async () => {
    await loginToAccount();
  };

  return <Home onLogin={handleLogin} isLoading={isLoading} errorMessageId={errorMessageId} />;
};

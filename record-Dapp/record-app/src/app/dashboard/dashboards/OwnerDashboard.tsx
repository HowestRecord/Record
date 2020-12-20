import React from 'react';

import { useLocale } from 'hooks';
import { TabMenu } from '../../../ui';

export const OwnerDashboard = () => {
  const { formatMessage } = useLocale();

  const renderMyShares = () => {
    return <div>My Shares</div>;
  };

  const renderMintAssetShares = () => {
    return <div>Mint Asset Shares</div>;
  };

  const renderDevideAssetShares = () => {
    return <div>Render Asset Shares</div>;
  };
  return (
    <TabMenu
      tabs={[
        {
          label: formatMessage({ id: 'dashboard.your_shares' }),
          content: renderMyShares(),
        },
        {
          label: formatMessage({ id: 'dashboard.mint_shares' }),
          content: renderMintAssetShares(),
        },
        {
          label: formatMessage({ id: 'dashboard.devide_shares' }),
          content: renderDevideAssetShares(),
        },
      ]}
    />
  );
};

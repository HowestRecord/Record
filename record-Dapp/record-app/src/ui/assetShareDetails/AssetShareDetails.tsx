import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { truncateString } from 'helpers';
import { InfoBlock } from '../infoBlock/InfoBlock';
import { AssetShare } from '../../hooks/useAssetShares/useAssetShares.types';
import { GlobeIcon, SuccessIcon } from 'ui/icons';
import { useLocale } from 'hooks';

import { useStyles } from './AssetShareDetails.styles';
export const AssetShareDetails = ({ asset, holders }: AssetShare) => {
  const { formatMessage } = useLocale();
  const { container, mainContainer, assetId, assetName } = useStyles();

  return (
    <Grid container>
      <Grid container alignItems="center" justify="center" alignContent="center" className={mainContainer}>
        <Grid item xs={12} alignItems="center" direction="column" container>
          <Typography className={assetId}>{truncateString({ maxLength: 20, string: asset.id })}</Typography>
          <Typography className={assetName}>{asset.name}</Typography>
        </Grid>
      </Grid>
      {holders.length > 0 &&
        holders.map(({ id, shares }) => (
          <Grid key={id} container direction="column" justify="space-between">
            <Grid item xs={12} className={container}>
              <InfoBlock
                items={[
                  {
                    text: truncateString({ maxLength: 20, string: id }),
                    label: formatMessage({ id: 'assetshare_detail.holder' }),
                    textIcon: GlobeIcon,
                    labelIcon: SuccessIcon,
                  },
                  {
                    text: shares.toString(),
                    label: formatMessage({ id: 'assetshare_detail.shares' }),
                    textIcon: GlobeIcon,
                    labelIcon: SuccessIcon,
                  },
                ]}
              />
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

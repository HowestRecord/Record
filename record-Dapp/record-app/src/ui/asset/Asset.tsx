import { Box, Grid, Typography } from '@material-ui/core';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { useAssetStatus } from 'hooks/useAssetStatus/useAssetStatus';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AssetIcon, ThreeDotsIcon } from 'ui/icons';
import { truncateString } from 'helpers';
import { AssetStatuses } from 'hooks/useAssets/useAssets.types';
import { AssetProps } from 'ui/asset/Asset.types';

import { useStyles } from './Asset.styles';

const mapThreeDotsColor: Record<
  string,
  'inherit' | 'secondary' | 'error' | 'disabled' | 'action' | 'primary' | undefined
> = {
  [AssetStatuses.ACTIVE]: 'secondary',
  [AssetStatuses.INACTIVE]: 'error',
  [AssetStatuses.INSTALLED]: 'action',
};

export const Asset = ({ name, status, subtitle, id }: AssetProps) => {
  const {
    assetIcon,
    statusContainer,
    breakLine,
    container,
    statusBar,
    subtitleClass,
    title,
    statusIcon,
    treeDotIcon,
  } = useStyles({
    status,
  });
  const { getIconElement, getLabel } = useAssetStatus();
  const { push } = useHistory();
  const StatusIcon = getIconElement(status) || <img alt="" />;
  const threeDotsColor = mapThreeDotsColor[status] || 'secondary';
  const { formatMessage } = useLocale();
  return (
    <Grid container direction="row" className={container} onClick={() => push(`/details/${id}`)}>
      <Grid container item xs={12} direction="row">
        <Grid container item xs={8} direction="column">
          <Typography className={title}>{name}</Typography>
          <Typography className={subtitleClass}>{subtitle}</Typography>
          <Typography className={subtitleClass}>{truncateString({ maxLength: 12, string: id })}</Typography>
          <Box className={statusBar}>
            <span>{formatMessage({ id: getLabel(status) })}</span>
          </Box>
        </Grid>
        <Grid container item xs={4} alignItems="center" direction="column" className={statusContainer}>
          <AssetIcon className={assetIcon} />
          <StatusIcon className={statusIcon} />
          <ThreeDotsIcon className={treeDotIcon} color={threeDotsColor} />
        </Grid>
      </Grid>
      <hr className={breakLine} />
      <Grid container item xs={12} justify="space-between"></Grid>
    </Grid>
  );
};

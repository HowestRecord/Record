import { Box, Grid, Typography } from '@material-ui/core';
import * as React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AssetIcon, SettingIcon, ThreeDotsIcon } from 'ui/icons';
import { truncateString } from 'helpers';
import { AssetShareStatuses } from '../../hooks/useAssetShares/useAssetShares.types';
import { useAssetShareStatus } from '../../hooks/useAssetShareStatus/useAssetShareStatus';

import { useStyles } from './AssetShare.styles';
import { AssetShareProps } from './AssetShare.types';

const mapThreeDotsColor: Record<
  string,
  'inherit' | 'secondary' | 'error' | 'disabled' | 'action' | 'primary' | undefined
> = {
  [AssetShareStatuses.MINTED]: 'secondary',
  [AssetShareStatuses.DIVIDED]: 'action',
};

export const AssetShare = ({
  asset,
  status,
  currentHolder,
  id,
  handleOnClick,
  showActionButtons = false,
  handleOnActionClick,
}: AssetShareProps) => {
  const {
    assetIcon,
    statusContainer,
    breakLine,
    container,
    statusBar,
    bottomIcon,
    subtitleClass,
    title,
    statusIcon,
    treeDotIcon,
  } = useStyles({
    status,
  });
  const { getIconElement, getLabel } = useAssetShareStatus();
  const StatusIcon = getIconElement(status) || <img alt="" />;
  const threeDotsColor = mapThreeDotsColor[status] || 'secondary';
  const { formatMessage } = useLocale();

  const buttons = () => {
    if (showActionButtons) {
      return (
        <Grid container item xs={12} justify="space-between">
          <SettingIcon
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              handleOnActionClick();
            }}
            className={bottomIcon}
          />
        </Grid>
      );
    }
    return <></>;
  };

  return (
    <Grid container direction="row" className={container} onClick={handleOnClick}>
      <Grid container item xs={12} direction="row">
        <Grid container item xs={8} direction="column">
          <Typography className={title}>{asset.name}</Typography>
          <Typography className={subtitleClass}>{truncateString({ maxLength: 12, string: id })}</Typography>
          <Typography className={subtitleClass}>{currentHolder.name}</Typography>
          <Typography className={subtitleClass}>
            {formatMessage({ id: 'assetshare.shares' })}:{currentHolder.shares}
          </Typography>
          <Typography className={subtitleClass}>
            {formatMessage({ id: 'assetshare.holder' })}:{currentHolder.id}:
            {truncateString({ maxLength: 12, string: currentHolder.id })}
          </Typography>
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
      {buttons()}
    </Grid>
  );
};

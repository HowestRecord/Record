import { makeStyles } from '@material-ui/core/styles';

import { fontWeight } from 'theme/typography';
import { AssetShareStatuses } from 'hooks/useAssetShares/useAssetShares.types';

export const useStyles = makeStyles(theme => {
  const mapStatusToColor = {
    [AssetShareStatuses.MINTED]: theme.palette.secondary.main,
    [AssetShareStatuses.DIVIDED]: theme.palette.yellow.main,
  };

  const mapStatusIconPlacement = {
    [AssetShareStatuses.MINTED]: {
      width: theme.spacing(2.5),
      height: theme.spacing(1.5),
      top: theme.spacing(1.875),
    },
    [AssetShareStatuses.DIVIDED]: {
      width: theme.spacing(1.625),
      height: theme.spacing(1.625),
      top: theme.spacing(1.875),
    },
  };

  return {
    container: {
      width: '100%',
      minHeight: theme.spacing(18.375),
      padding: theme.spacing(2.5, 2.5, 0, 2.5),
      backgroundColor: theme.palette.gray.dark,
      borderRadius: theme.spacing(2),
    },
    title: {
      fontSize: theme.typography.h5.fontSize,
      margin: 0,
      fontWeight: fontWeight.bold,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      width: '100%',
      height: theme.spacing(2),
      whiteSpace: 'nowrap',
    },
    subtitleClass: {
      fontSize: theme.typography.h6.fontSize,
      margin: 0,
      color: theme.palette.text.secondary,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      width: '100%',
      whiteSpace: 'nowrap',
      height: theme.spacing(1.75),
    },
    statusBar: ({ status }: { status: AssetShareStatuses }) => ({
      height: theme.spacing(2),
      width: theme.spacing(10),
      border: `${theme.spacing(0.125)}px solid ${mapStatusToColor[status]}`,
      borderRadius: theme.spacing(2),
      backgroundColor: 'transparent',
      color: mapStatusToColor[status],
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: fontWeight.bold,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(0.75),
      '& span': {
        textTransform: 'uppercase',
      },
    }),
    statusContainer: {
      position: 'relative',
    },
    assetIcon: {
      height: theme.spacing(5.25),
    },
    statusIcon: ({ status }: { status: AssetShareStatuses }) => {
      const { height, top, width } = mapStatusIconPlacement[status] || {};
      return {
        position: 'absolute',
        top,
        left: '50%',
        transform: 'translate(-50%)',
        zIndex: 1,
        height,
        width,
        '& .background_color': {
          fill: theme.palette.gray.dark,
        },
      };
    },
    treeDotIcon: {
      height: theme.spacing(1.5),
    },
    breakLine: {
      width: '100%',
      border: 0,
      borderTop: `1px solid ${theme.palette.gray.light}`,
      margin: 0,
    },
    bottomIcon: {
      height: theme.spacing(1.75),
      width: theme.spacing(1.75),
    },
  };
});

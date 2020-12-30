import { makeStyles } from '@material-ui/core/styles';

import { fontWeight } from 'theme/typography';

export const useInfoBlockStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(0.5),
    width: `calc(100% - ${theme.spacing(0.5)}px)`,
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: fontWeight.bold,
    marginLeft: theme.spacing(1),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
    height: theme.spacing(2),
    whiteSpace: 'nowrap',
    maxWidth: theme.spacing(37.5),
  },
  labelClass: {
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1.25),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '100%',
    height: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  icon: {
    height: theme.spacing(1.875),
    width: theme.spacing(1.875),
  },
  labelIcon: {
    height: theme.spacing(1.625),
    width: theme.spacing(1.625),
    marginLeft: theme.spacing(0.125),
  },
  clickable: {
    cursor: 'pointer',
  },
}));

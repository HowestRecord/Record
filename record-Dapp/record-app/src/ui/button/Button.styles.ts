import ButtonBase from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { fontWeight } from 'theme/typography';

export const Button = withStyles(theme => ({
  root: {
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1, 4),
    '&:disabled': {
      backgroundColor: 'transparent',
      border: `${theme.spacing(0.125)}px solid ${theme.palette.gray.light}`,
      color: theme.palette.gray.light,
    },
    color: theme.palette.text.primary,
  },
  containedPrimary: {
    color: theme.palette.white.main,
  },
  outlinedPrimary: {
    borderColor: theme.palette.text.primary,
    '&:hover': {
      borderColor: theme.palette.text.primary,
    },
  },
  label: {
    fontWeight: fontWeight.bold,
    fontSize: theme.typography.h5.fontSize,
    whiteSpace: 'nowrap',
  },
  sizeSmall: {
    paddingTop: theme.spacing(0.625),
    paddingBottom: theme.spacing(0.625),
  },
  sizeLarge: {
    padding: theme.spacing(0.875, 4),
  },
  startIcon: {
    marginRight: theme.spacing(0.5),
  },
  endIcon: {
    marginLeft: theme.spacing(0.5),
  },
}))(ButtonBase);

export const useStyles = makeStyles(theme => ({
  error: {
    background: theme.palette.error.main,
    '&:hover': {
      background: theme.palette.error.main,
    },
  },
  disabled: {
    background: theme.palette.gray.dark,
    '&:hover': {
      background: theme.palette.gray.dark,
    },
  },
}));

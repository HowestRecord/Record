import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  loaderContainer: {
    width: '100%',
    textAlign: 'center',
  },
  fullScreen: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    display: 'inline-block',
    position: 'relative',
    width: theme.spacing(10),
    height: theme.spacing(10),

    '& div': {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: theme.spacing(8),
      height: theme.spacing(8),
      margin: theme.spacing(1),
      border: `${theme.spacing(0.5)}px solid ${theme.palette.primary.main}`,
      borderRadius: '50%',
      animation: `$lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
      borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
    },
    '& div:nth-child(1)': {
      animationDelay: '-0.45s',
    },
    '& div:nth-child(2)': {
      animationDelay: '-0.3s',
    },
    '& div:nth-child(3)': {
      animationDelay: '-0.15s',
    },
  },
  '@keyframes lds-ring': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  title: {
    marginTop: theme.spacing(2.7125),
    ...theme.typography.h4,
    textAlign: 'center',
  },
}));

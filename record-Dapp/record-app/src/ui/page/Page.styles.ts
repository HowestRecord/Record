import { makeStyles } from '@material-ui/core/styles';

import { fontWeight } from 'theme/typography';

export const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: theme.spacing(8),
    width: '100%',
    padding: theme.spacing(3, 1.7, 3, 2.1),
    backgroundColor: theme.palette.background.default,
    border: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: fontWeight.bold,
    color: theme.palette.text.primary,
  },
  container: {
    '& > div': {
      minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
      padding: theme.spacing(0.5, 3, 3, 3),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: theme.spacing(3),
    width: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

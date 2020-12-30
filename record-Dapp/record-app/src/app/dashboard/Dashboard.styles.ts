import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  errorTitle: {
    marginBottom: theme.spacing(2.7125),
    ...theme.typography.h4,
    textAlign: 'center',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    width: theme.spacing(37.5),
  },
  buttonContainer: {
    margin: theme.spacing(2),
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  titleContainer: {
    padding: theme.spacing(1.625, 2.5, 1.625, 2.5),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    border: 'none',
    alignSelf: 'center',
  },
  bigImage: {
    width: theme.spacing(58),
    height: theme.spacing(58),
  },
  clickable: {
    cursor: 'pointer',
  },
}));

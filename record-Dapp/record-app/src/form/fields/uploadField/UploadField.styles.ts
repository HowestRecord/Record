import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cameraIcon: {
    width: theme.spacing(2.625),
    height: theme.spacing(2.25),
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
}));

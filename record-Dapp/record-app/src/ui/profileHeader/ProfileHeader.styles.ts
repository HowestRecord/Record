import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: theme.spacing(2),
      paddingTop: theme.spacing(3.375),
      paddingBottom: theme.spacing(4),
      marginBottom: theme.spacing(4),
      backgroundColor: theme.palette.gray.dark,
      color: theme.palette.text.primary,
      boxShadow: 'inset -1px -1px 8px 0px rgba(0,0,0,0.04)',
    },
    roleIndicator: {
      height: theme.spacing(11),
      width: theme.spacing(11),
      border: `${theme.spacing(0.25)}px solid ${theme.palette.primary.main}`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(0.9125),
      position: 'relative',
    },
    avatar: {
      height: theme.spacing(9.75),
      width: theme.spacing(9.75),
    },
    title: {
      fontSize: theme.spacing(4),
    },
    subtitle: {
      fontSize: theme.spacing(1.5),
      color: theme.palette.text.secondary,
    },
  };
});

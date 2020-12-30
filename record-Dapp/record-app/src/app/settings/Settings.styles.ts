import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2.5),
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.gray.dark,
    color: theme.palette.text.primary,
    boxShadow: 'inset -1px -1px 8px 0px rgba(0,0,0,0.04)',
  },
  item: {
    padding: theme.spacing(2.75, 2.5, 2.75, 2.75),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: theme.spacing(8),
    '& + &': {
      borderTop: `1px solid ${theme.palette.gray.main}`,
    },

    '& > svg': {
      height: 'auto',
      width: theme.spacing(1),
    },
  },
  itemTitle: {
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      height: theme.spacing(2.5),
      width: 'auto',
      maxWidth: theme.spacing(2.5),
      marginRight: theme.spacing(2.35),
      color: theme.palette.primary.light,
    },
  },
  languageContent: {
    marginTop: theme.spacing(2.5),

    '& button + button': {
      marginTop: theme.spacing(2),
    },
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(0, 3),
    flexDirection: 'column',
    flex: 1,
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    width: theme.spacing(37.5),
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',

    '@media screen and (max-height: 800px)': {
      marginTop: theme.spacing(5),
    },
  },
  version: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: theme.spacing(1),
  },
  poweredBy: {
    display: 'inline-block',
    ...theme.typography.h4,
    fontFamily: theme.typography.secondaryFontFamily,
  },
  companyIcon: {
    margin: theme.spacing(0, 1),
    '& path': {
      fill: theme.palette.text.primary,
    },
  },
  companyName: {
    display: 'inline-block',
    ...theme.typography.h4,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: theme.typography.secondaryFontFamily,
  },
  link: {
    textDecoration: 'unset',
    color: 'unset',
  },
  errorMessage: {
    color: theme.palette.red.main,
    ...theme.typography.h4,
    textAlign: 'center',
    padding: theme.spacing(0, 2),
  },
}));

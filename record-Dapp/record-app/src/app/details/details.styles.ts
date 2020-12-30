import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    container: {
      backgroundColor: theme.palette.gray.dark,
      borderRadius: theme.spacing(2),
      padding: theme.spacing(2, 3),
      margin: theme.spacing(1, 0),
      flexBasis: 'auto',
    },
    mainContainer: {
      height: theme.spacing(26.25),
      backgroundColor: theme.palette.gray.dark,
      borderRadius: theme.spacing(2),
      margin: theme.spacing(0.5, 0),
    },
    assetId: {
      fontSize: theme.typography.h2.fontSize,
      fontFamily: theme.typography.secondaryFontFamily,
      textTransform: 'uppercase',
      maxWidth: '100%',
      overflowX: 'hidden',
    },
    assetName: {
      fontSize: theme.typography.h5.fontSize,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.secondary,
    },
    iconStatus: {
      '& .background_color': {
        fill: theme.palette.gray.dark,
      },
    },
    showMap: {
      ...theme.typography.h6,
      color: theme.palette.gray.light,
      display: 'flex',
      alignItems: 'center',
    },
    mapContainer: {
      marginTop: theme.spacing(2),
      height: theme.spacing(22),
      width: '100%',
      '& .leaflet-container': {
        height: '100%',
        width: '100%',
      },
    },
  };
});

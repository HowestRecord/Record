import { makeStyles } from '@material-ui/core/styles';

import { TabMenuStyleProps } from './TabMenu.types';

export const useStyles = makeStyles(theme => {
  const tabCommon = {
    color: theme.palette.text.secondary,
    ...theme.typography.h5,
    margin: theme.spacing(0, 0.125),
    maxWidth: 'unset',
    '&.Mui-selected': {
      color: theme.palette.text.primary,
    },
  };

  return {
    boxContainer: {
      flexGrow: 1,
      width: '100%',
    },
    indicator: {
      backgroundColor: ({ activeColor }: TabMenuStyleProps) =>
        activeColor === 'primary' ? theme.palette.primary.light : theme.palette.secondary.main,
    },
    container: {
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.darker}`,
    },
    tab: ({ dense, isFullScreen }: TabMenuStyleProps) => {
      if (dense) {
        return {
          ...tabCommon,
          padding: 0,
        };
      } else
        return {
          ...tabCommon,
          textTransform: 'none',
        };
    },
    content: {
      marginTop: theme.spacing(3.75),
      flex: 1,
    },
  };
});

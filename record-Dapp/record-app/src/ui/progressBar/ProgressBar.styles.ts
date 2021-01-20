import { makeStyles, Theme } from '@material-ui/core/styles';

import { ProgressBarProps } from './ProgressBar.types';

export const useStyles = makeStyles<Theme, ProgressBarProps>((theme: Theme) => ({
  container: {
    height: 20,
    width: '100%',

    borderRadius: 50,
  },
  filler: props => ({
    height: '100%',
    width: `${props.completed}%`,
    backgroundColor: 'green',
    borderRadius: 'inherit',
    textAlign: 'right',
  }),
  label: {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  },
}));

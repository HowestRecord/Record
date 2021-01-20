import { ProgressBarProps } from './ProgressBar.types';
import { useStyles } from './ProgressBar.styles';
export const ProgressBar = ({ completed }: ProgressBarProps) => {
  const styleProps: ProgressBarProps = { completed: completed };
  const classes = useStyles(styleProps);

  return (
    <div className={classes.container}>
      <div className={classes.filler}>
        <span className={classes.label}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

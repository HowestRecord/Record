import React from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './Loader.styles';
import { LoaderProps } from './Loader.types';

export const Loader = ({ text, suppressText = false, fullScreen = false }: LoaderProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.loaderContainer, fullScreen && classes.fullScreen)}>
      <div className={classes.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
      {!suppressText && (
        <Typography className={classes.title}>{text || 'Your battery is being registered...'}</Typography>
      )}
    </div>
  );
};

import React from 'react';
import classNames from 'clsx';

import { ButtonProps } from './Button.types';
import * as S from './Button.styles';
import { useStyles } from './Button.styles';

export const Button = ({ color, variant, ...props }: ButtonProps) => {
  const classes = useStyles();

  return (
    <S.Button
      className={classNames({ [classes.error]: color === 'error', [classes.disabled]: props.disabled })}
      color={color === 'error' ? 'inherit' : color}
      variant={variant}
      fullWidth
      {...props}
    />
  );
};

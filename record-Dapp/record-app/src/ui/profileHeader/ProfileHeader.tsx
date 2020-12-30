import React from 'react';
import { Avatar, Typography } from '@material-ui/core';

import { ProfileHeaderProps } from './ProfileHeader.types';
import { useStyles } from './ProfileHeader.styles';

export const ProfileHeader = ({ name, avatar, address }: ProfileHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.roleIndicator}>
        <Avatar src={avatar} className={classes.avatar} />
      </div>
      <Typography className={classes.title}>{name}</Typography>
      <Typography className={classes.subtitle}>{address}</Typography>
    </div>
  );
};

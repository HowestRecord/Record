import React from 'react';
import { AppBar, Avatar, Container, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

import { AppRoute } from 'routing/AppRoute.enum';
import { ArrowLeftIcon, TwoDotsIcon } from 'ui/icons';
import { useUser } from 'hooks/useUser/useUser';
import { truncateString } from 'helpers';

import { PageProps } from './Page.types';
import { useStyles } from './Page.styles';

export const Page = ({
  children,
  title: pageTitle,
  onMenuClick,
  backPage,
  hideMenu = false,
  hideBack = false,
  onBackClick,
  hideUserInfo = false,
}: PageProps) => {
  const { toolbar, appBar, title, container, avatar, userContainer } = useStyles();
  const { goBack, push, replace } = useHistory();
  const { user } = useUser();

  const handleClick = () => {
    if (onMenuClick) {
      onMenuClick();
    } else {
      push(AppRoute.settings);
    }
  };

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else if (backPage) {
      replace(backPage);
    } else {
      goBack();
    }
  };

  return (
    <>
      <AppBar elevation={0} className={appBar}>
        <Toolbar disableGutters className={toolbar}>
          {!hideBack && <ArrowLeftIcon onClick={handleBack} />}
          <Typography className={title}>{pageTitle}</Typography>
          {!hideUserInfo && (
            <div className={userContainer}>
              <Typography className={title}>
                {truncateString({ maxLength: 12, string: user?.address ?? '' })}
              </Typography>
              {user?.avatar && <Avatar src={user?.avatar} className={avatar} />}
            </div>
          )}
          {!hideMenu && <TwoDotsIcon data-testid="menu" onClick={handleClick} />}
        </Toolbar>
      </AppBar>
      <Toolbar disableGutters className={toolbar} />
      <Container disableGutters className={container}>
        {children}
      </Container>
    </>
  );
};

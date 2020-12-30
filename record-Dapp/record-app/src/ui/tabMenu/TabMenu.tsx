import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@material-ui/core';

import { TabMenuProps } from './TabMenu.types';
import { useStyles } from './TabMenu.styles';

export const TabMenu = ({ tabs, isFullScreen = true, activeColor = 'primary', dense = false }: TabMenuProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const classes = useStyles({ isFullScreen, activeColor, dense });

  return (
    <Box className={classes.boxContainer}>
      <Tabs
        value={currentTab}
        onChange={(_, value) => setCurrentTab(value)}
        classes={{
          indicator: classes.indicator,
        }}
        className={classes.container}
        variant="scrollable"
        scrollButtons="on"
      >
        {tabs.map(tab => (
          <Tab key={tab.label} label={tab.label} className={classes.tab} />
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <div key={tab.label} role="tabpanel" hidden={currentTab !== index} className={classes.content}>
          {currentTab === index && tab.content}
        </div>
      ))}
    </Box>
  );
};

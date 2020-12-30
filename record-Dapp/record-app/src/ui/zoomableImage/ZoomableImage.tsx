import React, { useState } from 'react';
import { Avatar, Dialog, DialogContent } from '@material-ui/core';

import { useStyles } from './ZoomableImage.styles';
import { ZoomableImageProps } from './ZoomableImage.types';

export const ZoomableImage = ({ src }: ZoomableImageProps) => {
  const classes = useStyles();
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Avatar
        variant="rounded"
        src={src}
        onClick={() => setModalOpened(true)}
        className={classes.clickable}
        data-testid="zoomable-image"
      />
      <Dialog
        onClose={() => setModalOpened(false)}
        data-testid="zoomable-dialog"
        open={isModalOpened}
        PaperProps={{ className: classes.container }}
      >
        <DialogContent dividers className={classes.content}>
          <Avatar variant="rounded" src={src} className={classes.bigImage} />
        </DialogContent>
      </Dialog>
    </>
  );
};

import React from 'react';
import { Link, Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Fragment } from 'react';

import { useInfoBlockStyles } from './InfoBlock.styles';
import { InfoBlockProps } from './InfoBlock.types';

export const InfoBlock = ({ items, className, onClick }: InfoBlockProps) => {
  const { block, container, icon, labelClass, labelIcon, title, clickable } = useInfoBlockStyles();
  return (
    <div className={clsx(container, className, !!onClick && clickable)} onClick={onClick}>
      {items.map(({ text, label, textIcon: TextIcon, labelIcon: LabelIcon, content, url }, index) => (
        <Fragment key={`info_block_${text}_${index}`}>
          <Box flex={1}>
            <div className={block}>
              <TextIcon className={icon} color="primary" />
              {url ? (
                <Link href={url} target="_blank" rel="noopener" className={title}>
                  {text}
                </Link>
              ) : (
                <Typography className={title}>{text}</Typography>
              )}
            </div>
            <div className={block}>
              {LabelIcon ? <LabelIcon className={labelIcon} /> : <div className={labelIcon} />}
              <Typography className={labelClass}>{label}</Typography>
            </div>
          </Box>
          {content}
        </Fragment>
      ))}
    </div>
  );
};

import React from 'react';
import { Link, Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Fragment } from 'react';

import { ProgressBar } from '../progressBar/ProgressBar';

import { useShareBlockStyles } from './ShareBlock.styles';
import { ShareBlockProps } from './ShareBlock.types';

export const ShareBlock = ({ items, className, onClick, shares }: ShareBlockProps) => {
  const { block, container, icon, labelClass, labelIcon, title, clickable } = useShareBlockStyles();
  return (
    <>
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
      <Box flex={1}>
        <ProgressBar completed={shares / 10} />
      </Box>
    </>
  );
};

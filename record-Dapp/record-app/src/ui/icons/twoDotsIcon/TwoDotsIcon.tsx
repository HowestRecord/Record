import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const TwoDotsIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g transform="translate(-314 -20)">
        <g transform="translate(-0.236 2.055)">
          <rect
            width="2"
            height="2"
            transform="translate(325.236 24.945)"
            fill={props.color || theme.palette.text.primary}
          />
          <rect
            width="2"
            height="2"
            transform="translate(325.236 32.945)"
            fill={props.color || theme.palette.text.primary}
          />
        </g>
      </g>
    </SvgIcon>
  );
};

import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const ArrowLeftIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <g transform="translate(-314 -20)">
        <g transform="translate(322.001 37.299) rotate(-90)">
          <path
            d="M10,6.1a.577.577,0,0,0-.125-.357L5.432.213a.569.569,0,0,0-.888,0L.125,5.716a.569.569,0,1,0,.888.713l3.976-4.95,4,4.975A.569.569,0,0,0,10,6.1Z"
            transform="translate(0.009 0.009)"
            fill={props.color || theme.palette.text.primary}
            stroke={props.color || theme.palette.text.primary}
            strokeWidth="0.254"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

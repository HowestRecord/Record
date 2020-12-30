import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const ArrowRightIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 5.834 8.541">
      <g id="up" transform="translate(5.593 0.282) rotate(90)">
        <path
          id="Shape"
          d="M8,4.877a.461.461,0,0,0-.1-.286L4.346.17a.456.456,0,0,0-.71,0L.1,4.573a.455.455,0,1,0,.71.571l3.181-3.96,3.2,3.98A.455.455,0,0,0,8,4.877Z"
          transform="translate(0.291 0.25)"
          fill={props.color || theme.palette.gray.light}
          stroke={props.color || theme.palette.gray.light}
          strokeWidth="0.5"
        />
      </g>
    </SvgIcon>
  );
};

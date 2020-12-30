import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const SuccessIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 11.25 11.25">
      <g transform="translate(0.475 0.125)">
        <path
          d="M1.611,9.389A5.5,5.5,0,0,1,9.39,1.61,5.5,5.5,0,0,1,1.611,9.389ZM3.66,1.145A4.742,4.742,0,1,0,5.5.773,4.717,4.717,0,0,0,3.66,1.145Zm.151,6.49L2.642,5.589a.386.386,0,1,1,.671-.383L4.23,6.811,7.749,3.282A.387.387,0,0,1,8.3,3.83L4.433,7.7l0,0a.4.4,0,0,1-.091.072.388.388,0,0,1-.528-.145Z"
          transform="translate(-0.35)"
          fill={props.color || theme.palette.green.main}
          stroke={props.color || theme.palette.green.main}
          strokeWidth="0.25"
        />
      </g>
    </SvgIcon>
  );
};

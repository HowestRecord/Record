import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const AccountIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 14.949 20">
      <path
        id="Shape"
        d="M14.143,20a.807.807,0,0,1-.807-.806A5.863,5.863,0,0,0,3.33,15.056a5.807,5.807,0,0,0-1.717,4.138.807.807,0,0,1-1.613,0A7.47,7.47,0,0,1,5.492,12,6.179,6.179,0,0,1,1.3,6.162,6.171,6.171,0,0,1,7.474,0a6.156,6.156,0,0,1,4.36,10.514A6.1,6.1,0,0,1,9.453,12a8.1,8.1,0,0,1,.927.322,7.472,7.472,0,0,1,4.569,6.876A.807.807,0,0,1,14.143,20ZM7.469,1.611a4.549,4.549,0,1,0,4.558,4.55A4.558,4.558,0,0,0,7.469,1.611Z"
        transform="translate(0)"
        fill={props.color || theme.palette.primary.light}
      />
    </SvgIcon>
  );
};

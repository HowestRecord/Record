import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const PrivacyIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();
  return (
    <SvgIcon {...props} viewBox="0 0 15.106 20">
      <path
        id="Shape"
        d="M1.479,20A1.519,1.519,0,0,1,0,18.446V7.963a8.215,8.215,0,0,1,.6-3.09A7.97,7.97,0,0,1,2.218,2.345,7.481,7.481,0,0,1,4.616.632,7.167,7.167,0,0,1,10.5.63a7.52,7.52,0,0,1,2.4,1.715,8.011,8.011,0,0,1,1.621,2.528l0,.007a.558.558,0,0,1-.056.53.573.573,0,0,1-.477.253H13.68a.793.793,0,0,1-.706-.424A10.577,10.577,0,0,0,11.79,3.385,6.128,6.128,0,0,0,9.872,2.018a5.656,5.656,0,0,0-2.314-.5,5.55,5.55,0,0,0-2.313.5l-.03.011a6,6,0,0,0-1.89,1.355,6.42,6.42,0,0,0-1.313,2.05,6.7,6.7,0,0,0-.487,2.521v.661l12.154.005a1.428,1.428,0,0,1,1.426,1.426l0,8.4a1.569,1.569,0,0,1-.454,1.125,1.433,1.433,0,0,1-1.02.429Zm.047-1.554a.123.123,0,0,0,0,.031H13.591a.106.106,0,0,0,0-.031v-8.3H1.526Zm5.329-2.885V13.567a1.324,1.324,0,0,1-.6-1.1,1.309,1.309,0,0,1,2.618,0,1.3,1.3,0,0,1-.6,1.1v2a.707.707,0,1,1-1.414,0Z"
        transform="translate(0 0)"
        fill={props.color || theme.palette.primary.light}
      />
    </SvgIcon>
  );
};

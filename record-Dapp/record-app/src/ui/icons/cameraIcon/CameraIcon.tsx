import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const CameraIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 21.001 18">
      <g transform="translate(0.002)">
        <path
          d="M239.055,9467.149a4.075,4.075,0,1,1,4.053-4.074A4.073,4.073,0,0,1,239.055,9467.149Zm0-6.479a2.4,2.4,0,1,0,1.689.705A2.375,2.375,0,0,0,239.055,9460.671Z"
          transform="translate(-228.573 -9452.979)"
          fill={props.color || theme.palette.text.primary}
        />
        <path
          d="M254.524,9477H236.476a1.482,1.482,0,0,1-1.477-1.484v-12.463a1.481,1.481,0,0,1,1.477-1.481h3.912l2.2-2.338,0,0a.908.908,0,0,1,.621-.229h4.567a.91.91,0,0,1,.623.229l.01.007,2.188,2.336h3.924a1.481,1.481,0,0,1,1.477,1.481v12.463A1.482,1.482,0,0,1,254.524,9477Zm-17.641-13.535v11.645h17.232v-11.645Zm6.655-2.762-.813.868h5.542l-.811-.868h-3.917Z"
          transform="translate(-235.001 -9459)"
          fill={props.color || theme.palette.text.primary}
        />
      </g>
    </SvgIcon>
  );
};

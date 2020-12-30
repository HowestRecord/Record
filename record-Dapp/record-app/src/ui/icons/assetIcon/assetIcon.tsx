import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const AssetIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 27.224 43.242">
      <g transform="translate(-3.313 0.25)">
        <path
          d="M111.035,3.653h.891V2.778A2.676,2.676,0,0,1,114.6.106h10.69a2.676,2.676,0,0,1,2.672,2.672v.875h.891a4.46,4.46,0,0,1,4.454,4.454v5.345a.891.891,0,0,1-1.782,0V8.107a2.676,2.676,0,0,0-2.672-2.672h-1.782a.891.891,0,0,1-.891-.891V2.778a.891.891,0,0,0-.891-.891H114.6a.891.891,0,0,0-.891.891V4.544a.891.891,0,0,1-.891.891h-1.782a2.676,2.676,0,0,0-2.672,2.672v8.908a.891.891,0,0,1-1.782,0V8.107A4.46,4.46,0,0,1,111.035,3.653Z"
          transform="translate(-103.018 -0.106)"
          fill={props.color || theme.palette.primary.main}
          stroke={props.color || theme.palette.primary.main}
          strokeWidth="0.5"
        />
        <path
          d="M107.472,303.926a.891.891,0,0,1,.891.891v7.126a2.676,2.676,0,0,0,2.672,2.672h17.816a2.676,2.676,0,0,0,2.672-2.672V299.472a.891.891,0,0,1,1.782,0v12.471a4.46,4.46,0,0,1-4.454,4.454H111.035a4.46,4.46,0,0,1-4.454-4.454v-7.126A.891.891,0,0,1,107.472,303.926Z"
          transform="translate(-103.018 -273.655)"
          fill={props.color || theme.palette.primary.main}
          stroke={props.color || theme.palette.primary.main}
          strokeWidth="0.5"
        />
      </g>
    </SvgIcon>
  );
};

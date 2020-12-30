import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const TerminateIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  const fillColor = props.color
    ? props.color === 'disabled'
      ? theme.palette.gray.light
      : props.color
    : theme.palette.text.primary;

  return (
    <SvgIcon {...props} viewBox="0 0 13.176 14">
      <path
        d="M15.412,4H13.765v8.235h1.647Zm2.936,2.005L17.158,7.2a4.941,4.941,0,1,1-5.139,0l-1.19-1.19a6.588,6.588,0,1,0,7.519,0Z"
        transform="translate(-8 -4)"
        fill={fillColor}
      />
    </SvgIcon>
  );
};

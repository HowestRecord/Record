import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const NotificationIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 15.2 20.2">
      <path
        id="Shape"
        d="M7.5,20a1.407,1.407,0,0,1-1.406-1.405v-.939H.7a.7.7,0,0,1,0-1.405h.547V7.5A6.241,6.241,0,0,1,6.8,1.29V.7A.7.7,0,1,1,8.2.7V1.29A6.24,6.24,0,0,1,13.749,7.5v8.75H14.3a.7.7,0,1,1,0,1.405H8.906v.939A1.408,1.408,0,0,1,7.5,20Zm0-17.344A4.849,4.849,0,0,0,2.656,7.5v8.75h9.687V7.5A4.849,4.849,0,0,0,7.5,2.656Z"
        transform="translate(0.1 0.1)"
        fill={props.color ? props.color : theme.palette.primary.main}
      />
    </SvgIcon>
  );
};

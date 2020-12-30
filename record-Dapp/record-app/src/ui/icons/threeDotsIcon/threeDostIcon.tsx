import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const ThreeDotsIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  const fillColor = props.color
    ? props.color === 'action'
      ? theme.palette.yellow.main
      : props.color === 'disabled'
      ? theme.palette.gray.main
      : props.color
    : theme.palette.secondary.main;

  return (
    <SvgIcon {...props} viewBox="0 0 20 4">
      <g id="Group_171" data-name="Group 171" transform="translate(0 0.032)">
        <circle
          id="Ellipse_20"
          data-name="Ellipse 20"
          cx="2"
          cy="2"
          r="2"
          transform="translate(0 -0.032)"
          fill={fillColor}
        />
        <circle
          id="Ellipse_21"
          data-name="Ellipse 21"
          cx="2"
          cy="2"
          r="2"
          transform="translate(8 -0.032)"
          fill={fillColor}
        />
        <circle
          id="Ellipse_22"
          data-name="Ellipse 22"
          cx="2"
          cy="2"
          r="2"
          transform="translate(16 -0.032)"
          fill={fillColor}
        />
      </g>
    </SvgIcon>
  );
};

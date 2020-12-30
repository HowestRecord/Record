import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const AssetPendingIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 14.206 14.206">
      <g transform="translate(-1 -1)">
        <g transform="translate(15.206 15.206) rotate(180)" fill="none">
          <path d="M6.476,0A6.476,6.476,0,1,1,0,6.476,6.476,6.476,0,0,1,6.476,0Z" stroke="none" />
          <path
            d="M 6.475814342498779 2.000004768371582 C 4.007843971252441 2.000004768371582 2.000004768371582 4.007843971252441 2.000004768371582 6.475814342498779 C 2.000004768371582 8.943784713745117 4.007843971252441 10.95162391662598 6.475814342498779 10.95162391662598 C 8.943784713745117 10.95162391662598 10.95162391662598 8.943784713745117 10.95162391662598 6.475814342498779 C 10.95162391662598 4.007843971252441 8.943784713745117 2.000004768371582 6.475814342498779 2.000004768371582 M 6.475814342498779 4.76837158203125e-06 C 10.0523042678833 4.76837158203125e-06 12.95162391662598 2.899324417114258 12.95162391662598 6.475814342498779 C 12.95162391662598 10.0523042678833 10.0523042678833 12.95162391662598 6.475814342498779 12.95162391662598 C 2.899324417114258 12.95162391662598 4.76837158203125e-06 10.0523042678833 4.76837158203125e-06 6.475814342498779 C 4.76837158203125e-06 2.899324417114258 2.899324417114258 4.76837158203125e-06 6.475814342498779 4.76837158203125e-06 Z"
            stroke="none"
            fill={props.color || theme.palette.yellow.main}
          />
        </g>
        <rect
          width="8.45"
          height="8.45"
          transform="translate(9.45 9.45) rotate(180)"
          fill={theme.palette.gray.darker}
          className="background_color"
        />
      </g>
    </SvgIcon>
  );
};

export const AssetInactiveIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 9.756 9.756">
      <g transform="translate(-219.086 -547.086)">
        <line
          x2="6.928"
          y2="6.928"
          transform="translate(220.5 548.5)"
          fill="none"
          stroke={props.color || theme.palette.red.main}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <line
          y1="6.928"
          x2="6.928"
          transform="translate(220.5 548.5)"
          fill="none"
          stroke={props.color || theme.palette.red.main}
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>
    </SvgIcon>
  );
};

export const AssetActiveIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 19.819 12.315">
      <path
        d="M63.914,147.37a.533.533,0,0,1,.209-.425l10.723-8.254a.536.536,0,0,1,.863.425V143.4l6.855-1.51a.536.536,0,0,1,.42.965L72.262,150.28a.536.536,0,0,1-.842-.441v-4.207l-6.8,2.245a.535.535,0,0,1-.7-.508Zm16.223-3.849-4.848,1.068a.537.537,0,0,1-.652-.524v-3.859l-7.363,5.667,4.513-1.491a.536.536,0,0,1,.7.508v3.925Z"
        transform="translate(-63.664 -138.32)"
        fill={props.color || theme.palette.secondary.main}
        stroke={props.color || theme.palette.secondary.main}
        strokeWidth="0.5"
      />
    </SvgIcon>
  );
};

export const AssetIssuedIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 21.463 21.463">
      <g id="Group_281" data-name="Group 281" transform="translate(-178.223 -128.754)">
        <path
          id="Path_107"
          data-name="Path 107"
          d="M301.826,69.255h6.6a.826.826,0,0,0,.826-.826v-6.6A.826.826,0,0,0,308.43,61h-6.6a.826.826,0,0,0-.826.826v6.6A.826.826,0,0,0,301.826,69.255Zm.826-6.6H307.6V67.6h-4.953Z"
          transform="translate(-109.569 67.754)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_108"
          data-name="Path 108"
          d="M68.43,301h-6.6a.826.826,0,0,0-.826.826v6.6a.826.826,0,0,0,.826.826h6.6a.826.826,0,0,0,.826-.826v-6.6A.826.826,0,0,0,68.43,301Zm-.826,6.6H62.651v-4.953H67.6Z"
          transform="translate(117.223 -159.038)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_109"
          data-name="Path 109"
          d="M309.255,308.43v-6.6a.826.826,0,0,0-1.651,0V307.6h-5.779a.826.826,0,1,0,0,1.651h6.6A.826.826,0,0,0,309.255,308.43Z"
          transform="translate(-109.569 -159.038)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_110"
          data-name="Path 110"
          d="M68.43,61h-6.6a.826.826,0,0,0-.826.826v6.6a.826.826,0,0,0,.826.826h6.6a.826.826,0,0,0,.826-.826v-6.6A.826.826,0,0,0,68.43,61ZM67.6,67.6H62.651V62.651H67.6Z"
          transform="translate(117.223 67.754)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_111"
          data-name="Path 111"
          d="M241.826,69.255a.826.826,0,0,0,.826-.826v-6.6a.826.826,0,1,0-1.651,0v6.6A.826.826,0,0,0,241.826,69.255Z"
          transform="translate(-52.871 67.754)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_112"
          data-name="Path 112"
          d="M247.6,241.826a.825.825,0,0,0-.826-.826h-4.953a.826.826,0,0,0-.825.826v9.906a.826.826,0,1,0,1.651,0v-9.081h4.128A.825.825,0,0,0,247.6,241.826Z"
          transform="translate(-52.871 -102.34)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_113"
          data-name="Path 113"
          d="M61.826,242.651h1.651a.826.826,0,1,0,0-1.651H61.826a.826.826,0,0,0,0,1.651Z"
          transform="translate(117.223 -102.34)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_114"
          data-name="Path 114"
          d="M361,301.826v3.3a.826.826,0,1,0,1.651,0v-3.3a.826.826,0,0,0-1.651,0Z"
          transform="translate(-166.268 -159.038)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_115"
          data-name="Path 115"
          d="M301,301.826v3.3a.826.826,0,1,0,1.651,0v-3.3a.826.826,0,0,0-1.651,0Z"
          transform="translate(-109.569 -159.038)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_116"
          data-name="Path 116"
          d="M393.477,241h-1.651a.826.826,0,1,0,0,1.651h1.651a.826.826,0,0,0,0-1.651Z"
          transform="translate(-194.617 -102.34)"
          fill={props.color || theme.palette.secondary.main}
        />
        <ellipse
          id="Ellipse_24"
          data-name="Ellipse 24"
          cx="0.586"
          cy="0.586"
          rx="0.586"
          ry="0.586"
          transform="translate(195.114 132.16)"
          fill={props.color || theme.palette.secondary.main}
        />
        <ellipse
          id="Ellipse_25"
          data-name="Ellipse 25"
          cx="0.586"
          cy="0.586"
          rx="0.586"
          ry="0.586"
          transform="translate(181.627 132.16)"
          fill={props.color || theme.palette.secondary.main}
        />
        <ellipse
          id="Ellipse_26"
          data-name="Ellipse 26"
          cx="0.586"
          cy="0.586"
          rx="0.586"
          ry="0.586"
          transform="translate(181.627 145.646)"
          fill={props.color || theme.palette.secondary.main}
        />
        <path
          id="Path_117"
          data-name="Path 117"
          d="M153.477,241h-1.651a.826.826,0,1,0,0,1.651h1.651a.826.826,0,0,0,0-1.651Z"
          transform="translate(32.175 -102.34)"
          fill={props.color || theme.palette.secondary.main}
        />
      </g>
    </SvgIcon>
  );
};

export const AssetVerifiedIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 22.589 16.191">
      <path
        id="Path_125"
        data-name="Path 125"
        d="M13.672-14.367,1.232-1.844l-5.6-5.6a1.311,1.311,0,0,0-.954-.415,1.311,1.311,0,0,0-.954.415,1.083,1.083,0,0,0-.166.228,1.52,1.52,0,0,0-.124.27,1.54,1.54,0,0,0-.062.27,1.021,1.021,0,0,0,0,.29,2.175,2.175,0,0,0,.062.29.957.957,0,0,0,.124.27l.166.249L.32.975a1.2,1.2,0,0,0,.933.415A1.2,1.2,0,0,0,2.186.975L2.352.81,15.579-12.5a1.266,1.266,0,0,0,.373-.933,1.266,1.266,0,0,0-.373-.933,1.191,1.191,0,0,0-1.617-.207A1.107,1.107,0,0,0,13.672-14.367Z"
        transform="translate(6.636 14.8)"
        fill={props.color || theme.palette.secondary.main}
      />
    </SvgIcon>
  );
};

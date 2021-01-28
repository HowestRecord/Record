import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const AssetIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="5 5 55 35">
      <g>
        <path
          fill={props.color || theme.palette.primary.main}
          d="M25.79,60h7.16a1.34,1.34,0,0,0,1.3-1.68L31.13,46a1.34,1.34,0,0,0-1.3-1H22.66a1.34,1.34,0,0,0-1.3,1.68L24.48,59A1.34,1.34,0,0,0,25.79,60Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M43.13,46a1.34,1.34,0,0,0-1.3-1H34.66a1.34,1.34,0,0,0-1.3,1.68L36.48,59a1.34,1.34,0,0,0,1.3,1h7.16a1.34,1.34,0,0,0,1.3-1.68Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M57.08,53.68l-2-7.69a1.34,1.34,0,0,0-1.3-1H46.66a1.34,1.34,0,0,0-1.3,1.68L48.48,59a1.34,1.34,0,0,0,1.3,1h2.39A5.06,5.06,0,0,0,57.08,53.68Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M25.51,28H18.35A1.34,1.34,0,0,0,17,29.66L20.17,42a1.34,1.34,0,0,0,1.3,1h7.16a1.34,1.34,0,0,0,1.3-1.68L26.81,29A1.34,1.34,0,0,0,25.51,28Zm-1.43,4H22a1,1,0,0,1,0-2h2.08a1,1,0,0,1,0,2Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M6.1,42a1.34,1.34,0,0,0,1.3,1h9.23a1.34,1.34,0,0,0,1.3-1.68L14.81,29a1.34,1.34,0,0,0-1.3-1H9.05a5.06,5.06,0,0,0-4.9,6.3Zm4.66-12h2.08a1,1,0,0,1,0,2H10.76a1,1,0,0,1,0-2Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M8.6,45a1.34,1.34,0,0,0-1.3,1.68l2.41,9.51A5.06,5.06,0,0,0,14.61,60h6.34a1.34,1.34,0,0,0,1.3-1.68L19.13,46a1.34,1.34,0,0,0-1.3-1Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M52.63,43a1.34,1.34,0,0,0,1.3-1.68L51.52,31.8A5.06,5.06,0,0,0,46.62,28H42.35A1.34,1.34,0,0,0,41,29.66L44.17,42a1.34,1.34,0,0,0,1.3,1Zm-2.11-4.24a1,1,0,0,1,.22.32,1.08,1.08,0,0,1,.07.39,1,1,0,0,1-.07.38,1,1,0,0,1-.22.32.87.87,0,0,1-.32.22,1.08,1.08,0,0,1-.39.08,1,1,0,0,1-.7-.3.88.88,0,0,1-.22-.32,1,1,0,0,1-.08-.38,1.08,1.08,0,0,1,.08-.39.88.88,0,0,1,.22-.32,1,1,0,0,1,1.41,0ZM44.16,31a1,1,0,0,1,1-1,4.22,4.22,0,0,1,4.09,3.18l.7,2.75a1,1,0,0,1-1.94.49l-.7-2.75A2.22,2.22,0,0,0,45.16,32,1,1,0,0,1,44.16,31Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M29,29.66,32.17,42a1.34,1.34,0,0,0,1.3,1h7.16a1.34,1.34,0,0,0,1.3-1.68L38.81,29a1.34,1.34,0,0,0-1.3-1H30.35A1.34,1.34,0,0,0,29,29.66Zm4.19.33h2.08a1,1,0,0,1,0,2H33.23a1,1,0,0,1,0-2Z"
        />
        <path
          fill={props.color || theme.palette.primary.main}
          d="M6.09,51.75l-1.77,7a1,1,0,1,0,1.94.49L7,56.31a4,4,0,0,0,0-2l-.66-2.59A.13.13,0,0,0,6.09,51.75Z"
        />
        <circle fill={props.color ? props.color : theme.palette.yellow.main} cx="48.04" cy="15.97" r="6.02" />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M49.57,8a.43.43,0,0,0,.38-.62L48.42,4.25a.43.43,0,0,0-.77,0L46.12,7.38a.43.43,0,0,0,.38.62Z"
        />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M56.06,7.42,52.77,8.55a.43.43,0,0,0-.16.71l2.16,2.16a.43.43,0,0,0,.71-.16L56.6,8A.43.43,0,0,0,56.06,7.42Z"
        />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M43.47,22.72,41.3,20.55a.43.43,0,0,0-.71.16L39.47,24a.43.43,0,0,0,.54.54l3.29-1.13A.43.43,0,0,0,43.47,22.72Z"
        />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M59.77,15.6l-3.12-1.53a.43.43,0,0,0-.62.38v3.06a.43.43,0,0,0,.62.38l3.12-1.53A.43.43,0,0,0,59.77,15.6Z"
        />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M36.31,15.6a.43.43,0,0,0,0,.77l3.12,1.53a.43.43,0,0,0,.61-.38V14.46a.43.43,0,0,0-.61-.38Z"
        />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M55.48,20.72a.43.43,0,0,0-.71-.16l-2.16,2.16a.43.43,0,0,0,.16.71l3.29,1.13A.43.43,0,0,0,56.6,24Z"
        />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M43.3,8.55,40,7.42a.43.43,0,0,0-.54.54l1.13,3.29a.43.43,0,0,0,.71.16l2.16-2.16A.43.43,0,0,0,43.3,8.55Z"
        />
        <path
          fill={props.color ? props.color : theme.palette.yellow.main}
          d="M47.08,26a7.06,7.06,0,0,1,1.6.29.45.45,0,0,0,.54-.23l.73-1.48a.43.43,0,0,0-.38-.62H46.51a.43.43,0,0,0-.38.62l.57,1.17A.45.45,0,0,0,47.08,26Z"
        />
      </g>
    </SvgIcon>
  );
};

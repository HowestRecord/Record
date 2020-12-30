import { ButtonProps as BaseButtonProps } from '@material-ui/core/Button';

export type ButtonProps = Omit<BaseButtonProps, 'color'> & {
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'error';
};

import { StandardTextFieldProps } from '@material-ui/core/TextField';
import { RegisterOptions } from 'react-hook-form';

export type GenericFieldProps = Omit<StandardTextFieldProps, 'variant'> & {
  name?: string;
  omitRegister?: boolean;
  required?: boolean;
  validation?: RegisterOptions;
};

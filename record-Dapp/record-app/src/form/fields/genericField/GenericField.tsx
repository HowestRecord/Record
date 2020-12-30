import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

import { TextField as BaseFormField } from 'ui';
import { useLocale } from 'hooks/useLocale/useLocale';

import { GenericFieldProps } from './GenericField.types';

export const GenericField = ({
  InputLabelProps = {},
  label,
  onChange = () => null,
  value,
  onClick,
  name,
  omitRegister = false,
  required,
  validation = {},
  ...props
}: GenericFieldProps) => {
  const { register, errors } = useFormContext();
  const { formatMessage } = useLocale();

  const error: FieldError = errors[name ?? ''];

  const validationObject = {
    ...(required ? { required: 'validation.required' } : {}),
    ...validation,
  };

  return (
    <BaseFormField
      id={name}
      label={label}
      name={name}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: true,
      }}
      fullWidth
      onChange={onChange}
      value={value}
      onClick={onClick}
      inputRef={omitRegister ? null : register(validationObject)}
      error={!!error}
      helperText={!!error ? formatMessage({ id: error?.message }) : ''}
      {...props}
    />
  );
};

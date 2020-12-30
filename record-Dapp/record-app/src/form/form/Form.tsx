import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { FormProps } from './Form.types';

export const Form = <T extends Record<string, unknown>>({ children, ...props }: FormProps<T>) => {
  const formMethods = useForm<T>(props);

  return (
    <FormProvider<T> {...formMethods}>
      <form>{typeof children === 'function' ? children(formMethods) : children}</form>
    </FormProvider>
  );
};

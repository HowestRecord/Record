import { UseFormOptions } from 'react-hook-form';
import { UseFormMethods } from 'react-hook-form/dist/types/form';
import { ReactNode } from 'react';

export type FormProps<T> = UseFormOptions<T> & {
  children: ((props: UseFormMethods<T>) => ReactNode) | ReactNode;
};

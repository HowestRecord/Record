import { GenericFieldProps } from '../genericField/GenericField.types';

export type UploadFieldProps = GenericFieldProps & {
  name: string;
  compressImage?: boolean;
};

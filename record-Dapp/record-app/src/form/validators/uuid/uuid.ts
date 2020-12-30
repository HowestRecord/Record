import { validate } from 'uuid';

export const uuid = (value: string) => {
  if (!value) return true;

  if (validate(value)) {
    return true;
  }

  return 'validation.uuid';
};

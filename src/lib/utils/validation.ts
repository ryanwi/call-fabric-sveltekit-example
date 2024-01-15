import { isEmail } from 'validator';

export const validateEmail = (email: string) => {
  return isEmail(email);
};

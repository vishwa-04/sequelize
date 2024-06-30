import { RequiredKeyType } from './index.model.type';


export const DATE_FORMAT = 'MM/dd/yyyy';

export type UserAttributesType = {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  created_at?: Date | string;
  updated_at?: Date | string;
  deleted_at?: Date | string;
};

export type RequiredUserAttributesType = RequiredKeyType<UserAttributesType, 'email'>;

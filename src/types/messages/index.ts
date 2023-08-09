import { ERole } from '..';

export type IMesssages = {
  _id: string;
  employeeId?: number;
  businessId?: number;
  role: ERole;
  content: string;
  time: Date;
};

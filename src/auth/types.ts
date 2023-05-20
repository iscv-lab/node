import { ERole } from "~models/User";

export type IJWT = {
  _id: string;
  username: string;
  role: ERole;
  type: string;
};

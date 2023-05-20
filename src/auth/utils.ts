import jwt from 'jsonwebtoken';
import { IUser } from '~models/User';
import { IJWT } from './types';
import { Schema, Document } from 'mongoose';

export const generateAccessToken = (
  user:
    | IUser
    | (Document<unknown, {}, IUser> &
        Omit<
          IUser &
            Required<{
              _id: Schema.Types.ObjectId;
            }>,
          never
        >),
) => {
  return jwt.sign(
    {
      _id: user._id.toString(),
      username: user.username,
      role: user.role,
      type: 'access',
    } as IJWT,
    process.env.JWT_ACCESS_KEY as string,
    { expiresIn: '20m' },
  );
};
export const generateRefreshToken = (
  user:
    | IUser
    | IUser
    | (Document<unknown, {}, IUser> &
        Omit<
          IUser &
            Required<{
              _id: Schema.Types.ObjectId;
            }>,
          never
        >),
) => {
  return jwt.sign(
    {
      _id: user._id.toString(),
      username: user.username,
      role: user.role,
      type: 'refresh',
    } as IJWT,
    process.env.JWT_REFRESH_KEY as string,
    { expiresIn: '1w' },
  );
};

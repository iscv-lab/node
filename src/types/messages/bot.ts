import { ERole } from '..';

export type IBotMetadata = {
  _id: string;
  fromTime?: Date;
  toTime?: Date;
  businessImage?: string;
  businessId?: number;
  businessName?: string;
};

export type IBotMessages = {
  _id: string;
  role: ERole;
  content: string;
  time: Date;
  category?: EBotCategory;
  metadata?: IBotMetadata;
};

export enum EBotCategory {
  NEW_INTERVIEW,
}
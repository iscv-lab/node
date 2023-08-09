import { ERole } from '..';

export type IBotMetadata = {
  _id: string;
  cid?: string;
  fromTime?: Date;
  toTime?: Date;
  time?: Date;
  businessImage?: string;
  businessId?: number;
  businessName?: string;
};

export type IBotMessages = {
  _id: string;
  role: ERole;
  sessionId?: number;
  content: string;
  isRead?: boolean;
  time: Date;
  category?: EBotCategory;
  metadata?: IBotMetadata;
};

export enum EBotCategory {
  NEW_INTERVIEW,
  INTERVIEW_DIRECTION,
  NEW_BIGFIVE_RESULT,
}

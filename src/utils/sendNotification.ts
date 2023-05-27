import firebase from 'firebase-admin';
import { makeid } from './makeid';

export enum ToScreen {
  POC_INFO = 'poc_info',
}

export const sendNotification = (
  tokens: string[],
  title?: string,
  body?: string,
  data?: {
    pocId?: string;
    to?: ToScreen;
  },
) => {
  return firebase.messaging().sendMulticast({
    tokens: tokens,
    notification: {
      body: body?.replace(/\s+/g, ' ') ?? 'Local notification!',
      title: title?.replace(/\s+/g, ' ') ?? 'Local Notification Title',
    },
    android: {
      notification: {
        sound: 'default',
      },
    },
    data: {
      ...data,
      notificationId: makeid(3),
    },
    apns: {
      payload: {
        aps: {
          sound: 'default',
        },
      },
    },
  });
};

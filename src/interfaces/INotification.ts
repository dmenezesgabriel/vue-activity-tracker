export enum NotificationType {
  SUCCESS,
  FAIL,
  ATTENTION,
}

export interface INotification {
  title: String;
  text: String;
  type: NotificationType;
  id: number;
}

import type { NotificationType } from "@/interfaces/INotification";
import { useNotificationStore } from "@/stores/notifications";

type Notifier = {
  notify: (type: NotificationType, title: String, text: String) => void;
};

export default (): Notifier => {
  const notify = (
    type: NotificationType,
    title: String,
    text: String
  ): void => {
    const notificationStore = useNotificationStore();
    notificationStore.addNotification({
      id: 0,
      title,
      text,
      type,
    });
  };
  return {
    notify,
  };
};

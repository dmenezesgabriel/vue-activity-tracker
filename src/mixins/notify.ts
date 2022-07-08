import type { NotificationType } from "@/interfaces/INotification";
import { useNotificationStore } from "@/stores/notifications";

const notificationStore = useNotificationStore();

export const notificationMixin = {
  methods: {
    notify(type: NotificationType, title: String, text: String): void {
      notificationStore.addNotification({
        id: 0,
        title,
        text,
        type,
      });
    },
  },
};

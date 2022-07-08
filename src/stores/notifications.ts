import type { INotification } from "@/interfaces/INotification";
import { defineStore } from "pinia";

interface State {
  notifications: INotification[];
}

export const useNotificationStore = defineStore({
  id: "Notification",
  state: () =>
    ({
      notifications: [],
    } as State),
  actions: {
    addNotification(newNotification: INotification) {
      newNotification.id = new Date().getTime();
      this.notifications.push(newNotification);
      // Remove
      setTimeout(() => {
        this.notifications = this.notifications.filter(
          (notification) => notification.id != newNotification.id
        );
      }, 300);
    },
  },
});

<template>
  <div class="notifications">
    <article
      class="message"
      :class="context[notification.type]"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.text }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { NotificationType } from "@/interfaces/INotification";
import { useNotificationStore } from "@/stores/notifications";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Notifications",
  data() {
    return {
      context: {
        [NotificationType.SUCCESS]: "is-success",
        [NotificationType.FAIL]: "is-danger",
        [NotificationType.ATTENTION]: "is-warning",
      },
    };
  },
  setup() {
    const notificationStore = useNotificationStore();
    return {
      notifications: computed(() => notificationStore.$state.notifications),
    };
  },
});
</script>

<style scoped>
.notifications {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 100;
}
</style>

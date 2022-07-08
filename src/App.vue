<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-theme': isDarkThemeActive }"
  >
    <div class="column is-one-quarter">
      <SideBar @onThemeToggle="switchTheme" />
    </div>
    <div class="column is-three-quarter content">
      <Notifications />
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import Notifications from "./components/Notifications.vue";
export default defineComponent({
  name: "App",
  data() {
    return { isDarkThemeActive: false };
  },
  components: {
    SideBar,
    Notifications,
  },
  methods: {
    switchTheme(isDarkThemeActive: boolean) {
      console.log(`is: ${isDarkThemeActive}`);
      this.isDarkThemeActive = isDarkThemeActive;
    },
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-theme {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>

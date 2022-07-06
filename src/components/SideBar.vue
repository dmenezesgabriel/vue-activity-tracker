<template>
  <header>
    <img src="../assets/logo.svg" alt="" />
    <h1>
      <span>Activity Tracker</span>
    </h1>
    <button class="button" @click="changeTheme">{{ buttonInnerText }}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideBar",
  data() {
    return { isDarkThemeActive: false };
  },
  emits: ["onThemeToggle"],
  methods: {
    changeTheme() {
      this.isDarkThemeActive = !this.isDarkThemeActive;
      this.$emit("onThemeToggle", this.isDarkThemeActive);
    },
  },
  computed: {
    buttonInnerText() {
      if (this.isDarkThemeActive) {
        return "Deactivate Dark Theme";
      }
      return "Activate Datk Theme";
    },
  },
});
</script>
<style scoped>
header {
  background-color: #0d3b66;
  padding: 1rem;
  width: 100%;
  height: 100vh;
  text-align: center;
}

header img {
  height: 50px;
}
header span {
  color: #fff;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>

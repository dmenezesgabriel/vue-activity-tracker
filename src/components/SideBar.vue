<template>
  <header>
    <h1>
      <img src="../assets/logo.svg" alt="" /><span>Activity Tracker</span>
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "SideBar" });
</script>
<style scoped>
header {
  background-color: #0d3b66;
  padding: 1rem;
  width: 100%;
  height: 100vh;
}

header h1 {
  display: flex;
  align-items: center;
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

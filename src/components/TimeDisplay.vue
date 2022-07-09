<template>
  <section>
    <span class="icon">
      <i class="fas fa-clock"></i>
    </span>
    <strong class="display">{{ elapsedTime }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TimeDisplay",
  props: { timeInSeconds: { type: Number, default: 0 } },
  computed: {
    elapsedTime() {
      return new Date(this.timeInSeconds * 1000)
        .toISOString()
        .substring(11, 19);
    },
  },
});
</script>
<style>
.display {
  color: var(--text-primary);
}
</style>

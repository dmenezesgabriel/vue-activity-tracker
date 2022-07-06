<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-8"
        role="TaskForm"
        aria-label="TaskForm for new task creation"
      >
        <input
          type="text"
          name=""
          id=""
          class="input"
          placeholder="Which task you wish to start?"
          v-model="taskDescription"
        />
      </div>
      <div class="column">
        <StopWatch @onStopWatchStopped="endTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StopWatch from "./StopWatch.vue";
export default defineComponent({
  name: "TaskForm",
  emits: ["onEndTask"],
  data() {
    return { taskDescription: "" };
  },
  components: {
    StopWatch,
  },
  methods: {
    endTask(timeInSeconds: number): void {
      this.$emit("onEndTask", {
        timeInSeconds: timeInSeconds,
        description: this.taskDescription,
      });
      this.taskDescription = "";
    },
  },
});
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>

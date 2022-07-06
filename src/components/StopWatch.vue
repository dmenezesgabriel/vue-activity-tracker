<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TimeDisplay :timeInSeconds="timeInSeconds" />
    <button @click="start" class="button" :disabled="isRunning">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button @click="stop" class="button" :disabled="!isRunning">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TimeDisplay from "./TimeDisplay.vue";
export default defineComponent({
  name: "StopWatch",
  emits: ["onStopWatchStopped"],
  data() {
    return { timeInSeconds: 0, cronRef: 0, isRunning: false };
  },
  components: {
    TimeDisplay,
  },
  methods: {
    start(): void {
      console.group("start");
      this.isRunning = true;
      this.cronRef = setInterval(() => {
        this.timeInSeconds++;
      }, 1000);
    },
    stop(): void {
      console.group("stop");
      this.isRunning = false;
      clearInterval(this.cronRef);
      this.$emit("onStopWatchStopped", this.timeInSeconds);
      this.timeInSeconds = 0;
    },
  },
});
</script>

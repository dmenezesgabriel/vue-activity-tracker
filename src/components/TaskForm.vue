<template>
  <div class="box form">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select name="" id="" v-model="projectId">
            <option value="">Select Project</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <StopWatch @onStopWatchStopped="endTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import StopWatch from "./StopWatch.vue";
import { useProjectStore } from "@/store/project";
export default defineComponent({
  name: "TaskForm",
  emits: ["onEndTask"],
  data() {
    return { taskDescription: "", projectId: "" };
  },
  components: {
    StopWatch,
  },
  methods: {
    endTask(timeInSeconds: number): void {
      this.$emit("onEndTask", {
        timeInSeconds: timeInSeconds,
        description: this.taskDescription,
        project: this.projects.find((project) => project.id == this.projectId),
      });
      this.taskDescription = "";
    },
  },
  setup() {
    const projectStore = useProjectStore();
    return {
      projects: computed(() => projectStore.$state.projects),
    };
  },
});
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>

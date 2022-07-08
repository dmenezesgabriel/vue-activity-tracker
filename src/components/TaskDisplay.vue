<template>
  <TaskBox>
    <div class="columns">
      <div class="column is-4">
        {{ task.description || "No description provided" }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || "N/D" }}
      </div>
      <div class="column">
        <TimeDisplay :timeInSeconds="task.timeInSeconds" />
      </div>
    </div>
  </TaskBox>
</template>

<script lang="ts">
import type ITask from "@/interfaces/ITask";
import { defineComponent, type PropType } from "vue";
import TimeDisplay from "./TimeDisplay.vue";
import TaskBox from "./TaskBox.vue";
export default defineComponent({
  name: "TaskDisplay",
  props: { task: { type: Object as PropType<ITask>, required: true } },
  components: {
    TimeDisplay,
    TaskBox,
  },
});
</script>

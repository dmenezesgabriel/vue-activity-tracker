<template>
  <TaskBox>
    <div class="column is-7">
      {{ task.description || "No description provided" }}
    </div>
    <div class="column">
      <TimeDisplay :timeInSeconds="task.timeInSeconds" />
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

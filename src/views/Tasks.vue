<template>
  <TaskForm @onEndTask="saveTask" />
  <div class="list">
    <TaskDisplay v-for="(task, index) in tasks" :key="index" :task="task" />
    <TaskBox v-if="isTaskListEmpty"> Waiting for new tasks </TaskBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskForm from "../components/TaskForm.vue";
import TaskDisplay from "../components/TaskDisplay.vue";
import type ITask from "../interfaces/ITask";
import TaskBox from "../components/TaskBox.vue";
export default defineComponent({
  name: "Tasks",
  data() {
    return { tasks: [] as ITask[] };
  },
  components: {
    TaskForm,
    TaskDisplay,
    TaskBox,
  },
  methods: {
    saveTask(task: ITask): void {
      this.tasks.push(task);
    },
  },
  computed: {
    isTaskListEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
});
</script>

<template>
  <TaskForm @onEndTask="saveTask" />
  <div class="list">
    <TaskDisplay
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @onClickedTask="selectTask"
    />
    <TaskBox v-if="isTaskListEmpty"> Waiting for new tasks </TaskBox>
    <div
      class="modal"
      :class="{ 'is-active': selectedTask }"
      v-if="selectedTask"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editing Task</p>
          <button
            class="delete"
            aria-label="close"
            @click="closeModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="taskDescription" class="label">Task Description</label>
            <input
              type="text"
              class="input"
              id="taskName"
              v-model="selectedTask.description"
            />
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="updateTask">
            Save changes
          </button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskForm from "../components/TaskForm.vue";
import TaskDisplay from "../components/TaskDisplay.vue";
import type ITask from "../interfaces/ITask";
import TaskBox from "../components/TaskBox.vue";
import { useTaskStore } from "@/stores/tasks";
import { computed } from "@vue/reactivity";
export default defineComponent({
  name: "Tasks",
  components: {
    TaskForm,
    TaskDisplay,
    TaskBox,
  },
  data() {
    return {
      selectedTask: null as ITask | null,
    };
  },
  methods: {
    saveTask(task: ITask): void {
      this.tasksStore.createTask(task);
    },
    selectTask(task: ITask) {
      this.selectedTask = task;
    },
    closeModal() {
      this.selectedTask = null;
    },
    updateTask() {
      if (this.selectedTask) this.tasksStore.updateTask(this.selectedTask);
      this.closeModal();
    },
  },
  computed: {
    isTaskListEmpty(): boolean {
      return this.tasks.length === 0;
    },
  },
  setup() {
    const tasksStore = useTaskStore();
    tasksStore.getTasks();
    console.log(tasksStore.$state.tasks);
    return { tasksStore, tasks: computed(() => tasksStore.$state.tasks) };
  },
});
</script>

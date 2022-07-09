<template>
  <TaskForm @onEndTask="saveTask" />
  <div class="list">
    <TaskBox v-if="isTaskListEmpty"> Waiting for new tasks </TaskBox>
    <div class="field">
      <p class="control has-icons-left">
        <input
          type="text"
          class="input"
          placeholder="Type to filter"
          v-model="searchedText"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"> </i>
        </span>
      </p>
    </div>
    <TaskDisplay
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @onClickedTask="selectTask"
    />
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
import { defineComponent, ref, watchEffect } from "vue";
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
    // TODO
    // Use Vue transitions with modal
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
    const searchedText = ref("");
    // const tasks = computed(() =>
    //   tasksStore.$state.tasks.filter(
    //     (tk) =>
    //       !searchedText.value || tk.description.includes(searchedText.value)
    //   )
    // );
    watchEffect(() => {
      // TODO
      // Apply debounce function
      tasksStore.getTasks(searchedText.value);
    });
    return {
      tasksStore,
      searchedText,
      tasks: computed(() => tasksStore.$state.tasks),
    };
  },
});
</script>

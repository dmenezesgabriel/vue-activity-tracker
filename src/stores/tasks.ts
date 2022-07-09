import type ITask from "@/interfaces/ITask";
import { defineStore } from "pinia";
import http from "@/http";
interface State {
  tasks: ITask[];
}

export const useTaskStore = defineStore({
  id: "task",
  state: () =>
    ({
      tasks: [],
    } as State),
  actions: {
    async getTasks(filter: string): Promise<void> {
      /**
       * Fetch task from database and add to store
       * @returns {Promise<void>}
       */
      let url = "tasks";
      if (filter) {
        url += "?description=" + filter;
      }
      console.log(url);
      http.get(url).then((response) => this.addTasks(response.data));
    },
    async createTask(task: ITask) {
      /**
       * Creates task
       * @param {string} task
       */
      return http.post("/tasks", task).then(() => this.addTask(task));
    },
    async updateTask(task: ITask) {
      /**
       * Updates a task properties
       * @param {ITask} task
       */
      http.put(`/tasks/${task.id}`, task).then(() => this.editTask(task));
    },
    // Store methods
    addTasks(tasks: ITask[]): void {
      /**
       * Add a list of tasks to store
       * @param {ITask[]} tasks
       * @returns {void}
       * */
      this.tasks = tasks;
    },
    addTask(task: ITask): void {
      /**
       * Add task to store
       * @param {ITask} task
       * @returns {void}
       */
      this.tasks.push(task);
    },
    editTask(task: ITask): void {
      /**
       * Update a task from store
       * @param {ITask} task
       * @returns {void}
       */
      const index = this.tasks.findIndex((tk) => tk.id == task.id);
      this.tasks[index] = task;
    },
  },
});

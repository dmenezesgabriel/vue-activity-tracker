import type IProject from "@/interfaces/IProject";
import { defineStore } from "pinia";

interface State {
  projects: IProject[];
}

export const useProjectStore = defineStore({
  id: "main",
  state: () =>
    ({
      projects: [],
    } as State),
  actions: {
    addProject(projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as IProject;
      this.projects.push(project);
    },
  },
});
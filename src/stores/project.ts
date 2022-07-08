import type IProject from "@/interfaces/IProject";
import { defineStore } from "pinia";
import http from "@/http";
interface State {
  projects: IProject[];
}

export const useProjectStore = defineStore({
  id: "project",
  state: () =>
    ({
      projects: [],
    } as State),
  actions: {
    async getProjects(): Promise<void> {
      /**
       * Fetch project from database and add to store
       * @returns {Promise<void>}
       */
      http.get("projects").then((response) => this.addProjects(response.data));
    },
    async createProject(projectName: string) {
      /**
       * Creates project
       * @param {string} projectName
       */
      return http.post("/projects", { name: projectName });
    },
    async updateProject(project: IProject) {
      /**
       * Updates a project properties
       * @param {IProject} project
       */
      http.put(`/projects/${project.id}`, project);
    },
    async deleteProject(id: string) {
      /**
       * Deletes a project from database
       * @param {string}id
       */
      http.delete(`/projects/${id}`).then(() => this.removeProject(id));
    },
    // Store methods
    addProjects(projects: IProject[]): void {
      /**
       * Add a list of projects to store
       * @param {IProject[]} projects
       * @returns {void}
       * */
      this.projects = projects;
    },
    addProject(projectName: string): void {
      /**
       * Add a project to store.
       * @param {string} projectName
       * @returns {void}
       */
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as IProject;
      this.projects.push(project);
    },
    editProject(project: IProject): void {
      /**
       * Update a project from store
       * @param {IProject} project
       * @returns {void}
       */
      const index = this.projects.findIndex((proj) => proj.id == project.id);
      this.projects[index] = project;
    },
    removeProject(id: string): void {
      /**
       * Remove a project from store
       * @param {string} id
       * @returns {void}
       */
      this.projects = this.projects.filter((proj) => proj.id != id);
    },
  },
});

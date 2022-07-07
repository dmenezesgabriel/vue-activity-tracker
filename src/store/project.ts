import type IProject from "@/interfaces/IProject";
import { defineStore } from "pinia";

interface State {
  projects: IProject[];
}

export const useProjectStore = defineStore({
  id: "main",
  state: () =>
    ({
      projects: [
        { id: new Date().toISOString(), name: "Typescript" },
        { id: new Date().toISOString(), name: "vue" },
        { id: new Date().toISOString(), name: "aa" },
      ],
    } as State),
});

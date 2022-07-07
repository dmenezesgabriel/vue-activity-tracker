<template>
  <section class="projects">
    <h1 class="title">Projects</h1>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">Project Name</label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />
      </div>
      <div class="field">
        <button type="submit" class="button">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type IProject from "../interfaces/IProject";

export default defineComponent({
  name: "Projects",
  data() {
    return {
      projectName: "",
      projects: [] as IProject[],
    };
  },
  methods: {
    save() {
      const project: IProject = {
        name: this.projectName,
        id: new Date().toISOString(),
      };
      this.projects.push(project);
      this.projectName = "";
    },
  },
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>

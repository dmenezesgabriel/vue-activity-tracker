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
    <table class="table is-full-width">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useProjectStore } from "@/stores/project";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Projects",
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    save() {
      this.projectStore.addProject(this.projectName);
      this.projectName = "";
    },
  },
  setup() {
    const projectStore = useProjectStore();
    return {
      projectStore,
      projects: computed(() => projectStore.$state.projects),
    };
  },
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>

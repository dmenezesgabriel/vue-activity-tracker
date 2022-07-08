<template>
  <section>
    <RouterLink to="/projects/add" class="button">
      <span class="is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>New Project</span>
    </RouterLink>
    <table class="table is-full-width">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <RouterLink :to="`/projects/${project.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </RouterLink>
            <button class="button ml-2 is-danger" @click="remove(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
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
  name: "List",
  methods: {
    remove(id: string): void {
      /**
       * Removes a project from List
       * @param {string} id
       * @returns {void}
       */
      this.projectStore.deleteProject(id);
    },
  },
  setup() {
    const projectStore = useProjectStore();
    projectStore.getProjects();
    return {
      projectStore,
      projects: computed(() => projectStore.$state.projects),
    };
  },
});
</script>

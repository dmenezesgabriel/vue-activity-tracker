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
  setup() {
    const projectStore = useProjectStore();
    return {
      projects: computed(() => projectStore.$state.projects),
    };
  },
});
</script>

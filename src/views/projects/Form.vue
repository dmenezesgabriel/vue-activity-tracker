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
import { useProjectStore } from "@/stores/project";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Form",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const project = this.projectStore.$state.projects.find(
        (project) => project.id === this.id
      );
      this.projectName = project?.name || "";
    }
  },
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    save() {
      if (this.id) {
        this.projectStore.updateProject({
          id: this.id,
          name: this.projectName,
        });
      } else {
        this.projectStore.addProject(this.projectName);
      }
      this.projectName = "";
      this.$router.push("/projects");
    },
  },
  setup() {
    const projectStore = useProjectStore();
    return {
      projectStore,
    };
  },
});
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>

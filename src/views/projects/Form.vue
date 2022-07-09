<template>
  <section>
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
import { NotificationType } from "@/interfaces/INotification";
import { useProjectStore } from "@/stores/project";
import { defineComponent, ref } from "vue";
import useNotifier from "@/hooks/notifier";

export default defineComponent({
  name: "Form",
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    save(): void {
      /**
       * Persists a project
       * @returns {void}
       */

      /**
       * This conditional allow us to use the same form template to add or
       * update a project
       */
      if (this.id) {
        this.projectStore
          .updateProject({
            id: this.id,
            name: this.projectName,
          })
          .then(() => {
            this.handleSuccess();
          });
      } else {
        this.projectStore.createProject(this.projectName).then(() => {
          this.handleSuccess();
        });
      }
    },
    handleSuccess() {
      /**
       * Handle action success
       */
      this.projectName = "";
      this.notify(
        NotificationType.SUCCESS,
        "Nice!",
        "Project successfully registered"
      );
      this.$router.push("/projects");
    },
  },
  setup(props) {
    const projectStore = useProjectStore();
    const { notify } = useNotifier();
    const projectName = ref("");

    if (props.id) {
      console.log(projectStore.$state.projects);
      const project = projectStore.$state.projects.find(
        (project) => project.id == props.id
      );
      projectName.value = project?.name || "";
    }

    return {
      projectStore,
      projectName,
      notify,
    };
  },
});
</script>

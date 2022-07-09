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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Form",
  props: {
    id: {
      type: String,
    },
  },
  setup(props) {
    const router = useRouter();
    const { notify } = useNotifier();
    const projectName = ref("");
    const projectStore = useProjectStore();

    if (props.id) {
      const project = projectStore.$state.projects.find(
        (project) => project.id == props.id
      );
      projectName.value = project?.name || "";
    }

    const handleSuccess = (): void => {
      /**
       * Handle action success
       */
      projectName.value = "";
      notify(
        NotificationType.SUCCESS,
        "Nice!",
        "Project successfully registered"
      );
      router.push("/projects");
    };

    const save = (): void => {
      /**
       * Persists a project
       * @returns {void}
       */

      /**
       * This conditional allow us to use the same form template to add or
       * update a project
       */
      if (props.id) {
        projectStore
          .updateProject({
            id: props.id,
            name: projectName.value,
          })
          .then(() => {
            handleSuccess();
          });
      } else {
        projectStore.createProject(projectName.value).then(() => {
          handleSuccess();
        });
      }
    };

    return {
      projectName,
      save,
    };
  },
});
</script>

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
import { defineComponent } from "vue";
import { notificationMixin } from "@/mixins/notify";
export default defineComponent({
  name: "Form",
  props: {
    id: {
      type: String,
    },
  },
  mixins: [notificationMixin],
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
      this.notify(
        NotificationType.SUCCESS,
        "Nice!",
        "Project successfully registered"
      );
      this.$router.push("/projects");
    },
  },
  setup() {
    const projectStore = useProjectStore();

    return {
      projectStore,
    };
  },
  mounted() {
    if (this.id) {
      const project = this.projectStore.$state.projects.find(
        (project) => project.id === this.id
      );
      this.projectName = project?.name || "";
    }
  },
});
</script>

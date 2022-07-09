<template>
  <div class="modal" :class="{ 'is-active': show }" v-if="show">
    <div class="modal-background"></div>
    <div class="modal-card">
      <slot> </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Modal",
  props: { show: { type: Boolean, required: true } },
});
</script>

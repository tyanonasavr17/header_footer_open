<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border']"
    :title="title"
  >
    <component :is="dynamicIcon" />
  </a>
  
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicIcon() {
      return defineAsyncComponent(
        () => import(`../../assets/icons/${this.icon}.svg`)
      );
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/styles/right_part.scss";
</style>

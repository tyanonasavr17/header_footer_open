<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', icon]"
    :title="title"
  />
</template>

<script>
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
};
</script>
<style scoped lang="scss">
@import "src/styles/right_part.scss";
</style>

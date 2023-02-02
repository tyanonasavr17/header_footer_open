<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', 'btn-message']"
    :title="title"
  >
    <div
      v-if="messageNew"
      class="header message-new"
    />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    messageNew: {
      type: Boolean,
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

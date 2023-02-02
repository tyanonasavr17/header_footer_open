<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', 'btn-message']"
    :title="title"
  >
    <div
      v-if="message_new"
      class="header message-new"
    />
  </a>
</template>


<script>
export default {
  props: ['url', 'message_new', 'title']
}
</script>
<style scoped lang="scss">
  @import "src/styles/right_part.scss";
</style>
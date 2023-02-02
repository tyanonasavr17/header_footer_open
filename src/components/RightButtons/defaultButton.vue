<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', icon]"
    :title="title"
  />
</template>


<script>
export default {
  props: ['url', 'icon', 'title']
}
</script>
<style scoped lang="scss">
  @import "src/styles/right_part.scss";
</style>
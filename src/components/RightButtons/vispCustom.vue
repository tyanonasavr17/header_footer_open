<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', icon]"
    :title="title"
  >
    <!-- тут будет код блока для ВИСПа -->
    <div>
      {{ code }}
    </div>
  </a>
</template>


<script>
export default {
  props: ['url', 'icon', 'code', 'title']
}
</script>
<style scoped lang="scss">
  @import "src/styles/right_part.scss";
</style>
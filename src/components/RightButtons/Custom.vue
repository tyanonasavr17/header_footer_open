<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', icon]"
    :title="title"
  >
    <!-- тут будет код блока для ВИСПа -->
    {{ code }}
  </a>
</template>


<script>
export default {
  name: 'CustomButton',
  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped lang="scss">
  @import "/src/styles/right_part.scss";
</style>
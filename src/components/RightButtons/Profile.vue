<script setup>
import Avatar from "/src/assets/ws/avatar.svg";
</script>

<template>
  <a
    :href="url"
    class="avatar-section btn-with-border"
    title="Профиль"
  >
    <Avatar class="avatar" />
    <span>{{ name }}</span>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/styles/right_part.scss";
</style>

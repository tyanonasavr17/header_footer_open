<script setup>
import ExitDoorIcon from "/src/assets/icons/exit-door.svg";
</script>

<template>
  <a
    :href="url"
    class="header-btn btn-with-border"
    :title="title"
    :name="name"
    :data-method="method"
  >
    <ExitDoorIcon />
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
    method: {
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
@import "/src/styles/right_part.scss";
</style>

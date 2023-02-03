<script setup>
import ExitDoorSvg from "/src/assets/icons/exit-door.svg";
</script>

<template>
  <a
    :href="url"
    class="btn-logout btn-with-border header-btn"
    :title="title"
    :name="name"
    :data-method="method"
  >
    <ExitDoorSvg />
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
@import "src/styles/right_part.scss";
.header {
  .btn-logout {
    text-align: center;
    right: 0;
  }
}
</style>

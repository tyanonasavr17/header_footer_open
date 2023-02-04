<script setup>
import Avatar from "/src/assets/icons/avatar.svg";
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
.avatar-section {
  display: inline-flex;
  height: 60px;
  top: 0;
  width: 181px;
  align-items: center;
  text-decoration: none;

  span {
    color: $header-font-color;
    font-size: 12px;
    overflow: hidden;
    padding-left: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 113px;
  }

  .avatar {
    margin-left: 11px;
    margin-top: 6px;
  }
}
</style>

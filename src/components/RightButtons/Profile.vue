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
.header {
  .avatar-section {
    display: inline-block;
    height: 60px;
    position: absolute;
    right: 61px;
    top: 0;
    width: 181px;

    span {
      color: $header-font-color;
      display: inline-block;
      font-size: 12px;
      line-height: 16px;
      max-height: 30px;
      overflow: hidden;
      padding-left: 2px;
      position: absolute;
      text-overflow: ellipsis;
      top: 21px;
      white-space: nowrap;
      width: 113px;
    }

    .avatar {
      margin-bottom: 25px;
      margin-left: 11px;
      margin-top: 6px;
    }
  }
}
</style>

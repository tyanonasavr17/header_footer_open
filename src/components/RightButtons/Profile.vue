<script setup>
import Avatar from "/src/assets/icons/avatar.svg";
</script>

<template>
  <a
    :href="url"
    class="avatar btn-with-border"
    title="Профиль"
  >
    <Avatar />
    <span class="avatar__text">{{ name }}</span>
  </a>
</template>

<script>
export default {
  name: 'ProfileButton',
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
@import "/src/styles/right_part.scss";
.avatar {
  display: inline-flex;
  height: 60px;
  width: 148px;
  padding-left: 18px;
  align-items: center;
  text-decoration: none;

  .avatar__text {
    color: $header-font-color;
    font-size: 12px;
    overflow: hidden;
    padding-left: 6px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 108px;
  }
}
</style>

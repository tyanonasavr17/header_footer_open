<script setup>
import Message from '/src/assets/icons/message.svg';
</script>

<template>
  <a
    :href="url"
    class="header-btn btn-with-border"
    :title="title"
  >
    <Message/>
    <div
      :id="messageIconId"
      :class="['header', 'message-new', 'no-notice-icon']"
    />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    messageIconId:{
      type: String,
      required: true,
    }
  },
};
</script>
<style scoped lang="scss">
@import "src/styles/right_part.scss";
.message-new {
  background-color: rgba(190, 38, 39, 1);
  border-radius: 50%;
  height: 8px;
  width: 8px;
  position: absolute;
  left: 39px;
  top: 15px;
}
.no-notice-icon{
  visibility: hidden;
}
</style>

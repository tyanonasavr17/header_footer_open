<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', 'btn-message']"
    :title="title"
  >
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
.btn-message {
  background: url("/src/assets/icons/message.svg") no-repeat center;
}
.message-new {
  background-color: rgba(190, 38, 39, 1);
  border-radius: 50%;
  height: 8px;
  left: 39px;
  position: relative;
  top: 15px;
  width: 8px;
}
.no-notice-icon{
  visibility: hidden;
}
</style>

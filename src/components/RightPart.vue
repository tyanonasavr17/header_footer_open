<template>
  <div class="right-part">
    <template
      v-for="button in headerButtons"
      :key="button"
    >
      <TagByButton :button="button" />
    </template>
  </div>
</template>

<script>
import defaultButton from "/src/components/RightButtons/defaultButton.vue";
import Message from "/src/components/RightButtons/Message.vue";
import Custom from "/src/components/RightButtons/Custom.vue";
import Profile from "/src/components/RightButtons/Profile.vue";
import Logout from "/src/components/RightButtons/Logout.vue";

import { h } from "vue";

function ComponentByType(type) {
  const Types = {
    message: Message,
    extra_div: Custom,
    profile: Profile,
    logout: Logout,
  };
  var Component = Types[type];
  if (Component == null) {
    return defaultButton;
  } else {
    return Component;
  }
}
const TagByButton = {
  props: ["button"],
  render() {
    return h(
      "div",
      {class: "wrap"},
      h(ComponentByType(this.button.type), {
        url: this.button.url,
        name: this.button.text,
        title: this.button.title,
        method: this.button.method,
        code: this.button.code,
        icon: this.button.icon,
        messageIconId: this.button.messageIconId
      })
    );
  },
};
export default {
  components: {
    TagByButton,
  },
  props: {
    headerButtons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "/src/styles/right_part.scss";
.right-part {
  float: right;
  display: inline-flex;
}
.wrap {
  display: inline-flex;
}
</style>

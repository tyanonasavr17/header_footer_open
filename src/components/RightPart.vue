<template>
  <div class="right-part">
    <div
      v-for="button in headerButtons"
      :key="button"
      class="section"
    >
      <TagByButton :button="button" />
    </div>
  </div>
</template>

<script>
import defaultButton from "/src/components/RightButtons/defaultButton.vue";
import Message from "/src/components/RightButtons/Message.vue";
import vispCustom from "/src/components/RightButtons/vispCustom.vue";
import Profile from "/src/components/RightButtons/Profile.vue";
import Logout from "/src/components/RightButtons/Logout.vue";

import { h } from "vue";

function ComponentByType(type) {
  const Types = {
    message: Message,
    extra_div: vispCustom,
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
      "span",
      h(ComponentByType(this.button.type), {
        url: this.button.url,
        name: this.button.text,
        title: this.button.title,
        "message-new": this.button.message_new,
        method: this.button.method,
        code: this.button.code,
        icon: this.button.icon,
      })
    );
  },
};
export default {
  name: "RightPart",
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
@import "src/styles/right_part.scss";
</style>

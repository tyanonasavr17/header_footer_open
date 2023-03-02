<template>
  <div :class="['right-part', right_part_margin]">
    <template
      v-for="button in headerButtons"
      :key="button"
    >
      <TagByButton :button="button" />
    </template>
  </div>
</template>

<script>
import DefaultButton from "/src/components/RightButtons/DefaultButton.vue";
import Message from "/src/components/RightButtons/Message.vue";
import Custom from "/src/components/RightButtons/Custom.vue";
import Profile from "/src/components/RightButtons/Profile.vue";
import Logout from "/src/components/RightButtons/Logout.vue";
import DropDown from "/src/components/RightButtons/DropDown.vue";

import { h } from "vue";

function ComponentByType(type) {
  const Types = {
    message: Message,
    extra_div: Custom,
    profile: Profile,
    logout: Logout,
    dropdown: DropDown,
  };
  var Component = Types[type];
  if (Component == null) {
    return DefaultButton;
  } else {
    return Component;
  }
}
const TagByButton = {
  props: ["button"],
  render() {
    return h(
      "div",
      { class: "wrap" },
      h(ComponentByType(this.button.type), {
        url: this.button.url,
        name: this.button.text,
        title: this.button.title,
        method: this.button.method,
        code: this.button.code,
        icon: this.button.icon,
        messageIconId: this.button.messageIconId,
        anotherProviderUsers: this.button.anotherProviderUsers,
        links: this.button.links || [],
        customAttrs: this.button.customAttrs
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
  computed: {
    right_part_margin() {
      return this.headerButtons[0]?.type === 'dropdown' ? 'mr48' : '';
    },
  },
};
</script>

<style scoped lang="scss">
@import "/src/styles/right_part.scss";
</style>

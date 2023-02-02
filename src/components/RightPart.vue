<script setup>
import defaultButton from "./RightButtons/defaultButton.vue";
import Message from "./RightButtons/Message.vue";
import vispCustom from "./RightButtons/vispCustom.vue";
import Profile from "./RightButtons/Profile.vue";
import Logout from "./RightButtons/Logout.vue"
</script>

<template>
  <div class="right-part">
    <div
      v-for="button in headerButtons"
      :key="button"
      class="section"
    >
      <span v-if="button.type == 'profile'">
        <Profile
          :url="button.url"
          :name="button.text"
        />
      </span>
      <span v-else-if="button.type == 'logout'">
        <Logout
          :url="button.url"
          :name="button.text"
        />
      </span>
      <span v-else-if="button.type == 'message'">
        <Message
          :url="button.url"
          :message_new="button.message_new"
          :title="button.title"
        />
      </span>
      <span v-else-if="button.type == 'extra_div'">
        <vispCustom
          :url="button.url"
          :message_new="button.message_new"
          :title="button.title"
        />
      </span>
      <span v-else>
        <defaultButton
          :url="button.url"
          :icon="button.icon"
          :title="button.title"
        />
      </span>
    </div>
  </div>
</template>

<script>

function ComponentByType(type) {
  const Types = {
    message: Message,
    'extra_div': vispCustom,
    profile: Profile,
    logout: Logout,
  }
  return Types[type]
}

export default {
  props: {
    headerButtons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/styles/right_part.scss";
</style>
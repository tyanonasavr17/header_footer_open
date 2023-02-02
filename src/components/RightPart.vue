
<script setup>
import Avatar from '../assets/ws/avatar.svg'
import ExitDoor from "../assets/main/exit-door.svg";
function getClassByButton(button) {
  const Types = {
    profile: ["avatar-section", "btn-with-border"],
    button: ["header-btn", button.icon, "btn-with-border"],
    messages: ["header-btn", button.icon, "btn-with-border"],
    logout: ["header-btn", "btn-logout", "btn-with-border"]
  };
  return Types[button.type];
}
</script>
<template>
  <div class="right-part">
    <span>
      <a
        v-for="button in headerButtons"
        :key="button"
        :href="button.url"
        :class="getClassByButton(button)"
        :title="button.title"
        :name="[button.type ==='logout' ? button.name : '']"
        :data-method="button.type ==='logout' ? button.method : ''"
      >
        <template v-if="button.type === 'logout'"><ExitDoor class="svg" /></template>
        <div
          v-if="button.message_new"
          class="message-new"
        />
        <template v-if="button.type === 'profile'">
          <Avatar class="avatar svg" />
          <span>{{ button.text }}</span>
        </template>
        <template v-if="button.type === 'extra_div'"> <!-- тут будет код блока для ВИСПа -->
          <div>
            {{ button.code }}
          </div>
        </template>
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    headerButtons: {
      type: Array,
      required: true
    },
    isWs: Boolean
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/right_part.scss";
</style>
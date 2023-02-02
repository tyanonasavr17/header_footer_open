<script setup>
import Profile from "./RightButtons/Profile.vue";
import Deprecated from "./RightButtons/Deprecated.vue";
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
      <span v-else>
        <Deprecated
          :url="button.url"
          :icon="button.icon"
          :type="button.type"
          :name="button.name"
          :message_new="button.message_new"
          :code="button.code"
          :text="button.text"
          :title="button.title"
          :method="button.method"
        />
      </span>
    </div>
  </div>
</template>

<script>

function ComponentByType(type) {
  const Types = {
    profile: Profile,
  }
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
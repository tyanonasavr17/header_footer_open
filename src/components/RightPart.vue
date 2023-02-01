
<script setup>
import Avatar from '../assets/ws/avatar.svg'
</script>
<template>
  <div class="right-part">
    <span>
      <a
        v-for="button in headerButtons"
        :key="button"
        :href="button.url"
        :class="[button.type === 'profile' ? 'avatar-section' : ['header-btn', button.icon], 'btn-with-border']"
        :title="button.title"
        :name="[button.type ==='logout' ? button.name : '']"
        :data-method="button.type ==='logout' ? button.method : ''"
      >
        <div
          v-if="button.message_new"
          class="header message-new"
        />
        <template v-if="button.type === 'profile'">
          <div><Avatar class="avatar"/></div>
          <span class="span name">{{ button.text }}</span>
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

<style scoped>
.right-part {
  float: right;
  line-height: 0;
}

.name {
  vertical-align: top;
  margin-top: 21px;
}

@font-face {
  font-family: PT Sans;
  src: url('../fonts/PTSans-Regular.ttf');
}

svg {
  width: 100%;
}

.avatar-section {
  display: inline-block;
  height: 60px;
  width: 180px;
  vertical-align: top;
}

.span {
  color: #fafbfc;
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  max-height: 30px;
  overflow: hidden;
  padding-left: 2px;
}

img {
  margin-left: 11px;
  margin-top: 5px;
}

a {
  display: inline-block;
  height: 60px;
  margin-top: 0;
  width: 180px;
}

.header-btn {
  height: 60px;
  width: 60px;
  display: inline-block;
}

.btn-home {
  background: url('../assets/main/home.svg') no-repeat center;
}

.btn-logout {
  /* sadlj */
  background: url('../assets/main/exit-door.svg') no-repeat center;
}

.btn-with-border {
  border-left: 1px solid rgba(245, 245, 245, .5);
}

hgroup {
  padding-top: 13px;
}

.btn-folder {
  background: url('../assets/main/folder.svg') no-repeat center;
}

.btn-message {
  background: url('../assets/main/message.svg') no-repeat center;
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

@media screen and (max-width: 915px) {
  .header .btn-with-border {
    display: none;
  }
}

.btn-user {
  background: url('../assets/ws/user.svg') no-repeat center;
}

.btn-back-arrow {
  background: url('../assets/ws/back-arrow.svg') no-repeat center;
}

.btn-stack {
  background: url('../assets/ws/stack.svg') no-repeat center;
}

.btn-star {
  background: url('../assets/ws/star.svg') no-repeat center;
}

.btn-wrench {
  background: url('../assets/ws/wrench.svg') no-repeat center;
}

.btn-sort {
  background: url('../assets/ws/sort.svg') no-repeat center;
}

.btn-time {
  background: url('../assets/ws/time.svg') no-repeat center;
}

.btn-calendar {
  background: url('../assets/ws/calendar.svg') no-repeat center;
}

.btn-cog {
  background: url('../assets/ws/cog.svg') no-repeat center;
}

@media screen and (max-width: 985px) {
  .header .btn-with-border {
    display: none;
  }
}

@media screen and (max-width: 1215px) {
  .header hgroup {
    display: none;
  }
}

</style>
<template>
    <span>
      <a v-for="button in header_buttons" :key="button" :href="button.url"
         v-bind:class="[button.type === 'profile' ? (is_ws ? 'avatar-section' + '-ws' : 'avatar-section') : ['header-btn', is_ws && (button.icon === 'btn-home' || button.icon === 'btn-logout') ? button.icon + '-ws' : button.icon], 'btn-with-border']"
         :title="button.title" v-bind:name="[button.type ==='logout' ? button.name : '']" :data-method="button.type ==='logout' ? button.method : ''">
        <div v-if="button.message_new" class="header message-new"></div>
        <template v-if="button.type === 'profile'">
          <img src="@/assets/main/avatar.svg"/>
          <span v-bind:class="is_ws ? 'span-ws' : 'span'">{{ button.text }}</span>
        </template>
        <template v-if="button.type === 'extra_div'"> <!-- тут будет код блока для ВИСПа -->
          <div>
            {{button.code}}
          </div>
        </template>
      </a>
    </span>
</template>

<script>
export default {
  props: {
    header_buttons: {
      type: Array
    },
    is_ws: Boolean
  }
}
</script>

<style scoped>
@font-face {
  font-family: PT Sans;
  src: url('@/fonts/PTSans-Regular.ttf');
}

svg {
  width: 100%;
}

.avatar-section {
  display: inline-block;
  height: 60px;
  position: absolute;
  right: 61px;
  top: 0;
  width: 180px;
}

.span {
  color: #fafbfc;
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  max-height: 30px;
  overflow: hidden;
  padding-left: 2px;
  position: absolute;
  text-overflow: ellipsis;
  top: 21px;
  white-space: nowrap;
  width: 111px;
}

img {
  margin-bottom: 25px;
  margin-left: 11px;
  margin-top: 6px;
}

a {
  display: inline-block;
  height: 60px;
  margin-top: 0;
  width: 180px;
}

.header-btn {
  height: 60px;
  overflow: hidden;
  position: absolute;
  text-indent: -9999px;
  top: 0;
  width: 60px;
}

.btn-home {
  background: url('@/assets/main/home.svg') no-repeat center;
  right: 303px;
}

.btn-logout {
  background: url('@/assets/main/exit-door.svg') no-repeat center;
  right: 0;
}

.btn-with-border {
  border-left: 1px solid rgba(245, 245, 245, .5);
}

hgroup {
  margin-left: 252px;
  padding-top: 13px;
}

.btn-folder {
  background: url('@/assets/main/folder.svg') no-repeat center;
  right: 364px;
}

.btn-message {
  background: url('@/assets/main/message.svg') no-repeat center;
  right: 242px;
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
  background: url('@/assets/ws/user.svg') no-repeat center;
  right: 792px;
}

.btn-back-arrow {
  background: url('@/assets/ws/back-arrow.svg') no-repeat center;
  right: 731px;
}

.btn-stack {
  background: url('@/assets/ws/stack.svg') no-repeat center;
  right: 609px;
}

.btn-star {
  background: url('@/assets/ws/star.svg') no-repeat center;
  right: 548px;
}

.btn-wrench {
  background: url('@/assets/ws/wrench.svg') no-repeat center;
  right: 487px;
}

.btn-sort {
  background: url('@/assets/ws/sort.svg') no-repeat center;
  right: 426px;
}

.btn-time {
  background: url('@/assets/ws/time.svg') no-repeat center;
  right: 365px;
}

.btn-calendar {
  background: url('@/assets/ws/calendar.svg') no-repeat center;
  right: 304px;
}

.btn-cog {
  background: url('@/assets/ws/cog.svg') no-repeat center;
  right: 62px;
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

.avatar-section-ws {
  display: inline-block;
  height: 60px;
  position: absolute;
  right: 123px;
  top: 0;
  width: 180px;
}

.span-ws {
  color: #fafbfc;
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  max-height: 30px;
  overflow: hidden;
  padding-left: 2px;
  position: absolute;
  text-overflow: ellipsis;
  top: 21px;
  white-space: nowrap;
  width: 113px;
}

.btn-home-ws {
  background: url('@/assets/ws/home.svg') no-repeat center;
  right: 670px;
}

.btn-logout-ws {
  background: url('@/assets/ws/exit-door.svg') no-repeat center;
  right: 1px;
}

</style>
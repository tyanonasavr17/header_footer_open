<template>
  <div class="right-part">
    <span>
      <TagsByButtonType :header-buttons="headerButtons" />
    </span>
  </div>
</template>
<script>
import Avatar from "../assets/ws/avatar.svg";
import Home from "../assets/main/home.svg";
import Folder from "../assets/main/folder.svg";
import Message from "../assets/main/message.svg";
import ExitDoor from "../assets/main/exit-door.svg";

import { h } from "vue";

function getClassByButtonType(type) {
  const Types = {
    profile: ["avatar-section", "btn-with-border"],
    folder: ["header-btn", "btn-with-border"],
    home: ["header-btn", "btn-with-border"],
    message: ["header-btn", "btn-with-border"],
    logout: ["header-btn", "btn-with-border"]
  };
  return Types[type];
}
function getTagByButtonType(type) {
  const Tags = {
    profile: Avatar,
    folder: Folder,
    home: Home,
    message: Message,
    logout: ExitDoor,
    extra_div: "extra_div",
  };

  return Tags[type];
}

const TagsByButtonType = {
  props: ["headerButtons"],
  render() {
    return this.headerButtons.map((button) => {
      return h(
        "a",
        {
          key: button,
          href: button.url,
          class: ["svg", getClassByButtonType(button.type)],
          title: button.title,
          name: [button.type === "logout" ? button.name : ""],
          "data-method": button.type === "logout" ? button.method : "",
        },
        [
          button.message_new ? h("div", { class: "header message-new" }) : null,
          h("div", [h(getTagByButtonType(button.type), { class: button.type === 'profile' ? "img" : null})]) ,
          button.type === 'profile' ? h("span", { class: "span name" }, [button.text]) : null,
        ]
      );
    });
  },
};

export default {
  name: "RightPart",
  components: {
    TagsByButtonType,
  },
  props: {
    headerButtons: {
      type: Array,
      required: true,
    },
    isWs: Boolean,
  },
};
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
  src: url("../fonts/PTSans-Regular.ttf");
}

.svg {
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
  height: 60px !important;
  width: 60px !important;
  display: inline-block !important;
}

.btn-with-border {
  border-left: 1px solid rgba(245, 245, 245, 0.5);
}

hgroup {
  padding-top: 13px;
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
  background: url("../assets/ws/user.svg") no-repeat center;
}

.btn-back-arrow {
  background: url("../assets/ws/back-arrow.svg") no-repeat center;
}

.btn-stack {
  background: url("../assets/ws/stack.svg") no-repeat center;
}

.btn-star {
  background: url("../assets/ws/star.svg") no-repeat center;
}

.btn-wrench {
  background: url("../assets/ws/wrench.svg") no-repeat center;
}

.btn-sort {
  background: url("../assets/ws/sort.svg") no-repeat center;
}

.btn-time {
  background: url("../assets/ws/time.svg") no-repeat center;
}

.btn-calendar {
  background: url("../assets/ws/calendar.svg") no-repeat center;
}

.btn-cog {
  background: url("../assets/ws/cog.svg") no-repeat center;
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

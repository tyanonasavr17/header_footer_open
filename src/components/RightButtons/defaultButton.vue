<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', icon]"
    :title="title"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/styles/right_part.scss";
.header {
  .btn-home {
    background: url("/src/assets/main/home.svg") no-repeat center;
    right: 303px;
  }

  .btn-folder {
    background: url("/src/assets/main/folder.svg") no-repeat center;
    right: 364px;
  }
  .btn-user {
    background: url("/src/assets/ws/user.svg") no-repeat center;
  }

  .btn-back-arrow {
    background: url("/src/assets/ws/back-arrow.svg") no-repeat center;
  }

  .btn-stack {
    background: url("/src/assets/ws/stack.svg") no-repeat center;
  }

  .btn-star {
    background: url("/src/assets/ws/star.svg") no-repeat center;
  }

  .btn-wrench {
    background: url("/src/assets/ws/wrench.svg") no-repeat center;
  }

  .btn-sort {
    background: url("/src/assets/ws/sort.svg") no-repeat center;
  }

  .btn-time {
    background: url("/src/assets/ws/time.svg") no-repeat center;
  }

  .btn-calendar {
    background: url("/src/assets/ws/calendar.svg") no-repeat center;
  }

  .btn-cog {
    background: url("/src/assets/ws/cog.svg") no-repeat center;
  }
}
</style>

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
.btn-home {
  background: url("/src/assets/icons/home.svg") no-repeat center;
}

.btn-folder {
  background: url("/src/assets/icons/folder.svg") no-repeat center;
}
.btn-user {
  background: url("/src/assets/icons/user.svg") no-repeat center;
}

.btn-back-arrow {
  background: url("/src/assets/icons/back-arrow.svg") no-repeat center;
}

.btn-stack {
  background: url("/src/assets/icons/stack.svg") no-repeat center;
}

.btn-star {
  background: url("/src/assets/icons/star.svg") no-repeat center;
}

.btn-wrench {
  background: url("/src/assets/icons/wrench.svg") no-repeat center;
}

.btn-sort {
  background: url("/src/assets/icons/sort.svg") no-repeat center;
}

.btn-time {
  background: url("/src/assets/icons/time.svg") no-repeat center;
}

.btn-calendar {
  background: url("/src/assets/icons/calendar.svg") no-repeat center;
}

.btn-cog {
  background: url("/src/assets/icons/cog.svg") no-repeat center;
}
</style>

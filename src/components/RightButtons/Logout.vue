<script setup>
  import ExitDoorSvg from "/src/assets/main/exit-door.svg";
</script>

<template>
  <a
    :href="url"
    class="btn-logout btn-with-border header-btn"
    :title="title"
    :name="name"
    :data-method="method"
  >
    <ExitDoorSvg />
  </a>
</template>


<script>
export default {
  props: ['url', 'name', 'method', 'title']
}
</script>
<style scoped lang="scss">
  @import "src/styles/right_part.scss";
</style>
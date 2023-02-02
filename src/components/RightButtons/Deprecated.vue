<script setup>

</script>

<template>
  <a
    :href="url"
    :class="['header-btn', 'btn-with-border', icon]"
    :title="title"
    :name="[type ==='logout' ? name : '']"
    :data-method="type ==='logout' ? method : ''"
  >
    <div
      v-if="message_new"
      class="header message-new"
    />
    <template v-if="type === 'extra_div'"> <!-- тут будет код блока для ВИСПа -->
      <div>
        {{ code }}
      </div>
    </template>
  </a>
</template>


<script>
export default {
  props: ['url', 'icon', 'type', 'name', 'message_new', 'code', 'text', 'method', 'title']
}
</script>
<style scoped lang="scss">
  @import "src/styles/right_part.scss";
</style>
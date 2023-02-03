<script setup>
import Cifropol from '/src/assets/icons/cifropol.svg'
</script>
<template>
  <div class="left-part">
    <span class="eagles-logo" />

    <span class="cifropol-logo pr-1"><Cifropol /></span>
    <span class="pr-1">
      <a
        :href="headerLogo.url"
        class="brand-logo"
        :title="headerLogo.title"
      />
    </span>
    <hgroup>
      <h1>МВД России</h1>
      <h2>{{ headerServiceName }}</h2>
    </hgroup>
  </div>
</template>

<script>

export default {
  props: {
    headerLogo: {
      type: Object,
      required: true
    },
    headerServiceName: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped lang="scss">
@import "/src/styles/left_part.scss";
</style>
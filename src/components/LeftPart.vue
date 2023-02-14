<script setup>
import Cifropol from '/src/assets/icons/cifropol.svg'
</script>
<template>
  <div class="left-part">
    <div class="eagles-logo" />

    <div class="cifropol-logo">
      <Cifropol />
    </div>
    <div>
      <a
        :href="headerLogo.url"
        class="brand-logo"
        :title="headerLogo.title"
      />
    </div>
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
      required: false
    }
  }
}

</script>

<style scoped lang="scss">
@import "/src/styles/left_part.scss";
</style>
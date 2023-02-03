<script setup>
import Cifropol from '/src/assets/icons/cifropol.svg'
</script>
<template>
  <div class="left-part clearfix">
    <span class="eagles-logo" />
    <span class="cifropol-logo"><Cifropol /></span>

    <span>
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
<script setup>
import Cifropol from '../assets/main/cifropol.svg'
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

<style scoped>
.left-part {
  float: left;
}

@font-face {
  font-family: PT Sans;
  src: url('../fonts/PTSans-Regular.ttf');
}

.eagles-logo {
  background: url('../assets/main/eagles.png') no-repeat center;
  display: block;
  height: 60px;
  left: 63.5px;
  position: absolute;
  width: 286px;
}

.cifropol-logo {
  display: block;
  height: 26px;
  left: 48px;
  position: absolute;
  top: 17px;
  width: 122px;
}

.brand-logo {
  background: url('../assets/main/logo.png') no-repeat center;
  display: block;
  height: 38.33px;
  left: 180px;
  position: absolute;
  top: 11px;
  width: 62px;
}

svg {
  width: 100%;
}

h1 {
  color: #fafbfc;
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  margin: 0;
  padding: 0;
}

h2 {
  color: #fafbfc;
  font-size: 11px;
  font-weight: normal;
  line-height: normal;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
}

a {
  display: inline-block;
  height: 60px;
  margin-top: 0;
  width: 180px;
}

hgroup {
  margin-left: 252px;
  padding-top: 13px;
}
</style>
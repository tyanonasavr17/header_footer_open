<template>
  <span class="eagles-logo"></span>
  <span class="cifropol-logo"></span>

  <span>
      <a :href="header_logo.url" class="brand-logo" :title="header_logo.title"></a>
  </span>
  <hgroup>
    <h1>МВД России</h1>
    <h2>{{header_service_name}}</h2>
  </hgroup>
</template>

<script>

export default {
  props: {
    header_logo: {
      type: Object
    },
    header_service_name: {
      type: String
    }
  }
}

</script>

<style scoped>
@font-face {
  font-family: PT Sans;
  src: url('@/fonts/PTSans-Regular.ttf');
}

.eagles-logo {
  background: url('@/assets/main/eagles.png') no-repeat center;
  display: block;
  height: 60px;
  left: 63.5px;
  position: absolute;
  width: 286px;
}

.cifropol-logo {
  background: url('@/assets/main/cifropol.svg') no-repeat center;
  display: block;
  height: 26px;
  left: 48px;
  position: absolute;
  top: 17px;
  width: 122px;
}

.brand-logo {
  background: url('@/assets/main/logo.png') no-repeat center;
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
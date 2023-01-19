<template>
  <HeaderComp/>
  <div class="wrapper">
  </div>
  <FooterComp/>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    HeaderComp,
    FooterComp
  },
  data() {
    return {}
  }
}
</script>

<style>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: auto;
  font-size: 14px;
  line-height: 20px;
}
</style>
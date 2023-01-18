<template>
  <body>
  <HeaderComp/>
  <FooterComp/>
  </body>
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
</style>

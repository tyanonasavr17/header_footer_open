<template>
  <header class="header clearfix">
    <LeftPart 
      :header-logo="example_header_data.logo" 
      :header-service-name="example_header_data.service_name" 
    />
    <div v-if="example_header_data.right_part.some(item => item.title === 'График приёма')">
      <RightPart 
        :header-buttons="example_header_data.right_part" 
        :is-ws="true" 
      />
    </div>
    <div v-else-if="example_header_data.right_part.length > 0">
      <RightPart 
        :header-buttons="example_header_data.right_part" 
        :is-ws="false" 
      />
    </div>
    <div v-else />
  </header>
  <div class="wrapper" />
  <div v-if="example_header_data.has_footer">
    <Footer />
  </div>
</template>

<script>
import RightPart from "./components/RightPart.vue";
import LeftPart from "./components/LeftPart.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    RightPart,
    LeftPart,
    Footer
  },
  data: () => ({
    example_header_data: null
  }),
  created: async function () {
    if (!this.$root.$data) {
      console.error('Осутсвуют данные')
    }
    this.example_header_data = this.$root.$data.fields || '';
  }
}
</script>

<style>
.header {
  background-color: #1d6da8;
  font-family: PT Sans;
  height: 60px;
  margin-bottom: 15px;
  max-width: 100%;
  top: 0;
  z-index: 150;
}

.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

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

br {
  line-height: 20px;
}
</style>

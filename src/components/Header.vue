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
  </header>
</template>

<script>
import RightPart from "./RightPart.vue";
import LeftPart from "./LeftPart.vue";

export default {
  name: 'Header',
  components: {
    RightPart,
    LeftPart
  },
  data: () => ({
    example_header_data: null
  }),
  created: async function () {
    if (!this.$root.$data) {
      console.error('Отсутствуют данные')
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

body {
  margin: auto;
  font-size: 14px;
  line-height: 20px;
}

br {
  line-height: 20px;
}
</style>

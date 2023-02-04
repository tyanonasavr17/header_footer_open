<template>
  <header class="header">
    <LeftPart 
      :header-logo="example_header_data.logo" 
      :header-service-name="example_header_data.service_name" 
    />
    <template v-if="example_header_data.right_part?.length > 0">
      <RightPart :header-buttons="example_header_data.right_part" />
    </template>
  </header>
</template>

<script>
import RightPart from "/src/components/RightPart.vue";
import LeftPart from "/src/components/LeftPart.vue";

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

<style scoped lang="scss">
@import "/src/styles/header.scss";
</style>

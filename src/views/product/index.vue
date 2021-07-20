<template>
  <Production />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Production from './components/Production.vue';

  export default defineComponent({
    name: 'Product',
    components: {
      Production,
    },
    setup() {
      return {};
    },
  });
</script>
<style lang="less"></style>

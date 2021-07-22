<template>
  <Production />
</template>
<script lang="ts">
  import { defineComponent, unref } from 'vue';
  import Production from './components/Production.vue';
  import { useRouter } from 'vue-router';
  export default defineComponent({
    name: 'Product',
    components: {
      Production,
    },
    setup() {
      const { currentRoute } = useRouter();
      const { params } = unref(currentRoute);
      console.log(params);
      return {};
    },
  });
</script>
<style lang="less"></style>

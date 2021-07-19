<template>
  <PageWrapper>
    <template #headerContent> <Banner /> </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import Banner from './components/Banner.vue';

  export default defineComponent({
    components: {
      PageWrapper,
      Banner,
    },
    setup() {
      const loading = ref(true);

      setTimeout(() => {
        loading.value = false;
      }, 1500);

      return {
        loading,
      };
    },
  });
</script>
<style lang="less">
  .ant-page-header {
    padding: 0;
  }
</style>

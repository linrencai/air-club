<template>
  <PageWrapper>
    <Production />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import Production from './components/Production.vue';

  export default defineComponent({
    name: 'Product',
    components: {
      PageWrapper,
      Production,
    },
    setup() {
      const loading = ref(true);
      const { t } = useI18n();

      setTimeout(() => {
        loading.value = false;
      }, 1500);

      return {
        loading,
        t,
      };
    },
  });
</script>
<style lang="less">
  .ant-page-header {
    padding: 0;
  }

  .airClub-page-wrapper .airClub-page-wrapper-content {
    margin: 0;
    background-color: #fff;
    padding-bottom: 24px;
  }
</style>

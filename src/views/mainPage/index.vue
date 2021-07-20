<template>
  <PageWrapper>
    <template #headerContent>
      <div class="pb-4 font-bold text-center">airClub</div>
      <Banner />
    </template>
    <div class="lrc-title-size">
      {{ t('routes.dashboard.mainpage.newarrival') }}
    </div>
    <Production />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import Banner from './components/Banner.vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import Production from './components/Production.vue';

  export default defineComponent({
    name: 'MainPage',
    components: {
      PageWrapper,
      Banner,
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

  .lrc-title-size {
    font-size: 16px;
    text-align: center;
    padding: 24px 0;
  }

  @media (max-width: 768px) {
    .lrc-title-size {
      font-size: 16px;
      padding: 12px 0;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .lrc-title-size {
      font-size: 16px;
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .lrc-title-size {
      font-size: 20px;
    }
  }
  @media (min-width: 1200px) {
    .lrc-title-size {
      font-size: 24px;
    }
  }
</style>

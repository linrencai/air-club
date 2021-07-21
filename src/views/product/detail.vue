<template>
  <PageWrapper>
    <div class="flex w-full py-2 bg-white">
      <div class="inline-block w-1/2">
        <DetailBanner />
      </div>
      <div class="inline-block w-1/2">
        <div>
          <p>Nike Air Jordan 1 Retro High OG GS</p>
          <p>Basketball Shoes/Sneakers</p>
          <p>Electro Orange</p>
          <p>575441-180</p>
          <p>In Stock</p>
          <p>$140</p>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import DetailBanner from './components/DetailBanner.vue';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    name: 'ProductDetail',
    components: {
      PageWrapper,
      DetailBanner,
    },
    setup() {
      const loading = ref(true);
      const { t } = useI18n();
      const data = ref({});
      const { currentRoute } = useRouter();
      const { params } = unref(currentRoute);
      data.value = params;
      console.log(data.value);
      setTimeout(() => {
        loading.value = false;
      }, 1500);

      return {
        loading,
        data,
        t,
      };
    },
  });
</script>
<style lang="less">
  // .ant-page-header {
  //   padding: 0;
  // }

  // .airClub-page-wrapper .airClub-page-wrapper-content {
  //   margin: 0;
  //   background-color: #fff;
  //   padding-bottom: 24px;
  // }
</style>

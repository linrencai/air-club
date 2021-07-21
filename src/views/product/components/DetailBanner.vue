<template>
  <PageWrapper>
    <Carousel arrows dots-class="slick-dots slick-thumb">
      <template #customPaging="props">
        <a>
          <img :src="getImgUrl(props.i)" />
        </a>
      </template>
      <div v-for="item in 4" :key="item">
        <img :src="baseUrl + 'abstract0' + item + '.jpg'" />
      </div>
    </Carousel>
  </PageWrapper>
</template>
<script lang="ts">
  const baseUrl =
    'https://raw.githubusercontent.com/vueComponent/ant-design-vue/next/components/vc-slick/assets/img/react-slick/';
  import { Carousel } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'DetailBanner',
    components: { Carousel, PageWrapper },
    setup() {
      const getImgUrl = (i: number) => {
        return `${baseUrl}abstract0${i + 1}.jpg`;
      };
      return { baseUrl, getImgUrl };
    },
  });
</script>
<style lang="less" scoped>
  :deep(.ant-carousel .slick-dots) {
    position: relative;
    height: auto;
  }

  :deep(.ant-carousel .slick-slide img) {
    border: 5px solid #fff;
    display: block;
    margin: auto;
    max-width: 80%;
  }

  :deep(.ant-carousel .slick-arrow) {
    display: none !important;
  }

  :deep(.ant-carousel .slick-thumb) {
    bottom: 0;
  }

  :deep(.ant-carousel .slick-thumb li) {
    width: 60px;
    height: 45px;
  }

  :deep(.ant-carousel .slick-thumb li img) {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }

  :deep(.ant-carousel .slick-thumb li.slick-active img) {
    filter: grayscale(0%);
  }
</style>

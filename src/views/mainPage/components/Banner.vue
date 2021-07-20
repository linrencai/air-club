<template>
  <Carousel arrows autoplay>
    <div v-for="item in list" :key="item" class="cursor-pointer swiper-item">
      <img :src="item.src" :alt="item.name" class="object-fill object-center" />
    </div>
  </Carousel>
</template>
<script lang="ts">
  interface listItem {
    src: string;
    name: string;
    index: number;
  }

  import { Carousel } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import banner1 from '/@/assets/images/banner1.jpg';
  import banner2 from '/@/assets/images/banner2.jpg';
  import banner3 from '/@/assets/images/banner3.jpg';
  import banner4 from '/@/assets/images/banner4.jpg';
  import banner5 from '/@/assets/images/banner5.jpg';
  const list: listItem[] = [
    {
      src: banner1,
      name: 'banner1',
      index: 1,
    },
    {
      src: banner2,
      name: 'banner2',
      index: 2,
    },
    {
      src: banner3,
      name: 'banner3',
      index: 3,
    },
    {
      src: banner4,
      name: 'banner4',
      index: 4,
    },
    {
      src: banner5,
      name: 'banner5',
      index: 5,
    },
  ];
  export default defineComponent({
    name: 'Banner',
    components: { Carousel },
    setup() {
      return { list };
    },
  });
</script>
<style lang="less" scoped>
  .ant-carousel {
    .swiper-item {
      height: 800px;

      img {
        // object-fit: fill;
        // object-position: center;
        height: 100%;
        width: 100%;
      }
    }

    :deep(.slick-slide) {
      text-align: center;
      height: 800px;
      background: #fff;
      overflow: hidden;
    }

    :deep(.slick-slide h3) {
      color: #fff;
    }
  }
  @media (max-width: 768px) {
    .ant-carousel {
      .swiper-item {
        height: 300px;
      }

      :deep(.slick-slide) {
        height: 230px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .ant-carousel {
      .swiper-item {
        height: 400px;
      }

      :deep(.slick-slide) {
        height: 400px;
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .ant-carousel {
      .swiper-item {
        height: 600px;
      }

      :deep(.slick-slide) {
        height: 600px;
      }
    }
  }
  @media (min-width: 1200px) {
    .ant-carousel {
      .swiper-item {
        height: 600px;
      }

      :deep(.slick-slide) {
        height: 600px;
      }
    }
  }
</style>

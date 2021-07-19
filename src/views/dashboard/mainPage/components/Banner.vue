<template>
  <Carousel arrows autoplay>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div v-for="item in list" :key="item">
      <img :src="item.src" :alt="item.name" />
    </div>
  </Carousel>
</template>
<script lang="ts">
  interface listItem {
    src: string;
    name: string;
    index: number;
  }

  import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
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
    components: { LeftCircleOutlined, RightCircleOutlined, Carousel },
    setup() {
      return { list };
    },
  });
</script>
<style lang="less" scoped>
  .ant-carousel {
    :deep(.slick-slide) {
      text-align: center;
      // height: 800px;
      // line-height: 160px;
      // max-height: 800px;
      background: #fff;
      overflow: hidden;
    }

    :deep(.slick-arrow.custom-slick-arrow) {
      width: 25px;
      height: 25px;
      font-size: 25px;
      color: #fff;
      background-color: rgba(31, 45, 61, 0.11);
      opacity: 0.3;
    }

    :deep(.custom-slick-arrow) {
      &::before {
        display: none;
      }

      &:hover {
        opacity: 0.5;
      }
    }

    :deep(.slick-slide h3) {
      color: #fff;
    }
  }
</style>

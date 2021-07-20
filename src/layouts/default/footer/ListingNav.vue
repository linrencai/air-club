<template>
  <PageWrapper :class="prefixCls">
    <div :class="`${prefixCls}__content`">
      <a-list :grid="grid" :data-source="list">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-card :hoverable="true" :class="`${prefixCls}__card`">
              <div :class="`${prefixCls}__card-img`">
                <img :src="item.src" />
              </div>
              <div :class="`${prefixCls}__card-detail`">
                <p class="font-bold lrc-text-balck">{{ item.linkName }}</p>
              </div>
            </a-card>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, List } from 'ant-design-vue';
  import airjordan from '/@/assets/images/link_bg/airjordan.jpg';
  import nike from '/@/assets/images/link_bg/nike.jpg';
  import yeezy from '/@/assets/images/link_bg/yeezy.jpg';
  import { useI18n } from '/@/hooks/web/useI18n';
  interface listItem {
    src: string;
    linkName: string;
  }
  const list: listItem[] = [
    {
      src: airjordan,
      linkName: 'AIR JORDAN',
    },
    {
      src: nike,
      linkName: 'NIKE',
    },
    {
      src: yeezy,
      linkName: 'YEEZY',
    },
  ];
  export default defineComponent({
    components: {
      PageWrapper,
      [Card.name]: Card,
      [List.name]: List,
      [List.Item.name]: List.Item,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const { t } = useI18n();
      const listData: any = ref(list);
      const grid: any = { gutter: 24, xs: 1, sm: 1, md: 3, lg: 3, xl: 3, xxl: 3 };

      return {
        prefixCls: 'list-card',
        list: reactive(listData),
        t,
        grid,
      };
    },
  });
</script>
<style lang="less" scoped>
  :deep(.ant-spin-container) {
    padding: 0 24px;
  }

  .list-card {
    &__card {
      width: 100%;
      margin-bottom: -8px;
      border: none !important;

      :deep(.ant-card-body) {
        padding: 16px;
      }

      &-img {
        // width: 320px;
        // height: 200px;
        margin: 0 auto;
        font-size: 16px;
        font-weight: 500;
        color: @text-color;
        overflow: hidden;

        img {
          // width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      &-detail {
        padding-top: 10px;
        font-size: 14px;
        text-align: center;
        color: @text-color-secondary;

        p {
          margin-bottom: 0;
          line-height: 1;
        }

        .lrc-text-balck {
          color: #000;
        }
      }
    }
  }
</style>

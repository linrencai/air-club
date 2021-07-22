import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/index',
  meta: {
    // hideChildrenInMenu: true,
    title: t('routes.dashboard.product'),
    orderNo: 20,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'ALL',
      name: 'ALL',
      component: () => import('/@/views/product/index.vue'),
      meta: {
        title: t('routes.product.ALL'),
        ignoreAuth: true,
      },
      redirect: '',
    },
    {
      path: 'AIRJORDAN',
      name: 'AIRJORDAN',
      component: () => import('/@/views/product/index.vue'),
      props: {
        brand: 'AIRJORDAN',
      },
      meta: {
        title: t('routes.product.AIRJORDAN'),
        currentActiveMenu: '/product/AIRJORDAN',
        ignoreAuth: true,
      },
      redirect: '',
    },
    {
      path: 'NIKE',
      name: 'NIKE',
      component: () => import('/@/views/product/index.vue'),
      props: {
        brand: 'NIKE',
      },
      meta: {
        title: t('routes.product.NIKE'),
        currentActiveMenu: '/product/NIKE',
        ignoreAuth: true,
      },
      redirect: '',
    },
    {
      path: 'YEEZY',
      name: 'YEEZY',
      component: () => import('/@/views/product/index.vue'),
      props: {
        brand: 'YEEZY',
      },
      meta: {
        title: t('routes.product.YEEZY'),
        currentActiveMenu: '/product/YEEZY',
        ignoreAuth: true,
      },
      redirect: '',
    },
    {
      path: 'detail/:id',
      name: 'ProductDetail',
      component: () => import('/@/views/product/detail.vue'),
      meta: {
        title: t('routes.dashboard.product'),
        ignoreAuth: true,
        currentActiveMenu: '/product/index',
        hideMenu: true,
      },
    },
  ],
};

export default about;

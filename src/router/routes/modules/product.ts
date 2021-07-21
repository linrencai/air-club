import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/index',
  meta: {
    hideChildrenInMenu: true,
    title: t('routes.dashboard.product'),
    orderNo: 20,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'Product',
      component: () => import('/@/views/product/index.vue'),
      meta: {
        title: t('routes.dashboard.product'),
        ignoreAuth: true,
      },
    },
    {
      path: 'detail/:id',
      name: 'ProductDetail',
      component: () => import('/@/views/product/detail.vue'),
      meta: {
        title: t('routes.dashboard.product'),
        ignoreAuth: true,
        currentActiveMenu: '/product/index',
        showMenu: false,
        hideMenu: true,
      },
    },
  ],
};

export default about;

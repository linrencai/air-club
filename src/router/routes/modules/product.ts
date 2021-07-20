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
    // icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.product'),
    orderNo: 20,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'ProductPage',
      component: () => import('/@/views/product/index.vue'),
      meta: {
        title: t('routes.dashboard.product'),
        // icon: 'simple-icons:about-dot-me',
        ignoreAuth: true,
      },
    },
  ],
};

export default about;

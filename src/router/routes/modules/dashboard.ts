import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/mainPage',
  name: 'MainPage',
  component: LAYOUT,
  redirect: '/mainPage/index',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 10,
    title: t('routes.dashboard.mainPage'),
    ignoreAuth: true,
  },
  children: [
    // {
    //   path: 'analysis',
    //   name: 'Analysis',
    //   component: () => import('/@/views/dashboard/analysis/index.vue'),
    //   meta: {
    //     affix: true,
    //     title: t('routes.dashboard.analysis'),
    //     ignoreAuth: true,
    //   },
    // },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('/@/views/dashboard/workbench/index.vue'),
    //   meta: {
    //     title: t('routes.dashboard.workbench'),
    //     ignoreAuth: true,
    //   },
    // },
    {
      path: 'index',
      name: 'MainPage',
      component: () => import('/@/views/mainPage/index.vue'),
      meta: {
        title: t('routes.dashboard.mainPage'),
        ignoreAuth: true,
      },
    },
  ],
};

export default dashboard;

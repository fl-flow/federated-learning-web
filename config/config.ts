import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/dag-basic',
    },
    {
      name: 'dag-basic',
      path: '/dag-basic',
      icon: 'SmileOutlined',
      component: '@/pages/dag/basic',
    },
    {
      name: 'dag-dynamic-ports',
      path: '/dag-dynamic-ports',
      icon: 'SmileOutlined',
      component: '@/pages/dag/dynamic-ports',
    },
    {
      name: 'home',
      path: '/home',
      icon: 'SmileOutlined',
      component: '@/pages/home',
    },
  ],
  // mfsu: {},
  fastRefresh: {},
});

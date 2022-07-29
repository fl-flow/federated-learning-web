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
      name: 'dag-layout',
      path: '/dag-layout',
      icon: 'SmileOutlined',
      component: '@/pages/dag/layout',
    },
    {
      name: 'dag-dynamic-ports',
      path: '/dag-dynamic-ports',
      icon: 'SmileOutlined',
      component: '@/pages/dag/dynamic-ports',
    },
    {
      name: 'dag-port-config',
      path: '/dag-port-config',
      icon: 'SmileOutlined',
      component: '@/pages/dag/port-config',
    },
  ],
  // mfsu: {},
  fastRefresh: {},
});

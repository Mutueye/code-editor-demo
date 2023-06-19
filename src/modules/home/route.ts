import { RouteRecordData } from '@/router/types';
import MonacoEditorDemo from './views/MonacoEditorDemo.vue';
import CodeMirrorDemo from './views/CodeMirrorDemo.vue';

const routeData: RouteRecordData = {
  admin: [
    {
      path: '/monaco',
      name: 'monaco',
      component: MonacoEditorDemo,
      meta: {
        title: 'MonacoEditor',
        menuConfig: {
          order: 0,
        },
      },
    },
    {
      path: '/codemirror',
      name: 'codemirror',
      component: CodeMirrorDemo,
      meta: {
        title: 'CodeMirror',
        menuConfig: {
          order: 1,
        },
      },
    },
  ],
};

export default routeData;

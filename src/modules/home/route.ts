import { RouteRecordData } from '@/router/types';

const MonacoEditorDemo = () => import('./views/MonacoEditorDemo.vue');
const CodeMirrorDemo = () => import('./views/CodeMirrorDemo.vue');

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

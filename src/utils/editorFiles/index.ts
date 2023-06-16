import htmlCode from './htmlCode';
import cssCode from './cssCode';
import jsCode from './jsCode';

export type CodeFileData = {
  language: string;
  source: string;
};

export const fileList: CodeFileData[] = [
  {
    language: 'javascript',
    source: jsCode,
  },
  {
    language: 'css',
    source: cssCode,
  },
  {
    language: 'html',
    source: htmlCode,
  },
];

export default {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: jsCode,
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: cssCode,
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: htmlCode,
  },
};

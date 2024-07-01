import '@goodlark/ez-element/dist/index.css';
import '@vitepress-demo-preview/component/dist/style.css';
import './custom.css';
import DefaultTheme from 'vitepress/theme';
import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import EzElement from '@goodlark/ez-element';
import type { Theme } from 'vitepress';

export const define = <T>(value: T): T => value;

export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('demo-preview', ElementPlusContainer);
    app.use(EzElement);
  },
});

// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ElementPlusContainer } from '@vitepress-demo-preview/component';

import '@vitepress-demo-preview/component/dist/style.css';
import '@/styles/index.css';
import './custom.css';
import type { Theme } from 'vitepress';

export const define = <T>(value: T): T => value;

library.add(fas);

export default define<Theme>({
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.component('demo-preview', ElementPlusContainer);
  },
});

// export default DefaultTheme;

import type { App } from 'vue';
import Icon from './Icon.vue';

Icon.install = (app: App) => {
  app.component(Icon.name as string, Icon);
};

export default Icon;
export type * from './types.d.ts';

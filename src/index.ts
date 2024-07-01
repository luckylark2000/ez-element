import type { App, Plugin } from 'vue';
import Button from '@/components/Button';
import Collapse, { CollapseItem } from '@/components/Collapse';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './styles/index.css';

library.add(fas);

const components = [Button, Collapse, CollapseItem];

const installComponents: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name as string, component);
    });
  },
};

export { Button, Collapse, CollapseItem };

export default installComponents;

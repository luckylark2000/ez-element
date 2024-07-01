import type { App, Plugin } from 'vue';
import Button from '@/components/Button';
import Collapse, { CollapseItem } from '@/components/Collapse';
import Icon from './components/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './styles/index.css';

library.add(fas);

const components = [Button, Collapse, CollapseItem, Icon];

const installComponents: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name as string, component);
    });
  },
};

export { Button, Collapse, CollapseItem, Icon };

export default installComponents;

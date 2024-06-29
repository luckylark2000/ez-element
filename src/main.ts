import './styles/index.css';
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import installComponents from './index';

library.add(fas);

const app = createApp(App);
app.use(installComponents);
app.mount('#app');

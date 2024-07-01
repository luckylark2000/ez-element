# 安装和快速起步

## 安装

```bash
pnpm i @goodlark/ez-element --save
```

## 快速起步

### 注册组件

main.ts 全局注册全部组件

```ts
import '@goodlark/ez-element/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import EzElement from '@goodlark/ez-element';

const app = createApp(App);
app.use(EzElement);
app.mount('#app');
```

main.ts 全局注册单个组件

```ts
import '@goodlark/ez-element/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import EzButton from '@goodlark/ez-element';

const app = createApp(App);
app.use(EzButton);
app.mount('#app');
```

### SFC中使用组件

组件一旦全局注册，直接在SFC中使用即可，详情请见各个组件的文档。

基础示例：

```html
<ez-button>Test Button</ez-button>
<ez-button plain>Test Button</ez-button>
<ez-button type="danger" loading>Test Button</ez-button>
```

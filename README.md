# 使用 Vue3.4 TS5 的前端组件库

EzElement 是一款自己学习使用的Vue3前端组件库，让搭建组件库不再神秘。

[文档地址]()

## 安装

```bash
pnpm i @goodlark/ez-element --save
```

## 注册组件

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

## 使用组件

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

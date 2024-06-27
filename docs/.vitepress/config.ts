import { defineConfig } from 'vitepress';
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin';
import { fileURLToPath, URL } from 'node:url';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ez Element',
  description: 'A Vue3 UI components library',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/introduce' },
      { text: '组件', link: '/components/button' },
    ],
    search: {
      provider: 'local',
    },
    outline: {
      label: '页面导航',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebar: [
      {
        text: '简介',
        items: [{ text: '什么是 Ez Element', link: '/introduce' }],
      },
      {
        text: 'Basic',
        items: [{ text: 'Button', link: '/components/button' }],
      },
      {
        text: 'Data 数据展示',
        items: [{ text: 'Collapse 折叠面板', link: '/components/collapse' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/luckylark2000/ez-element' }],
  },
});

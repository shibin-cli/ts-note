import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/ts-note',
  lang: 'zh-CN',
  title: 'TS学习整理',
  description: 'TS的学习笔记、资料和应用整理',
  dest: 'dist',
  themeConfig: {
    logo: 'https://www.tslang.cn/assets/images/icons/apple-touch-icon-180x180.png',
  },
})
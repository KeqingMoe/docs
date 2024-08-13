// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'
// import NotFound from './not-found.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 'not-found':()=>h(NotFound)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

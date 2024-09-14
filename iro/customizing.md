# 自定义

上一节中的配置可能并不能完全满足您的需求，可能的原因包括但不限于：

- 目前本项目尚未到达可以正式发布的程度，因而很多功能并不齐全。
- 您有自己的想法。

因此 Sakurairo 提供了一些高级的自定义手段。

## 使用插槽 {#use-slots}

建议您使用渲染函数在插槽中注入内容（组件），或者也可以参考 [VitePress 文档](https://vitepress.dev/zh/guide/extending-default-theme#layout-slots) 中的做法。

例如，要在页脚处插入一个显示 RSS 订阅链接的小组件，您可以修改 `.vitepress/theme/index.ts` ，填充插槽 `iro-footer` ：

```ts
import IroLayout from './Iro.vue';
import RssLink from './RssLink.vue';

export default {
    extends: DefaultTheme,
    Layout: IroLayout,                          // [!code --]
    Layout(){                                   // [!code ++]
        return h(IroLayout, null, {             // [!code ++]
            'iro-footer': () => h(RssLink)      // [!code ++] // [!code focus]
        })                                      // [!code ++]
    },                                          // [!code ++]
    enhanceApp({ app, router, siteData }) {
        app.component('fa-i', FontAwesomeIcon);
        vitepressNprogress({ app, router, siteData });
    }
} satisfies Theme;
```

您可以使用下面这些插槽：
- 使用 `iro-home-page` 以自定义首页的封面之后的部分
- 使用 `iro-signature` 以自定义签名组件
- 使用 `iro-not-found` 以自定义 404 页面
- 使用 `iro-page` 以自定义 **自定义页面**（与 VitePress 默认主题的 `layout` 为 `page` 的页面行为类似）。 
- 使用 `iro-home` 以自定义首页
- 使用 `iro-post` 以自定义文章页面
- 使用 `iro-other` 以自定义其他页面
- 使用 `iro-footer` 以在页脚添加自定义组件

如果不确定这些组件的呈现效果，您可以自己尝试随便放一个进去。以上的插槽都被转发到 `Iro.vue` ，可以在其中找到。

## 重写组件

可以使用 Vite 的 [aliases](https://cn.vitejs.dev/config/shared-options#resolve-alias) 来用自定义组件替换 Sakurairo 的组件（位于 `.vitepress/config.mts` ）。例如，如果您要替换 Sakurairo 的首页封面，可以编辑 `.vitepress/config.mts` :

```ts
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress';

export default defineConfigWithTheme({
    // ...
    vite: {                                                                 // [!code ++]
        resolve: {                                                          // [!code ++]
            alias: [                                                        // [!code ++]
                {                                                           // [!code ++]
                    find: /^.*\/Cover\.vue$/,                               // [!code ++] // [!code focus]
                    replacement: fileURLToPath(                             // [!code ++]
                        new URL('./你/自己/的/组件.vue', import.meta.url)    // [!code ++]
                    )                                                       // [!code ++]
                }                                                           // [!code ++]
            ]                                                               // [!code ++]
        }                                                                   // [!code ++]
    }                                                                       // [!code ++]
    // ...
});
```

其中，第九行的正则表达式是为了匹配 `Cover.vue` 组件，这正是首页的封面对应的组件。

为了得知您究竟需要重写哪个组件，您可以直接查看 [源代码中的组件](https://github.com/KeqingMoe/sakurairo/tree/main/.vitepress/theme/components)。不过，与 VitePress 默认主题不同的是，Sakurairo 的内部组件名可能会变动，请您适应这种变动。



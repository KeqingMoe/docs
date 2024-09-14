# 快速开始

您可以直接复制这个存储库，或者在 Github 上从模板（Sakurairo）创建仓库，然后再开始使用。

## 写文章

您可以直接在项目根目录下撰写文章。当然我更建议您用目录试着分类，例如用 `post/` 目录把所有文章分成一类，这也方便您后续拓展更多功能时不与以前撰写的文章起冲突。

目前，暂时还没有做首页文档展示相关的部分，后续会实现。

您可以使用基本或拓展的 Markdown 功能，或 [VitePress 内置的 Markdown 拓展功能](https://vitepress.dev/zh/guide/markdown)。由于 VitePress 使用 markdown-it 作为 Markdown 渲染器，所以您可以自己安装 markdown-it 拓展，并且 Sakurairo 主题也自带（默认启用）一些 markdown-it 拓展：

- `markdown-it-mathjax3` - 在 Markdown 中使用 LaTeX，例如 $e^{i\pi}+1=0$
- `@mdit/plugin-ruby` ：在 Markdown 中使用 {注音符号:振り仮名}


## 运行或预览

通过以下的步骤，您可以在本地以开发模式运行或编译并预览。

### 安装依赖

首先，您应该先安装依赖：

```shell
npm install
```

目前，Sakurairo 使用的依赖包括：

```json
/** package.json */
{
    // ...
    "devDependencies": {
        "@mdit/plugin-ruby": "^0.13.0",         // 用于显示注音符号（振假名）
        "@types/node": "^22.4.2",
        "markdown-it-mathjax3": "^4.3.2",
        "sass": "^1.77.8",                      // SASS 和 SCSS 支持
        "url-polyfill": "^1.1.12",
        "vitepress": "^1.3.3",
        "vitepress-plugin-nprogress": "^0.0.4", // 上方加载进度条
        "vue": "^3.4.38"
    },
    "dependencies": {
        "@fortawesome/fontawesome-svg-core": "^6.6.0",  // 这一系列都用于提供 Font Awesome Icon 支持
        "@fortawesome/free-brands-svg-icons": "^6.6.0",
        "@fortawesome/free-regular-svg-icons": "^6.6.0",
        "@fortawesome/free-solid-svg-icons": "^6.6.0",
        "@fortawesome/vue-fontawesome": "^3.0.8"
    }
    // ...
}
```

### 运行

您可以选择以开发模式运行，或是编译后以预览模式运行。

::: tip 小提示
我已经在 `packages.json` 中进行配置，使得无论以何种模式运行，都可以响应来自其他计算机的请求。
:::

#### 以开发模式运行

在开发模式下，您可以方便地修改主题内容和文章等，网页会热更新，而无需重新编译。

以开发模式运行：

```shell
npm run dev
```

然后，打开 http://localhost:5173/ 。

#### 编译运行 {#compile-run}

编译运行则将会失去更改热更新功能，但是渲染速度更快，开销更小，对 SEO 更友好，而且提供了对最终构建产品的真实体验。

建议您应该始终在提交代码或最终部署前先尝试一次编译。

编译：

```shell
npm run build
```

预览：

```shell
npm run preview
```

然后，打开 http://localhost:4173/ 。


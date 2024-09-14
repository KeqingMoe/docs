# 部署

主题展示站点：[iro.keqing.moe](https://iro.keqing.moe/) 和 [iro.pages.dev](https://iro.pages.dev)。

## 在本地部署

您可以参考 [快速开始](quickstart#compile-run) 章节的做法，在本地部署。这适用于您在本地测试编译是否成功或者将其部署到您自己的服务器上（而非静态站点托管平台）。

## 部署在静态站点托管平台

您可以像部署其他 VitePress 项目一样，将 Sakurairo 部署在您的静态站点托管平台。

### Cloudflare Pages

将您的站点部署到  Cloudflare Pages 的流程如下：

1. 打开 Cloudflare 控制台。
2. 点击左侧的“Workers 和 Pages”。
3. 点击“创建”，点击“Pages”。
4. 上传站点源代码并部署。
  - 如果您的站点的源码保存在本地，则您可以先进行编译，然后将编译产物打包上传。
  - 如果您的站点的源码托管在 Github 或 Gitlab，
    1. 点击“连接到 Git”
    2. 选择对应的平台，并登录，让 Cloudflare 拉取这些平台上的代码库
    3. 在“设置构建和部署”处，填写项目名称，设置“预设框架”为“VitePress”
    4. 保存并部署
5. 有条件的情况下可以配置自定义域名。

### 其他平台

因为我使用的是 Cloudflare Pages，所以其他平台的部署流程我并不了解，请参考 [VitePress 指南：部署 VitePress 站点](https://vitepress.dev/zh/guide/deploy)。

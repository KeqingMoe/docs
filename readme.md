# KeiqingMoe Docs: 一个开放的文档站点

用于发布一些文档，以及实现我的翻译计划。

## 序言

在这个信息爆炸的时代，技术文档不仅是知识的载体，更是开源精神的体现。

文档对项目的影响是深远的：一份优秀的文档可以使一个项目更易于使用，从而吸引更多的用户和贡献者；一份糟糕的文档可以让一个项目令人望而生畏，从而渐渐被淘汰。

然而，撰写一份优秀的文档仍未成为全球开发者的共识，我们仍然可以看见许多乱象：

- 文档缺少更新与维护，已经跟不上库本身。
- 文档缺少关键细节，用户不得不自己摸索。
- 文档质量粗制滥造、夹带私货、政治导向、机器翻译。
- 完全没有或几乎没有提供入门指南，或不提供代码示例。
- 作为全球最好的国际化与本地化库，其自身的文档却并没有实现国际化。

我能够理解，或许由于以下原因，撰写一份优秀的文档是困难的：

- 语言不通。
- 人力有限，撰写文档成本过高。
- 文档内容总量过大，检查与校验变得困难。
- 生理或精神疾病导致撰写文档的难度超过个人能力。
- 贡献者团队膨胀，个人习惯不同，各人撰写的文档质量良莠不齐。

所以，身为开源社区的成员、各种库的使用者，我决定参与其中，为项目文档的建设出一份力。我会在这个项目下发布我自己的项目的文档，以及一些外语（目前主要是英语）文档的翻译。

立项的动机是什么？
- 我正在研究 C++ 翻译阶段，其中不可避免地涉及到处理 Unicode。了解 ICU 库后，我被语言不通的文档拒之门外，又被薄弱的社区内容逼不得已，故此立项。

我将如何避免以上的问题？

- 我会保证在我的项目更新时同步更新文档，无文档则不更新。
- 我会采取 AI 辅助人工翻译的方式，针对一些外语文档进行翻译，保证翻译的质量。

## 当前目标

- 翻译 ICU 的文档（进行中）

## 部署

本项目基于 VitePress，在运行前先安装依赖：

```shell
npm install
```

以开发模式运行（无需构建即可预览）：

```shell
npm run docs:dev
```

构建：
```shell
npm run docs:build
```

在本地部署：
```shell
npm run docs:preview
```

将其部署到静态页面托管平台（如 Github Pages 或 Cloudflare Pages）的流程与其他基于 VitePress 的项目基本相同。

## 仓库信息

源代码现已从我的 Gitea 迁移到 Github。

目前已部署于 [docs.keqing.moe](https://docs.keqing.moe) ，如果无法访问，可以自行在本地部署。

## 加入我们

仅凭我个人力量维持这个项目是困难的，我们需要你的帮助。

如果你愿意参与其中，你可以任选一种方式：
- 提交 PR
- 与我联系，获取协作者权限

我的联系方式：
- 我的 [Github](https://github.com/keqingmoe)
- 我的 [Email: me@keqing.moe](mailto:me@keqing.moe)
- 我的 [Telegram](https://t.me/keqingmoe)


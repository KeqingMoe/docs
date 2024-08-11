#   用于 Unicode 的国际化组件

这是 [用于 Unicode 的国际化组件](https://icu.unicode.org/) 的存储库。
ICU 项目在 [Unicode 联盟](https://www.unicode.org) 的管理下。

- 源代码: https://github.com/unicode-org/icu
- 提交 Bug: https://unicode-org.atlassian.net/projects/ICU
- API 文档: https://unicode-org.github.io/icu-docs/
- 用户指南: https://unicode-org.github.io/icu/

![ICU Logo](https://cdn.jsdelivr.net/gh/unicode-org/icu/tools/images/iculogo_64.png)

### 关于 Branch 重命名的特殊注意

2021 年 3 月 24 日至 25 日左右，我们将 `master` 分支重命名为 `main`。您可能需要在本地 git 存储库中重命名分支，并修改您平时使用的 git 命令。另请参阅 https://github.com/github/renaming 。

### 构建状态 (`main` 分支)

构建 | 状态
------|-------
GitHub Actions (ICU4C) | [![GHA ICU4C](https://github.com/unicode-org/icu/workflows/GHA%20ICU4C/badge.svg)](https://github.com/unicode-org/icu/actions?query=workflow%3A%22GHA+ICU4C%22+branch%3Amain)
GitHub Actions (ICU4J) | [![GHA ICU4J](https://github.com/unicode-org/icu/workflows/GHA%20ICU4J/badge.svg)](https://github.com/unicode-org/icu/actions?query=workflow%3A%22GHA+ICU4J%22+branch%3Amain)
Azure Pipelines (ICU4C) | [![Build Status](https://dev.azure.com/ms/icu/_apis/build/status/unicode-org/CI?branchName=main)](https://dev.azure.com/ms/icu/_build/latest?definitionId=360&branchName=main)
Azure Pipelines (ICU4J) | [![Build Status](https://dev.azure.com/ms/icu/_apis/build/status%2Funicode-org%2FCI-ICU4J?branchName=main)](https://dev.azure.com/ms/icu/_build/latest?definitionId=631&branchName=main)
Azure Pipelines (穷举测试) | [![Build Status](https://dev.azure.com/ms/icu/_apis/build/status/unicode-org/CI-Exhaustive-Main?branchName=main)](https://dev.azure.com/ms/icu/_build/latest?definitionId=361&branchName=main)
Github Actions (Valgrind) | [![GHA CI Valgrind](https://github.com/unicode-org/icu/workflows/GHA%20CI%20Valgrind/badge.svg)](https://github.com/unicode-org/icu/actions/workflows/icu_valgrind.yml?query=workflow%3A%22GHA+CI%22+branch%3Amain)
Fuzzing | [![Fuzzing Status](https://oss-fuzz-build-logs.storage.googleapis.com/badges/icu.svg)](https://bugs.chromium.org/p/oss-fuzz/issues/list?sort=-opened&can=1&q=proj:icu)
OpenSSF Scorecard | [![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/unicode-org/icu/badge)](https://securityscorecards.dev/viewer/?uri=github.com/unicode-org/icu)



### 子目录和信息

- [`icu4c/`](https://github.com/unicode-org/icu/blob/main/icu4c) [用于 C/C++ 的 ICU](icu4c/readme)
- [`icu4j/`](https://github.com/unicode-org/icu/blob/main/icu4j) [用于 Java 的 ICU](icu4j/readme)
- [`tools/`](https://github.com/unicode-org/icu/blob/main/tools) 工具
- [`vendor/`](https://github.com/unicode-org/icu/blob/main/vendor) 第三方依赖

### 版权和许可

版权所有 © 2016-2024 Unicode, Inc.。Unicode 和 Unicode 徽标是 Unicode, Inc. 在美国和其他国家/地区的注册商标。

该项目在 [许可证](LICENSE) 下发布.

需要签署 **贡献者许可协议** 才能为该项目做出贡献，请参阅 [为 ICU 做出贡献](CONTRIBUTING) （或发起一个 PR）以获取更多信息。

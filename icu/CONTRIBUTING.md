::: danger 警告：AI 生成内容 仅有简单校对
本翻译仅为提供参考之用，并非法律文件。由于翻译可能存在解释上的偏差或遗漏，我们强烈建议用户在做出任何法律决策或版权相关的行动前，仔细阅读并理解原始许可证文本。我们不对因依赖此翻译而产生的任何法律后果或版权纠纷承担责任。在任何情况下，都应以原始文本为准。
:::

---

# 为 ICU 做出贡献

感谢您愿意为 ICU 做出贡献！

自 ICU 58 开始，ICU 成为 Unicode® 联盟的一个项目，并且 ICU 项目管理委员会成为一个 Unicode 技术委员会，即 ICU-TC。有关更多详细信息，请参阅 [Unicode 公告][unicode-announcement]。自 2018 年 7 月起，ICU 托管在 [GitHub][unicode-org/icu] 上。

## 为什么要贡献？

ICU 是一个开源库，是国际化库的事实上的行业标准。我们的目标是在所有被广泛使用的平台上提供顶级的国际化支持。通过向 ICU 库贡献您的代码，您将受益于 ICU 团队和社区的持续改进、测试，以及多平台可移植性。此外，每次升级到新的 ICU 版本时，您都不必将自己的添加内容重新合并到 ICU 中。

## 贡献者许可协议（CLA）

为了为本项目做出贡献，Unicode 联盟必须保留一份包含您的贡献中的 CLA 的存档，无论这份 CLA 是个人的还是公司的。在签署正确的 CLA 之前，PR、issues 和其他贡献 **不会** 被 **合并/接受**。需要签署哪个版本取决于谁拥有所做出的贡献：您作为做出贡献的个人或您的雇主。 **您有责任确定您的贡献是否归您的雇主所有。** 请查看 [Unicode 知识产权、许可和技术贡献政策][policies]，以获取有关签署哪个 CLA 的进一步指导，以及有关联盟的许可、技术贡献政策和手续的其他信息和指南。

要在 Github 中签署 CLA，请发起一个 PR（将自动添加一条评论，其中包含 CLA 表单的链接），或直接转到 [CLA 表单][sign-cla]。您可能需要登录 Github 才能查看完整的 CLA 表单。

- **个人 CLA**：如果您确定个人 CLA 合适，则当您访问 CLA 表单时，单击个人 CLA 并填写表单。


- **企业 CLA**：如果您确定企业 CLA 合适，请首先检查联盟存档的 [企业 CLA 公开列表][unicode-corporate-clas]。如果您的雇主已列出，那么当您访问 CLA 表格时，您可以单击表示您受雇主的公司 CLA 保护的框。如果您的雇主不在列表中，那么它尚未签署 CLA，您需要在您捐款之前安排您的雇主这样做，如 [如何签署 Unicode CLA][signing] 中所述。

除非 [`LICENSE`](./LICENSE) 文件中另有说明，否则该项目是根据 [OSI 批准的][osi-Unicode-License-3.0] 免费开源 [Unicode License v3][unicode-license]。

## 过程

另请参阅 [ICU 开发人员的 git][git4icu]。

如果您想加入团队，请 [联系我们][contacts]。一旦一切都达成一致，ICU 团队就会将您添加到 [GitHub 项目][unicode-org/icu] 和 [Jira 问题跟踪器][bugs]。

## 一般贡献要求

我们很乐意查看您希望向 ICU 贡献的代码。我们不能保证该代码将被包含。具有普遍兴趣并根据以下指南撰写的贡献更有可能成为 ICU 的一部分。

对于任何重要的新功能，请首先通过 [icu-design][contacts] 邮件列表联系 ICU 开发团队，并讨论可能贡献的功能、设计和范围。这有助于确保贡献符合预期并受到欢迎，与 ICU 的其他部分很好地契合，并且不会与可能正在进行的其他开发工作重叠。

当您考虑向 ICU 贡献代码时，请确保您和您的组织可以接受法律条款（请参阅上面的[许可证](#licenses)）。

::: details 译者注
上面这行的链接即便在原文中也没有锚定到中正确的位置，在未来可能会帮助其进行修复。
:::

在为 ICU 项目做出潜在贡献时，需要记住以下几点：

1. ICU 同时提供了 C/C++ 和 Java 版本。如果您使用其中一种编程语言进行开发，请提供相应的移植版本，或者确保逻辑足够清晰，以便代码能够合理地移植到另一种语言。我们不能保证会对贡献的代码进行移植到另一个库。

2. 实施前，阅读并理解 ICU 的 [代码规范][coding-guidelines]。需要过多适配才能被包含在 ICU 树中的贡献可能会等待很长时间。

3. 在实现过程中，尝试模仿 ICU 源代码中已有的风格。

4. 始终将代码开发为库的组成部分，而不是附加组件。

5. 总是提供足够的测试代码和测试用例。我们要求我们的 API 经过 100% 的测试，并且测试覆盖至少 85% 的 ICU 库代码。确保您的测试已集成到 ICU 的测试套件之一（ICU4C 的 [cintltst][cintltst] 和 [intltest][intltest] 以及 [com.ibm.icu.dev.test][com.ibm.icu.dev.test] ICU4J 中的课程）。新的测试和完整的测试套件应该通过。

6. 使用最严格的编译器选项进行编译。由于 ICU 的多平台性质，某些平台上的警告可能意味着其他平台上的灾难性错误。可以通过在任何使用 gcc 或 clang 编译器的平台上使用 `--enable-strict` 配置选项来为 C++ 启用此功能。

7. 在多个平台上进行测试。对于 ICU4C，最好将 Windows 上的测试与 Linux、Mac OS X 或其他 Unix 平台上的测试结合起来。尝试混合使用大端和小端平台总是好的。对于 ICU4J，使用 Oracle 和 IBM 的 JDK 和/或在 Android 上进行测试。

8. 每个贡献应包含允许使用该贡献构建、测试和运行 ICU 的所有内容。这通常包括：源代码、构建文件和测试文件。


## 团队

我们有好几个 [邮件列表][contacts]。贡献者至少应该订阅 **icu-design** 邮件列表，我们还有一个团队内部列表，您应该添加到其中。

我们每周通过电话见面一次。请参阅 [议程和会议纪要][meetings]。


## 了解 ICU


* 主页：<https://icu.unicode.org>
* 用户指南：<https://unicode-org.github.io/icu/userguide/>
  * [代码规范][coding-guidelines]
  * [介绍][introduction]
  * [设计][design]
  * [如何使用 ICU][howtouse]
  * API 参考资料: ICU4[C][icu4c-api]/[J][icu4j-api]

## 设置 & 工作流程

- [ICU 开发人员应该如何使用 git][git4icu]
- [贡献者该如何设置][setup]
  - [源码访问权][repository]
  - [给 C++ 贡献者的提示][tips]
- [提交 ICU 的 Bugs 和功能建议][bugs]
- [ICU 工单生命周期][ticket-lifecycle]

重要/具有破坏性的变更应在 icu-design 设计邮件列表或团队内部邮件列表上进行讨论。

**API 变更必须在 icu-design 列表中提出**，请参阅 [API 提案电子邮件模板][proposal-template]

拟议的变更将在至少六天后召开的 ICU 会议上进行讨论。在电子邮件和会议讨论期间，提案经常会被修改。请不要“操之过急”，除非您非常有信心您的提案将按原样通过，或者准备好恢复您的更改。

## 欢迎！

_以及... 感谢您的贡献！_

### 版权 & 许可证

版权所有 © 2016-2024 Unicode, Inc.。Unicode 和 Unicode 徽标是 Unicode, Inc. 在美国和其他国家/地区的注册商标。

该项目在 [许可证](LICENSE) 下发布.


[bugs]: https://icu.unicode.org/bugs
[cintltst]: ./icu4c/source/test/cintltst/
[coding-guidelines]: docs/userguide/dev/codingguidelines.md
[com.ibm.icu.dev.test]: ./icu4j/main/framework/src/test/java/com/ibm/icu/dev/test/
[contacts]: https://icu.unicode.org/contacts
[copyright]: http://www.unicode.org/copyright.html
[design]: docs/userguide/icu/design.md
[git4icu]: https://unicode-org.github.io/icu/userguide/dev/gitdev
[howtouse]: docs/userguide/icu/howtouseicu.md
[icu4c-api]: https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/
[icu4j-api]: https://unicode-org.github.io/icu-docs/apidoc/released/icu4j/
[intltest]: ./icu4c/source/test/intltest/
[introduction]: docs/userguide/index.md
[meetings]: https://icu.unicode.org/projectinfo/meetings
[osi-Unicode-License-3.0]: https://opensource.org/license/unicode-license-v3/
[policies]: https://www.unicode.org/policies/licensing_policy.html
[proposal-template]: https://icu.unicode.org/processes/proposal-template
[repository]: https://unicode-org.github.io/icu/devsetup/source/
[setup]: https://unicode-org.github.io/icu/devsetup/
[sign-cla]: https://cla-assistant.io/unicode-org/.github
[signing]: https://www.unicode.org/policies/licensing_policy.html#signing
[ticket-lifecycle]: https://icu.unicode.org/processes/ticket-lifecycle
[tips]: https://unicode-org.github.io/icu/devsetup/cpp/
[unicode-announcement]: http://blog.unicode.org/2016/05/icu-joins-unicode-consortium.html
[unicode-corporate-clas]: https://www.unicode.org/policies/corporate-cla-list/
[unicode-license]: https://www.unicode.org/license.txt
[unicode-org/icu]: https://github.com/unicode.org/icu
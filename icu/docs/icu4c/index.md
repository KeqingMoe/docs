# ICU4C

## 介绍

如今的软件市场是一个全球化的市场，开发和维护一个支持多种语言的应用程序是非常值得的。为了帮助实现这个目标，ICU 库在各种平台上提供了 *健壮* 且功能齐全的 Unicode 服务。ICU库提供以下方面的支持：


* 最新版本的 Unicode 标准
* 超过 220 种代码页的字符集转换
* 超过 300 种区域设置数据
* 基于 Unicode 词语定序算法（ISO 14651）的语言敏感的排序和搜索
* 正则表达式匹配与 Unicode 字符集
* 正规化、大小写变换、文字转写（超过 50 对转换规则）
* 用于存储和访问区域化信息的资源包
* 日期、数字、时间格式化和解析特定于文化的输入输出格式
* 基于特定日历的日期和时间操作
* 用于查找字、词、句边界的文本边界分析

ICU 有一个姊妹项目 ICU4J，它将 Java 的国际化功能扩展到与 ICU 相似的水平。在需要区分时，ICU 的 C/C++ 项目也被称为 ICU4C。

## 开始使用

本文档描述了如何在您的设备上构建和安装 ICU。有关 ICU 的其他信息，请参见以下链接表。ICU 主页还有指向编写国际化软件的相关资讯的链接。

| 页面 | 链接 |
| - | - |
| ICU, ICU4C & ICU4J 主页 | <https://icu.unicode.org/> |
| ICU 常见问题与解答 | [https://docs.keqing.moe/icu/docs/icu4c/faq](../icu4c/faq) |
| ICU4J 常见问题与解答 | [https://docs.keqing.moe/icu/docs/icu4j/faq](../icu4j/faq) |
| ICU 用户指南 | [https://docs.keqing.moe/icu/docs/icu/](../icu/) |
| 如何使用 ICU | [https://docs.keqing.moe/icu/docs/icu/howtouseicu](../icu/howtouseicu) |
| 下载 ICU 发行版 | <https://icu.unicode.org/download> |
| ICU4C API 在线文档 | <https://unicode-org.github.io/icu-docs/apidoc/released/icu4c/> |
| ICU 在线演示 | <https://icu4c-demos.unicode.org/icu-bin/icudemos> |
| 联系方式、错误报告和功能请求 | <https://icu.unicode.org/contacts> |

**重要提示：** 请确保您理解 [版权和许可信息](../../github/LICENSE)。

## 当前版本中有哪些新内容？

请访问 [ICU 下载页面](https://icu.unicode.org/download/) 以找到当前版本的对应页面，可以在该页面找到任何其他更改、错误修复、已知问题、对支持平台和构建环境的更改，以及从以前的 ICU 版本迁移时的问题。

当前版本的对应页面还有 ICU4C 和 ICU4J 的 API 更新报告，列出了此版本中增加、删除和修改的 API。

自上一 ICU4C 版本以来更改的 API 在 [此处](https://htmlpreview.github.io/?https://raw.githubusercontent.com/unicode-org/icu/main/icu4c/APIChangeReport.html) 列出。先前版本的更改也可以在 [ICU 下载页面](https://icu.unicode.org/download) 的先前版本的页面中找到。

## 如何下载源代码

有两种方法下载 ICU 源码：

* **官方发行：** 如果你想使用 ICU（而不是开发它），你要下载官方打包的 ICU 源码，它们比系统的开发版经过了更彻底的测试，并且打包在 zip 或 tar 文件中以方便下载。可以在 [https://icu.unicode.org/download](https://icu.unicode.org/download) 上找到打包好的文件，其名为 `icu-版本号.zip` 或 `icu-版本号.tgz` 。
> :point_right: **注意**：对于特定版本， `maint-*` 分支中有许多额外的提交，它们并不在打包好的文件中。
* **GitHub 源码：** 如果你对开发版功能、补丁或 Bug 修复感兴趣，您可能需要使用 ICU 源码的最新版。您需要从我们的 GitHub 仓库 clone 并 checkout 代码，已确保您的所有文件都是最新版。有关详细信息，请参阅我们的 [源代码存储库](https://icu.unicode.org/repository)。

## ICU 源代码组织 {#icu-source-code-organization}

在下面的描述中， `<ICU>` 是 ICU4C 安装目录的完整路径名。您也可以查看用户指南中的 [ICU 架构设计](../icu/design)部分，了解您需要哪些库来构建软件产品。为了使用 ICU，您至少需要 icudt 和 icuuc 库。

**以下文件描述了 *Code Drop*。**

| 文件 | 描述 |
| - | - |
| LICENSE | ICU 使用的许可证。 |

**以下目录包含源代码和数据文件。**

| Directory | Description |
| - | - |
| &lt;ICU&gt;/source/**common**/ | 核心 Unicode 和支持功能，如资源束、字符属性、区域设置、代码页转换、正规化、Unicode 属性、 `Locale` 类和 `UnicodeString` 类。 |
| &lt;ICU&gt;/source/**i18n**/ | i18n 中的模块通常是数据驱动型的，是由资源包驱动的组件。这些模块处理更高层次的国际化问题，如格式化、词语定序、文本断点分析和转写。 |
| &lt;ICU&gt;/source/**layoutex**/ | 包含 ICU 段落布局引擎。 |
| &lt;ICU&gt;/source/**io**/ | 包含 ICU 输入输出库。 |
| &lt;ICU&gt;/source/**data**/ | 该目录包含文本格式化的数据，这些数据在 ICU 构建过程中被编译成二进制形式。下面的表格中将列出更多内容。 |
| &lt;ICU&gt;/source/test/**intltest**/ | 一套包含所有的 C++ API 的测试工具。有关如何运行的信息，请参见本文档后面针对不同平台的构建说明。 |
| &lt;ICU&gt;/source/test/**cintltst**/ | 一套包含所有的 C API 的测试工具。有关如何运行的信息，请参见本文档后面针对不同平台的构建说明。 |
| &lt;ICU&gt;/source/test/**iotest**/ | 一套用 C 和 C++ 编写的测试工具，用于测试 icuio 库。有关如何运行的信息，请参见本文档后面针对不同平台的构建说明。 |
| &lt;ICU&gt;/source/test/**testdata**/ | 用于数据的文本文件，会被测试程序读取。它包含子目录 **out/build/**，该目录用于存放临时文件，以及包含 **testdata.dat** 的 **out/** 目录。 |
| &lt;ICU&gt;/source/**tools**/ | 用于生成数据文件的工具。在 Windows 系统上，通过调用 &lt;ICU&gt;/source/data/build/makedata.bat 生成数据文件；在（类）UNIX 系统上，通过调用 &lt;ICU&gt;/source/make 生成数据文件。 |
| &lt;ICU&gt;/source/**samples**/ | 使用 ICU 的各种示例程序。 |
| &lt;ICU&gt;/source/**extra**/ | 不受支持的新增 API。目前，它包含了 `uconv` 工具，用于在文件上执行代码页转换。 |
| &lt;ICU&gt;/**packaging**/ | 该目录包含用于打包 ICU 构建结果的脚本和工具，可以在多个平台上使用。 |
| &lt;ICU&gt;/source/**config**/ | 包含 Makefile 文件，其中有平台特定的构建命令。通过 `configure` 使用。 |
| &lt;ICU&gt;/source/**allinone**/ | 包含顶级 ICU 工作区和项目文件，例如在一个 MSVC 项目下构建整个 ICU。 |
| &lt;ICU&gt;/**include**/ | 包含在 Windows 上使用 ICU 开发软件所需要的头文件。 |
| &lt;ICU&gt;/**lib**/ | 包含用于将 ICU 链接到您的 Windows 应用程序的链接库。 |
| &lt;ICU&gt;/**bin**/ | 包含在 Windows 上使用 ICU 所需的库和可执行文件。 |

关于 &lt;ICU&gt;/source/**data**/，你可以：

它包含几个子目录，数据文件按功能分组。请注意，对该目录进行任何更改后都必须重新构建。如果缺少以下某些目录，可能是因为您下载的是官方版本。如果您需要自定义的数据文件，请从 [ICU 存储库](https://icu.unicode.org/repository) 下载完整的ICU源代码。

- **in/**：一个包含 ICU 预构建的数据库的目录，标准的源码包将包含此文件，但不会包含以下几个目录，这是为了简化大多数用户的构建过程，并减少平台移植问题。
- **brkitr/**：用于字符、单词、句子、标题大小写和文本边界分析的数据文件。
- **coll/** 用于词语定序的数据。
- **locales/**：这些 .txt 文件包含特定于语言和文化的本地化数据。有两个特殊的包：**root**，它是回退数据和其他包的上级；以及 **index**，其中包含已安装包的列表。一些区域设置数据被拆分的特定类型的目录中：curr（货币）、lang（语言）、region（地区）、unit（计量单位）和 zone（时区）。
- **curr/**：用于货币符号和名称（包括单词的复数形式）的区域设置数据。
- **lang/**：用于语言名称、文字以及区域设置键值对的数据。
- **region/**：用于地区名称的区域设置数据。
- **unit/**：用于计量单位和名称的区域设置数据。
- **zone/**：用于时区名称的区域数据。
- **mappings/**：是代码页转换表。.ucm 文件包含与 Unicode 之间的映射关系，它们被编译成 .cnv 文件。**convrtrs.txt** 是各种转换器名称格式到 ICU 内部格式及其相反方向的别名映射表，它生成 cnvalias.icu。Makefile 文件 **ucmfiles.mk**、**ucmcore.mk** 和 **ucmebcdic.mk** 包含了要构建的转换器列表。
- **translit/**：这个目录包含作为资源包的转写规则，以及特殊的资源包 **translit_index**，它列出了系统转写器的别名。
- **unidata/**：这个目录包含 Unicode 数据文件。有关更多信息，请访问 [Unicode 官方网站](http://www.unicode.org/)。
- **misc/**：该目录包含了其他不适用于上述分类的数据文件，包括时区信息、区域特定的数据，以及从 *通用当地数据存储库* (CLDR) 补充数据衍生的其他数据。
- **out/**：这个目录包含 *内存映射文件*。
- **out/build/**：该目录包含（编译后的）中间文件，如 .cnv、.res 等。

如果您正在以一个构建一个不一样的 ICU，您可以将 ICU_DATA 环境变量设置为 out/ 或 out/build/ 目录，但通常不鼓励这样做，因为大多数人都做错了。您可以查看 ICU 用户指南中的 [ICU 数据管理](../icu_data/) 部分来了解详细信息。

## 如何构建和安装 ICU

请参阅 [构建 ICU4C](build) 页面。

## 如何打包 ICU

请参阅 [打包 ICU4C](packaging) 页面。

## 使用 ICU 的重要注意事项

### 在多线程环境中使用 ICU

ICU 的一些版本需要调用 `uclean.h` 中的 `u_init()` 函数，以确保 ICU 被正确初始化。在这些 ICU 版本中，在多线程使用 ICU 之前，必须调用 `u_init()` 。在单线程应用程序中、单 CPU 机器上，或在其他不需要 `u_init()` 的情况下调用 `u_init()` 也没有副作用。

除了确保线程安全之外， `u_init()` 还尝试至少加载一个 ICU 数据文件。假设所有数据文件都被打包在一起（或者位于同一个文件夹中），来自 `u_init()` 的错误码通常意味着找不到数据。这种情况可能是因为数据可能没有被正确安装，或者应用程序可能没有成功调用 `udata_setCommonData()` 或 `u_setDataDirectory()` ，这些函数指定了 ICU 在哪里可以找到它的数据。

由于 `u_init()` 只加载一个或两个数据文件，它不能保证应用程序所需的所有数据都可用。它无法检查所有数据文件，因为文件集是可定制的，并且一些 ICU 服务在根本不加载任何数据的情况下也能工作。应用程序在（使用 `ucnv_open()` `ucol_open()` 或 RAII 等方式）打开 ICU 服务对象时应始终检查错误码。

#### ICU 3.4 及更高版本

ICU 3.4 能够自动初始化，以适应多线程使用。它通过将核心 Unicode 属性数据硬编码来实现这一点，这样做虽然牺牲了一些灵活性，但没有性能损失。（详情见 Jitterbug 4497。）

`u_init()` 可用于检查数据加载，它尝试加载转换器别名表 `cnvalias.icu` 。

#### ICU 2.6 到 3.2

这些 ICU 版本需要在多线程使用之前调用 `u_init()` 。直接受影响的服务是那些没有对象且需要保证执行速度的服务，如正规化和字符属性。`u_init()` 加载并初始化用于正规化和字符属性的数据文件（ `unorm.icu` 和 `uprops.icu` ），因此它也可以用来检查数据是否已正确加载。

#### ICU 2.4 及更早版本

ICU 2.4 和更早的版本不适合在多 CPU 平台上使用多线程，在这些平台上，CPU 的 *内存一致性* 较弱。

#### 在 *HP-UX* 上的多线程环境中使用 ICU

在 HP-UX 上使用 aCC 构建 ICU 时，将使用参数 [`-AA`](http://h21007.www2.hp.com/portal/site/dspp/menuitem.863c3e4cbcdc3f3515b49c108973a801?ciid=eb08b3f1eee02110b3f1eee02110275d6e10RCRD) 。为了以线程安全的方式使用 iostream ，这是必需的。此编译器标志影响正在使用的 C++ 库的版本。您的应用程序还需要使用 `-AA` 进行编译才能使用 ICU。

#### 在 *Solaris* 上的多线程环境中使用 ICU

请注意 Solaris 上的链接，为了避免同步和线程问题，**建议**严格遵循 Oracle 提供的以下 Sun Solaris 文档中指定的多线程应用程序的编译和链接教程。请严格注意 Sun 的以下声明：

> 要使用 libthread，请在 `ld` 命令的 `-lc` 参数前加上 `-lthread` ，或者在 `cc` 命令的后面加上 `-lthread` 。
> 要使用 libpthread，请在 `ld` 命令的 `-lc` 参数前加上 `-lpthread` ，或者在 `cc` 命令的后面加上 `-lpthread` 。

如果不这样做，可能会导致 *伪锁冲突*、*递归锁失败* 和死锁。

> 资料来源：[《多线程编程指南：编译和调试》, Sun Microsystems, 2002](https://docs.oracle.com/cd/E19683-01/806-6867/compile-74765/index.html)

另请参见 [涵盖 Solaris 9 和 Solaris 10 的 2008 年文档更新中的该章](http://docs.oracle.com/cd/E19253-01/816-5137/compile-94179/index.html)。

### Windows 平台

如果你在 Windows 平台上构建，了解以下的一点点细节很重要：

#### DLL 目录和环境变量 PATH 设置

按照交付的方式，ICU 构建出几个 DLL 文件，这些文件被放置在 `<ICU>\bin64` 目录中，必须将这个目录添加到系统的环境变量 `PATH` 中。或者，您可以将 DLL 文件复制到 PATH 中已有的目录，但我们不推荐这样做，因为这样可能会得到多个 DLL 的副本，并最终使用错误的版本。

#### 修改环境变量 PATH (Windows 2000/XP and above)

在控制面板中使用系统图标。选择“高级”标签页（对更高版本的 Windows 系统，可以直接搜索“编辑系统环境变量”），点击“环境变量...”按钮。在下面的框中选择变量 `PATH` ，然后选择下方的“编辑...”按钮。在“变量值”框中，在路径字符串的末尾添加字符串 `;<ICU>\bin64` （Windows 10/11 可以直接添加列表项），如果那里什么也没有，就直接输入 `<ICU>\bin64` 。点击“设置”按钮，然后点击“确定”按钮。

> :point_right: **注意**：在打包 Windows 应用程序以供分发和在用户系统上安装时，应将 ICU DLL 文件的副本包含在应用程序中，并安装供应用程序专用。这是确保您的应用程序运行的 ICU 版本与您开发和测试时使用的版本完全相同，且构建选项完全一致的唯一方法。请参阅微软关于 DLL 使用的指导，或在 [msdn.microsoft.com](http://msdn.microsoft.com/) 上搜索短语“DLL hell”。

### 类 UNIX 系统

如果您在类 UNIX 系统上构建应用程序，并且如果您在非标准位置安装了 ICU，您可能需要将 ICU 库的位置添加到您的 `LD_LIBRARY_PATH` 或 `LIBPATH` 环境变量中（或您的系统对应的运行时库路径环境变量）。如果不这样做，ICU 库可能无法正确链接或加载。

> :point_right: **注意**：如果您不想设置这个变量，您可以在配置时使用 `--enable-rpath` 参数，这个参数将指示链接器始终在库安装的位置查找库。当您自己的应用程序和库链接到 ICU 时，您也需要使用适当的参数调用链接器，请参考您系统链接器的手册以获取有关运行时路径的信息。使用 rpath 还意味着在构建 ICU 的新版本时，您不应该在新版本的安装目录中安装旧版本，因为旧的库将在构建过程中被使用，而不是新的库，这可能导致 ICU 构建不正确。这是 rpath 的正确行为。

## 平台依赖性

### 移植到新平台

如果您在新平台上使用 ICU 的 Makefile 构建 ICU，您需要在几个地方添加或修改一些文件。如果您需要更多帮助，您可以随时向 [icu-support 邮件列表](https://icu.unicode.org/contacts) 咨询。一旦您完成了将 ICU 移植到新平台，建议您通过 icu-support 邮件列表将您的更改贡献回 ICU。这将使每个人都能更容易地从您的工作中受益。

#### 交叉“编译”数据文件

对于一部分人而言，可能没必要完整地构建 ICU。大部分 Makefile 和构建目标都是提供给构建 ICU 数据的工具。

当两个平台的端序和字符集族相同时，可以在一个平台上构建数据文件以供两个平台使用。但这一技巧并不适用于平台依赖的链接库。有关详细信息，请参见用户指南中的 [ICU 数据库](../icu_data/) 章节。

ICU 3.6 移除了必须在原生操作系统环境中完全构建 ICU 的要求。它增加了 `icupkg` 工具，该工具可以在任何平台上运行，将二进制 ICU 数据文件从三种格式之一转换为其他任何数据格式。这允许应用程序使用在任何地方构建的 ICU 数据，用于任何其他目标平台。

> :warning: **警告**：推荐你完全测试不建议在不运行测试的情况下构建 ICU，测试可以验证 ICU 是否可以安全地使用，建议您在将这些库用于您自己的应用程序之前尝试完全移植和测试 ICU。

#### 为新平台适配 Makefile

可以类比 [UNIX 构建指南](build#how-to-build-and-install-on-unix) 中的构建步骤。如果配置脚本运行失败，那么您将需要修改一些文件。以下是移植到新平台的通常步骤：

1. 在 `<ICU>/source/config/` 中创建一个 mh 文件。你可以使用 mh-linux 或相似的 mh 文件作为你的基本配置。
2. 修改 `<ICU>/source/aclocal.m4` 以识别您的平台的 mh 文件。
3.  Modify `<ICU>/source/configure.in` to properly set your **platform** C Macro define.
3. 修改 `<ICU>/source/configure.in` 以正确的设置用于表示平台的宏定义。
4.  Run [autoconf](http://www.gnu.org/software/autoconf/) in `<ICU>/source/` without any options. The autoconf tool is standard on most Linux systems.
4. 运行 `<ICU>/source/` 目录下的 [autoconf](http://www.gnu.org/software/autoconf/)，不需要任何参数。autocof 工具是大多数 Linux 系统下的标准工具。
5. 如果您想要使用优化选项，可以修改 `<ICU>/source/runConfigureICU` 以针对您的平台选择编译器参数。
6. 在您的平台上构建并测试 ICU。运行测试非常重要，如果您不运行测试，就无法保证您已经正确地移植了 ICU。

### 平台依赖的实现

平台依赖性主要被隔离在公共库中的一些文件里，如果您正在将 ICU 移植到新平台，这些信息可能会很有用。这些文件包括：

* **unicode/platform.h.in** (使用 `autoconf` 配置的平台)，**unicode/p_XXXX_.h** (其他：pwin32.h, ppalmos.h 等)：平台依赖的 typedef 和定义。
    * 像 `UBool`, `int8_t`, `int16_t`, `int32_t`, `int64_t`, `uint64_t` 等标量类型。
    * 用于指定动态库的导入和导出的 `U_EXPORT` 和 `U_IMPORT` 。
    * 支持 `char16_t` 和 `wchar_t` 的字符串处理。
* **unicode/putil.h, putil.c**: 各种函数的平台依赖的实现：
    * 用于处理特殊浮点值的 `uprv_isNaN` `uprv_isInfinite` `uprv_getNaN` `uprv_getInfinity` 。
    * 用于获取平台特定的时间和时区格式的 `uprv_tzset`, `uprv_timezone` `uprv_tzname` `time` 。
    * 用于获取数据所在的默认目录的 `u_getDataDirectory` 。
    * 用于获取默认区域设置 ID 的 `uprv_getDefaultLocaleID` 。
    * 用于获取默认代码页设置的 `uprv_getDefaultCodepage` 。
* **umutex.h, umutex.c**：在多线程应用程序中写同步的代码。如果您希望在多线程应用程序中使用 ICU，您必须提供一个 *同步原语*，供类使用以保护它们的全局数据，防止同时修改。我们已经为 ICU 构建的许多平台提供了有效的实现。
* **umapfile.h, umapfile.c**: 将文件以映射或以其他方式读取或加载到内存中的函数。ICU 对来自文件的所有数据访问都使用这些函数。
* 在这些文件的范围之外，强烈不鼓励使用特定平台的 `#ifdef` 宏。当源代码在未来被更新时，这些 `#ifdef` 可能会导致您的平台测试问题。

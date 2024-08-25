# ICU 常见问题与解答

## ICU 简介

#### 什么是 ICU

ICU 是一个跨平台的、基于 Unicode 的全球化库，它支持区域设置敏感的字符串比较，日期、时间、数字、货币、消息的格式化，文本边界检测，字符集转换等等。

#### 我可以在哪下载 ICU？

您可以从 <https://icu.unicode.org/download> 获取 ICU4C 和 ICU4J。

**为什么不为我的平台构建二进制文件？**

不同的平台有很多，各自又有许多编译器，即使在同一平台上，我们也无法构建所有版本并保证它们之间的兼容性。由于这些限制，我们仅分发有限数量的 ICU 二进制版本，但我们将帮助您从源代码构建其他版本。

**为什么不提供我的 MSVC 版本（MSVC 2008 等）的项目文件？**

您可以使用 Cygwin 构建环境针对 MSVC 编译器从源代码构建 ICU。请参阅 [构建 ICU4C](build) 页面。

#### 如何安装 ICU 的二进制版本？

* **Windows**:
    * 你应用程序可能需要位于 **bin\icuXX##.dll** 的 DLL 文件，其中 "XX" 是两个字母（例如 "uc" 代表 common 库，in 代表 i18n 库等），而 "YY" 是 [主版本号和次版本号](../icu/design#version-numbers-in-icu)（例如 **42** 代表 **4.2** 或 **4.2**.0.1 或 **4.2**.4）。
    * 要么将 DLL 文件放置在与应用程序的 EXE 文件相同的目录中，要么设置环境变量 PATH 以指向包含 ICU DLL 文件的目录。
    * 编译时请将 "include" 目录（"unicode" 和 "layout" 目录的上级目录）添加到头文件搜索路径中。
    * 链接时请将 "lib" 目录添加到相应的路径中。
* **其他平台**:
    * 对于其他平台，tgz 文件解压后会形成一个类似于 **/usr/local** 的目录结构。为了在系统层面上安装，您可以将所有文件解压到 **/usr/local/bin**、**/usr/local/include** 等目录中。
    * 配置脚本 **/usr/local/bin/icu-config** 或类似的 Makefile include 文件 **/usr/local/lib/icu/current/Makefile.inc** 可以在构建应用程序时使用。

#### 可以在哪些情况下帮助我构建 ICU4C？

如果你你阅读了 [构建 ICU4C](build) 部分以及 [ICU 数据](../icu_data/) 部分，我们可以试着提供帮助。你也可以在 [the icu-support archives](https://icu.unicode.org/contacts) 中搜索，然后在那里发布问题。此外，像 [StackOverflow](http://stackoverflow.com/search?q=icu) 这样的网站可能对您有所帮助。

* **Android NDK**：请尝试在 [the icu-support archives](https://icu.unicode.org/contacts) 中搜索，也可以查看 [StackOverflow](http://stackoverflow.com/search?q=icu+android)。

* **iPhone**：请尝试在 [the icu-support archives](https://icu.unicode.org/contacts) 中搜索，也可以查看 [StackOverflow](http://stackoverflow.com/search?q=icu+iphone)。

#### ICU 二进制兼容性策略是什么？

请查看 [设计](../icu/design) 章节中关于 [二进制兼容性](../icu/design#icu-binary-compatibility) 的部分。

#### ICU 许可证是怎样的？ {#how-is-icu-licensed}

ICU 许可证的目的是允许自由软件项目和专有或商业产品自由地使用 ICU。

自 ICU 58 版本以来，ICU 被与 ICU 许可证非常相似的 [Unicode 许可证](http://www.unicode.org/copyright.html) 覆盖。

ICU 1.8.1 至 ICU 57 以及 ICU4J 1.3.1 至 ICU4J 57 由 [ICU 许可证](https://github.com/unicode-org/icu/blob/release-57-1/icu4c/LICENSE) 覆盖，这是一种简单、宽容的非 Copyleft 自由软件许可证，与 GNU GPL 兼容。ICU 许可证与之前在 <http://www.x.org/Downloads_terms.html> 网站上提供的 X 许可证版本相同。（该网站已不再存在，但仍然可以通过互联网档案服务检索。）

#### 除了 C/C++ 和 Java 之外，我还可以在其他语言中使用 ICU 吗？

有许多可用的 wrappers，请参阅 [相关项目](https://icu.unicode.org/lated) 页面。

::: tip 译者注
这里的 wrapper 指的是 ICU 库提供的不同编程语言的接口或绑定。
:::

#### 如何升级到 ICU 的新版本？我应该关心 API 的变更、新的 Unicode 版本还是新的 CLDR 版本吗？

我们的目标是让 ICU 的升级过程顺利进行。以下是一些您可以采取的步骤，用于准备升级，或确保您使用 ICU 的方式对不会妨碍升级。

* **API**：确保您没有使用可能在未来版本中发生变化的草案 API。请参阅 [设计章节](../icu/design) 中的 [API 兼容性](../icu/design#icu-api-compatibility) 部分。
* **Unicode**：请查看特定版本的 Unicode 发布说明，以确保您的代码不受属性变更或其他规范变更的影响。
* **CLDR**：如果您的应用程序具有依赖于特定翻译的测试用例，则如果项目的翻译发生变化、添加新的支持、国家或地区更改其货币，这些假设可能会变得无效。您尽量不要依赖特定的翻译，或者做好随时修改测试用例的准备。此外，较新的版本可能支持其他翻译、货币、日历类型。
* **构建/部署您的应用程序 (ICU4C)**：ICU4C 通常使用符号重命名进行构建（参见：[设计章节](../icu/design) 中的 [二进制兼容性](../icu/design#icu-binary-compatibility)）。确保您使用最新的 ICU 头文件构建应用程序，以便它将链接到当前的 ICU。同时，不要在构建脚本和项目中硬编码 ICU 库的名称：尽可能链接到仅包含“基本名称”的库，如 `libicuuc.so` 或 `icuuc.lib` ，而不是包含版本号的名称，如 `libicuuc.so.**46**` 或 `icuuc**46**.dll`。

## 构建和测试 ICU

#### 如何构建 ICU？

请参阅 [构建 ICU4C](build) 部分。

#### 如何获取 ICU 的 32 位或 64 位版本？

从 ICU 版本 4.2 开始，配置脚本将以您平台的系统总线位宽进行构建。您可以使用 `--with-library-bits=` 选项请求 64 位或 32 位，例如 `runConfigureICU Linux --with-library-bits=64` 或 `runConfigureICU MacOSX --with-library-bits=32` 。为了实现优先 64 位，不可用时构建 32 位的操作，可以使使用 `--with-library-bits=64else32` 选项。

#### 如何在构建 ICU 的时候打开优化，而不是使用 debug 模式？

在 Win32 平台上，从下拉菜单中选择 “Release” 配置。在其他平台上，使用 `runConfigureICU` 脚本，该脚本使用 `configure` 脚本。 `runConfigureICU` 脚本使用 ICU 库的最安全级别的优化。如果您的平台未指定，请在运行 `configure` 或 `runConfigureICU` 之前设置以下环境变量：`CFLAGS=-O CXXFLAGS=-O` 。

#### 为什么当我使用 `gmake check` 时会出现很多测试失败？

请查看 ICU 附带的自述文件，它包含了构建和测试 ICU 的所有细节，通常能够解答大部分问题。

如果您使用的是之前未与 ICU 一同测试过的编译器，您可能会遇到编译器的优化错误。在 Unix 平台上，您可以在使用 `runConfigureICU` 时指定 `--disable-release`（例如 `runConfigureICU --disable-release LinuxRedHat` ）。如果这解决了您的问题，建议您将这个问题报告给编译器制造商。

如果这些办法都不能解决您的问题，请发邮件给 [ICU4C Support 列表](https://icu.unicode.org/contacts) .

#### 如何压缩 ICU 数据库的大小？

使用 [数据库定制工具](https://unicode-org.atlassian.net/browse/ICU-12835)，或查看用户指南中 [ICU 数据库](../icu_data/) 章节的 [定制 ICU 的数据库](../icu_data/#customizing-icus-data-library) 部分。

#### 为什么我看到的是一个几 KB 而不是一个几 MB 数据库（icudt）？

#### 打开 ICU 服务时出现 `U_MISSING_RESOURCE_ERROR` 错误， `u_init()` 返回失败。

ICU 库总是需要与 ICU 数据库。然而，为了让 ICU 能够自举，它首先在 **icu\source\stubdata** 中构建了一个“stub”数据库，以便工具能够正常工作。只有在您不使用 DLL 模式数据访问的情况下，您才应该在生产环境中使用 stub。通常，您应该使用从 **icu\source\data** 构建的较大的库。如果在 ICU 构建完成后您看到这个问题，请在 **icu\source\data** 中重新运行 'make'，或者在 Visual Studio 中运行 '**makedata**' 项目。

::: details 查看原文
ICU libraries always must link with the ICU data library. However, so that ICU can bootstrap itself, it first builds a 'stub' data library, in **icu\source\stubdata**, so that the tools can function. You should only use this in production if you are NOT using DLL-mode data access, in which case you are accessing ICU data as individual files, as an archive (.dat) file, or some other means. Normally, you should be using the larger library built from **icu\source\data**. If you see this issue after ICU has completed building, re-run 'make' in **icu\source\data**, or the '**makedata**' project in Visual Studio.
:::

#### 我可以在 ICU 中添加或删除转换器吗？

可以。请查看本用户指南中的 [ICU 数据管理](../icu_data/) 部分的 [定制 ICU 数据库](../icu_data/#customizing-icus-data-library)。您也可以从 <https://icu.unicode.org/charts/charset> 获取额外的转换器，或使用 [ICU 数据库定制工具](https://unicode-org.atlassian.net/browse/ICU-12835)。

#### 为什么 makefile 不能正常工作？

您需要 GNU 的 make 程序版本 3.8 或更高版本，并且您需要运行位于 `icu/source directory` 中的 `runConfigureICU` 脚本。您可能正在使用 ICU 不支持的平台。如果前两个答案不适用于您，那么您应该发送电子邮件到 [ICU4C 支持列表](https://icu.unicode.org/contacts)。

您可以在以下一些地方找到 gmake：

1.  GNU：<http://www.gnu.org/software/make/>
2.  Sun® 源码或二进制文件：<http://www.sunfreeware.com>
3.  z/OS (OS/390) 源码或二进制文件：<http://www.ibm.com/servers/eserver/zseries/zos/unix/bpxa1ty1.html#opensrc>
4.  IBM i (OS/400) 源码或二进制文件：<http://www.ibm.com/servers/enable/site/porting/iseries/overview/gnu_utilities.html>

由于每个平台的 make 程序存在差异，我们将不支持我们的 make 文件的其他版本。

#### ICU4C 使用什么版本的 iostream？

ICU4C 在目标平台上使用最新可用的 iostream 版本。只有 io 库使用 iostream。

#### 我只想使用 C API，是否需要 C++ 编译器？

ICU4C 的大部分功能一直都是用 C++ 实现的，随着时间的推移，我们正越来越多地朝这个方向发展。我们持续地支持并添加 C API，以提供二进制兼容的 API。对于实现而言，C++ 要好得多：它通常更容易使用，从而减少了错误和维护工作。它更接近 Java，这对于在 ICU4C 和 ICU4J 之间的移植非常重要。我们使用 RAII（例如 `LocalPointer` ）来减少内存泄漏的机会，使用内联函数和类型安全的常量而不是宏定义等。然而，我们不使用异常，我们也不使用 STL，所以 ICU4C 对 C++ 库的依赖是最小的。请查看新的 [dependencies.txt](https://github.com/unicode-org/icu/blob/main/icu4c/source/test/depstest/dependencies.txt)，并搜索 "group: cplusplus"。

由于 ICU 不使用异常，您可以打开 GCC 的 `-fno-exceptions` 选项。在 GCC 4.5 中有一个 `-static-libstdc++` 选项，使用它将移除 C++ 库依赖。Visual Studio 有 [/MT 选项](http://msdn.microsoft.com/en-us/library/2kzt1wy3(v=VS.100).aspx)，其他编译器可能有类似的选项。请参阅 [如何使用 ICU](../icu/howtouseicu) 以了解相关信息。

## ICU 的特点

#### ICU 是使用哪些编程语言编写的？

ICU4C (ICU) 使用 C 和 C++ 编写，ICU4J 使用 Java™ 编写。

#### API文档是如何标记弃用的？

请阅读 [ICU 设计](../icu/design) 章节中的 [ICU API兼容性](../icu/design#icu-api-compatibility) 部分。

#### ICU 支持哪个版本的 Unicode 标准？

ICU 版本 74 起支持 Unicode 15.1。老版本的 ICU 所对应的 Unicode 版本列在 ICU 的下载页面上，网址是 <https://icu.unicode.org/download>。

#### ICU 是否支持 UTF-16 代理和 Unicode 增补字符？

是的。

#### Java 是否支持 UTF-16 代理项和 Unicode 增补字符？

Java 5 引入了对 Unicode 增补字符的支持，但 Java 1.4 及更早版本不直接支持它们。

#### ICU 与 Java 的 java.text.\* 包有何关系？

ICU 既作为 C/C++ 库提供，也作为 Java 类库提供。ICU 为使用 C、C++ 或 Java 编写全球应用程序提供了国际化工具。ICU 最初由 IBM 全球本地化中心的能力小组在加利福尼亚州库比蒂诺开发，并被贡献给 Sun 公司，以便包含在 JDK 1.1 中。ICU4J 包括一些这些贡献类的增强版本以及补充 JDK 中类的其他类。

ICU4C 最初是原始 Java 国际化类的 C++ 移植。这些类现在有一部分用 C 实现，具有大体上相同的 C 和 C++ API。ICU4C 和 ICU4J 继续在特性和错误修复方面相互超越。随着时间的推移，ICU4J 的一些特性也被添加到 JDK 中。

ICU 的两个版本都有一个目标：实现最新的 Unicode 标准，维护单一的可移植源代码基础，并使软件开发人员更容易创建全球应用程序。

## 使用 ICU

#### 我可以在没有 Unicode 字符串的情况下使用 ICU 的功能吗？

不可以。为了使用词语定序、文本边界分析、格式化或其他 ICU API，您必须使用 Unicode 字符串。为了从您的本地代码页获取 Unicode 字符串，您可以使用转换 API。

#### 如何在 ICU 中声明 Unicode 字符串？

使用 `U_STRING_DECL` 和 `U_STRING_INIT` 宏，或者对于C++，使用 `UnicodeString` 类。字符串以 `UChar*` 作为基础字符串类型来表示。

尽管大多数平台将宽字符串声明为 `wchar_t*` 或 `L"这是一个宽字符串字面量"` 作为基础字符串类型，但这种声明并不可移植，因为 `sizeof(wchar_t)` 可能是1、2或4字节，而且编码甚至可能不是 Unicode。在 `sizeof(wchar_t)` 为2字节的平台上，`UChar` 被定义为 `wchar_t`。在这种情况下，您可以将 ICU 的字符串与第三方的老式函数一起使用；然而，我们不建议在没有使用 `U_STRING_DECL` 和 `U_STRING_INIT` 宏或 UnicodeString 类的情况下使用 Unicode 字符串，因为它们是平台独立的实现。

#### Unicode 字符串在 ICU4C 中如何表示？

当前，Unicode 字符串表示为 UTF-16。UTF-16 的端序依赖于平台，可以通过使用转换器来保证 UTF-16 的端序正确。UTF-16 字符串可以通过使用转换器或 UTF 转换宏转换为其他 Unicode 格式。

ICU 不使用 UCS-2。UCS-2 是 UTF-16 的一个子集，UCS-2 不支持代理对，而 UTF-16 支持代理对，这意味着 UCS-2 仅支持 UTF-16 的基本多语言平面。UCS-2 的概念已经过时并被淘汰，1996 年的 Unicode 2.0 将其默认编码更改为 UTF-16。

如果您需要在 UTF-16 和 UTF-8、UTF-32 或 `wchar_t` 的编码之间进行快速且简单的转换，您应该查看 `unicode/ustring.h` 。在该头文件中，您将找到 `u_strToWCS` `u_strFromWCS` `u_strToUTF8` `u_strFromUTF8` `u_strToUTF32` 和 `u_strFromUTF32` 函数。这些函数是为了您的便利而提供的，而不是使用 `ucnv_*` API。

您也可以查看 `UTF_*` `UTF8_*` `UTF16_*` 和 `UTF32_*` 宏，它们分别定义在 [unicode/utf.h](https://github.com/unicode-org/icu/blob/main/icu4c/source/common/unicode/utf.h)、[unicode/utf8.h](https://github.com/unicode-org/icu/blob/main/icu4c/source/common/unicode/utf8.h)、[unicode/utf16.h](https://github.com/unicode-org/icu/blob/main/icu4c/source/common/unicode/utf16.h) 和 [unicode/utf32.h](https://github.com/unicode-org/icu/blob/main/icu4c/source/common/unicode/utf32.h) 中。这些宏对于需要操作和处理 Unicode 字符串的开发者来说非常有用。

#### 如何访问 UTF-16 字符串中的字符？

通常，字符串中的索引和偏移量是按码元计数的，而不是按字符计数（尽管在 C 和 Java 中有 char 类型）。

例如，在传统的{多字节字符集:MBCS}字符串中，您要按字节计数索引和偏移量，而不是按可变宽度的字符计数。在 UTF-16 中，您做同样的事情，只是计数 16 位单元（在ICU中：UChar）。

#### UTF-8 和 UTF-16 的性能差异是什么？

大多数情况下，硬盘和内存的吞吐量是主要的性能限制因素。对于 ASCII 字符，UTF-8 比 UTF-16 小 50%，但对于东亚和南亚的文字，UTF-8 比 UTF-16 大 50%。对于拉丁文扩展、希腊文、西里尔文、希伯来文和阿拉伯文，内存上没有差异。

在处理 Unicode 数据时，UTF-16 更容易操作。您可以选择每个字符使用一个或两个单元，而不是在四种长度中选择。UTF-16 也没有非法的码元值，而在 UTF-8 中您可能需要检查非法字节。UTF-16 中的不完整字符序列不那么重要，也更无害。如果您想快速在不同 UTF 编码之间转换短字符串或获取 `UChar32` 值，可以使用 `utf.h` 及其相关文件 `utf8.h` 和 `utf16.h` 中提供的宏。对于较大或部分字符串，请使用转换 API。

#### 转换器如何工作？

转换器的作用类似于流。这意味着在每次调用 `ucnv_fromUnicode()` 和 `ucnv_toUnicode()` 函数后，最后一个字符的状态会保存在转换器中。因此，如果源缓冲区以代理 Unicode 字符对的一部分结束，下一次调用 `ucnv_toUnicode()` 将把等效的字符写入目标缓冲区。详情请见用户指南的 [转换](../conversion/) 章节。

#### ICU 中的区域设置是什么样的？

ICU 区域设置是轻量级的，它们仅由一个字符串表示。许多平台有数字和其他数据结构来表示一个语言环境，但 ICU 只有一个简单的、与平台无关的字符串来表示一个语言环境。

ICU 区域设置字符串通常包含一个 ISO-639 语言名称（2~3 个字符）、一个 ISO-3166 国家名称（2~3 个字符）以及一个用户指定的变体名称。当一种语言或国家不被这些标准所表示时，ICU 使用 3 个字符来表示语言环境的这部分。所有三部分通过下划线分隔。例如，美式英语是 `en_US`，德语且使用欧元符号表示为 `de_DE_EURO` 。传统上，语言环境的语言部分是小写，国家部分是大写，变体是大写。更多细节可从本用户指南的 [区域设置](../locale/) 章节获得。

#### ICU是如何进行版本控制的？

请阅读用户指南中的 [ICU 设计](../icu/design) 章节。

#### ICU 区域设置数据和系统区域设置数据之间有什么关系？

没有关系。ICU 不依赖操作系统来获取区域设置数据。

这也意味着 `uloc_setDefault()` 不会影响操作系统。 `uloc_setDefault()` 函数仅设置 ICU 的默认语言环境。通常，ICU 的默认语言环境是操作系统的默认语言环境。

#### ICU 中的错误处理是如何进行的？

由于并非所有编译器都能处理异常，我们通过带有 `UErrorCode&` 参数的函数返回错误。函数的 `UErrorCode&` 参数将用于保存在执行过程中发生的任何错误。通常在调用函数后检查错误是个好主意，可以使用 `U_SUCCESS` 和 `U_FAILURE` 宏来进行。 `U_SUCCESS` 在函数正常运行时返回 `true` ，而 `U_FAILURE` 在函数未正常运行时返回 `true` 。您可以通过检查错误的确切值来处理特定函数的错误。`UErrorCode` 的可能值位于头文件 [utypes.h](https://github.com/unicode-org/icu/blob/main/icu4c/source/common/unicode/utypes.h) 中。在任何带有 `UErrorCode` 参数的函数被调用之前，它必须被初始化为 `U_ZERO_ERROR` 。

这是使用 `UErrorCode` 的示例：

```cpp
auto err=U_ZERO_ERROR; // U_ZERO_ERROR 是无作用域枚举 UErrorCode 的枚举项
auto xs=icu::UnicodeSet(UNICODE_STRING_SIMPLE("XID_Start"),status);
if(U_FAILURE(err)){
    std::println("callMyFunction() Failed!");
}
```

详情请参阅 [ICU设计](../design/) 章节。

#### 对于日历类，为什么月份是从 · 开始的？

> “我一直在因为 ICU 的日历类而使用它，并且发现它非常好。话虽如此，我想知道为什么决定将月份保持为 `0` 开始，而几乎所有其他日历单元（年份、一年中的周数、一个月中的周数、日期、一年的天数、一周的天数、一个月中的一周的天数）都是 `1` 开始？每当思维不那么敏锐时，这一直是几个错误的原因。” ——贡献者

这不是我们的做的决定，而是 Java Calendar API 的历史遗留问题🥲。

#### 对于想要使用 ICU 的 COBOL 程序是否有指南？

自 ICU 2.2 起就有 COBOL/ICU 指南可用。有关详细信息，请参阅用户指南的 [COBOL](../usefrom/cobol) 部分。

#### 我在哪里可以获得有关使用 ICU 的更多信息？

请给 [ICU4C Support 列表](https://icu.unicode.org/contacts) 发邮件。

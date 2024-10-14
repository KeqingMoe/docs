# 如何使用 ICU

## 概述

ICU 的构建和安装流程是比较标准的。有关构建、安装和移植的详细信息，请参阅 [ICU4C 自述文件](../icu4c/) 和 [ICU4J 自述文件](../icu4j/)。此外，ICU4C 提供了几个脚本和 Makefile，帮助使用 ICU 构建其他代码。

对于 C++，请注意，有 [推荐的构建选项](../icu4c/build#recommended-build-options)（既适用于正常使用，也适用于 ICU 作为系统级库），这些选项不是默认的，只是为了与使用了旧版 ICU 的代码兼容。

从 ICU 49 开始，ICU4C 自述文件有一个关于 [用户可配置设置](../icu4c/build#user-configurable-settings) 的简短部分。

## C++ Makefiles

在 Makefile 中使用 ICU 的推荐方法是使用 ICU 在 `make install` 时安装的 [pkg-config](http://pkg-config.freedesktop.org/) 文件，这优于已弃用的 icu-config 脚本。

此表显示了 pkg-config 中使用的包名称。

| **软件包** | **内容** |
| - | - |
| icu-uc | 通用（uc）和数据（dt/data） |
| icu-i18n | 国际化库（i18n） |
| icu-le | [布局引擎](../layoutengine/) |
| icu-lx | 段落布局 |
| icu-io | [Ustdio](../io/ustdio) / [iostream](../io/ustream) 库 (icuio) |

::: info 译者注
上面的表格在原文档中的结构非常奇怪，我按自己的理解将其进行了重新布局。
:::

例如，要编译一个简单的程序，您可以运行以下命令：

```shell
c++ -o test test.c `pkg-config --libs --cflags icu-uc icu-io`
```

有关更多详细信息，请参阅 [pkg-config](http://pkg-config.freedesktop.org/)。

ICU 将 pkg-config（.pc）文件安装在 `$(prefix)/lib/pkgconfig` 中（其中 `$(prefix)` 是 ICU 的安装路径，在本页的后续部分仍然会大量用到这个路径）。您可能需要将 `$(prefix)/lib/pkgconfig` 添加到 `PKG_CONFIG_PATH` 变量中。

### 在小型项目中使用 ICU

对于小型项目，利用 ICU 的 `autoconf` 生成的文件可能会很方便。运行 `make install` 写入 `$(prefix)/lib/icu/Makefile.inc` ，它定义了很多必要的 *make* 变量，例如 `$(CXX)` 、`$(CXXFLAGS)` 、`$(ICULIBS)` 、`$(INVOKE)` 、`$(ICUPKG)` 、`$(datadir)` ，等等。

就其本身而言， `Makefile.inc` 是不完整的。它假设它将包含在另一个已经定义了 `$(srcdir)` 、`$(DYNAMICCXXFLAGS)` 和类似的值的 `Makefile` 中。

在这种情况下，最好复制 ICU 的 `autoconf` 生成的最外层的 `./Makefile` ，和（或）库目标样式 `i18n/Makefile` ，和（或）二进制目标样式 `tools/icupkg/Makefile`， 然后根据需要修改它们。

### 在中型项目中使用 ICU

如果您使用自己的 `autoconf` 或 `CMake` 或其他配置，请考虑仅 *挑选* 所需的定义，例如特定的 ICU 数据和工具的路径。这通常比采用整个 `Makefile.inc` 并覆盖（许多）不同的定义更好。

对于被挑选出的 ICU 定义，请使用已安装的 `$(prefix)/bin/icu-config` 脚本，其使用方式与 `$(prefix)/lib/icu/Makefile.inc` 相同，例如，使用 `icu-config --invoke=icupkg` 调用 ICU .dat 打包工具。

### 在大型项目中使用 ICU

在这种情况下，您可能有自己的构建系统，则只需使用 ICU 的公共头文件、 `.so` 文件等即可。请参阅下下节“使用您自己的 C++ 构建系统”。

## 关于 `icu-config` 的说明

> :point_right: **注意**：**icu-config 已弃用，不再建议用于生产环境中。请使用 pkg-config 文件或其他选项。**

从 ICU 63.1 开始，[icu-config 已被弃用（ICU-10464）](https://unicode-org.atlassian.net/browse/ICU-10464)，并且将来可能会默认被禁用，您可以使用配置标志 `--enable-icu-config` 或 `--disable-icu-config` 启用或禁用它。

通过 ICU 的 `make install` ， `icu-config` 被安装到 `$(prefix)/bin/icu-config` 中。对于使用 ICU 的 **简单的单文件程序** 来说非常方便。例如，您可以使用以下命令行编译和构建一个小程序：

```shell
icu-config --cxx --cxxflags --cppflags --ldflags -o sample sample.cpp
```

`icu-config` 脚本的详细用法在其 `man` 页面中描述。

## 使用您自己的 C++ 构建系统

如果您不使用标准构建系统，则需要构建自己的系统。以下是几个出发点：

* 至少在 *初始启动* 时，使用来自 ICU 下载或正常构建的 ICU 的预构建数据文件。**将 icudtXXx.dat 文件从 `icu/source/data/in/` 或 `icu/source/data/out/tmp/` 中复制到您的目标系统上的 `icu/source/data/in/` 中。** 这样，您就不需要构建 ICU 的数据生成工具。
* 不要编译所有文件。在 `Makefile.in` 文件中查找 `OBJECTS=` 语句，该语句将指示应编译哪些源文件（某些 `.c` 文件被 `#include` 到其他文件中，不能被独立地编译）。
* ICU4C 不抛出或处理异常。
* 每个 ICU4C 库都需要根据需要使用 `-DU_COMMON_IMPLEMENTATION` 、`-DU_I18N_IMPLEMENTATION` 等进行编译。有关此类宏集，请参阅 `unicode/utypes.h` 。如果为所有 ICU4C 构建一个 DLL（共享库），也请使用 `-DU_COMBINED_IMPLEMENTATION` 。如果将 ICU4C 构建为静态链接库，请使用 `-DU_STATIC_IMPLEMENTATION` 。
* 使用 [icu-support 邮件列表](https://icu.unicode.org/contacts) 寻求帮助和指导。
* 直到 ICU4C 48 之前，有一两个头文件（`platform.h`、`icucfg.h`）是由 `autoconf` 或 `configure` 生成的，因此其内容因平台而异，有时甚至因单个平台上的目标设置而异（例如，AIX 32 位与 64 位、Mac OS X 通用二进制文件 PowerPC 与 x86）。如果您不使用 `autoconf`，您可能需要为您的目标平台配置生成这些头文件并在其中进行选择，或者合并生成的相似的头文件，或者通过其他方式模拟它们的生成。
* 从 ICU4C 49 开始，所有源代码文件都是固定的，而非生成的。特别地， `platform.h` 文件通过 `#if ...` 确定特定于平台的设置。

::: tip 译者注
上面的倒数第二条，原文为“ICU 4.8”，与最后一条对比并查找发行日志后，我确信应该是 48 而非 4.8。第 3 条，原文为“ICU 不抛出异常”，并建议用 gcc 的编译选项关闭异常（我删除了这一句），经简单查证，仅 ICU4C 不抛出异常，ICU4J 还是会抛出异常的，故修改译文。我并不懂 Java，如有错误，欢迎指正。以及，这一部分中其他的将 ICU4C 写成 ICU 的地方也均已修改。
:::

## C++ 命名空间

ICU C++ API 通常在带有版本号的命名空间中定义，例如 `icu_50` 。有一个稳定的命名空间别名 `icu` ，应该使用它来代替（这样做只是为了允许将多个 ICU 版本链接到一个程序中，[它是可选的，并且对于系统库应该关闭](../icu4c/build#recommended-build-options)）。

默认情况下，仅为了 *回溯兼容*，ICU 头文件包含一行 `using namespace icu_50;` ，这使得所有 ICU API 在全局命名空间中可见（并且可能与那里的非 ICU API 发生冲突）。[推荐的构建选项](../icu4c/build#recommended-build-options) 的其中一条便是关闭此功能。

像这样编写前置声明：

```cpp
U_NAMESPACE_BEGIN
class UnicodeSet;
class UnicodeString;
U_NAMESPACE_END
```

要使用 ICU 的类名，请使用 `icu::` ：

```cpp
static myFunction(const icu::UnicodeString &s) {...}
```

使用 using 声明来简化常用类的使用：

```cpp
using icu::UnicodeSet;
using icu::UnicodeString;
```

## 其他注意事项

### 帮助安装实用程序

ICU 会为您安装安装 `$(prefix)/share/icu/$(VERSION)/install-sh` 和 `$(prefix)/share/icu/$(VERSION)/mkinstalldirs` ，这些可以被 ICU 工具和样本使用。

### 数据打包设置

`pkgdata` 工具（参见 [打包 ICU4C](../icu4c/packaging)）利用已安装的文件 `$(prefix)/lib/icu/pkgdata.inc` 设置数据打包操作的参数，这些操作需要使用平台编译器和链接器（在 `static` 或 `dll` 模式下）。 `pkgdata` 使用 icu-config 脚本来定位 **pkgdata.inc**。如果您不使用提供的工具构建 ICU，则可能需要直接修改此文件以允许 `static` 和 `dll` 模式运行。

::: tip 译者注
上面这一段的第一句话的原文过于晦涩，为避翻译造成的语义失真，推荐您看看原文。
:::

### 使用 `icurun` 构建和运行简单的 C / C++ 程序

为了使用已安装的 ICU4C 构建和运行简单的（单个翻译单元）程序，可以使用 shell 脚本 [icurun](https://github.com/unicode-org/icu/blob/main/tools/scripts/icurun)。有关详细帮助，请参阅该脚本的顶部注释。例如，如果 `$(prefix)` 是 `/opt/local` 并且当前目录包含两个示例程序 `test1.cpp` 和 `test2.c` ，则可以使用以下任意命令一条编译运行。 `-i` 选项指定已安装的 `icu-config` 脚本，或包含该脚本的目录，或 `bin` 目录的路径。

```shell
icurun -i /opt/local test1.cpp
icurun -i /opt/local/bin test2.c
icurun -i /opt/local/bin/icu-config test1.cpp
```

如果 `icu-config` 被添加到了环境变量 `PATH` ，则可以省略 `-i` 选项：

```shell
icurun test1.cpp
```

任何额外附加的参数都将传递给程序：

```shell
icurun test1.cpp arg1 arg2 args3
```

```cpp
// ...
int main(int argc,int* argv[])
{
    // ...
    assert(argc==4);
    assert("arg1"sv==argv[1]);
    assert("arg2"sv==argv[2]);
    assert("arg3"sv==argv[3]);
    // ...
}
// ...
```

请向 [icu-support 邮件列表](https://icu.unicode.org/contacts) 提供反馈，并参考 [工单 #8481](https://unicode-org.atlassian.net/browse/ICU-8481)。

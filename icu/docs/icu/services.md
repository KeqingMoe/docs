# ICU 服务

## ICU 服务概述

ICU 使您能够编写独立于（自然）语言的 C / C++ 和 Java 代码，这些代码用于单独的本地化资源以获得特定于语言的结果。ICU 支持许多功能，包括语言敏感的文本、日期、时间、数字、货币、消息排序，还有搜索。ICU 提供的结果因语言制宜。

### 字符串、属性和字符迭代器

ICU 为以下内容提供基本的 Unicode 支持：

* [Unicode 字符串](../strings/)：ICU 中有 UTF-16 字符串和码点的类型定义。它还包含许多用于 C 的 `u_string` 系列函数，和带有许多附加的字符串函数的 C++ `UnicodeString` 类。
* [Unicode 属性](../strings/properties)：ICU 的 `uchar.h` 中定义了一些 C 函数， `utf.h` 中定义了一些宏，还有 C++ Unicode 类。

* [Unicode 字符串迭代](../strings/characteriterator)：在 C 中，ICU 使用 `utf.h` 中的宏来迭代字符串；而在 C++ 中，ICU 使用 `CharacterIterator` 及其派生类。

### 转换的基础知识

转换器用于将文本从一种编码类型转换为另一种编码类型。就 Unicode 而言，ICU 将文本从一种代码页转换为 Unicode，然后再转换回来。编码操作是从给定字符集定义到用于表示数据的实际位的映射。

### 区域设置和资源

ICU 软件包中有区域设置、资源包和实现它们的类，还包含区域设置数据（纯文本资源包），并提供 API 来使用该数据。用户需要理解这些术语以及它们之间的关系。

区域设置表示了一群对计算机交互和数据处理涉及到的文化和语言有相同期望的用户。这是一个很抽象的概念，但可以用以下之一来表达：

区域设置 ID 指定了语言和区域，使软件能够支持每个用户的文化上和语言上适当的信息。一个区域设置对象代表一个特定的地理、政治或文化区域。作为区域ID的程序表达方式，ICU 为 C++ 提供了 `Locale` 类；在 C 语言中，API 使用简单地 C 风格字符串作为区域设置 ID。

ICU 将特定于区域设置的数据存储在资源包中，资源包提供了访问字符串和其他对象的通用机制，以便 ICU 服务根据区域设置执行操作。为了支持多种区域设置，ICU 中包含了用于 ICU 服务的数据，资源包中包含使用 ICU 的应用程序的区域设置数据。在 C++ 中，`ResourceBundle` 实现了区域设置数据；在 C 语言中，此功能由 `ures_` 系列函数提供。

除了将系统级数据存储在 ICU 的资源包中之外，应用程序通常还需要使用自己的资源包来存储与区域设置相关的应用程序数据。ICU 提供通用资源包 API 来访问这些资源包，并提供构建资源包的工具。

> :point_right: **注意**: 向用户显示的字符串应该存储在单独的文件中，而不是嵌入到源代码中。

### 区域设置和服务

区域设置和服务之间的交互是 ICU 的基础，请参阅 [区域设置和服务](../locale/#locales-and-services)。

### 转写

转写最初设计用于将字符从一种文字系统转换为另一种（例如从希腊字母到拉丁字母，或从片假名到拉丁字母）。现在，转写是一个更加灵活的机制，它具有预设的大小写转换、正规化转换、移除特定字符，以及多种语言和文字系统的转写转换。转写可以被串联起来执行一系列操作，并且过程中的每一步都可以使用 UnicodeSet 来限制受影响的字符。

转写器有两种基本类型：

1. 大多数自然语言转写器（如希腊语-拉丁语转写器）是基于规则的。
2. 使用一种语法类似于正则表达式的脚本编写转写器。

### `Date` 和 `Time` 类

日期和时间例程管理使用自 1970 年 1 月 1 日（UTC 时间 0:00:00.000）以来的毫秒数确定时间和日期，在那之前的时间点以负数表示。

ICU 提供以下 [类](../datetime/) 来支持日历和时区：

* [`Calendar`](../datetime/calendar/#calendar) ：用于从 `Date` 值中提取与日历相关的属性的抽象类。
* [`GregorianCalendar`](../datetime/calendar/#gregoriancalendar) ：用于表示公历的具体类。
* [`TimeZone`](../datetime/timezone/#class-time-zone) ：用于表示时区的抽象类。
* [`SimpleTimeZone`](../datetime/timezone/#class-simple-time-zone) ：用于表示与公历一起使用的时区的具体类。

> :point_right: **注意**：C “类”提供与 C++ 类相同的功能，除了不能派生。

### 格式化和解析

格式化器把数据在非文本形式和文本表示之间进行转换，结果是一串代表内部值的文本。如果格式化器找到了它理解的文本表示，它可以将文本表示解析回其内部表示。例如，当格式化器读取字符 1、0 和 3，后面跟着的不是数字时，它会在其内部二进制表示中产生值 103。

格式化器可以接受一个值并生成一个用户可读的字符串来表示该值，或者接受一个字符串并解析它以产生一个值。

ICU为一般格式化、数字格式化、日期和时间格式化以及消息格式化提供了以下类：

#### 一般格式化

有关以下内容的介绍，请参阅 [格式化和解析类](../format/#formatting-and-parsing-classes)：

* `Format`
* `FieldPosition`
* `ParsePosition`
* `Formattable`

#### 数字格式化

* [`NumberFormat`](../format/numbers/legacy-numberformat#numberformat) ： `NumberFormat` 类提供了成员变量和成员函数，用于将数字格式化为本地化字符串或将本地化字符串解析为数字。
* [`DecimalFormat`](../format/numbers/legacy-numberformat#decimalformat) ： `DecimalFormat` 类提供了用于将数字格式化为本地化字符串和将本地化字符串解析为 10 进制数的成员函数。
* [`DecimalFormatSymbols`](../format/numbers/legacy-numberformat#decimalformatsymbols) ： `DecimalFormatSymbols` 类是用于访问本地化数字字符串（例如分组分隔符、小数分隔符和百分号）的具体类。

#### 日期和时间格式化

* [`DateFormat`](../format/datetime/#class-date-format) ： `DateFormat` 类提供了将日期格式化为本地化字符串以及将日期和时间字符串解析为日期的成员变量和成员函数。
* [`SimpleDateFormat`](../format/datetime/#class-simple-date-format) ： `SimpleDateFormat` 是一个具体类，用于将日期格式化为本地化字符串，并使用 `GregorianCalendar` 类将日期和时间字符串解析为日期。
* [`DateFormatSymbols`](../format/datetime/#class-date-format-symbols) ： `DateFormatSymbols` 是一个具体类，用于访问本地化的日期和时间格式字符串，例如月份名称、星期几和时区。

#### 消息格式化

* [`MessageFormat`](../format/messages/#class-message-format) ： `MessageFormat` 是一个具体类，用于生成特定于语言的,包含数字、货币、百分比、日期、时间和字符串变量的消息。
* [`ChoiceFormat`](../format/messages/examples#class-choice-format) ： `ChoiceFormat` 是一个具体类，用于将字符串映射到数字范围并处理消息中的复数单词和名称等。

> :point_right: **注意**：C “类”提供与 C++ 类相同的功能，除了不能派生。

### 搜索和排序

许多说英语母语者都没有意识到，对非英语文本进行排序和搜索并不容易。主要原因是重音，它在不同的语言中具有非常不同的含义，有时甚至在同一种语言中也是如此：

* 许多带重音的字母，例如 café 中的 é，仅仅被视为字母 e 的一个小小的变体。
* 有时，字母的重音形式在比较时被视为一个不同的字母。例如，在丹麦语中，Å 被视为一个独立的字母，排序在 Z 之后。
* 在某些情况下，带重音的字母会被视为两个字母。例如，在传统德语中，ä 被比较时的行为如同两个字母 ae。

搜索和排序是通过使用 `Collator` 类及其派生类 `RuleBasedCollator` 和 `CollationElementIterator` 以及 `CollationKey` 对象进行词语定序来完成的。词语定序决定了两个或更多自然语言字符串的正确排序顺序，还可以确定两个字符串是否在搜索 *意义* 上等价。

`Collator` 类及派生类 `RuleBasedCollator` 用于区域设置敏感的字符串比较，从而对自然语言文本进行排序和搜索。`Collator` 和 `RuleBasedCollator` 类能够区分与基本字符相关联的字符（例如 'a' 和 'b'）、重音标记（例如 'ò'、'ó'）以及大写或小写属性（例如 'a' 和 'A'）。

ICU 提供了以下用于根据特定区域设置的规则对自然语言文本进行排序和搜索的词语定序类：

* [`Collator`](../collation/architecture#class-collator) ：它是所有用于比较字符串的类的抽象基类。
* [`CollationElementIterator`](../collation/architecture#class-collation-element-iterator) ：它是一个迭代器具体类，根据特定的 `Collator` 对象，提供用于遍历一个本地化字符串的每个字符的迭代器。
* [`RuleBasedCollator`](../collation/customization#class-rule-based-collator) ：它是 `Collator` 的唯一内置实现。它提供一个以特定于语言的方式比较字符串的复杂机制，和一个允许用户专门定制排序顺序的接口。
* [`CollationKey`](../collation/architecture#class-collation-key) ：它允许根据特定的 `Collator` 对象把字符串表示为一个键，从而实现快速的排序。

> :point_right: **注意**：C “类”提供与 C++ 类相同的功能，除了不能派生。

### 文本分析

`BreakIterator` 服务可用于格式化和处理文本；定位单词的起始点和结束点；计算单词、句子和段落的数量；以及统计去不同的单词数。具体来说，文本操作可以被用于定位以下语言边界：

* 在屏幕上显示文本、确定文本的位置时，`BreakIterator` 可以执行自动换行以使文本适应边距。
* 确定用户选择的单词的起始点和结束点。
* 计算字位（或字符）、单词、句子或段落的数量。
* 当用户按下键盘上的方向键，使光标向前或向后移动一个字位时，确定应该在内部表示中前进或后退多少。
* 统计文档中不同的单词数。
* 判断一段文本是否只包含一个单词。
* 使每个单词的第一个字母转为大写。
* 从文本中提取特定单词，例如：寻找文档中的第三个字位。

`BreakIterator` 围绕着“迭代器”或“光标”式的接口设计和开发。一个 `BreakIterator` 对象指向文本中的特定位置，可以通过向前或向后移动来搜索文本的边界。

`BreakIterator` 类使得用户可以遍历字符。 `BreakIterator` 可以找到字符、单词、句子或潜在的换行边界的位置。这使得程序能够正确选择字符，例如突出显示一个字符、剪切一个单词、移动到下一个句子，或在行尾换行。 `BreakIterator` 以区域设置敏感的方式执行这些操作，也就是说它根据特定的区域设置 ID 识别文本边界。

ICU 提供以下类来迭代特定于语言环境的文本：

* [`BreakIterator`](../boundaryanalysis/#class-break-iterator) ：定义了在文本字符串中查找和获取逻辑断句位置——字符、单词、句子和潜在的换行位置——的操作的抽象基类。
* [`CharacterIterator`](../strings/characteriterator) ：用于对 Unicode 字符串向前或向后迭代的抽象基类。
* [`StringCharacterIterator`](../strings/characteriterator#class-string-character-iterator) ：用于对 Unicode 字符字符串进行前向和后向迭代的具体类。 `StringCharacterIterator` 是 `CharacterIterator` 的派生类。

### 段落布局

有关更多详细信息，请参阅 [段落布局](../layoutengine/paragraph)。

## 与区域设置相关的操作

许多 ICU 类都是区域设置敏感的，这意味着你必须为每个区域设置创建一个不同的对象：

| C 函数系列 | C++ 类 | 描述 |
| - | - | - |
| `ubrk_` | `BreakIterator` | `BreakIterator` 类实现了查找文本中边界位置的成员函数。 |
| `ucal_` | `Calendar` | `Calendar` 类是一个抽象基类，它在 `UDate` 对象和一个整数元组（例如 `YEAR` `MONTH` `DAY` `HOUR` 等）之间进行转换。 |
| `umsg.h` | `ChoiceFormat` | `ChoiceFormat` 类允许开发者根据数字的值选择不同的格式或字符串。 |
| `ucol_` | `CollationElementIterator` | `Collat​​ionElementIterator` 类用作迭代器来遍历字符串的每个字符。 |
| `ucol_` | `CollationKey` | `CollationKey` 类生成词语定序用到的键。 |
| `ucol_` | `Collator` | `Collat​​or` 类执行区域设置敏感的字符串比较。 |
| `udat_` | `DateFormat` | `DateFormat` 是一系列类的抽象类，它可以将日期和时间从内部表示转换为语言无关的文本形式，也可以反之。 |
| `udat_` | `DateFormatSymbols` | `DateFormatSymbols` 是一个公共类，它封装了本地化的日期和时间格式化数据，也包括时区信息。 |
| `unum_` | `DecimalFormatSymbols` | 这个类是 `DecimalFormat` 格式化数字所需的符号集合。 |
| `umsg.h` | `Format` | `Format` 类是所有格式化类的基类。 |
| `ucal_` | `GregorianCalendar` | `GregorianCalendar`是一个具体类，它提供了许多地区使用的公历。 |
| `uloc_` | `Locale` | `Locale` 对象代表特定的地理、政治或文化区域。 |
| `umsg.h` | `MessageFormat` | `MessageFormat` 提供了一种以语言无关的方式生成连接消息的方法。 |
| `unum_` | `NumberFormat` | `NumberFormat` 是所有数字格式化类的基类。 |
| `ures_` | `ResourceBundle` | `ResourceBundle` 提供了一种访问特定于区域设置的信息的方法。 |
| `ucol_` | `RuleBasedCollator` | `RuleBasedCollator` 提供了使用 *表* 实现 `Collator` 类的方法。 |
| `udat_` | `SimpleDateFormat` | `SimpleDateFormat` 是一个用于以独立于语言的方式格式化和解析日期的具体类。 |
| `ucal_` | `SimpleTimeZone` | `SimpleTimeZone` 是 `TimeZone` 的派生类，表示与公历一起使用的时区。 |
| `usearch_` | `StringSearch` | `StringSearch` 提供了一种以区域设置敏感的方式搜索文本的方法。 |
| `ucal_` | `TimeZone` | `TimeZone` 表示时区偏移和夏令时。 |

## 与区域设置无关的操作

以下 ICU 服务可以在所有区域设置中使用，因为它们提供与区域设置无关的服务，用户无需指定区域 ID：

| C 函数系列 | C++ 类 | 描述 |
| - | - | - |
| `ubidi_` | `UBiDi` | `UBiDi` 用于实现 Unicode BiDi 算法。 |
| `utf.h` | `CharacterIterator` | `CharacterIterator` 是一个抽象类，定义了用于文本对象迭代的 API，是用于迭代和随机访问文本对象的接口。此外，它还提供对 Java 和较旧的 ICU `CharacterIterator` 类的回溯兼容。 |
| N/A | `Formattable` | `Formattable` 是一个轻量级的包装类，它在原始数值类型（如 `double` `long` 等）和 `UDate` 及 `UnicodeString` 类之间进行转换。 `Formattable` 对象可以传递给 `Format` 类或其派生类进行格式化。 |
| `unorm_` | `Normalizer` | `Normalizer` 将 Unicode 文本转换为等价的组合或分解形式，以便更容易地对文本进行排序和搜索。 |
| N/A | `ParsePosition` | `ParsePosition` 是一个简单的类， `Format` 类及其派生类在解析过程中用它来跟踪当前位置。 |
| `uidna_` |  | RFC 3490 中定义的 IDNA 协议的实现。 |
| `utf.h` | `StringCharacterIterator` | `CharacterIterator` 的派生类，用于迭代 `UnicodeString` 中的字符（码元或码点）。 |
| `utf.h` | `UCharCharacterIterator` | `CharacterIterator` 的派生类，用于迭代 `UChar` 数组中的字符（码元或码点）。 |
| `uchar.h` |  | Unicode 字符属性 API 允许你查询与单个 Unicode 字符值相关联的属性。 |
| `uregex_` | `RegexMatcher` | `RegexMatcher` 实现了正则表达式。 |
| `utrans_` | `Transliterator` | `Transliterator` 是一个抽象类，可以把文本从一种格式转写成另一种。 |
| `uset_` | `UnicodeSet` | `UnicodeSet` 对象表示正则表达式中的字符类别，是一组可变的 Unicode 字符，这些类别指定 Unicode 字符集的子集。 |
| `ustring.h` | `UnicodeString` | `UnicodeString` 是一个直接存储 Unicode 字符的字符串类，也是抽象类 `Replaceable` 派生出的一个具体实现。 |
| `ushape.h` |  | 提供阿拉伯字符及其表示形式之间的转换操作。 |
| `ucnv_` |  | Unicode 转换 API 允许您将其他编码的数据与 UTF-16 相互转换。 |

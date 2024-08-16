# 演示

## ICU4C 演示

[ICU 演示列表](https://icu4c-demos.unicode.org/icu-bin/icudemos)

## ICU4J 演示

### 服务端演示

#### 网页端演示

这些演示在 ICU 服务器上运行，并实现为 Java Servlet 和 JSP 页面。

* [浏览演示](http://demo.icu-project.org/icu4jweb/)
* [查看演示源代码](https://github.com/unicode-org/icu-demos/tree/master/icu4jweb/)

### 客户端演示

#### 构建方法

1.  下载 ICU4J 源代码（参见 [源代码设置](devsetup/source/)）
2.  运行 `ant jar` 来构建 ICU4J jar
3.  运行 `ant jarDemos` 来构建演示
4.  运行 `cp icu4j.jar demos/out/lib`
5.  最后，运行 `java -jar demos/out/lib/icu4j-demos.jar` 来启动

ICU4J 的演示有：

1. **CalendarApp**：该演示将两个日历相互进行比较，从弹出菜单中选择日历类型和语言，使用 < 和 > 按钮切换到昨天或明天，或使用 << 和 >> 按钮切换到去年或明年。
2. **Translit**：此演示向您展示 ICU 的转写，它将使用您在菜单中选择的模式对您的输入进行转写。
3. **HolidayCalendarDemo**：该演示显示特定区域的节假日，并显示为您选择的语言，使用 < 和 > 按钮切换到昨天或明天，或使用 << 和 >> 按钮切换到去年或明年。
4. **RbnfDemo**：该演示展示了基于规则的数字格式化。请最大化窗口，然后在左上角输入数字，也可以使用导航按钮，右上角的弹出菜单将选择所使用的规则和变体。
5. **DetectingViewer**：点击“打开文件”或“打开 URL”打开文档，猜测文件使用的编码，使用 DetectedEncodings 菜单查看检测到的编码。

> :point_right: **注意**：由于安全限制，您必须下载 Jar 文件到本地才能读取您的硬盘上的文件。Java Web Start 应用程序不能读取本地文件。

### ICU 入门小程序

#### 关于小程序

这是一篇介绍 ICU 日历的文章，全文中都有实时小程序来演示各种功能。

该文章已被归档，请参阅 <https://github.com/unicode-org/icu-demos/pull/5>。

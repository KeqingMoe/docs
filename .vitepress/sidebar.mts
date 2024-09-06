export default {
    '/': [{
        text: '这是什么？',
        link: '/readme',
        items: [
            { text: '目录', link: '/contents' },
            { text: '关于', link: '/about' }
        ]
    }],
    '/icu/': [
        {
            text: '返回目录',
            link: '/contents'
        },
        {
            collapsed: true,
            text: 'ICU 中文文档',
            link: '/icu/',
            items: [
                { text: '术语表', link: '/icu/glossary' },
                {
                    collapsed: true,
                    text: 'Github 上的 ICU',
                    link: '/icu/github/',
                    items: [
                        { text: '自述文件', link: '/icu/github/' },
                        { text: '许可证', link: '/icu/github/LICENSE' },
                        { text: '为 ICU 做出贡献', link: '/icu/github/CONTRIBUTING' }
                    ],
                },
                {
                    collapsed: true,
                    text: 'ICU 文档翻译',
                    link: '/icu/docs/',
                    items: [
                        { text: 'ICU 用户指南', link: '/icu/docs/userguide' },
                        {
                            collapsed: true,
                            text: 'ICU',
                            link: '/icu/docs/icu/',
                            items: [
                                { text: '国际化', link: '/icu/docs/icu/i18n' },
                                { text: '如何使用 ICU', link: '/icu/docs/icu/howtouseicu' },
                                { text: 'Unicode 基础知识', link: '/icu/docs/icu/unicode' },
                                { text: 'ICU 服务', link: '/icu/docs/icu/services' },
                                { text: 'ICU 设计', link: '/icu/docs/icu/design' },
                                { text: '从 C 或 POSIX 迁移', link: '/icu/docs/icu/posix' },
                                { text: '发行版信息', link: '/icu/docs/icu/release' },
                                { text: '术语表', link: '/icu/docs/icu/glossary' }
                            ]
                        },
                        { text: '演示', link: '/icu/docs/demos' },
                        {
                            collapsed: true,
                            text: 'ICU4C',
                            link: '/icu/docs/icu4c/',
                            items: [
                                { text: 'ICU4C 常见问题与解答', link: '/icu/docs/icu4c/faq' },
                                { text: '构建 ICU4C', link: '/icu/docs/icu4c/build' },
                                { text: '打包 ICU4C', link: '/icu/docs/icu4c/packaging' },
                                { text: '插件', link: '/icu/docs/icu4c/plug-ins' },
                            ]
                        },
                        {
                            collapsed: true,
                            text: 'ICU4J',
                            link: '/icu/docs/icu4j/',
                            items: [
                                { text: 'ICU4J 常见问题与解答', link: '/icu/docs/icu4j/faq' },
                                { text: 'ICU4J 区域设置服务提供者', link: '/icu/docs/icu4j/locale-service-provider' },
                                { text: '为什么使用 ICU4J？', link: '/icu/docs/icu4j/why-use-icu4j.md' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '字符和字符串',
                            link: '/icu/docs/strings/',
                            items: [
                                { text: 'UTF-8', link: '/icu/docs/strings/utf-8' },
                                { text: '属性', link: '/icu/docs/strings/properties' },
                                { text: '字符迭代器', link: '/icu/docs/strings/characteriterator' },
                                { text: 'UText', link: '/icu/docs/strings/utext' },
                                { text: 'UnicodeSet', link: '/icu/docs/strings/unicodeset' },
                                { text: '正则表达式', link: '/icu/docs/strings/regexp' },
                                { text: 'StringPrep', link: '/icu/docs/strings/stringprep' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '转换',
                            link: '/icu/docs/conversion/',
                            items: [
                                { text: '转换器', link: '/icu/docs/conversion/converters' },
                                { text: '转换数据', link: '/icu/docs/conversion/data' },
                                { text: '字符集探测', link: '/icu/docs/conversion/detection' },
                                { text: '比较', link: '/icu/docs/conversion/compression' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '本地化和资源',
                            link: '/icu/docs/locale/',
                            items: [
                                { text: '本地化样例', link: '/icu/docs/locale/examples' },
                                { text: '资源', link: '/icu/docs/locale/resources' },
                                { text: '使用 ICU 进行本地化', link: '/icu/docs/locale/localizing' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '日期或时间',
                            link: '/icu/docs/datetime/',
                            items: [
                                { text: '日历服务', link: '/icu/docs/datetime/calendar/' },
                                { text: '日历的样例', link: '/icu/docs/datetime/calendar/examples' },
                                { text: 'TimeZone 类', link: '/icu/docs/datetime/timezone/' },
                                { text: '日期和时区的样例', link: '/icu/docs/datetime/timezone/examples' },
                                { text: '世界时标', link: '/icu/docs/datetime/universaltimescale' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '格式化',
                            link: '/icu/docs/format/',
                            items: [
                                {
                                    collapsed: true,
                                    text: '数字格式化',
                                    link: '/icu/docs/format/numbers/',
                                    items: [
                                        { text: '老式 NumberFormat', link: '/icu/docs/format/numbers/legacy-numberformat' },
                                        { text: '舍入模式', link: '/icu/docs/format/numbers/rounding-modes' },
                                        { text: '数字结构', link: '/icu/docs/format/numbers/skeletons' },
                                        { text: 'FormattedValue', link: '/icu/docs/format/numbers/formatted_value' },
                                        { text: '基于规则的数字格式化', link: '/icu/docs/format/numbers/rbnf' },
                                        { text: '基于规则的数字格式化的样例 ', link: '/icu/docs/format/numbers/rbnf-examples' }
                                    ]
                                },
                                {
                                    collapsed: true,
                                    text: '日期和时间格式化',
                                    link: '/icu/docs/format/datetime/',
                                    items: [
                                        { text: '日期和时间格式化的样例', link: '/icu/docs/format/datetime/examples' }
                                    ]
                                },
                                {
                                    collapsed: true,
                                    text: '消息格式化',
                                    link: '/icu/docs/format/messages/',
                                    items: [
                                        { text: '消息格式化的样例', link: '/icu/docs/format/messages/examples' },
                                        { text: '消息格式化 2.0', link: '/icu/docs/format/messages/mf2' }
                                    ]
                                }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '变换',
                            link: '/icu/docs/transforms/',
                            items: [
                                { text: '大小写变换', link: '/icu/docs/transforms/casemappings' },
                                { text: 'Bidi 算法', link: '/icu/docs/transforms/bidi' },
                                { text: '正规化', link: '/icu/docs/transforms/normalization' },
                                { text: '通用转换', link: '/icu/docs/transforms/general' },
                                { text: '转换规则教程', link: '/icu/docs/transforms/rules' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '词语定序',
                            link: '/icu/docs/collation/',
                            items: [
                                { text: '概念', link: '/icu/docs/collation/concepts' },
                                { text: '架构', link: '/icu/docs/collation/architecture' },
                                { text: '自定义', link: '/icu/docs/collation/customization' },
                                { text: '字符串搜索', link: '/icu/docs/collation/string-search' },
                                { text: '词语定序的常见问题与解答', link: '/icu/docs/collation/faq' },
                                { text: 'API 详情', link: '/icu/docs/collation/api' },
                                { text: '词语定序的样例', link: '/icu/docs/collation/examples' },
                                { text: '“忽略标点符号”选项', link: '/icu/docs/collation/ignorepunct' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '文本边界分析',
                            link: '/icu/docs/boundaryanalysis/',
                            items: [
                                { text: '断句规则', link: '/icu/docs/boundaryanalysis/break-rules' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '输入输出',
                            link: '/icu/docs/io/',
                            items: [
                                { text: '如同 stdio 的接口', link: '/icu/docs/io/ustdio' },
                                { text: '如同 iostream 的接口', link: '/icu/docs/io/ustream' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '布局引擎',
                            link: '/icu/docs/layoutengine/',
                            items: [
                                { text: '段落布局', link: '/icu/docs/layoutengine/paragraph' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: 'ICU 数据库',
                            link: '/icu/docs/icu_data/',
                            items: [
                                { text: 'ICU 数据库构建工具', link: '/icu/docs/icu_data/buildtool' },
                                { text: '资源和数据跟踪', link: '/icu/docs/icu_data/tracing' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '其他编程语言语言调用 ICU4C 的接口',
                            link: '/icu/docs/usefrom/',
                            items: [
                                { text: 'Cobol', link: '/icu/docs/usefrom/cobol' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '设计文档',
                            link: '/icu/docs/design/',
                            items: [
                                { text: '自定义正规化', link: '/icu/docs/design/custom-normalization' },
                                {
                                    collapsed: true,
                                    text: '数据结构',
                                    link: '/icu/docs/design/struct/',
                                    items: [
                                        { text: '字节字典树', link: '/icu/docs/design/struct/bytestrie' },
                                        { text: 'ICU 码点字典树', link: '/icu/docs/design/struct/utrie' },
                                        { text: 'ICU 字符串字典树', link: '/icu/docs/design/struct/tries' },
                                        { text: 'Unicode 字符字典树', link: '/icu/docs/design/struct/ucharstrie' }
                                    ]
                                },
                                { text: '预解析的 Unicode 字符数据库', link: '/icu/docs/design/ppucd' },
                            ]
                        },
                        {
                            collapsed: true,
                            text: '贡献者',
                            link: '/icu/docs/dev/',
                            items: [
                                { text: '代码规范', link: '/icu/docs/dev/codingguidelines' },
                                { text: '持续整合', link: '/icu/docs/dev/ci' },
                                { text: '自定义 ICU4C 同步', link: '/icu/docs/dev/custom' },
                                { text: '为 ICU API 开发模糊测试目标', link: '/icu/docs/dev/fuzzer_targets' },
                                {
                                    collapsed: true,
                                    text: '发行 & 里程碑',
                                    link: '/icu/docs/dev/release/',
                                    items: [
                                        { text: '公告', link: '/icu/docs/dev/release/announce.md' },
                                        { text: 'API & 文档', link: '/icu/docs/dev/release/docs' },
                                        { text: '构建更新', link: '/icu/docs/dev/release/build' },
                                        { text: '复制共享测试', link: '/icu/docs/dev/release/copy-shared-tests' },
                                        { text: '健康的代码', link: '/icu/docs/dev/release/healthy-code' },
                                        { text: '集成测试', link: '/icu/docs/dev/release/integration' },
                                        { text: '法律问题', link: '/icu/docs/dev/release/legal' },
                                        { text: '维护版本发行流程', link: '/icu/docs/dev/release/maintenance-releases' },
                                        { text: '杂项', link: '/icu/docs/dev/release/miscellaneous' },
                                        { text: '发布', link: '/icu/docs/dev/release/publish' },
                                        { text: '发行构建', link: '/icu/docs/dev/release/release-build' },
                                        { text: '标准更新', link: '/icu/docs/dev/release/standards' },
                                        { text: '通用当地数据存储库集成', link: '/icu/docs/dev/release/cldr-icu' },
                                        { text: '更新计量单位', link: '/icu/docs/dev/release/updating-measure-unit' },
                                        { text: 'Unicode 更新', link: '/icu/docs/dev/release/unicode-update' },
                                        { text: '版本号', link: '/icu/docs/dev/release/versions' }
                                    ]
                                },
                                { text: '跳过已知的测试错误', link: '/icu/docs/dev/logknownissue' },
                                { text: '同步 Issues', link: '/icu/docs/dev/sync' },
                                { text: '更新 ICU 内置的断句迭代器规则', link: '/icu/docs/dev/rules_update' },
                                { text: '编辑 ICU 用户指南', link: '/icu/docs/dev/editing' },
                                { text: 'ICU 开发者使用的 Git 和 GitHub', link: '/icu/docs/dev/gitdev' }
                            ]
                        },
                        {
                            collapsed: true,
                            text: '贡献者该如何配置',
                            link: '/icu/docs/devsetup/',
                            items: [
                                {
                                    collapsed: true,
                                    text: 'C++ 配置',
                                    link: '/icu/docs/devsetup/cpp/',
                                    items: [
                                        { text: 'Linux 上的 C++ 配置', link: '/icu/docs/devsetup/cpp/linux' },
                                        { text: '为 ICU4C 配置 VS Code', link: '/icu/docs/devsetup/cpp/vscode' },
                                        { text: '使用 callgrind 对 ICU4C 进行性能分析', link: '/icu/docs/devsetup/cpp/callgrind' }
                                    ]
                                },
                                {
                                    collapsed: true,
                                    text: 'Java 配置',
                                    link: '/icu/docs/devsetup/java/',
                                    items: [
                                        { text: 'Java 的 Ant 配置', link: '/icu/docs/devsetup/java/ant' },
                                        { text: '使用 Ant 的 Java 开发者的 Eclipse 配置', link: '/icu/docs/devsetup/java/eclipse-setup-for-java-developers' },
                                        { text: 'Java 分析和监控工具', link: '/icu/docs/devsetup/java/java-profiling-and-monitoring-tools' },
                                        { text: 'Java 的 Maven 配置', link: '/icu/docs/devsetup/java/maven' }
                                    ]
                                },
                                {
                                    collapsed: true,
                                    text: '源代码配置',
                                    link: '/icu/docs/devsetup/source/',
                                    items: [
                                        { text: '针对 Git 和 GitHub 的本地工具配置', link: '/icu/docs/devsetup/source/gittooling' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
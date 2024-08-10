export default {
    '/': [{
        text: '中心',
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
            text: 'ICU: 用于 Unicode 的国际化组件',
            link: '/icu/',
            items: [
                { text: '许可证', link: '/icu/LICENSE' },
                { text: '为 ICU 做出贡献', link: '/icu/CONTRIBUTING' },
                { text: '术语表', link: '/icu/glossary' }
            ],
        }
    ]
};
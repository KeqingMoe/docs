# 主题配置

主题的基本配置放在 `.vitepress/theme/iro.ts` 下，您可以打开并编辑它。 `iro.ts` 默认导出一个符合 `IroConfig` 接口的对象，该接口如下所示：

```ts
/** VitePress 主题 Sakurairo 的配置类型 */
interface IroConfig {
    /** 网站标题 */
    title:string;
    /** 网站标题后缀 */
    titleTemplate?:string;
    /** 网站描述 */
    description: string;
    /** 网页图标的 url，直接作为 link 元素的 href 属性值 */
    favicon: string;
    /** 导航菜单图标的 url，直接作为 img 元素的 src 属性值 */
    titleIcon: string;
    /** 网站拥有者的头像的 url，直接作为 img 元素的 src 属性值，会在主页展示 */
    avatar: string;
    /** 纯文本， html 不起作用 */
    signature: string;
    /** 封面设置 */
    cover: {
        /** 首页封面图片，固定图片或随机图片 */
        background: {
            /** 为 true 时使用随机图片 */
            random?: boolean;
            /** 桌面端图片 URL，直接填入 CSS url(...) 中 */
            desktop: string;
            /** 移动端图片 URL，直接填入 CSS url(...) 中 */
            mobile: string;
        };
    };
    /** 导航栏相关设置 */
    nav?: {
        /** 导航栏显示的链接 */
        links?: {
            /** 链接的提示文本 */
            title: string;
            /** 链接的 url，直接作为 a 元素的 href 属性值 */
            url: string;
        }[];
    };
    /**
     * 拼接出用于搜索的 url，例如 https://example.com/search?s=keyword
     * 请看各属性的注释。没有该属性则不会显示搜索框
     */
    search?: {
        /**
         * 搜索 url 的 pathname 部分，默认为 `search` 
         * 不要带前面的斜杠，除非搜索 url 的 pathname 是根目录
         */
        path?: string;
        /** 搜索 url 的 param 部分，默认为 `s` */
        param?: string;
    };
    /** 社交网络链接 */
    social?: {
        /**
         * 图标包集引用链接
         * 默认为 WP 主题 Sakurairo 的图标包集
         * https://s.nmxc.ltd/sakurairo_vision/@2.6/display_icon/
         */
        iconUrl?: string;
        /**
         * 图标包，不填默认为 `sakura` 。可能的值可以是：
         * @enum `sakura`: 樱花配色
         * @enum `fluent_design`: 流畅设计
         * @enum `muh2`: 沐氢图标
         * @enum `flat_colorful`: 扁平多彩
         * @enum `macaronblue`: 马卡龙蓝
         * @enum `macarongreen`: 马卡龙绿
         * @enum `macaronpurple`: 马卡龙紫
         * @enum `pink`: 初始粉色
         * @enum `orange`: 阳光橙色
         * @enum `sangosyu`: 珊瑚朱色
         * @enum `sora`: 传统空色
         * @enum `nae:` 新生苗色
         */
        iconPkg?: string;
        links?: {
            /**
             * 图标的名字，可能的值可以是：
             * @enum `mail`: E-mail 图标
             * @enum `github`: GitHub 图标
             * @enum `tg`: Telegram 图标
             * @enum `zhihu`: 知乎图标
             * @enum `book`: 简书图标
             * @enum `st`: Steam 图标
             * @enum `lofter`: Lofter 图标
             * @enum `ncm`: 网易云音乐图标 
             * @enum `bilibili`: 哔哩哔哩图标 
             * @enum `lk`: 领英图标
             * @enum `tw`: 原 Twitter 图标
             * @enum `fb`: Facebook 图标
             * @enum `qq`: QQ 图标
             * @enum `qz`: QQ 空间图标
             * @enum `wechat`: 微信图标
             * @enum `youku`: 优酷图标 
             * @enum `weibo`: 微博图标
             * @enum `csdn`: CSDN 图标
             * @enum `custom`: 使用 `iconUrl` 提供的图标
             */
            icon: string;
            /** 自定义图标的 url，直接作为 img 的 src 属性值 */
            iconUrl?: string;
            /**
             * 社交网络链接的 url
             */
            link: string;
            /** 提示文本 */
            name: string;
        }[];
    };
    footer?: {
        /** 页脚内容，可以填 html */
        content?: string;
        /** 在设置了 iro-footer 插槽后，用来决定 content 是否放在插槽前面 */
        beforeSlot?: boolean;
    };
    error404?: {
        /** 404 页面标题，可以填 html */
        title?: string;
        /* 404 页面文本，可以填 html */
        text?: string;
    };

    /**
     * 主题样式
     * @tutorial 属性值 会被直接写入 css 中，请按 css 的写法来写吧！
     */
    style: {
        /**主题色 */
        themeSkin: string;
        /**主题搭配色 */
        themeSkinMatching: string;
        /** 深色模式主题色 */
        themeSkinDark: string;
        /** 小组件面板按钮圆角 */
        menuRadius: string;
        /** 小组件面板组件圆角 */
        menuSelectionRadius: string;
    };
};
```

通过按照上面的接口编写 `iro.ts` ，您就可以对 Sakurairo 做简单的配置了。

## 全局配置

通过填写 `title` `titleTemplate` 和 `description`  属性，您可以定义网站的标题、标题模板和描述，这与 VitePress 默认主题的对应配置项的行为相同。

`favicon` 属性是网站的图标的 url，直接填写到 `<link rel="icon" href="放在这里" />` 的 href 属性值。

## 首页配置

`avatar` 属性是网站拥有者的头像的 url，直接作为 img 元素的 src 属性值。该图片会展示在首页中间的封面部分。

`signature` 属性是网站首页封面中间显示的签名，值为纯文本，不允许 HTML。如果确实有使用 HTML 的需求，请参考 [使用插槽](customizing#use-slots)。

`cover.backgound` 属性是封面的背景图片相关的配置：

- `random` 属性：
  - 为 `false` 时，使用固定图片
  - 为 `true` 时，使用随机图片 API，可以前后切换
- 封面图片的 url：
    - 在桌面端设备上，使用 `cover.background.desktop` 的值
    - 在移动端设备上，使用 `cover.background.mobile` 的值

### 自定义导航栏

Sakurairo 具有一个顶部导航栏，并且得益于 CSS 响应式布局，当窗口宽度不超过 `860px` 时，会将顶部导航栏的大部分显示内容挪动到侧边导航栏（移动端导航栏）。

`titleIcon` 属性是导航菜单的图标，它是一个 url，将会被直接作为 img 元素的 src 属性值。该图标会展示在顶部导航栏的左边或者侧边导航栏的上方。

### 自定义导航栏

`nav.links` 是一个数组，每个元素有一个 `title` 属性，表示导航栏项目的标题，还有一个 `url` 属性则是对应的页面的 url（可以不指向站内）。

### 自定义搜索功能

通过拼合 `search.path` `search.param` 和搜索内容，搜索功能将会跳转至被拼合出的 url 指向的页面。例如：

```ts
// ...
export default {
    // ...
    search: {           // [!code ++]
        path: 'search', // [!code ++] // [!code focus]
        param: 's'      // [!code ++] // [!code focus]
    },                  // [!code ++]
    // ...
} satisfies IroConfig;
```

这样配置，则当搜索时，会跳转至 `http(s)://您的域名/search?s=搜索内容` 。

### 配置社交网络链接

社交网络链接将会显示在首页封面的签名的下方处。

`social.iconUrl` 是一系列社交网络图标包的所在处，它默认引用 WordPress 主题 Sakurairo 的图标包。

`social.iconPkg` 为选用的图标包的 ID，可能的值为：

- `sakura` : 樱花配色，也是默认值
- `fluent_design` : 流畅设计
- `muh2` : 沐氢图标
- `flat_colorful` : 扁平多彩
- `macaronblue` : 马卡龙蓝
- `macarongreen` : 马卡龙绿
- `macaronpurple` : 马卡龙紫
- `pink`: 初始粉色
- `orange`: 阳光橙色
- `sangosyu` : 珊瑚朱色
- `sora` : 传统空色
- `nae` : 新生苗色

`iro.links` 是一个数组，每个数组代表一个社交网络链接，其各个的用法为：

- 图标的名字，可能的值可以是：
- `mail`: E-mail 图标
- `github`: GitHub 图标
- `tg`: Telegram 图标
- `zhihu`: 知乎图标
- `book`: 简书图标
- `st`: Steam 图标
- `lofter`: Lofter 图标
- `ncm`: 网易云音乐图标 
- `bilibili`: 哔哩哔哩图标 
- `lk`: 领英图标
- `tw`: 原 Twitter 图标
- `fb`: Facebook 图标
- `qq`: QQ 图标
- `qz`: QQ 空间图标
- `wechat`: 微信图标
- `youku`: 优酷图标 
- `weibo`: 微博图标
- `csdn`: CSDN 图标
- `custom`: 使用 `iconUrl` 提自己看着吃饭时间吃以下供的图标真理

## 页脚配置

在 `footer.content` 填写的内容（接受 HTML 并正常渲染）。

当您 [使用插槽](customizing#use-slots) `iro-footer` 时，可以通过设置 `footer.beforeSlot` 设置这个插槽在页脚文本的前面还是后面（也有可能是熟人）。

## 404 页面

`error404.title` 是 404 页面的标题，可以填写 HTML。

`error404.text` 是 404 页面的内容。可以填写 HTML。

## CSS 配置

这一部分对应着原 WordPress 主题 Sakurairo 的主题色选择等。这一部分过于繁琐，有些不适应。请直接参考现代和编译原理。

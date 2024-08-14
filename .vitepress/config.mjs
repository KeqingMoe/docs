import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'
import { ruby } from "@mdit/plugin-ruby";
import dirmap from './dirmap.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "KeqingMoe Docs",
    description: "一些文档",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '目录', link: '/contents' }
        ],

        sidebar,

        socialLinks: [
            {
                icon: {
                    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-substack" viewBox="0 0 16 16"><path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"/></svg>`
                },
                link: 'https://keqing.moe'
            },
            { icon: 'github', link: 'https://github.com/keqingmoe' }
        ],

        footer: {
            copyright: "Copyright© 2024 KeqingMoe",
            message: `基于 VitePress | <a href="https://keqing.moe">前往主站</a>`
        },

        outline: {
            level: 'deep',
            label: '页面导航'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        notFound:{
            title: '页面不存在，也许将来会存在',
            quote: '但只要你不改变方向，继续寻找，你终将到达你要去的地方。',
            linkText: '回到首页',
            linkLabel: '回到首页'
        },
        search: {
            provider: 'local',
            options:{
                locales:{
                    root:{
                        translations:{
                            button:{
                                buttonText: '搜索',
                                buttonAriaLabel: '搜索'
                            },
                            modal:{
                                noResultsText: '无法找到结果',
                                resetButtonTitle: '清空搜索内容',
                                footer:{
                                    selectText:'选择',
                                    navigateText:'切换',
                                    closeText:'关闭'
                                },
                                displayDetails:'显示细节',
                                backButtonTitle:'返回',
                                
                            }
                        }
                    }
                }
            }
        },

        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'

    },
    locales:{
        root:{
            label:'简体中文',
            lang:'zh'
        }
    },
    cleanUrls: true,
    ignoreDeadLinks:true,
    markdown:{
        config:md=>{
            md.use(ruby);
        },
        math:true
    },
    sitemap:{
        hostname:'https://docs.keqing.moe'
    },
    lastUpdated:true,
    transformPageData(pageData){
        const catagory=dirmap[pageData.filePath.split('/')[0]];
        if(catagory){
            pageData.title=`${pageData.title} - ${catagory}`;
        }
    }
})

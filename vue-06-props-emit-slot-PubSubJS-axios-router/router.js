(function(){
    window.router =  new VueRouter({
        // 全局配置router-link标签生成的css类名
        linkActiveClass: 'active',
        routes: [
            {
                path: '/',
                component: AppHome
            },
            {
                path: '/news',
                component: News,
                children: [
                    // 当匹配到/news/sport请求时
                    // 组件Sport会被渲染在News组件中的<router-view></router-view>中
                    {
                        path: '/news/sport',
                        component: Sport,
                        children: [ //用于验证"路由组件传递数据"
                            {
                                path: '/news/sport/detail/:id', //:id路径变量占位符
                                component: SportDetail
                            }
                        ]
                    },
                    // 简写方式，等价于/news/tech路径。注意前面没有'/',若有，表示根目录
                    {
                        path: 'tech',
                        component: Tech,
                        children: [
                            {
                                path: '/news/tech/detail/:id',
                                component: TechDetail
                            }
                        ]
                    },
                    // 若path没有对应的路径，则将路径重定向到'/news/sport'
                    // 表示默认选中"运动"
                    {
                        path: '',
                        redirect: '/news/sport'
                    }
                ]
            },
            {
                path: '/about',
                component: About
            }
        ]
    });
})()
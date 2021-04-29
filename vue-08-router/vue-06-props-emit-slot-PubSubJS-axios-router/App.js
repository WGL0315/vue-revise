(function(){
    const template = `
        <div>
            <!-- 头部导航区域 -->
            <app-navbar></app-navbar>

            <!--核心区域:分左右两边-->
            <div class="container-fluid">
                <div class="row">
                    <!--左边菜单栏区域-->
                    <app-left></app-left>
                    <!--右边主页面区域: 分上下两个区域-->
                    <!--
                        <app-home>
                            <h1 slot="dashbord" class="page-header">{{ title1 }}</h1>
                            <h1 slot="subheader" class="sub-header">{{ title2 }}</h1>
                        </app-home>
                    
                    -->
                    <!-- keep-alive可以缓存路由组件 -->
                    <keep-alive>
                        <router-view>
                            <h1 slot="dashbord" class="page-header">{{ title1 }}</h1>
                            <h1 slot="subheader" class="sub-header">{{ title2 }}</h1>
                        </router-view>
                    </keep-alive>
                    
                </div>
            </div>
        </div>
    `;

    window.App = {
        template,
        data: function(){
            return {
                title1: '自定义事件（仅用于子-->父）示例',
                title2: 'props父组件向子组件传递数据示例',
            }
        },
        components: {
            // 'app-navbar': AppNavbar,
            AppNavbar, //ES6写法，等价于AppNavbar: AppNavbar
            AppLeft,
            AppHome,
        }
        
    };
})()
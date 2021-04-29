//局部注册组件 
// const AppNavbar = {
//     template: `
//         <nav class="navbar navbar-inverse navbar-fixed-top">
//             <div class="container-fluid">
//                 <div class="navbar-header">
//                 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
//                     <span class="sr-only">Toggle navigation</span>
//                     <span class="icon-bar"></span>
//                     <span class="icon-bar"></span>
//                     <span class="icon-bar"></span>
//                 </button>
//                 <a class="navbar-brand" href="#">{{ projectName }}</a>
//                 </div>
//                 <div id="navbar" class="navbar-collapse collapse">
//                 <ul class="nav navbar-nav navbar-right">
//                     <li><a href="#">Dashboard</a></li>
//                     <li><a href="#">Settings</a></li>
//                     <li><a href="#">Profile</a></li>
//                     <li><a href="#">Help</a></li>
//                 </ul>
//                 <form class="navbar-form navbar-right">
//                     <input type="text" class="form-control" placeholder="Search..." @blur="search">
//                 </form>
//                 </div>
//             </div>
//         </nav>
//     `,
//     data: function(){
//         return {
//             projectName: 'WGL'
//         }
//     },
//     methods: {
//         search(){
//             alert('搜索框失去焦点');
//         }
//     },
// }
var vm = new Vue({
    el: '#app',
    template: '<app></app>', //template中的渲染结果会替换掉#app标签
    data: {
        // 
    },
    router, //引用路由配置
    components: {
        App, //等价于App: App
    }
});
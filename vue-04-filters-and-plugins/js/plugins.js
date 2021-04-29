(function(){
    //声明Myplugin插件对象
    const MyPlugin = {};

    // 通过.install()方法给Vue添加全局功能
    MyPlugin.install = function(Vue, options){
        // 添加全局方法
        Vue.myGlobalMethod = function(){
            alert('MyPlugin插件: 全局方法生效');
        };

        // 添加全局指令
        Vue.directive('my-directive', {
            inserted: function(el, binding){
                el.innerHTML = 'MyPlugin插件my-directive: ' + binding.value;
            }
        });

        // Vue.prototype为每个vue实例，添加实例方法
        Vue.prototype.$myMethod = function(methodOption){
            alert('Vue实例方法生效：' + methodOption);
        }
    }

    //将插件添加到window对象中 
    window.MyPlugin = MyPlugin;
})() //不要少了括号，让它立即执行
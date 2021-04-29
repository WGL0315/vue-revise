(function(){
    const template = `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1>关于我们</h1>
            <p style="color:red">实现路由缓存组件--示例</p>
            <p>没有keep-alive时，组件被切换后，该组件会被销毁；切换回来，再重新创建</p>
            <p>下面的input输入框用于验证app.js的keep-alive，若切换组件后，再切回来，原来输入的数据不被清空，说明组件被缓存了</p>
            <input type="text" value=""/>
        </div>
    `;
    window.About = {
        template,
        data: function(){
            return {
                // 
            }
        }
    };
})()
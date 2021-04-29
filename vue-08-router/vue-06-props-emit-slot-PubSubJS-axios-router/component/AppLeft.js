(function(){
    const template = `
        <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
                <router-link to="/" tag="li"exact>
                    <a>
                        {{ message }}
                        <span v-show="delNum">( {{ delNum }} )</span>
                    </a>
                </router-link>
                <router-link to="/news" tag="li">
                    <a>新闻管理</a>
                </router-link>
                <router-link to="/about" tag="li">
                    <a>关于我们</a>
                </router-link>
            </ul>
        </div>
    `;
    window.AppLeft = {
        template,
        data: function(){
            return {
                message: '首页',
                delNum: 0, //初始化被删除的数量
            }
        },
        // 在created()初始化订阅事件
        created() {
            // 一开始初始化实例，就进行订阅消息
            // PubSub.subscribe('changeNum', function(event, num){
            //     // 删除成功
            //     console.log("event: ", event);
            //     console.log("num的值" ,num);
            //     this.delNum = this.delNum + num;
            //     console.log("this.delNum的值：", this.delNum);
            // });
            PubSub.subscribe('changeNum', (event, num) => {
                // 删除成功
                this.delNum = this.delNum + num;
                console.log("this.delNum的值：", this.delNum);
            });
        },
    }
})()
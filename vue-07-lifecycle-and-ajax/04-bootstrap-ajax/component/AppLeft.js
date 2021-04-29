(function(){
    const template = `
        <div class="col-sm-3 col-md-2 sidebar">
            <ul class="nav nav-sidebar">
                <li class="active">
                    <a href="#">
                        {{ message }}
                        <span v-show="delNum">( {{ delNum }} )</span>
                    </a>
                </li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Export</a></li>
            </ul>
            <ul class="nav nav-sidebar">
                <li><a href="">Nav item</a></li>
                <li><a href="">Nav item again</a></li>
                <li><a href="">One more nav</a></li>
                <li><a href="">Another nav item</a></li>
                <li><a href="">More navigation</a></li>
            </ul>
            <ul class="nav nav-sidebar">
                <li><a href="">Nav item again</a></li>
                <li><a href="">One more nav</a></li>
                <li><a href="">Another nav item</a></li>
            </ul>
        </div>
    `;
    window.AppLeft = {
        template,
        data: function(){
            return {
                message: '综述',
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
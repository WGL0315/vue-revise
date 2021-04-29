(function(){
    const template = `
        <!--体育栏目-->
        <div>
            <p style="color:red">路由组件传递数据--示例</p>
            <ul>
                <li v-for="(sport, index) in sportArr" :key="sport.id">
                    <!-- <a href="#">{{ sport.title }}</a> -->
                    <!-- 
                        要动态拼接值，则to属性值是JS表达式，
                        要写JS表达式，则要使用v-bind方式绑定属性，
                        注意 + 前面有单引号'',
                        router-link标签渲染后，会默认被a标签代替
                    -->
                    <router-link :to="'/news/sport/detail/' + sport.id">
                        {{ sport.title }}
                    </router-link>
                </li>
            </ul>

            <!--详情-->
            <!-- 定义路由出口 -->
            <router-view></router-view>
        </div>
    `;
    window.Sport = {
        template,
        data: function(){
            return {
                sportArr: [],
            }
        },
        // 钩子异步加载数据
        created() {
            this.getSportArr();
        },
        methods: {
            getSportArr(){
                axios.get('http://127.0.0.1:8080/vue-06-props-emit-slot-PubSubJS-axios-router/db/sport.json')
                .then(
                    response => {
                        console.log("获取sport.json成功: ", response.data);
                        this.sportArr = response.data;
                    }
                ).catch(
                    error => {
                        console.log("获取sport.json失败: ", error.message);
                    }
                );
            }
        },
    };
})()
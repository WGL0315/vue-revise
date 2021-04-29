(function(){
    const template = `
        <!--科技栏目-->
        <div>
            <p style="color:red">编程式路由导航--示例</p>
            <ul >
                <li v-for="(tech, index) in techArr" :key="tech.id">
                    <span>{{ tech.title }}</span>
                    <button class="btn btn-default btn-xs" @click="pushTech(tech.id)">前进( $router.push(path) )</button>&nbsp;
                    <button class="btn btn-default btn-xs" @click="replaceTech(tech.id)">替换( $router.replace(path) )</button>
                </li>
            </ul>
            <button @lick="$router.back()">后退( $router.back() )</button>
            
            <!--详情-->
            <!-- 定义路由出口 -->
            <router-view></router-view>
        </div>
    `;
    window.Tech = {
        template,
        data: function(){
            return {
                techArr: []
            }
        },
        created() {
            this.getTechArr();
        },
        methods: {
            getTechArr(){
                axios.get('http://127.0.0.1:8080/vue-06-props-emit-slot-PubSubJS-axios-router/db/tech.json')
                .then(
                    response => {
                        console.log("获取tech.json成功：", response.data);
                        this.techArr = response.data;
                    }
                ).catch(
                    error => {
                        console.log("获取tech.json失败：", error.message);
                    }
                );
            },

            // 报错是因为.push(path)和.replace(path)的路径path仍保持在原来路径,导致冗余
            // 前进
            pushTech(id){
                // .push()可以后退回来原来的路径
                // 是router,有字母'r'，用反单引号``拼接
                this.$router.push(`/news/tech/detail/${id}`);
            },
            // 替换
            replaceTech(id){
                // .replace()不可后退回来原来的路径
                this.$router.replace(`/news/tech/detail/${id}`);
            }
        },
    };
})()
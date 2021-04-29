(function(){
    const template = `
        <div class="jumbotron">
            <h2>{{ techDetail.title }}</h2>
            <p>{{ techDetail.content }}</p>
        </div>
    `;
    window.TechDetail = {
        template,
        data: function(){
            return {
                techDetail: {
                    id: 0,
                    title: '',
                    content: ''
                }
            }
        },
        created() {
            // 调用Vue实例中的getTechById()方法
            this.getTechById();
        },
        methods: {
            // 通过id获取详情
            getTechById(){
                // 获取路径变量id值
                const id = this.$route.params.id - 0;
                // 获取所有数据
                axios.get('http://127.00.0.1:8080/vue-06-props-emit-slot-PubSubJS-axios-router/db/tech.json')
                .then(
                    response => {
                        console.log("详情获取tech.json成功：", response.data);
                        const techArr = response.data;
                        // 查找指定id的数据
                        this.techDetail = techArr.find(
                            detail => {
                                return detail.id === id
                            }
                        );
                    }
                )
                .catch(
                    error => {
                        console.log("获取tech.json失败：", error.message);
                    }
                );
            },
        },
        watch: {
            // 使用watch监听$route路由的动态变化，获取ID值
            '$route': function(){
                this.getTechById();
            }
        }
    };
})()
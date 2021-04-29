(function(){
    const template = `
        <div class="jumbotron">
            <h1>ID: {{ id }}</h1>
            <h2>{{ sportDetail.title }}</h2>
            <p>{{ sportDetail.content }}</p>
        </div>
    `;
    window.SportDetail = {
        template,
        data: function(){
            return {
                id: 0,
                sportDetail: {
                    id: 0,
                    title: '',
                    content: ''
                }
            }
        },
        created() { //created()只会调用一次
            // 当切换标题列表的路由时，此钩子不会再次调用
            // 所以对应ID不会被更新，可以使用watch监听$route路由的变化
            this.getSportById();
        },
        methods: {
            getSportById(){
                // 注意：是route，后面没有r字母
                this.id = this.$route.params.id - 0;
                axios.get('http://127.0.0.1:8080/vue-06-props-emit-slot-PubSubJS-axios-router/db/sport.json')
                .then(
                    response => {
                        console.log("获取sport.json成功：", response.data);
                        const sportArr = response.data;
                        // Array.find()会将满足条件的数据返回，仅返回一条
                        this.sportDetail = sportArr.find(
                            detail => {
                                // this要代表当前组件实现，则要使用箭头函数
                                return detail.id === this.id;
                            }
                        );
                        console.log("this.sportDetail: ", this.sportDetail);
                    }
                ).catch(
                    error => {
                        console.log("获取sport.json失败：", error.message);
                    }
                );
            }
        },
        watch: {
            // 使用watch监听$route路由的动态变化，获取ID值
            '$route': function(){
                this.getSportById();
                console.log("$route改变了：", this.id);
            }
        }
    };
})()
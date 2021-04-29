(function(){
    const template = `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        
            <!--右边上半区域-->
            <slot name="dashbord"></slot>
            <dash-bord :hobbies="hobbies" @delete_hobby="deleteHobby"></dash-bord>

            <!--右边下半区域-->
            <slot name="subheader"></slot>
            <home-list :emp-list="empList" :deleteEmp="deleteEmp"></home-list>
        </div>
    `;
    window.AppHome = {
        template,
        data: function(){
            return {
                //测试props 通信方式
                hobbies: ['看书', '睡觉', '打游戏', '工作'],
                empList: [
                    // {
                    //     id: 1,
                    //     name: 'W',
                    //     salary: '8000'
                    // },
                    // {
                    //     id: 2,
                    //     name: 'G',
                    //     salary: '9000'
                    // },
                    // {
                    //     id: 3,
                    //     name: 'L',
                    //     salary: '10000'
                    // },
                    // {
                    //     id: 4,
                    //     name: 'Z',
                    //     salary: '11000'
                    // },
                ]
            }
        },
        components: { //子组件
            DashBord,
            HomeList
        },
        created() {
            axios.get('http://127.0.0.1:8080/vue-06-props-emit-slot-PubSubJS-axios-router/emp.json').then(
                response => {
                    console.log("获取emp.json成功: ", response.data);
                    this.empList = response.data; //赋值
                }
            ).catch(
                error => {
                    console.log("获取emp.json失败：", error.message);
                }
            );
        },
        methods: {
            // 删除员工
            // 因为empList初始化在当前组件中，所以删除操作的方法也要定义在同一组件中
            deleteEmp(index){
                this.empList.splice(index, 1);
            },
            // 删除爱好
            deleteHobby(index){
                // console.log("下标：", index);
                this.hobbies.splice(index, 1);

                // 删除成功，发布消息，左侧导航组件统计数据
                PubSub.publish('changeNum', 1);
            }
        },
    }
})()
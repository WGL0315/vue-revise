(function(){
    const template = `
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        
            <!--右边上半区域-->
            <h1 class="page-header">Dashboard</h1>
            <dash-bord :hobbies="hobbies"></dash-bord>

            <!--右边下半区域-->
            <h2 class="sub-header">Section title</h2>
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
                    {
                        id: 1,
                        name: 'W',
                        salary: '8000'
                    },
                    {
                        id: 2,
                        name: 'G',
                        salary: '9000'
                    },
                    {
                        id: 3,
                        name: 'L',
                        salary: '10000'
                    },
                    {
                        id: 4,
                        name: 'Z',
                        salary: '11000'
                    },
                ]
            }
        },
        components: { //子组件
            DashBord,
            HomeList
        },
        methods: {
            // 对empList执行删除操作
            deleteEmp(index){
                this.empList.splice(index, 1);
            }
        },
    }
})()
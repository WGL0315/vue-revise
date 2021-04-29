(function(){
    const template = `
        <tr>
            <td>{{ emp.id }}</td>
            <td>{{ emp.name }}</td>
            <td>{{ emp.salary }}</td>
            <td>
                <a href="javascript: void(0)" @click="deleteItem">删除</a>
            </td>
        </tr>
    `;
    window.Item = {
        template,
        data: function(){
            return {}
        },
        props: { 
            emp: { //指定属性名，数据类型，是否必须
                type: Object,
                required: true
            },
            deleteEmp: Function,
            index: Number,
        },
        methods: {
            deleteItem(){
                // 确认弹窗
                if(window.confirm(`确定删除${this.emp.name}的记录吗？`)){
                    // 注意：不要少了this
                    this.deleteEmp(this.index);
                }
            }
        },
    };
})()
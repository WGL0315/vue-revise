(function(){
    const template = `
        <div class="row placeholders">
            <div v-for="(hobby, index) in hobbies" :key="index" class="col-xs-6 col-sm-3 placeholder">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
                <h4>{{ hobby }}</h4>
                <span class="text-muted">
                    <a href="javascript: void(0)" @click="deleteHobby(index)">删除</a>
                </span>
            </div>
        </div>
    `;
    window.DashBord = {
        template,
        data: function(){
            return {
                // 
            }
        },
        props: ['hobbies'],
        methods: {
            // 删除爱好
            deleteHobby(index){
                // 发射'delete_hobby'，触发父组件对应名称(即delete_hobby)的方法
                if(window.confirm(`确定删除"${this.hobbies[index]}"吗？`)){
                    this.$emit('delete_hobby', index);
                }
            }
        },
    };
})()
Vue.component('app-header', {
    template: '<div class="header">{{ name }}</div>',
    data() {
        return {
            name: '这是头部组件'
        }
    },
});
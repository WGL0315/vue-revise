Vue.component('app-main', {
    template: `
        <ul class="main">
            <li  v-for="(item, index) in arr">ID：{{ item.id }}；name：{{ item.name }}</li>
        </ul>
    `,
    data() {
        return {
            arr: [
                {
                    id: 1,
                    name: 'W'
                },
                {
                    id: 2,
                    name: 'G',
                },
                {
                    id: 3,
                    name: 'L'
                }
            ]
        }
    },
});
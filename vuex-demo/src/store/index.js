import Vue from 'vue';
import Vuex from 'vuex';

// 导入Modules
import home from './modules/home';

// 引入Vuex插件
Vue.use(Vuex);

// const home = {
//     // 存放状态(共享属性)
//     state: {
//         num: 1
//     },
//     // 派生属性。可用于从store中的state中派生出一些状态
//     getters: {
//         classify(state){
//             if(state.num < 20){
//                 return 'W';
//             }else if(state.num < 50){
//                 return 'G';
//             }else {
//                 return 'L';
//             }
//         }
//     },
//     // 改变state状态
//     mutations: {
//         increaseNum(state, n){ //n为载荷(payload),可自定义,指传入额外的参数
//             state.num+=n;
//         },
//         decreaseNum(state){
//             state.num--;
//         }
//     },
//     actions: {
//         add(context, n){
//             // 触发mutations中的'increaseNum'，提交mutation，从而间接改变state
//             context.commit('increaseNum', n);
//         },
//         dec({commit, state}){ //按需传值
//             commit('decreaseNum');
//         }
//     },
// }

const store = new Vuex.Store({ //注意：V和S都是大写字母
    modules: {
        home, //home: home
    }
});
// const store = new Vuex.Store({ //注意：V和S都是大写字母
//     // 存放状态（即共享属性）
//     state: {
//         num: 1
//     },
//     // 改变state状态
//     mutations: {
//         increaseNum(state, n){ //n为载荷(payload),可自定义,指传入额外的参数
//             state.num+=n;
//         },
//         decreaseNum(state){
//             state.num--;
//         }
//     },
//     actions: {
//         add(context, n){
//             // 触发mutations中的'increaseNum'，提交mutation，从而间接改变state
//             context.commit('increaseNum', n);
//         },
//         dec({commit, state}){ //按需传值
//             commit('decreaseNum');
//         }
//     },
//     // 派生属性。可用于从store中的state中派生出一些状态
//     getters: {
//         classify(state){
//             if(state.num < 20){
//                 return 'W';
//             }else if(state.num < 50){
//                 return 'G';
//             }else {
//                 return 'L';
//             }
//         }
//     }
// });

export default store;

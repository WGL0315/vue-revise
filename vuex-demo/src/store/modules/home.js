const state = {
    num: 1
};

const getters = {
    classify(state){
        if(state.num < 20){
            return 'W';
        }else if(state.num < 50){
            return 'G';
        }else {
            return 'L';
        }
    }
};

const mutations = {
    increaseNum(state, n){ //n为载荷(payload),可自定义,指传入额外的参数
        state.num+=n;
    },
    decreaseNum(state){
        state.num--;
    }
};

const actions = {
    add(context, n){
        // 触发mutations中的'increaseNum'，提交mutation，从而间接改变state
        context.commit('increaseNum', n);
    },
    dec({commit, state}){ //按需传值
        commit('decreaseNum');
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
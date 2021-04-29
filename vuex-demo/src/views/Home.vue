<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="vuex-demo">
      <h1>vuex-demo</h1>
      <p>num: {{ $store.state.home.num }}</p>
      <p>
        使用mutations改变状态值：
        <button @click="addition">加法</button>
        <button @click="subtraction">减法</button>
      </p>
      <p>派生属性desc: {{ $store.getters.classify }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    addition() {
      // 通过commit调用mutations中的'increaseNum'方法来改变状态值
      // this.$store.commit("increaseNum", 10); //10为载荷(payload)，指mutations额外传入的参数
      this.$store.dispatch('add', 10);
    },
    subtraction() {
      // 通过commit调用mutations中的'decreaseNum'方法来改变状态值
      // this.$store.commit("decreaseNum");
      this.$store.dispatch('dec');
    }
  },
  
};
</script>

<style scoped>
  .vuex-demo {
    border: 1px solid red;
    height: 500px;
  }
  .vuex-demo p {
    text-align: left;
  }
</style>

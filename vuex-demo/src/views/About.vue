<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="vuex-demo">
      <p>
        测试兄弟组件能否共享状态值：
        <span>{{ $store.state.home.num }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .vuex-demo {
    border: 1px solid red;
    height: 500px;
  }
  .vuex-demo p {
    text-align: left;
  }
</style>

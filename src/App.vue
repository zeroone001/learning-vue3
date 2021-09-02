<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import { h, ref } from 'vue';
export default {
  name: 'App',
  setup () {
    // ref 对象
    let name = ref('zhangsan');

    function handlePerson () {
      name.value = 'lys'
    }
    return {
      name
    }
    // 返回一个渲染函数
    // return () => h('h1', 'qweqw');

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

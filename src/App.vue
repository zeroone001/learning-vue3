<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div class="container" @click="handlePerson">
    {{ name }}
</div>
</template>

<script>
import { h, ref, onMounted, watch, toRefs, computed, reactive } from 'vue';
// 一个单独的功能模块
import getNames from './composable/getNames';
export default {
  name: 'App',
  components: {

  },
  props: {
    user: {
      type: String
    }
  },
  setup (props) {
    // ref 对象
    let age = ref(12);
    let objj = ref({
      type: 'abc'
    });

    let obj2 = reactive({
      type: '12'
    });
    console.log('age', age);
    console.log('type:', obj2.type);
    let { name, handlePerson } = getNames();

    const { user } = toRefs(props);

    // 只读的响应式应用
    let newAge = computed(() => {
      return age.value * 2;
    })

    

    onMounted(() => {
      console.log('onMounted');
    });
    



    return {
      name,
      newAge,
      handlePerson
    }
    // 返回一个渲染函数
    // return () => h('h1', 'qweqw');

  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
.container {
}
.float {
    width: 200px;
    height: 100px;
    float: left;
    background: red;
    opacity: 0.3;
}

.main {
    background: green;
    height: 100px;
    overflow: hidden;
}
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

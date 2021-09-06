<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div class="container" @click="changetype">
    <props :name="name" @showEmit="showEmit">
      <template v-slot:aa>
        <span>这是一个slot</span>
      </template>
    </props>
  </div>
  <div @click="changeVal">
    {{ name }}---- {{age}}
  </div>
  <input v-model="text" />
</template>

<script>
import { h, ref, customRef, onMounted, watch, toRefs, readonly, shallowReadonly, computed, reactive, watchEffect, toRef } from 'vue';
// 一个单独的功能模块
import getNames from './composable/getNames';
import Props from './components/props.vue';
import hook1 from './hooks/hook1';
import hook2 from './hooks/hook2';
function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
export default {
  name: 'App',
  components: {
    Props
  },
  props: {
    user: {
      type: String
    }
  },
  setup () {
    // ref 对象

    // let objToRef = reactive({
    //   name: 'lys',
    //   age: 13,
    //   sex: '男',
    //   _obj: {
    //     val: '1'
    //   }
    // });

    // let objToRefName = toRef(objToRef, 'name');
    // let objToRefVal = toRef(objToRef._obj, 'val');
    // let xx = toRefs(objToRef);
    // function changeVal () {
    //   xx.name.value = 'wjx';
    //   xx.age.value = 14
    // }

    let h2 = hook2();
    let h1 = hook1();


    let age = ref(12);
    let objj = ref({
      type: 'abc'
    });

    let obj2 = reactive({
      type: '12'
    });

    watch(() => obj2.type, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    function changetype () {
      console.log('12312');
      obj2.type= '13'
    }
    watchEffect(() => {
      console.log('obj2.type', obj2.type);
    })
    // console.log('age', age);
    // console.log('type:', obj2.type);
    let { name, handlePerson } = getNames();

    // const { user } = toRefs(props);

    // 只读的响应式应用
    let newAge = computed(() => {
      return age.value * 2;
    })
    onMounted(() => {
      // console.log('onMounted');
    });

    function showEmit () {
      alert('showEmit')
    }

    let text = useDebouncedRef('hello');

    console.log('text', text);

    return {
      // ...xx,
      // changeVal,
      // objToRefVal,
      // objToRefName,
      // objToRef,
      changetype,
      name,
      newAge,
      handlePerson,
      showEmit,
      text
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

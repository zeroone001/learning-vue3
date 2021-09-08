<template>
  <div class="todo">
    <Header @addTodo="addTodo"></Header>
    <the-todo 
      v-for="(item, index) in todos"
      :key="index"
      :todo="item"
    ></the-todo>
    <input type="text" @change="handleChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, computed } from 'vue';
import theTodo from './components/theTodo.vue';
import Header from './components/header.vue';
import { Todo } from './types/todo';
// 一个单独的功能模块

// defineComponent 目的是定义一个组件
export default defineComponent({
  name: 'App',
  components: {
    theTodo,
    Header
  },
  props: {
    
  },
  setup () {
    type State = {
      todos: Todo[]
    };
    let state = reactive<State>({
      todos: [
        {
          id: 1, title: '奔驰'
        },
        {
          id: 2, title: '宝马'
        },
        {
          id: 3, title: '头条'
        }
      ]
    });
    const addTodo = (todo: Todo): void => {
      state.todos.unshift(todo);
    };
    // 删除一个元素
    const deleteTodo = (index: number): void => {
      state.todos.splice(index, 1);
    }

    const count = reactive({
      name: 'lys'
    })
    let str = 'asdasdasdasda';
    let num: number = (<string>str).length;
    const handleChange = (evt: Event) => {
      console.log((evt.target as HTMLInputElement).value);
    }
    return {
      ...toRefs(state),
      addTodo,
      handleChange
    }
  }
});

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

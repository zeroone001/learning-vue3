<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <button @click="check = !check">按钮</button>
    <todo v-if="check"></todo>
    <Ref />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Todo from '@/components/todo.vue';
import Ref from '@/components/ref.vue';

@Options({
  components: {
    HelloWorld,
    Todo,
    Ref
  },
})
export default class Home extends Vue {
  public check: boolean = true;

}
</script>

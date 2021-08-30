<template>
  <div class="todo">
    这是一个组件
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs, defineComponent, onBeforeMount, onMounted } from 'vue'

export default defineComponent({
  name: 'Todo',
  setup () {
    // 
    onBeforeMount(() => {
      console.log('3.x, onBeforeMount');
    }); 
    onMounted(() => {
      console.log('3.x, onMounted');
    });
  },
  beforeCreate () {
    console.log('2.x,beforeCreate');
  },
  created () {
    console.log('2.x, created');
  },
  beforeMount () {
    console.log('2.x, beforeMount');
  },
  mounted () {
    console.log('2.x, mounted');
  },
  beforeUpdate () {
    console.log('2.x, beforeUpdate');
  },
  updated () {
    console.log('2.x updated');
  },
  beforeUnmount () {
    console.log('2.x beforeDestroy');
  },
  unmounted () {
    console.log('2.x destroyed');
    
  }

});

// export default {
//   setup () {
//     const state = reactive({
//       count: 0,
//     })
  
//     return {
//       ...toRefs(state),
//     }
//   }
// }
</script>

<style lang="scss" scoped>

</style>
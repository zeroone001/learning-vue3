<template>
  <div>
    <my-props :name="name"></my-props>
    <div>{{ myShow.name }}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from 'vue'
import MyProps from './components/props.vue';
export default defineComponent({
  components: {
    MyProps
  },
  setup(props: any) {
    const name = ref('lys------>');
    /* 
    reactive不能直接赋值 而是
    const obj = ref({
      a:2
    });
    obj.value = {a: 123}
    或者
    const obj=reactive({
    data: {
        a:2
      }
    });
    obj.data = {a: 312}
    */
    let myShow = ref({
      name: 'lysssss'
    });
    console.log('myShowmyShow', myShow);
    
    onMounted(()=> {
      setTimeout(()=> {
        myShow.value = {
          name: 'lysssss2'
        }
        console.log('myShow', myShow);
        
      }, 1000);
    })
    return { 
      myShow,
      name
     }
  }
})
</script>

<style lang="scss" scoped>

</style>

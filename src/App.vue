<template>
  <div>
    <my-props :name="name"></my-props>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import MyProps from './components/props.vue';
export default defineComponent({
  components: {
    MyProps
  },
  setup(props: any) {
    const name = ref('lys------>');
    return { 
      name
     }
  }
})
</script>

<style lang="scss" scoped>

</style>

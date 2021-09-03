import { h, ref, onMounted, watch, toRefs, computed } from 'vue';

export default function getNames () {
    let name = ref('zhangsan');

    function handlePerson () {
        name.value = 'lys'
      }
      // 监听name
    watch(name, (newVal, oldVal) => {
        console.log(name.value);
      });
    return {
        name,
        handlePerson
    }
}
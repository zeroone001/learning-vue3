<template>
    <div 
        @mouseenter="mouseHandler(true)" 
        @mouseleave="mouseHandler(false)"
        :style="{backgroundColor: bgc, color: mycolor}"
    >
        {{ todo.title }}
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Todo } from '../types/todo'

export default defineComponent({
    props: {
        todo: {
            type: Object as PropType<Todo>
        }
    },
    setup(props, context) {
        let bgc = ref('white');
        let mycolor = ref('black');
        const mouseHandler = (b: boolean) => {
            if (b) {
                bgc.value = 'red';
                mycolor.value = 'green';
            } else {
                 bgc.value = 'white';
                mycolor.value = 'black';
            }
        }
        
        return {
            bgc,
            mycolor,
            mouseHandler
        }
    },
})
</script>


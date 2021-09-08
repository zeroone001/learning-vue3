<template>
    <div>
        <input 
            type="text" 
            placeholder="输入内容回车" 
            v-model="title"
            @keyup.enter="addText" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Todo } from '../types/todo';


export default defineComponent({
    emits: ['addTodo'],
    setup(props, context) {
        // context.emit('addTodo', )
        let title = ref('');
        const addText = () => {
            let item: Todo = {
                id: Date.now(),
                title: title.value,
            };
            context.emit('addTodo', item);
        }

        return {
            addText,
            title
        }
    },
})
</script>

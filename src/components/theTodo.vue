<template>
    <div>
        {{ todo.title }}
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Todo } from '../types/todo'

export default defineComponent({
    props: {
        todo: {
            type: Object as () => Todo
        }
    },
    setup() {
        
    },
})
</script>


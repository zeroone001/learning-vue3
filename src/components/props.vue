<template>
    <div>
        <h2>ref 的另一个作用</h2>
        {{ name }}
        <button @click="changeProps">点击我</button>
        <slot name="aa"></slot>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from 'vue'

export default {
    name: 'myProps',
    props: {
        name: {
            type: String
        }
    },
    emits: ['showEmit'],
    setup (props: any, context: any) {
        console.log('props', props);
        const { name } = toRefs(props);
        // context.attrs emit , slot
        // context.attrs 相当于 vue2中的 $attrs
        // context.emit 相当于 vue2 中的 this.$emit 用于触发父组件传入的函数
        // context.slots 相当于 this.$slots
        // console.log('context', context.slots);
        
        let refInput = ref<HTMLElement | null>(null);
        const state = reactive({
            count: 0,
        })

        onMounted(() => {
            console.log('refInput', refInput);
            if (name.value === 'lys------>') {
                console.log('12312');
            }
        })
        function showEmits () {
            context.emit('showEmit');
        }
        function changeProps () {
            // p.name.value = 'lys';
        }
    
        return {
            name,
            ...toRefs(state),
            changeProps,
            refInput,
            showEmits
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
        <h2>ref 的另一个作用</h2>
        <input type="text" ref="refInput">
    </div>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onMounted } from 'vue'

export default {
    setup () {
        let refInput = ref<HTMLElement | null>(null);
        const state = reactive({
            count: 0,
        })

        onMounted(() => {
            console.log('refInput', refInput);
            
        })
    
        return {
            ...toRefs(state),
            refInput
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
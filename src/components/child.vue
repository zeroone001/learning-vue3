<template>
    <div class="child">
        childchildchildchildchildchildchild
        {{ sum }}
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    async setup () {
        let sum = ref(0);
        let p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    sum
                });
            }, 1000);
        })
        console.log('ppp', p);
        
        return await p;
    }
}
</script>
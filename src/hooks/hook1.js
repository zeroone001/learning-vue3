import { onMounted, ref } from "vue";

export default function () {
    onMounted(() => {
        console.log('hook1');
    })
    return ref(1)
}
import { onMounted, ref } from "vue";

export default function () {
    onMounted(() => {
        console.log('hook2');
    })
    return ref(0)
}
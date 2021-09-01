import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 函数重载的声明
function add(x: string, y: string): string
function add(x: number, y: number): number

function add(x: string | number, y: string | number): string | number | undefined {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
    if (typeof x === 'string' && typeof y === 'string') {
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      return x + y
    }
  }

createApp(App).use(store).use(router).mount('#app')


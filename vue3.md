## Vue@3

`import { createApp } from 'vue'`

引入的不再是VUE构造函数了，而是createApp工厂函数



`const app = createApp(App);`

类似于之前VUE2中的vm, 但是比vm要“轻”



## 常用Composition API 

### setup



#### ref()

生成一个响应式且可变的对象,

如果是传入一个对象，那么，会调用reactive



```typescript
// 类型声明
interface Ref<T> {
  value: T
}

function ref<T>(value: T): Ref<T>
```





#### reactive



定义一个对象类型的响应式数据，不能定义基本类型的响应式数据

通过代理对象去操作源对象内部数据进行操作

const 代理对象 = reactive(源对象)
















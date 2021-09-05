### ref 和 reactive

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



#### reactive和ref的对比



ref 通常用来定义**基本类型**的数据

reactive 通常用来定义**对象**或者**数组**类型

ref 原理上，使用`Object.defineProperty` 的get和set来实现响应式

reactive 原理是通过 `Proxy` 代理，来实现响应式，并且通过 `Reflect` 来操作源对象内部的数据



ref 操作数据的时候需要.value

`reactive` 不需要.value



```c#
```
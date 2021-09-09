##  TypeScript 支持



### 推荐配置 tsconfig.json

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    // 这样就可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  }
}
```





### webpack配置

需要使用ts-loader来解析 `<script lang="ts"></script>` 里面的代码块

```js
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
      ...
```





### 想将 TypeScript 与 [JSX `render` 函数](https://v3.cn.vuejs.org/guide/render-function.html#jsx)结合起来

```html
<script lang="tsx">
  ...
</script>
```





###  定义 Vue 组件

要让TS正确的推断VUE组件选项中的类型，需要使用 `defineComponent` 全局方法定义组件

```html
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // 已启用类型推断
})
</script>
```



### 类型声明 `refs`

```js
let a = ref<string | number>(2021);
a.value = '123';
```

### 类型声明 `reactive`

```js
import { defineComponent, reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const book = reactive<Book>({ title: 'Vue 3 Guide' })
    // or
    const book: Book = reactive({ title: 'Vue 3 Guide' })
    // or
    const book = reactive({ title: 'Vue 3 Guide' }) as Book
  }
})
```





### 为事件处理器添加类型

在处理原生 DOM 事件的时候，正确地为处理函数的参数添加类型或许会是有用的



```html
<template>
  <input type="text" @change="handleChange" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    // `evt` 将会是 `any` 类型
    const handleChange = evt => {
      console.log(evt.target.value) // 此处 TS 将抛出异常
    }
    return { handleChange }
  }
})
</script>
```

解决方案

```js
const handleChange = (evt: Event) => {
      console.log((evt.target as HTMLInputElement).value) // 此处 TS 将抛出异常
    }
```










## shallowRef, shallowReactive



shallowReactive 是指浅层次的reactive,也就是说，第一层是响应式的，第二层就不是了；只处理对象最外层属性的响应式

shallowRef  只处理基本类型的响应式，不处理对象的响应式

应用场景：

1. shallowReactive:  如果有一个对象，结构比较深，但是只是外层属性变化，可以用这个
2. shallowRef:  如果有一个对象，后续功能不会修改这个对象的属性，而是新生成对象来替换

```js
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 改变 state 本身的性质是响应式的
state.foo++
// ...但是不转换嵌套对象
isReactive(state.nested) // false
state.nested.bar++ // 非响应式
```


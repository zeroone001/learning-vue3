## toRaw&markRaw

Raw 代表原始的，未加工的

正常来说，给reactive定义的响应式对象，添加新的属性，都是响应式的，



toRaw： 从响应式转化为普通对象， 返回 [`reactive`](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive) 或 [`readonly`](https://v3.cn.vuejs.org/api/basic-reactivity.html#readonly) 代理的原始对象



markRaw: 标记一个对象，让他永远不会再成为响应式对象

应用场景： 

1. 有些值不应该被设置为响应式，比如第三方类库，因为会有性能上的问题
2. 如果是不可变的大数据源列表时候，跳过响应式，可以提高性能
3. 

```js
export default {
    setup () {
        let person = reactive({
            name: 'lys'
        })
        // car 不让他成为响应式的
        person.car = markRaw({
            price: 123
        })
    }
}
```


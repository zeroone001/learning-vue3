# toRef和toRefs

创建一个ref对象，value的值指向另一个对象的属性，关联起来，保持对其源 property 的响应式连接。

toRef 处理一个

toRefs  批量处理多个ref对象，toRefs(obj)

toRefs，将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 [`ref`](https://v3.cn.vuejs.org/api/refs-api.html#ref)。

### 目的 

目的就是为了，在最后模板里使用的的时候，不用a.c 这样的写法， 直接写c

```js

export default {
    setup () {
        let objToRef = reactive({
          name: 'lys',
          age: 13,
          sex: '男',
          _obj: {
            val: '1'
          }
        });

        let objToRefName = toRef(objToRef, 'name');
        let objToRefVal = toRef(objToRef._obj, 'val');

        function changeVal () {
          objToRefName.value = 'wjx';
          objToRefVal.value = '2'
        }
        
        // toRefs
        let xx = toRefs(objToRef);
        
        function changeVal () {
            xx.name.value = 'wjx';
            xx.age.value = 14
        }
        
        return {
            ...xx,
            changeVal
        }
    }
}
```

## Vue@3

`import { createApp } from 'vue'`

引入的不再是VUE构造函数了，而是createApp工厂函数



`const app = createApp(App);`

类似于之前VUE2中的vm, 但是比vm要“轻”



## 常用Composition API 

### setup

执行时机： 在`beforeCreate` 之前执行，this 是`undefined`

```js
export default {
    props: ['msg'],
    emits: ['showEmit'],
    // context.attrs 相当于 vue2中的 $attrs
    // context.emit 相当于 vue2 中的 this.$emit 用于触发父组件传入的函数
    // context.slots 相当于 this.$slots
    setup (props, context) {
    
	}
}

```

#### computed计算属性



#### watch 监听

* oldVal和newVal， 一模一样，这里是个坑
* 不能单独监听reactive定义的某个属性，解决方法，就是写成一个函数`()=>person.age`
* 直接监听reactive 定义的响应式对象，deep 配置无效，但是，如果`()=>person.age` age是个对象，那么deep是有效的

##### watchEffect

用到了哪个，就监视哪个

响应式的追踪，并且在变化的时候，重新运行该函数

跟computed有点像，但是watchEffect 是注重过程，computed是注重返回值

```js
import { watch, ref } from 'vue';
export default {
    setup () {
        let num = ref(0);
        let msg = ref('msg');
        let msgg = ref('msgg');
        let obj = reactive({
            age: 12
        })
        watch(num, (newVal, oldVal) => {
            
        }, {
            immediate: true,
            deep: true
        });
        watch([msg, msgg], (newArr, oldArr) => {
            
        }, {
            
        });
        
        // 监视reactive
        // 注意，有个问题，就是oldVal和newVal， 一模一样，这里是个坑
        // 而且不能【直接】单独监听某个属性
        watch(obj, (newVal, oldVal) => {
            
        });
        
        // 单独监听一个属性，改成函数的形式
        watch(() => obj2.type, (newVal, oldVal) => {
          console.log(newVal, oldVal);
        });
        
        // 这样也是可以的
        watch([() => obj2.type, () => obj2.name], (newVal, oldVal) => {
          console.log(newVal, oldVal);
        });
        
        // deep 是有效的
        watch(() => obj2.obj, (newVal, oldVal) => {
          console.log(newVal, oldVal);
        }, {
            deep: true
        });
    }
}
```



```js
import { watchEffect } from 'vue';
export default {
    setup () {
        // 非常厉害的函数
        
        watchEffect(() => {
          console.log('obj2.type', obj2.type);
        })
    }
}
```


























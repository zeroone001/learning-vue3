# tree-shaking



## 资料



* [你的Tree-Shaking并没什么卵用](https://github.com/wuomzfx/tree-shaking-test)
* [Tree-Shaking性能优化实践 - 原理篇](https://juejin.cn/post/6844903544756109319)
* [rollup 在线repl](https://rollupjs.org/repl/?version=2.56.3&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMiUyRiolMjBUUkVFLVNIQUtJTkclMjAqJTJGJTVDbmltcG9ydCUyMCU3QiUyMGN1YmUlMjAlN0QlMjBmcm9tJTIwJy4lMkZtYXRocy5qcyclM0IlNUNuJTVDbmNvbnNvbGUubG9nKCUyMGN1YmUoJTIwNSUyMCklMjApJTNCJTIwJTJGJTJGJTIwMTI1JTIyJTJDJTIyaXNFbnRyeSUyMiUzQXRydWUlN0QlMkMlN0IlMjJuYW1lJTIyJTNBJTIybWF0aHMuanMlMjIlMkMlMjJjb2RlJTIyJTNBJTIyJTJGJTJGJTIwbWF0aHMuanMlNUNuJTVDbiUyRiUyRiUyMFRoaXMlMjBmdW5jdGlvbiUyMGlzbid0JTIwdXNlZCUyMGFueXdoZXJlJTJDJTIwc28lNUNuJTJGJTJGJTIwUm9sbHVwJTIwZXhjbHVkZXMlMjBpdCUyMGZyb20lMjB0aGUlMjBidW5kbGUuLi4lNUNuZXhwb3J0JTIwZnVuY3Rpb24lMjBzcXVhcmUlMjAoJTIweCUyMCklMjAlN0IlNUNuJTVDdHJldHVybiUyMHglMjAqJTIweCUzQiU1Q24lN0QlNUNuJTVDbiUyRiUyRiUyMFRoaXMlMjBmdW5jdGlvbiUyMGdldHMlMjBpbmNsdWRlZCU1Q25leHBvcnQlMjBmdW5jdGlvbiUyMGN1YmUlMjAoJTIweCUyMCklMjAlN0IlNUNuJTVDdCUyRiUyRiUyMHJld3JpdGUlMjB0aGlzJTIwYXMlMjAlNjBzcXVhcmUoJTIweCUyMCklMjAqJTIweCU2MCU1Q24lNUN0JTJGJTJGJTIwYW5kJTIwc2VlJTIwd2hhdCUyMGhhcHBlbnMhJTVDbiU1Q3RyZXR1cm4lMjB4JTIwKiUyMHglMjAqJTIweCUzQiU1Q24lN0QlMjIlMkMlMjJpc0VudHJ5JTIyJTNBZmFsc2UlN0QlNUQlMkMlMjJvcHRpb25zJTIyJTNBJTdCJTIyZm9ybWF0JTIyJTNBJTIyZXMlMjIlMkMlMjJuYW1lJTIyJTNBJTIybXlCdW5kbGUlMjIlMkMlMjJhbWQlMjIlM0ElN0IlMjJpZCUyMiUzQSUyMiUyMiU3RCUyQyUyMmdsb2JhbHMlMjIlM0ElN0IlN0QlN0QlMkMlMjJleGFtcGxlJTIyJTNBJTIyMDIlMjIlN0Q=)





## 什么是tree-sahking



移除JS上下文中的未引用的代码



## tree-shaking 原理



* 基于ES6模块实现
* 只能作为模块顶层的语句出现 import 的模块名只能是字符串常量 import binding 是 immutable的 ES6模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是tree-shaking的基础
* 分析程序流，判断哪些变量未被使用、引用，进而删除此代码

PS：export default 对象被import之后，挂在default上的属性或者方法，即使没有被调用，也无法tree-shaking

 ## vue3中的tree-shaking



* 基于函数的API
* 全局API tree-shaking

```js
// vue2
import Vue from 'vue'

Vue.nextTick(() => {
  // 一些和DOM有关的东西
})

// vue3
import { nextTick } from 'vue'

nextTick(() => {
  // 一些和DOM有关的东西
})
```



## Rollup

Rollup 确实是适合tree-shaking,

* 支持导出ES模块的包
* 支持程序流分析，能够判断项目本身的代码是否有副作用

## 成也Babel，败也Babel

Babel不用我多解释了，它能把ES6/ES7的代码转化成指定浏览器能支持的代码。正是由于它，我们前端开发者才能有今天这样美好的开发环境，能够不用考虑浏览器兼容性地、畅快淋漓地使用最新的JavaScript语言特性。

由于babel的编译，一些我们看起来没有副作用的代码，便转化成了有副作用的



## 不够屌的UglifyJS



```js
// maths.js
export function square ( x ) {
	return x.a
}
square({ a: 123 })

export function cube ( x ) {
	return x * x * x;
}

//main.js
import { cube } from './maths.js';
console.log( cube( 5 ) ); // 125


```

打包结果

问题，出在把square打包进去了

```js
function square ( x ) {
  return x.a
}
square({ a: 123 });

function cube ( x ) {
	return x * x * x;
}
console.log( cube( 5 ) ); // 125

```



总结

* 函数的参数若是引用类型，对于它属性的操作，都是有可能会产生副作用的。因为首先它是引用类型，对它属性的任何修改其实都是改变了函数外部的数据。其次获取或修改它的属性，会触发`getter`或者`setter`，而`getter`、`setter`是不透明的，有可能会产生副作用
* uglify没有完善的程序流分析。它可以简单的判断变量后续是否被引用、修改，但是不能判断一个变量完整的修改过程，不知道它是否已经指向了外部变量，所以很多有可能会产生副作用的代码，都只能保守的不删除。
* rollup有程序流分析的功能，可以更好的判断代码是否真正会产生副作用。



## 总结

1. 尽量不写带有副作用的代码。诸如编写了立即执行函数，在函数里又使用了外部变量等。
2. 如果对ES6语义特性要求不是特别严格，可以开启babel的`loose`模式，这个要根据自身项目判断，如：是否真的要不可枚举class的属性。
3. 如果是开发JavaScript库，请使用rollup。并且提供ES6 module的版本，入口文件地址设置到package.json的`module`字段。
4. 如果JavaScript库开发中，难以避免的产生各种副作用代码，可以将功能函数或者组件，打包成单独的文件或目录，以便于用户可以通过目录去加载。如有条件，也可为自己的库开发单独的webpack-loader，便于用户按需加载。
5. 如果是工程项目开发，对于依赖的组件，只能看组件提供者是否有对应上述3、4点的优化。对于自身的代码，除1、2两点外，对于项目有极致要求的话，可以先进行打包，最终再进行编译。
6. 如果对项目非常有把握，可以通过uglify的一些[编译配置](https://github.com/mishoo/UglifyJS2/#compress-options)，如：`pure_getters: true`，删除一些强制认为不会产生副作用的代码。




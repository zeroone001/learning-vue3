## API的改变



### 全局API的转移

VUE3对全局API做了调整

把原来在Vue.xxx 身上的API调整到实例app.xxx 身上

* app.config.xxx
* app.component
* app.use
* app.directive
* Vue.prototype ===  app.config.globalProperties



### 其它改变

* data 必须始终是一个函数
* 移除了v-on.native 事件
* 移除了filter


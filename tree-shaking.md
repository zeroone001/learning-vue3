# tree-shaking



## 什么是tree-sahking



移除JS上下文中的未引用的代码



## tree-shakinng 原理



* 基于ES6模块实现
* 只能作为模块顶层的语句出现 import 的模块名只能是字符串常量 import binding 是 immutable的 ES6模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是tree-shaking的基础
* 分析程序流，判断哪些变量未被使用、引用，进而删除此代码






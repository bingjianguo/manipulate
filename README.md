### 0.2.x
* 稳定版
### 0.3.0-beta.x
* 更新源码，使用typescript，编译构建模式，采用tsc + babel的方式进行代码转化
* 使用的构建脚本参考 https://iamturns.com/typescript-babel/
* 还在测试当中还在测试当中

### 工具函数列表
| 函数名称 | 功能 |
| -------- | --------  |
| getIn | 获取对象或数组的属性，做防空检测 |
| removeNulls | 将对象中的属性值为null或者undefined，进行属性删除，常用于向服务端传数据 |
| deepEqual | 深度比较两个对象是否相等，当有函数是取toString的内容进行比较，当对象有循环引用时，返回false

### change log

* 0.3.0 增加针对Object对象的removeNulls方法
* 0.3.1 增加对对象深比较的函数deepEqual方法


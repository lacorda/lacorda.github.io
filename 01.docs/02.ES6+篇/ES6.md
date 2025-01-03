---
description: ES6
slug: /0d22e0d
tags: 
  - ES6
---

# ES6

## let、const、var的区别

| 区别                         | var  | let  | const |
| ---------------------------- | ---- | ---- | ----- |
| 是否有块级作用域             | ×    | √    | √     |
| 是否存在变量提升             | √    | √    | √     |
| 是否存在暂时性死区           | ×    | √    | √     |
| 是否添加全局属性             | √    | ×    | ×     |
| 是否必须设置初始值           | ×    | ×    | √     |
| 能否重复声明变量             | √    | ×    | ×     |
| 能否改变指针指向（重新赋值） | √    | √    | ×     |

## 关于变量提升(var,let,const)、函数提升(function)、类提升(class)、暂时性死区

- 声明提升：

  1. 在程序中可以在变量/函数/类声明之前进行使用；
  2. 原理：在编译阶段JS引擎会搜集所有的变量/函数声明存储到词法环境，但不赋值。等到执行阶段，才会生效。
- 暂时性死区：变量已存在，但不允许被获取
- 函数表达性，无法被提升；
- let/const变量在声明之前无法使用，是因为let/const在声明前存在暂时性死区；class类一样

## 解构赋值

- 数组/Set/Map（具有Iterator接口的数据结构一样）

```js
let [a, [[b, c = ‘init’], ...d]] = [1, [[2], 3, 4, 5]];  
// a = 1;  b = 2;  c初始化赋值init; d = [3, 4, 5]
```

```js
[x, y] = [y, x];  // 交换变量
```

```js
let [x, y, z] = new Set(['a', 'b', 'c']);  // x = a; y = b; z = c

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {    // for...of遍历Map，配合Map的解析赋值取到key和value
  console.log(key + " is " + value);
}
```

-
  对象

- 字符串

```js
const [a, b, c, d, e] = 'hello';  // a = h; b = e; ...
let {length : len} = 'hello';  // len = 5
```

- 函数参数

```js
[1, undefined, 3].map((x = 'yes') => x);
```

## 字符串/数值/函数/数组/对象的扩展

### 字符串

```js
// 遍历器接口
for (let letter of ‘abc’) {  
  //... 
}
// 模板字符串
`ab${name}\n<em>`
```

### 数值

```js
// Number.EPSILON:  JS能够表示的最小精度。当小于这个值，认定为不存在误差；可以用于浮点数计算较正

function numberepsilon(arg1,arg2){                   
  return Math.abs(arg1 - arg2) < Number.EPSILON;     
}     
```

### 函数

- 参数可设置默认值

- 参数与解构赋值结合使用

- rest参数...args

- 函数的length属性，返回没有指定默认值的参数（形参/函数定义时的参数）个数

- 函数的name属性，返回该函数的函数名

- 箭头函数

  - 箭头函数没有自己的this对象

  - 不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误

  - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替

  - 不可以使用yield命令，因此箭头函数不能用作 Generator 函数

### 数组

- 扩展运算符...
- Array.from()类数组转数组
- Array.of()一组值转数组
- copyWithin(被替换值的索引，被复制值的索引，定义复制数组的长度)：复制一个值去覆盖另一个值，原数组直接改变
- find()和findIndex()
- entries()和keys()和values()
- includes()
- flat(在拍平的层数)拍平数组：默认只拍平一层，使用Infinity可以全部拍平

### 对象

- 属性名可以使用表达式：var obj = { [表达式/变量]: value }
- 扩展运算符...（ES2018）
- for...in
- Object.assign(目标对象，源对象1， 源对象2...): 用于对象的合并
- Object.is() 比较两个值是否相等，相当于是全等号(===)，但NaN === NaN,这点与===不同
- __proto__属性：读取或设置当前对象的原型对象，非规范属性
  - Object.setPrototypeOf()设置对象的原型对象
  - Object.getPrototypeOf()获取对象的原型对象
- Object.keys()，Object.values()，Object.entries()

## 如果new一个箭头函数的会怎么样？箭头函数与普通函数的区别

- new操作符的实现步骤如下：
  - 创建一个对象
  - 将对象的__proto__属性指向构造函数的原型对象
  - 对象调用构造函数，并将构造函数的this指向该对象
  - 返回新的对象
- 箭头函数（不能new一个箭头函数，会报错）：
  - 没有prototype
  - 没有自己的this指向，而函数中的this永远指向它定义时执行上下文中的this。所以call/apply/bind不能改变箭头函数中的this指向
  - 不可以使用arguments参数
  - 不能用作Generator函数、不能使用yield关键字

## Proxy 可以实现什么功能？

Proxy实现数据响应式：

- 语法：new Proxy(目标对象，拦截目标对象的对象)

- 拦截目标对象的对象，常用方法有：

  - get获取目标对象属性时拦截—— get: function(target, propKey[, receiver]) { }
  - set设置目标对象属性时拦截—— set: function(obj, prop, value[, receiver]) { }

- 与Reflect(反射)对象的get/set方法配合使用，好处是：不会因为报错而中断正常的代码逻辑执行

- 示例：

  ```js
  let onWatch = (obj,  getLogger,  setBind) => {
    let handler = {
      get(target, property) {
        getLogger(target, property)
        return Reflect.get(target, property);         // 相当于是target[property]
      },
      set(target, property, value) {
        setBind(value, property)
        return Reflect.set(target, property, value);    // 相当于是target[property] = value
      }
    }
    return new Proxy(obj, handler)
  }
  let obj = { a: 1 }
  let p = onWatch( obj,
    (target, property) => {  console.log(`'${property}' = ${target[property]}`)  },
    (v, property) => {  console.log(`监听到属性${property}改变为${v}`)  },
  )
  p.a = 2     // 监听到属性a改变
  p.a        // 'a' = 2
  obj        // {a: 2}
  p         // Proxy({a: 2})
  ```

## 新增数据类型Symbol

Symbol是ES6新增的基本数据类型，表示一个唯一且不可变的值；用于对象属性，确保对象属性的唯一性，避免冲突

## 新增Set、Map数据结构

### Set(集合)

一组无序且唯一的值组成的集合，实例属性和方法有：

- size属性：元素数量

- 增删改查方法：(修改set里的值：遍历Set，直接重复赋值)

  - add(v)增
  - delete(v)删；
  - clear()移除所有项
  - has(v)查

- 遍历方法：

  - forEach((v, k) => {})：遍历(还可以使用 for (let v of set) 遍历)
  - keys()：返回一个包含所有键的Interator
  - values()：返回一个包含所有值的Interator
  - entries()：返回一个包含所有键值对的Interator

- 是个Interator遍历器（也就是说具有[Symbol.iterator]属性）：

  - set[Symbol.iterator] === set.values

- 应用：数组去重：set + Array.from()类数组转数组

  ```js
  const temp = [1,2,1,3,4,3,5];
  const set = new Set(temp);
  const uniqArray = Array.from(set);    // [...set]
  
  ...new Set(‘ababbc’).join(‘’)   // abc，字符串去重
  ```

### Map(字典)

由键值对组成的有序列表，键和值都可以是任意类型，实例属性和方法有：

- size属性：成员总数

- 增删改查方法：

  - set(key, value)增/改
  - delete(key)删
  - clear()移除所有项
  - get(key)、has(key)查

- 遍历方法：

  - forEach((v, k, map) => {})：遍历(还可以使用for (let [k, v] of map)遍历)
  - keys()：返回一个包含所有键的Interator
  - values()：返回一个包含所有值的Interator
  - entries()：返回一个包含所有键值对的Interator

- 是个Interator遍历器（也就是说具有[Symbol.iterator]属性）

  - map[Symbol.iterator] === map.entries

- 应用：存储任意类型键/值的数据

## Set和WeakSet、Map和WeakMap、Map和Object的区别

| 区别     | Set  | WeakSet                      | Map    | WeakMap                            |
| -------- | ---- | ---------------------------- | ------ | ---------------------------------- |
| 概念     | 集合 | 集合                         | 字典   | 字典                               |
| 元素     | 值   | 值（只能是对象，且是弱引用） | 键值对 | 键值对（键只能是对象，且是弱引用） |
| 是否有序 | 无序 | 无序                         | 有序   | 有序                               |
| 是否唯一 | 唯一 | 唯一                         | 唯一   | 唯一                               |

| 区别     | Map                                        | Object                                     |
| -------- | ------------------------------------------ | ------------------------------------------ |
| 键的类型 | 任意值任意类型                             | 必须是string或symbol                       |
| 是否有序 | 有序                                       | 无序                                       |
| size属性 | 返回键值对总数                             | 无size属性                                 |
| 迭代     | Map是个intarator，可以直接使用for...of遍历 | 只能使用Object.keys/values/entries()再遍历 |

## 如果理解WeakSet和WeakMap的弱应用？

### 弱引用

垃圾回收机制不考虑 WeakSet/WeakMap 对该对象的引用 —— 不考虑WeakSet/WeakMap 中对该对象的引用，其他地方如果不再引用该对象，垃圾回收机制会自动回收该对象所占用的内存。

- 常见的就是在set/map中对DOM元素对象的引用
- 可以避免内存泄漏

## 了解 Promise 吗？

### Promise 解决的痛点是什么？

- 解决“回调地狱”问题：在Promise出现之前，如果存在很多的异步任务，而每个异步任务又要在上一个异步任务完成之后（或者说后一个函数的输入依赖于前一个函数的输出），就会存在“回调地狱”问题；代码臃肿，可读性差，可维护性差
- Promise实例的回调函数，本身是同步的，而then和catch是异步的，又支持链式写法，完美解决“回调地狱”问题

### Promise 解决的痛点还有其他方法可以解决吗？如果有，请列举

- 将每个回调的异步任务抽取出来封装成函数；
- async...await
- Generator函数

### Promise 如何使用？Promise 常用的方法有哪些？它们的作用是什么？

- Promise.resolve(v)：
  - 当v非Promise对象时，返回的普通Promise对象，值为v
  - 当v为Promise对象时，返回的Promise对象等于传入v的Promise对象，值为v
  - 状态变成resolved
  - 返回的Promise对象返回值，由then方法接收
- Promise.reject(v)：同Promise.resolve(v)，不同之处在于状态变成rejected，返回值由catch接收
- Promise.race(多个Promise数组)： 多个Promise同时执行，返回一个新Promise，返回值为第一个结束（不论成功还是失败）的Promise任务的结果
- Promise.all(多个Promise数组)： 多个Promise同时执行，返回一个新Promise，当全部成功时，返回值所有Promise任务结果的数组；当有一个Promise任务失败时，返回值第一个失败的Promise的结果；
- Promise.prototype.then(上个任务的返回值)，支持链式调用
- Promise.prototype.catch(抛出前面的异常)

### Promise 在事件循环中的执行过程是怎样的？

Promise回调函数内代码是同步执行的，当有返回值或异常时，通过then/catch方法获取，并异步执行里面的代码；且Promise异步任务在事件循环中属生微任务，要在执行栈任务全部执行完毕后才开始执行；

### Promise 的业界实现都有哪些？

- core-js
- bluebird
- q.js
- es6-promise

## 关于Iterator遍历器和for...of循环的使用

- Iterator为数据结构提供遍历操作的接口机制；
  - 任何数据结构只要部署Iterator接口，就可以完成遍历
  - 可以使用for...of遍历具有Iterator接口的数据
  - Iterator遍历，实际上是一个指向当前数据结构起始位置的指针对象
- 创建Iterator接口：添加[Symbol.iterator]方法
  - 返回一个具有next()方法的对象
  - next()方法：用来改变指针，返回{value,done}，当done=true时，结束遍历
  - 原生具有Iterator接口的数据结构有：
    - Array
    - Map
    - Set
    - String
    - 类数组、函数的arguments对象、NodeList对象

## Generator函数的应用场景

- 返回一个Iterator（具有[Symbol.iterator]接口）
- Generator函数语法：function关键字与函数名之间加一个；函数内部使用yield表达式
  - yield定义每次遍历的状态（指针对象指向）,yield表达式本身没有返回值(undefined)
  - 调用next()方法，可以带一个参数，表示上一个yield的返回值
  - [Symbol.iterator]接口函数返回遍历器本身

```js
function* helloWorldGenerator() {
  yield 'hello';   // {value: ‘hello’, done: false}
  yield 'world';  // {value: ‘world’, done: false}
}
var a = helloWorldGenerator();
a.next();
a.next();
```

```js
function* foo(x) {         
 var y = 2 * (yield (x + 1));  // {value: 6, done: false}  x=5
  var z = yield (y / 3);       // {value: 8, done: false}  y=24
  return (x + y + z);         // {value:42, done: true}  z=13
}  
var a = foo(5); 
a.next();
a.next(12);
a.next(13);
```

## async/await如何通过同步的方式实现异步？

- async/await是Generator的语法糖，并且带自动执行功能，返回一个Promise对象；
- await后跟的是一个Promise对象时，执行异步任务
- 这样就可以使用“同步”的写法，实现异步操作，让代码更简洁易读

## for...in和for...of的区别

- for...in 一般用来遍历对象的key;
- for...of 一般用来遍历具有Iterator接口的数据的value;

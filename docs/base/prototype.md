# 原型
原型上所有方法和实例都可以被构造函数的实例共享

函数和构造函数的区别
* 通过new 函数() ，此刻的这个函数就是构造函数
* 函数() 就是一个函数

原型是定义函数有js自动分配给函数的一个可以被所有构造函数实例对象变量共享的对象变量

实例上的__proto__可以访问到上一级原型对象的空间地址

``` js
function User(name, age, sex){
    this.name = name
    this.age = age
    this.sex = sex
    // this.say = function(){
    //     console.log(`My name is ${this.name}, ${this.age} years old`)
    // }
}
User.name = 'Shibin'
User.prototype.say = function(){
     console.log(`My name is ${this.name}`)
}
User.prototype.name ='User'
User.say = function(){
    console.log(`My name is ${this.name}`)
}
const user = new User('shibin', 18, 'boy')
user.say() //My name is shibin
user.__proto__.say() //My name is User

```

常见的问题
* 增加或修改原型对象的属性或方法后，所有实例或对象立即可以访问的到
* 创建实例后再覆盖原型，实例对象无法访问到，为什么？
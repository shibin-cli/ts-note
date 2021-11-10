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

function QQUser(no, age, mark) {
    this.no = no
    this.age = age
    this.mark = mark
    this.commonFriends = ['Tom', 'Kool', 'Jay']
    this.show = function(){
        console.log(`qq:${this.no},age:${this.age},mark:${mark},friends:${this.commonFriends}`)
    }
}

const a = new QQUser('10202', 10, '前端')
const b = new QQUser('02', 1, 'py')
const c = new QQUser('03', 5, 'php')
a.commonFriends.push('ss')
a.show()
b.show()
c.show()
var d = new Object({a:1})
console.log(a.__proto__)

// /**
//  * 
//  * @param targetClassPrototype 
//  * @param key 
//  * @param methodDecri 
//  */
// function myDecorator(targetClassPrototype: any, key: string,methodDecri: PropertyDecorator){
//     console.log(targetClassPrototype)
//     console.log(key)
//     console.log(methodDecri)
// }
// class Person{
//     public rolename: string = '管理员'
//     constructor(){

//     }
//     @myDecorator
//     DistriRoles(){
//         console.log('分配角色')
//     }
// }
// new Person()
function logger(targetClassPrototype: any) {
    // const a = new targetClassPrototype()
    // a.say()
    console.log('log')
}
function route(path: string){
    return (targetClassPrototype: any) => {
        // const a = new targetClassPrototype()
        // a.say()
        console.log('route',path)
    }
}
@logger
@route('/login')
class Person {
    name: string = 'shibin'
    say(){
        console.log(this.name)
    }
}
// new Person()
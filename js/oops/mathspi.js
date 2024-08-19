const pi=Object.getOwnPropertyDescriptor(Math,'PI')

console.log(pi)

const chai ={
    name:'ginger chai',
    price:250,
    isAvaiable:true
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

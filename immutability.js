import _ from 'lodash'


// 데이터 불변성
// 원시 데이터 String , Number , Boolean , undefined , null 
// 참조형 데이터 Array Object Function
// -------------------------------------------------------

let a = 1
let b = 4
console.log(a , b , a === b) // 1 , 4 , false (메모리에 주소가 다르기 때문에 일치 하지 않는다.)

b = a // a가 바라보고 있던 메모리 주소를 할당
console.log(a, b , a === b); // 1 , 1 , true (같은 메모리 주소를 바라보고 있다.)

a = 7 // 7을 가지고 있는 새로운 메모리 주소를 할당 받는다.
console.log(a, b , a === b) // 7 , 1 , false

let c = 1 // 기존에 1을 가지고 있는 메모리 주소를 바라본다.
console.log(b, c , b === c) // 1 , 1 , true

// 참조형 데이터는 생긴게 동일 해도 같아도 서로 같은 데이터가 아닐 수도 있다.

let obj = { k: 1}
let obj1 = { k: 1}
console.log(obj , obj1 , obj === obj1) // {k: 1} , {k: 1} , false (서로 다른 메모리 주소를 바라 보고 있다.)

obj.k = 7 
obj1 = obj

console.log(obj , obj1 , obj === obj1) // { k: 7} , { k: 7} , true 

obj.k = 2 
console.log(obj , obj1 , obj === obj1) // { k: 2} , { k: 2} , true // 같은 메모리를 바라보는 변수가 여러개 있으면 참조형 데이터는 하나만 바꿔도 나머지 변수들도 바뀐다.
// obj를 바꿈으로서 obj1도 바뀜

let obj2 = obj1
console.log(obj , obj1 , obj2 , obj === obj2) // { k: 2} , { k: 2} , { k: 2} , true

obj.k = 9 
console.log(obj , obj1 , obj2 , obj === obj2) // {k: 9} , {k: 9} , {k: 9} , true

// 얕은 복사 , 깊은 복사
const user = {
  name: 'Heropy',
  age: 85,
  emails: ['rlaeodjq94@naver.com']
}

// const copyUser = user
//console.log(copyUser === user) // true

user.age = 22
console.log('user' , user) // {name: "Heropy", age: 22, eamils: Array(1)}
// console.log('copyUser' , copyUser) // {name: "Heropy", age: 22, eamils: Array(1)}

// user객체의 age 속성 값을 변경 시켜도 copyUser의 age속성값도 변경 되는 문제가 발생 한다. (같은 메모리 주소를 바라 보고 있어서)

console.log('-----------')
console.log('-----------')

const copyUser = Object.assign({} , user);
// 대상객체에 출처객체를 복사
console.log(copyUser === user) // false
user.age = 33
console.log('user' , user) // {name: "Heropy", age: 33, eamils: Array(1)}
console.log('copyUser' , copyUser) // {name: "Heropy", age: 22, eamils: Array(1)}

console.log('-----------')
console.log('-----------')

const copyUser1 = {...user} // 전개 연산자 사용하여 복사
console.log(copyUser1 === user) // false
user.age = 44
console.log('user' , user) // {name: "Heropy", age: 44, eamils: Array(1)}
console.log('copyUser1' , copyUser1) // {name: "Heropy", age: 33, eamils: Array(1)}

console.log('-----------')
console.log('-----------')

user.emails.push('neowiz@naver.com')
console.log(user.emails === copyUser1.emails) // true가 나와야 함 객체 데이터 내에 배열도 참조 데이터 이기 때문에 같은 메모리 주소를 바라본다. >> 이럴때 필요한게 깊은 복사
console.log('user' , user) // {name: "Heropy", age: 44, eamils: Array(2)}
console.log('copyUser1' , copyUser1) // {name: "Heropy", age: 33, eamils: Array(2)}

// 깊은 복사 : 참조형 데이터 내부도 복사(lodash)
const deepCopy = _.cloneDeep(user) 
user.emails.push('kakao@naver.com')

console.log(user === deepCopy) // false
console.log(user); // {name: "Heropy", age: 44, emails: Array(3)}
console.log(deepCopy); // {name: "Heropy", age: 44, emails: Array(2)}

// deepCopy와 user의 메모리 주소는 다르다.

// 참조 데이터 내에 참조데이터가 또 있으면 깊은 복사 

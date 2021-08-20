// 객체 Object
// 정적 static 메서드 : 리터럴 방식으로 사용불가 (prototype 에 등록된 메소드가 아니다.)
// {}.정적메서드 (불가)
// 객체데이터.정적메서드 (불가)
// Object.정적메서드 (가능)

// assign
// Object.assign(target,source)
// source : 출처객체 
// target : 대상객체
// source에 있는 속성을 target에 복사 한다. (중복 속성이 있으면 덮어 씌운다)
// 반환값 : 대상객체

const userAge = {
  name : 'Heropy',
  age : 28
}

const userEmail = {
  name : 'Heropy',
  email : 'daeeop@daum.net'
}

const target = Object.assign(userAge , userEmail)
console.log(target); // {name : Heropy , age : 28 , email : daeeop@daum.net}
console.log(userAge); // {name : Heropy , age : 28 , email : daeeop@daum.net}
console.log(target === userAge); // true 

const a = {k : 123}
const b = {k : 123}
console.log(a === b) // false 

// 일치 연산자로 비교 했을때 생긴게 같다고 해서 true가 나오는게 아니다.
// 메모리 주소로 비교 한다. (참조형 데이터)
// 이름이 달라도 같은 메모리 주소를 바라보면 true

const newTarget = Object.assign({} , userAge , userEmail)
console.log(newTarget);
// userAge가 대상객체 아님 출처 객체 이다.
// {} 객체가 대상 객체이다.

// Object.keys
const user = {
  name : 'Heropy',
  age : 28,
  email : 'daeeop94@daum.net'
}

const keys = Object.keys(user)
console.log(keys) // ['name' , 'age' ,'email'] 객체 데이터의 key 속성명을 배열로 만들어서 반환

// 활용
console.log(keys[2]); // email 
console.log(user['email']) // daeeop94daum.net // 이런식으로 접근가능 

const values = keys.map(item => user[item])
console.log(values)




// 구조 분해 할당 (비구조화 할당)
const admin = {
  name : 'Heropy',
  age : 85,
  email : 'daeeop94@naver.com'
}

const { name , age , email , address} = admin
console.log(`관리자 이름 : ${name}`)
console.log(`${name}의 나이는 ${age}`)
console.log(`${name}의 이메일 주소는 ${email}`)
console.log(address); // undefined
// const {address = 'korea'} 이런 식으로 없는 속성에 대해서는 기본값을 지정 해줄 수 있다. (속성이 존재하면 기존의 속성이 반환)
// const {name: heropy} = admin 이런식으로 사용 하면 admin의 name 속성을 heropy라는 변수로 사용 할 수 있다.

// admin이라는 객체 데이터의 구조를 분해해서 내가 원하는 속성만 꺼내서 사용 할 수 있는 개념 
// 구조분해된 내용을 변수로 만들어서 활용 할 수 있다.
// const email = admin.email / admin['email]과 같은 효과
// 좋은점 : 속성이 많은 경우에 필요한것만 꺼내서 사용 할 수 있는 장점이 있다.

// 구조분해 할당은 배열에서도 가능 하다.
const countrys = ['USA' , 'KOR' , 'ENG']
const [one , two , three ,four] = countrys // [] 사용주의 !! 아이템이 순서대로 할당 된다.
console.log(one);
console.log(two);
console.log(three);
console.log(four); // undefined

const [,kor] = countrys
console.log(kor);

// 전개 연산자 (Spread 연산자) ... 

const brands = ['Nike' , 'Auralee' , 'Neat' ]
console.log(brands);
console.log(...brands); // 문자 데이터 형식으로 출력

// function toObject (a , b , c) {
//   return {
//     a: a,
//     b: b,
//     c: c
//   }
// }

// 속성의 이름과 변수의 이름이 같으면 축약 할 수 있다.
const toObject = (a,b,c) => ({a , b, c})
console.log(toObject(...brands));
// 만약 스프레드 문법을 사용 하지 않으면 toObject(brands[0] , brands[1]..,) 이런식으로 매개변수를 넣어야 한다.
// {a: "Nike", b: "Auralee", c: "Neat"}

// 만약 toObject의 매개변수는 3개를 받는데 brands 배열의 길이가 4로 늘어나면
const brand = ['Nike' , 'Auralee' , 'Neat' , 'EngineeredGarments']
function goObject(one , two , ...three) {
  return {
    a: one,
    b: two,
    c: three
  }
}

console.log(goObject(...brand));
// {a: "Nike", b: "Auralee", c: Array(2)}
// ...three 부분이 나머지 아이템들을 배열 형태로 다 받는다. (rest parameter)
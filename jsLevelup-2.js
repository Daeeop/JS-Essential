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
console.log(user['email']) // daeeop94daum.net

const values = keys.map(item => user[item])
console.log(values)


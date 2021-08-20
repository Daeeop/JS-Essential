import _ from 'lodash' // lodash from node_modules
import getType from './getType'
// import {random , user as Heropy} from './getRandom'
import * as R from './getRandom'; // 모든 데이터 한번에 가져오기
import myData from './myData.json'; // json 확장자 명시 / json 파일은 하나의 문자데이터 이다. / import 해서 사용하면 하나의 객체데이터 처럼 사용되는것 처럼 보인다.

console.log(_.camelCase('good life'))
console.log(getType([1,2,3]));
// console.log(random() , random())
console.log(R)
console.log(R.user);

// 자바스크립트 가져오기 , 내보내기
// Default export (이름 내 마음대로 지정 가능) / 파일에서 딱 한번만 사용 할 수 있다.
// named export (이름이 있어야함) / 여러개의 데이터를 한번에 내보낼 수 있다.

// 하나의 자바스르립트 파일 내에서 default export(한번만) named export를 같이 사용 할 수 있다.

// lodash 사용법
// uniq Method // 중복 요소 제거 하고 새로운 배열 반환

const userA = [
  { userId : '1' , name : 'HEROPY'},
  { userId : '2' , name : 'NEO'}
]

const userB = [
  { userId : '1' , name : 'HEROPY'},
  { userId : '3' , name : 'Amy'}
]

const userC = userA.concat(userB) // 중복 데이터 허용 
console.log('concat ' , userC)
console.log('uniqBy' , _.uniqBy(userC , 'userId')); // 중복된 데이터 허용 x (중복이 있는 데이터 , 중복을 구분할 속성)

const userD = _.unionBy(userA, userB , 'userId') // 애초에 만들때 부터 중복 제거 (합칠 데이터1 , 합칠 데이터2 , 고유값)
console.log('unionBy' , userD);

const users =[
  { userId : '1' , name : 'HEROPY'},
  { userId : '2' , name : 'NEO'},
  { userId : '3' , name : 'Amy'},
  { userId : '4' , name : 'Evan'},
  { userId : '5' , name : 'Louis'},
]

const foundUser = _.find(users, { name : 'Amy'}); // 찾는다.
const foundUserIndex = _.findIndex(users, {name : 'Amy'}); // 몇번째 요소 인지 찾는다.

console.log(foundUser);
console.log(foundUserIndex);

_.remove(users , {name : 'HEROPY'}) // 배열 요소 제거
console.log(users)

// JSON : 데이터를 표현 하는 하나의 형태 / 객체 표기법 / "" 만 가능
const daeeop = {
  name: 'Heropy',
  age : 28 ,
  emails: [
    'daeeop94@daum.net',
    'hellodigital@hello.com'
  ]
}

console.log('daeeop' , daeeop);

const str = JSON.stringify(daeeop) // json 데이터를 자바스크립트 문자데이터로 변경 (JSON화)
console.log('str' , str);
console.log(typeof str)

const obj = JSON.parse(str) // 문자데이터를 실제 객체 데이터로 변경 (자바스크립트 에서 쓸 수 있는 형태로 변경)
console.log('obj' , obj)
console.log(typeof obj);

console.log(myData);

// Storage
// Local Storage : 저장하면 사이트에 종속 된다.(반 영구적 사용 가능 )
// Session Storage : 페이지를 닫으면 사라진다.
// 문자 데이터를 저장해야한다. (객체 데이터는 JSON.Stringfy 사용하여 변경 하고 저장)

 localStorage.setItem('daeeop' , JSON.stringify(daeeop))
 console.log('storage' ,localStorage.getItem('daeeop'))
 console.log('storage-json' , JSON.parse(localStorage.getItem('daeeop')))

// 로컬 스토리지에 저장한 내용 수정하기
const localStr = localStorage.getItem('daeeop');
const jsonObj = JSON.parse(localStr);
jsonObj.age = 22
console.log(jsonObj);
localStorage.setItem('daeeop' , JSON.stringify(jsonObj));

// lowdb 활용 하기

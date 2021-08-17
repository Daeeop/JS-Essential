import random from './getRandom';


// 데이터 타입 확인 typeof

// 결과 값 : Object
// typeof(null) 
// typeof([])
// typeof({})

// typeof 만으로는 정확한 데이터 타입을 알 수 없는 경우가 있기 때문에 
// 별개의 함수를 이용해서 정확한 데이터 타입을 알아 낼 수 있다.

const getType = (data) => {
  return Object.prototype.toString.call(data).slice(8 , -1);
}

console.log(getType(123)); // Number
console.log(getType(false)); // Boolean
console.log(getType(null)); // Null
console.log(getType([])); // Array
console.log(getType({})); // Object

// getType 이라는 함수는 main.js 에서 정의를 했기 때문에
// 다른 js 파일에서는 사용 할 수 없다. (undefined)
// 다른 js 파일에서 정의한 함수를 사용 하려면 그 함수에 export default가 있어야 하고 
// 새로 사용 할 곳에서 import를 해야 한다.

// import getType from './getType.js'
// 경로를 제대로 명시 하지 않으면 에러 발생 (node_modules 에서 검색 한다.)
// getType 이라는 함수를 getType 이라는 변수에 할당해서 사용 한다.
// getType.js 에서 export 키워드가 있기 때문에 import 가능

// 산술 연산자
console.log( 1 + 2);
console.log( 1 - 2);
console.log( 1 * 3);
console.log( 10 / 2); // 나누기 연산자
console.log( 10 % 2); // 나머지 연산자 : 0

// 할당 연산자 (=)
// a 라는 변수에 숫자 2를 할당
let a = 2;
console.log(a); 
// 2
// a = a + 1; 
a += 1; // += 도 할당 연산자 (-= , *= , /= , %= )
console.log(a); // 3

// 비교 연산자 (일치 연산자)
const num = 1
const num1 = 1
console.log(num === num1) // true

// 일치 연산자 활용 함수 
const isEqul = (x,y) => {
  return x === y
}

console.log(isEqul(1,1)) // true
console.log(isEqul(1,'1')) // false

console.log(num !== num1); // false (서로가 다른가 ? )
console.log(num < num1); // a가 b 보다 작은가? false

// 논리 연산자 (&& , AND) , (|| , OR) , (! ,NOT))
// && 연산자 : 모두 true 여야 true 반환
// || 연산자 : 하나만 true 여도 true 반환
// ! (부정) 연산자 : true 면 false 반환 
const z = true;
const x = true;
const y = true;
console.log(x && y && z); // true
console.log(!z);

// 삼항 연산자
// 조건식 ? 조건식이 true면 실행 : 조건식이 false면 실행

const num2 = 3 
num1 < num2 ? console.log('1은 3보다 작아요') : console.log('1은 3보다 커요');


//////////////////////////////////////////////////

const randomNum = random();

// 조건문 (Switch)
// 하나의 케이스가 끝나면 break로 마무리 해주어야 한다.
switch (randomNum ) {
  case 0:
    console.log('randomNum is 0')
    break
  case 2:
    console.log('randomNum is 2')
    break
  case 4: 
  console.log('randomNum is 4')
  break
  
  default: 
  console.log('rest...')
} 


// 조건문 (If Else)
if(randomNum === 0) {
  console.log('randomNum is 0');
} else if(randomNum < 5) {
  console.log('randomNum < 5');
} else {
  console.log(randomNum);
  console.log('randomNum 은 5보다 크고 0은 아니야.')
}

// 반복문 For
// for(시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector('ul')
for (let i = 0; i < 10; i++) {
 const li = document.createElement('li');
 li.textContent = `list-${i + 1}`
 li.addEventListener('click' , () => {
   console.log(li.textContent);
 })
 ulEl.appendChild(li);
}

// 변수 유효범위
// var(권장 x) , let , const

const scope = () => {
  if(true) {
    const scopeNum = 123
    
  }
  console.log(scopeNum);
}
scope();

// const , let은 우리가 변수가 선언되어져있는 블럭 내부가 유효 범위(동작 가능) 이다. 지금 같은 경우는 if 조건문 안에 scopeNum이 선언 되어져있는데 
// 조건문 밖에서 console.log(scopeNum);가 있어서 유효범위에 벗어나서 Uncaught ReferenceError: scopeNum is not defined 라는 오류가 콘솔에 출력된다.
// 결론적으로 const , let은 블록(중괄호) 레벨의 유효범위를 가진다. 

// var 변수 키워드는 블록레벨의 유효범위가 아니고 함수레벨의 유효범위를 가진다. 
// 그렇기 때문에 위에 scope 함수에서 const를 var로 바꾸면 오류가 발생 하지 않는다.
// 의도 하지 않는 곳에서 변수가 사용 될 수도 있고 메모리 누수가 생기기 때문에 권장 하지 않는다.

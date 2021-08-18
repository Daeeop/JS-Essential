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
  // console.log(scopeNum);
}
scope();

// const , let은 우리가 변수가 선언되어져있는 블럭 내부가 유효 범위(동작 가능) 이다. 지금 같은 경우는 if 조건문 안에 scopeNum이 선언 되어져있는데 
// 조건문 밖에서 console.log(scopeNum);가 있어서 유효범위에 벗어나서 Uncaught ReferenceError: scopeNum is not defined 라는 오류가 콘솔에 출력된다.
// 결론적으로 const , let은 블록(중괄호) 레벨의 유효범위를 가진다. 

// var 변수 키워드는 블록레벨의 유효범위가 아니고 함수레벨의 유효범위를 가진다. 
// 그렇기 때문에 위에 scope 함수에서 const를 var로 바꾸면 오류가 발생 하지 않는다.
// 의도 하지 않는 곳에서 변수가 사용 될 수도 있고 메모리 누수가 생기기 때문에 권장 하지 않는다.


// 형 변환(데이터 타입 변환)
const test = 1
const test1 = '1';
console.log(test == test1); // true (동등 연산자 사용시 형 변환 발생) .. 원래는 false가 나와야 한다. .. 동등연산자 사용 권장 안함 .. 일치연산자(===) 권장

// Truthy (참 같은 값) : true (boolean) , {} (object) , [] (array) , 1,2 (number) , 'false' (String) , -12 , '3.14'...

// Falsy(거짓 같은 값) : false (booelan) , '' (빈 문자열) , null , undefined , 0 , -0 , NaN (Not a Number , 숫자 데이터)
// NaN : 산술 연산자의 결과가 숫자로 판단 할 수 없을 경우에 발생 하는 데이터 ex ) 1 + undefined .. NaN 숫자 데이터 이긴 한데 숫자는 아니다.
 
// 형 변환을 통해서 거짓 , 참 값으로 해석 될 수 있기 때문에 잘 알아 두어야 한다.


// 함수 정의 (선언)

function sum(n,m) {
  return n + m ; // return 키워드 이하의 코드는 실행 불가 
}

// const sum = function(n,m) {}; 함수 표현

// sum(1,3) 괄호 안의 1,3 은 인수 라고 칭한다.
// sum 함수 선언부에 괄호 안은 매개 변수라고 칭한다.

function newSum() {
  return arguments[0] + arguments[1]
}

console.log(newSum(1,2));

// 함수 선언시 따로 매개변수를 설정 하지 않고 arguments 객체를 사용 할 수 있다. 1 = arguments[0] / 2 = arguments[1]

// 화살표 함수 (arrowFunction)
// () => {}; vs function () {};

// 화살표 함수의 장점은 내용을 축약 할 수 있다.
// 실행문을 중괄호로 감싸면 return 키워드 사용해야함
// 객체데이터를 축약형으로 return 하려면 () 괄호로 한번 감싸주어야 한다.
const double = (x) => x * 2;
console.log(double(5));

const obj = () => ({name : 'daeeop'});
console.log(obj());

// 즉시 실행함수 (IIFE)
// 익명 함수를 ()로 감싸고 끝나는 부분에 () 사용
(function () {
  console.log('즉시 실행');
}());

// 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수 표현식은 해당 안함

ddouble();
function ddouble() {
  console.log(a * 2);
}

// 함수 선언부가 함수 호출 밑에 있어도 오류 없이 동작

// 타이머 함수
// setTimeout(함수 , 시간) : 일정 시간 후 함수 실행
// setInterval(함수 , 시간) : 시간 간격 마다 함수 실행
// clearTimeout(함수명) : 설정된 Timeout 함수를 종료
// clearInterval(함수명) : 설정된 Interval 함수를 종료

// 콜백 함수 (함수의 인수로 사용되는 함수)
// setTimeout(함수 , 시간)

function timeOut (callback) {
  setTimeout(() => {
    console.log('heropy!')
    callback();
  }, 3000);
}

timeOut(() => {
  console.log('Heropy 출력 완료') // 콜백 함수
});

// 콜백 함수를 특정한 실행 위치를 보장 해주는 역할로 콜백 함수를 활용 할 수 있다.
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
console.log(a); // 2
// a = a + 1; 
a += 1; // += 도 할당 연산자 (-= , *= , /= , %= )
console.log(a); // 3






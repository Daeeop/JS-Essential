// JS 데이터

// String: "", '', ``
// Number 
// Boolean: True False
// undefined
// null
// Object: {}
// Array: []

// prototype 으로 지정된 메소드는 메모리에 딱 한번만 올라가고 생성자 함수로 만들어진 인스턴스가 언제든 참조 할 수 있다.
// String 전역 객체(전체 영역에서 사용 가능)은 문자열의 생성자 이다.

// String.protoType.indexOf()
// indexOf의 인수로 들어간 문자열이 찾을 수 없으면 -1 반환
const result = 'Hello world'.indexOf('world');
console.log(result); // 6 

let str = 'hello world';

console.log(str.length); // length 문자열의 길이 반환
console.log(str.slice(0,3)); // hel 0번쨰 Index 부터 3번쨰 직전 index 까지 자른 결과 문자열 반환
console.log(str.replace('world' ,'Heropy')); // hello Heropy : 첫번째 인자를 두번째 인자로 교체 

str = 'rlaeodjq94@naver.com';

console.log(str.match(/.+(?=@)/)[0]); // rlaeodjq94
// match 메서드는 문자열에서 정규표현식을 통해서 문자를 매치 시키고 배열 정보로 반환 한다.

str = '     Hello world      ';
console.log(str.trim()); // 앞,뒤 공백 제거 



// 숫자와 수학
const pi = 3.14159265358979
const piStr = pi.toFixed(2); // 인수로 소숫점 몇번째 자리 까지 유지 할지 지정 (문자 데이터 반환)
console.log(piStr); // 3.14 
console.log(typeof piStr); // string 

// 문자 데이터로 변환 된 값을 다시 숫자로 바꾸기 위해 사용하는 함수
const integer = parseInt(piStr); // 정수 부분만 추출
const float = parseFloat(piStr);
console.log(integer); // 3 
console.log(float); // 3.14
console.log(typeof integer , typeof float); // number number 

// Math 수학 객체 (자바스크립트 내장 객체)
// 여러가지 Math 객체 함수 

console.log(Math.abs(-12)); // 12 (절대 값 반환)
console.log(Math.min(2, 8)); // 2 (인수 중 작은값 반환)
console.log(Math.max(4, 2)); // 4 (인수 중 큰값 반환)
console.log(Math.ceil(3.14)); // 4 (인수 올림)
console.log(Math.floor(3.14)); // 3 (인수 내림)
console.log(Math.round(3.5)); // 4 (인수 반올림)
console.log(Math.random()); // 0~1 사이 랜덤 숫자 반환



// 배열 
const numberArr = [1,2,3,4]
const fruits = ['apple' , 'banana' , 'grape']

console.log(numberArr[2]); // 3
console.log(fruits[2]); // grape

// 배열의 들어있는 각각의 자원을 element or item 이라고 한다.
// 배열의 각각의 자원의 번호를 인덱스 라고 한다.

// 배열 내장 함수
console.log(numberArr.length) // 4
console.log([].length) // 0 

console.log(numberArr.concat(fruits)) // numberArr 배열에 fruits 배열을 병합해서 새로운 배열 반환
                                      // 원본 배열 수정 X (원본 유지)

fruits.forEach((item ,index) => console.log(item ,index)); // 배열에 있는 아이템의 갯수 만큼 인자로 있는 콜백 함수 반복 실행                                     

// map 함수
const a = fruits.forEach((item , index) => {
  console.log(`${item}-${index}`);
})

console.log(a); // undefined (forEach 메서드는 따로 반환되는 값이 없다.)

const b = fruits.map((item ,index) => {
  return `${item}-${index}`
})

console.log(b); // map 함수는 콜백 에서 반환된 특정한 데이터를 기준으로 해서 새로운 배열을 반환 한다.

const c = fruits.map((item , index) => ({
 
  id : index,
  fruits : item

}))

console.log(c); // 배열의 요소로 객체 데이터가 들어있는 배열 반환

// filter 함수
// 배열을 필터링 해서 새로운 배열을 반환 한다.

const mapArr = numberArr.map((item)=> item < 3 )

console.log(mapArr);

const filterArr = numberArr.filter((item) => {
  return item < 3
})

console.log(filterArr);

// map vs filter 
// map : 함수를 실행 할 원본 데이터의 갯수 만큼의 새로운 배열 반환
// filter : 필터링을 통해 조건이 true 여야 반환 하기 때문에 원본 배열의 갯수와 다를 수 있다.

// 둘다 원본 배열 데이터는 훼손 하지 않는다. 


// find , findIndex
// find 함수도 마찬가지로 인자로 들어간 콜백이 배열의 길이 만큼 실행 된다.
// find() : 조건에 맞는 첫번째 아이템을 반환
const findArr = fruits.find(item => {
  return /^g/.test(item)
}) 
console.log(findArr);

const findIndexArr = fruits.findIndex(item => /^g/.test(item))

console.log(findIndexArr); // 조건에 맞는 첫번째 아이템의 인덱스 반환


// includes : 배열 데이터에 인수로 사용된 것이 포함 되어있는가 (true or false)

// push , unshift (원본을 수정 한다.)
// push : 배열 아이템 제일 뒤에 추가
// unshift : 배열 아이템 제일 앞에 추가
numberArr.push(5);
console.log(numberArr);

numberArr.unshift(0);
console.log(numberArr);

// reserve (원본 수정)
// 배열을 거꾸로 뒤집는다.

// splice (원본 수정)
// 첫번째 인수 : 인덱스 두번쨰 인수 : 갯수 ex) 2번째 인덱스 부터 1개 삭제
// 세번째 인수로 값이 들어오면 그 인수는 끼워 넣으라는 뜻 
numberArr.splice(2,1 ,777); 
console.log(numberArr);
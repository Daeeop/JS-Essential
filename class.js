const heropy = {
  firstName : 'Heropy',
  lastName : 'Park',
  getFullName : function () {
    return `${this.firstName} ${this.lastName}`
  }
}

// this = heropy , 메소드가 소속되어 있는 객체를 뜻한다.
// heropy.firstName 이라고 작성 해도 상관없지만 변수명은 언제든지 바뀔 수 있기 때문에 this 사용하여 객체를 지칭
console.log(heropy);
console.log(heropy.getFullName());

const amy = {
  firstName : 'Amy',
  lastName : 'Clarke',
  getFullName : function () {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(amy);
console.log(amy.getFullName());

const neo = {
  firstName : 'Neo',
  lastName : 'Smith',
  getFullName : function () {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(neo);
console.log(neo.getFullName());

// 규모가 큰 서비스를 개발 할때는 이러한 코드는 효율이 떨어진다. (메모리 누수가 심하다.)
// 이럴때 사용하는 개념이 class 

function User(first , last) {
  this.firstName = first;
  this.lastName = last;
  
}

const daeeop = new User('Daeeop' , 'Kim');
// new 라는 키워드를 통해서 user 함수를 실행
// 이때 user라는 함수를 생성자 함수 라고 한다. (하나의 객체데이터가 생성 된다.)

const amy1 = new User('Amy' , 'Cleark');
const neo1 = new User('Neo' , 'Smith');

console.log(daeeop);
console.log(amy1);
console.log(neo1);

// 생성자 함수를 통한 그 결과를 반환해서 할당 된 변수를 인스턴스 라고 한다.

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

console.log(amy1.getFullName());

// user라는 함수의 숨어져있는 prototype 속성 부부에 getFullName 함수를 할당하여 
// 메모리 중복 할당 없이 관리 할 수 있다. (메모리에 딱 한번만 만들어 진다.)
// 인스턴스들은 딱 한번만 메모리에 올라가 있는 getFullName 을 참조 한다.
// 배열 데이터 에는 prototpye 으로 만들어져 있는 다양한 메소드가 있다.
// 생성자 함수는 파스칼 케이스로 작성 첫단어의 첫글자도 대문자로 작성 



// This 
// 일반 함수는 호출 위치에서 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const kim = {
  name : 'Daeeop',
  normal : function() {
    console.log(this.name);
  },
  arrow : () => {
    console.log(this.name)
  }
}

kim.normal(); // Daeeop // kim이 this
kim.arrow(); // undefined // this가 무엇인지 알 수 없다.

const park = {
  name : 'park',
  noraml : kim.normal,
  arrow : kim.arrow
}

park.noraml(); // park
park.arrow(); // undefined

// 생성자 함수에서 this

function Userr(name) {
  this.name = name;
}

Userr.prototype.noraml = function() {
  console.log(this.name);
}

Userr.prototype.arrow = () => {
  console.log(this.name);
}

const bae = new Userr('bae');
bae.noraml(); // bae
bae.arrow(); // undefined

// const timer = {
//   name : 'Jung',
//   timeout : function () {
//     setTimeout(function() {
//       console.log(this.name);
//     } , 2000)
//   }
// }

// timer.timeout(); // undefined가 나와야 함

const timer = {
  name : 'JUNG' ,
  timeout : function() {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  }
}

timer.timeout(); // JUNG // this : timer
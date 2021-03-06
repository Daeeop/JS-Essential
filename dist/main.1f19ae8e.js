// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"getRandom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;

function random() {
  return Math.floor(Math.random() * 10);
}
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _getRandom = _interopRequireDefault(require("./getRandom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 데이터 타입 확인 typeof
// 결과 값 : Object
// typeof(null) 
// typeof([])
// typeof({})
// typeof 만으로는 정확한 데이터 타입을 알 수 없는 경우가 있기 때문에 
// 별개의 함수를 이용해서 정확한 데이터 타입을 알아 낼 수 있다.
var getType = function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
};

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

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 3);
console.log(10 / 2); // 나누기 연산자

console.log(10 % 2); // 나머지 연산자 : 0
// 할당 연산자 (=)
// a 라는 변수에 숫자 2를 할당

var a = 2;
console.log(a); // 2
// a = a + 1; 

a += 1; // += 도 할당 연산자 (-= , *= , /= , %= )

console.log(a); // 3
// 비교 연산자 (일치 연산자)

var num = 1;
var num1 = 1;
console.log(num === num1); // true
// 일치 연산자 활용 함수 

var isEqul = function isEqul(x, y) {
  return x === y;
};

console.log(isEqul(1, 1)); // true

console.log(isEqul(1, '1')); // false

console.log(num !== num1); // false (서로가 다른가 ? )

console.log(num < num1); // a가 b 보다 작은가? false
// 논리 연산자 (&& , AND) , (|| , OR) , (! ,NOT))
// && 연산자 : 모두 true 여야 true 반환
// || 연산자 : 하나만 true 여도 true 반환
// ! (부정) 연산자 : true 면 false 반환 

var z = true;
var x = true;
var y = true;
console.log(x && y && z); // true

console.log(!z); // 삼항 연산자
// 조건식 ? 조건식이 true면 실행 : 조건식이 false면 실행

var num2 = 3;
num1 < num2 ? console.log('1은 3보다 작아요') : console.log('1은 3보다 커요'); //////////////////////////////////////////////////

var randomNum = (0, _getRandom.default)(); // 조건문 (Switch)
// 하나의 케이스가 끝나면 break로 마무리 해주어야 한다.

switch (randomNum) {
  case 0:
    console.log('randomNum is 0');
    break;

  case 2:
    console.log('randomNum is 2');
    break;

  case 4:
    console.log('randomNum is 4');
    break;

  default:
    console.log('rest...');
} // 조건문 (If Else)


if (randomNum === 0) {
  console.log('randomNum is 0');
} else if (randomNum < 5) {
  console.log('randomNum < 5');
} else {
  console.log(randomNum);
  console.log('randomNum 은 5보다 크고 0은 아니야.');
} // 반복문 For
// for(시작조건; 종료조건; 변화조건) {}


var ulEl = document.querySelector('ul');

var _loop = function _loop(i) {
  var li = document.createElement('li');
  li.textContent = "list-".concat(i + 1);
  li.addEventListener('click', function () {
    console.log(li.textContent);
  });
  ulEl.appendChild(li);
};

for (var i = 0; i < 10; i++) {
  _loop(i);
} // 변수 유효범위
// var(권장 x) , let , const


var scope = function scope() {
  if (true) {
    var scopeNum = 123;
  } // console.log(scopeNum);

};

scope(); // const , let은 우리가 변수가 선언되어져있는 블럭 내부가 유효 범위(동작 가능) 이다. 지금 같은 경우는 if 조건문 안에 scopeNum이 선언 되어져있는데 
// 조건문 밖에서 console.log(scopeNum);가 있어서 유효범위에 벗어나서 Uncaught ReferenceError: scopeNum is not defined 라는 오류가 콘솔에 출력된다.
// 결론적으로 const , let은 블록(중괄호) 레벨의 유효범위를 가진다. 
// var 변수 키워드는 블록레벨의 유효범위가 아니고 함수레벨의 유효범위를 가진다. 
// 그렇기 때문에 위에 scope 함수에서 const를 var로 바꾸면 오류가 발생 하지 않는다.
// 의도 하지 않는 곳에서 변수가 사용 될 수도 있고 메모리 누수가 생기기 때문에 권장 하지 않는다.
// 형 변환(데이터 타입 변환)

var test = 1;
var test1 = '1';
console.log(test == test1); // true (동등 연산자 사용시 형 변환 발생) .. 원래는 false가 나와야 한다. .. 동등연산자 사용 권장 안함 .. 일치연산자(===) 권장
// Truthy (참 같은 값) : true (boolean) , {} (object) , [] (array) , 1,2 (number) , 'false' (String) , -12 , '3.14'...
// Falsy(거짓 같은 값) : false (booelan) , '' (빈 문자열) , null , undefined , 0 , -0 , NaN (Not a Number , 숫자 데이터)
// NaN : 산술 연산자의 결과가 숫자로 판단 할 수 없을 경우에 발생 하는 데이터 ex ) 1 + undefined .. NaN 숫자 데이터 이긴 한데 숫자는 아니다.
// 형 변환을 통해서 거짓 , 참 값으로 해석 될 수 있기 때문에 잘 알아 두어야 한다.
// 함수 정의 (선언)

function sum(n, m) {
  return n + m; // return 키워드 이하의 코드는 실행 불가 
} // const sum = function(n,m) {}; 함수 표현
// sum(1,3) 괄호 안의 1,3 은 인수 라고 칭한다.
// sum 함수 선언부에 괄호 안은 매개 변수라고 칭한다.


function newSum() {
  return arguments[0] + arguments[1];
}

console.log(newSum(1, 2)); // 함수 선언시 따로 매개변수를 설정 하지 않고 arguments 객체를 사용 할 수 있다. 1 = arguments[0] / 2 = arguments[1]
// 화살표 함수 (arrowFunction)
// () => {}; vs function () {};
// 화살표 함수의 장점은 내용을 축약 할 수 있다.
// 실행문을 중괄호로 감싸면 return 키워드 사용해야함
// 객체데이터를 축약형으로 return 하려면 () 괄호로 한번 감싸주어야 한다.

var double = function double(x) {
  return x * 2;
};

console.log(double(5));

var obj = function obj() {
  return {
    name: 'daeeop'
  };
};

console.log(obj()); // 즉시 실행함수 (IIFE)
// 익명 함수를 ()로 감싸고 끝나는 부분에 () 사용

(function () {
  console.log('즉시 실행');
})(); // 호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수 표현식은 해당 안함


ddouble();

function ddouble() {
  console.log(a * 2);
} // 함수 선언부가 함수 호출 밑에 있어도 오류 없이 동작
// 타이머 함수
// setTimeout(함수 , 시간) : 일정 시간 후 함수 실행
// setInterval(함수 , 시간) : 시간 간격 마다 함수 실행
// clearTimeout(함수명) : 설정된 Timeout 함수를 종료
// clearInterval(함수명) : 설정된 Interval 함수를 종료
// 콜백 함수 (함수의 인수로 사용되는 함수)
// setTimeout(함수 , 시간)


function timeOut(callback) {
  setTimeout(function () {
    console.log('heropy!');
    callback();
  }, 3000);
}

timeOut(function () {
  console.log('Heropy 출력 완료'); // 콜백 함수
}); // 콜백 함수를 특정한 실행 위치를 보장 해주는 역할로 콜백 함수를 활용 할 수 있다.
},{"./getRandom":"getRandom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57834" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map
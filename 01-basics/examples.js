// ===== 1. var、let、constの基本的な使い方 =====

// var - 再宣言・再代入可能
var count = 1;
var count = 2;  // 再宣言OK
count = 3;      // 再代入OK
console.log(count); // 3

// let - 再宣言不可・再代入可能
let score = 10;
// let score = 20;  // SyntaxError: Identifier 'score' has already been declared
score = 20;        // 再代入OK
console.log(score); // 20

// const - 再宣言不可・再代入不可
const PI = 3.14;
// const PI = 3.14159;  // SyntaxError: Identifier 'PI' has already been declared
// PI = 3.14159;        // TypeError: Assignment to constant variable
console.log(PI); // 3.14


// ===== 2. スコープの違い =====

// var - 関数スコープ
function varScopeDemo() {
  if (true) {
    var insideIf = "I am var";
  }
  console.log(insideIf); // "I am var" - ifブロックの外でもアクセス可能
}

// let/const - ブロックスコープ
function letConstScopeDemo() {
  if (true) {
    let insideIfLet = "I am let";
    const insideIfConst = "I am const";
  }
  // console.log(insideIfLet);  // ReferenceError
  // console.log(insideIfConst); // ReferenceError
}


// ===== 3. ホイスティングの違い =====

// var - 宣言が巻き上げられ、undefined で初期化される
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// let/const - 宣言は巻き上げられるが、初期化されない (TDZ)
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am in TDZ";


// ===== 4. グローバルスコープでの振る舞い =====

// ブラウザ環境での例:
var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

// varはwindowオブジェクトのプロパティになる
console.log(window.globalVar);   // "I am global var"
console.log(window.globalLet);   // undefined
console.log(window.globalConst); // undefined


// ===== 5. const で宣言したオブジェクトや配列 =====

// オブジェクトの場合 - プロパティの変更は可能
const user = {
  name: "山田太郎",
  age: 30
};

user.age = 31;  // OK - プロパティの変更は可能
// user = {};   // TypeError - オブジェクト自体の再代入は不可

// 配列の場合 - 要素の変更は可能
const numbers = [1, 2, 3];
numbers.push(4);  // OK - 配列の内容変更は可能
numbers[0] = 0;   // OK
// numbers = [5, 6, 7]; // TypeError - 配列自体の再代入は不可

// イミュータブルにしたい場合はObject.freezeを使用
const frozenUser = Object.freeze({
  name: "佐藤花子",
  age: 25
});
// frozenUser.age = 26; // strictモードではエラー、非strictモードでは無視される


// ===== 6. ループでの使用例 =====

// for文でのlet
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2 と出力される
}

// for文でのvar（問題パターン）
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 3, 3, 3 と出力される
}


// ===== 7. 即時実行関数式(IIFE)との比較 =====

// ES5以前: ブロックスコープを模倣するためにIIFEを使用
(function() {
  var privateVar = "私はIIFE内のプライベート変数";
  console.log(privateVar);
})();
// console.log(privateVar); // ReferenceError

// ES6以降: ブロックスコープでシンプルに
{
  let privateVar = "私はブロックスコープのプライベート変数";
  const privateConst = "私も同様";
  console.log(privateVar);
}
// console.log(privateVar); // ReferenceError

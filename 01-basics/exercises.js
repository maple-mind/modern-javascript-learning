// ===== 練習問題: モダンJavaScriptの変数宣言 =====

// 練習問題1: スコープの違いを理解する
// 次のコードの出力結果を予測し、その理由を説明してください
function scopeChallenge() {
  if (true) {
    var varVariable = "var variable";
    let letVariable = "let variable";
    const constVariable = "const variable";
  }
  
  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
}

// scopeChallenge(); // コメントを外して実行


// 練習問題2: 適切な変数宣言を選ぶ
// 以下の各シナリオで最も適切な変数宣言（var, let, const）を選び、
// コードを書き換えてください。理由も説明してください。

// 2.1: 円周率の定義
var PI = 3.14159;

// 2.2: forループのカウンター
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// 2.3: 一度定義したらユーザー情報を更新しない
var user = {
  id: 12345,
  username: "javascript_lover",
  joinDate: "2023-01-15"
};

// 2.4: 買い物かごの中身（アイテムの追加・削除あり）
var shoppingCart = [];
shoppingCart.push("ノートPC");


// 練習問題3: クロージャとスコープ
// 以下のコードを修正して、期待される出力結果になるようにしてください
function createFunctions() {
  var functions = [];
  
  for (var i = 0; i < 3; i++) {
    functions.push(function() {
      console.log(i);
    });
  }
  
  return functions;
}

var fns = createFunctions();
// fns[0](); // 期待される出力: 0
// fns[1](); // 期待される出力: 1
// fns[2](); // 期待される出力: 2


// 練習問題4: TDZ（Temporal Dead Zone）を理解する
// 以下のコードのエラーを説明し、修正してください
function tdxExercise() {
  console.log(tdxVar);
  console.log(tdxLet);
  console.log(tdxConst);
  
  var tdxVar = "var変数";
  let tdxLet = "let変数";
  const tdxConst = "const変数";
}


// 練習問題5: オブジェクトのイミュータビリティ
// 以下のオブジェクトを完全にイミュータブル（変更不可）にするコードを書いてください
const configuration = {
  theme: "dark",
  fontSize: 16,
  notifications: {
    email: true,
    sms: false,
    push: true
  }
};


// 練習問題6: レガシーコードのモダン化
// 以下のレガシーコードをモダンなJavaScriptに書き換えてください
var calculateArea = function(radius) {
  var PI = 3.14;
  var area = PI * radius * radius;
  return area;
};

var radius = 5;
var area = calculateArea(radius);
console.log("面積は " + area + " 平方単位です");


// 練習問題7: デバッグチャレンジ
// 以下のコードには問題があります。見つけて修正してください
function processData() {
  const data = [1, 2, 3];
  
  for (var i = 0; i < data.length; i++) {
    setTimeout(function() {
      console.log("インデックス: " + i + ", 値: " + data[i]);
    }, 100);
  }
}

// processData();


// === 解答は別ファイルで提供します ===

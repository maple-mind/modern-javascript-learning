// ===== 練習問題解答: モダンJavaScriptの変数宣言 =====

// 練習問題1: スコープの違いを理解する
// 解答と説明
function scopeChallenge() {
  if (true) {
    var varVariable = "var variable";
    let letVariable = "let variable";
    const constVariable = "const variable";
  }
  
  console.log(varVariable);     // "var variable" - 関数スコープのため、ifブロックの外でもアクセス可能
  // console.log(letVariable);  // ReferenceError - ブロックスコープのため、ifブロックの外ではアクセス不可
  // console.log(constVariable); // ReferenceError - ブロックスコープのため、ifブロックの外ではアクセス不可
}

// scopeChallenge();


// 練習問題2: 適切な変数宣言を選ぶ
// 解答と説明

// 2.1: 円周率の定義
// 解答:
const PI = 3.14159;
// 理由: 円周率は変更されない固定値のため、constが最適。再代入を防止できる。

// 2.2: forループのカウンター
// 解答:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 理由: ループカウンターは反復ごとに変更され、かつループ内でのみ使用されるため、
// ブロックスコープを持つletが最適。

// 2.3: 一度定義したらユーザー情報を更新しない
// 解答:
const user = {
  id: 12345,
  username: "javascript_lover",
  joinDate: "2023-01-15"
};
// 理由: ユーザー情報オブジェクト自体を再代入しないため、constが適切。
// 注: プロパティは変更可能だが、問題文では更新しないとあるため。

// 2.4: 買い物かごの中身（アイテムの追加・削除あり）
// 解答:
const shoppingCart = [];
shoppingCart.push("ノートPC");
// 理由: 配列自体を再代入する必要はなく、内容の追加・削除だけであればconstで十分。
// 配列のメソッド（push, pop, splice等）は使用可能。


// 練習問題3: クロージャとスコープ
// 解答:
function createFunctions() {
  const functions = [];
  
  for (let i = 0; i < 3; i++) {
    functions.push(function() {
      console.log(i);
    });
  }
  
  return functions;
}

const fns = createFunctions();
// fns[0](); // 0
// fns[1](); // 1
// fns[2](); // 2

// 解説: letを使うことで、各反復で新しいiの値がキャプチャされる。
// varを使うと、すべての関数が同じi（最終値の3）を参照してしまう。


// 練習問題4: TDZ（Temporal Dead Zone）を理解する
// 解答:
function tdxExercise() {
  console.log(tdxVar);   // undefined - varは宣言前に使用可能だが、値はundefined
  // console.log(tdxLet);  // ReferenceError - TDZのため、宣言前にアクセスできない
  // console.log(tdxConst); // ReferenceError - TDZのため、宣言前にアクセスできない
  
  var tdxVar = "var変数";
  let tdxLet = "let変数";
  const tdxConst = "const変数";
}

// 修正版:
function fixedTdxExercise() {
  var tdxVar = "var変数";
  let tdxLet = "let変数";
  const tdxConst = "const変数";
  
  console.log(tdxVar);   // "var変数"
  console.log(tdxLet);   // "let変数"
  console.log(tdxConst); // "const変数"
}


// 練習問題5: オブジェクトのイミュータビリティ
// 解答:
const configuration = {
  theme: "dark",
  fontSize: 16,
  notifications: {
    email: true,
    sms: false,
    push: true
  }
};

// 深いイミュータビリティを実現するには、再帰的にObject.freezeを適用する
function deepFreeze(obj) {
  // 基本型またはnullの場合は何もしない
  if (obj === null || typeof obj !== 'object') return obj;
  
  // プロパティを凍結
  Object.freeze(obj);
  
  // すべてのプロパティに対して再帰的に処理
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);
    }
  });
  
  return obj;
}

// 設定オブジェクトを完全に不変にする
const frozenConfig = deepFreeze(configuration);

// テスト
// frozenConfig.theme = "light"; // strictモードではエラー
// frozenConfig.notifications.email = false; // strictモードではエラー


// 練習問題6: レガシーコードのモダン化
// 解答:
const calculateArea = (radius) => {
  const PI = 3.14;
  const area = PI * radius * radius;
  return area;
};

const radius = 5;
const area = calculateArea(radius);
console.log(`面積は ${area} 平方単位です`);

// 変更点:
// 1. var → const に変更（値が変更されないため）
// 2. 関数宣言をアロー関数に変更
// 3. テンプレートリテラルを使用して文字列連結を改善


// 練習問題7: デバッグチャレンジ
// 解答:
function processData() {
  const data = [1, 2, 3];
  
  for (let i = 0; i < data.length; i++) {
    setTimeout(function() {
      console.log(`インデックス: ${i}, 値: ${data[i]}`);
    }, 100);
  }
}

// processData();
// 期待される出力:
// インデックス: 0, 値: 1
// インデックス: 1, 値: 2
// インデックス: 2, 値: 3

// 修正点:
// var i → let i に変更
// varを使うと、すべてのsetTimeoutコールバックが同じi変数（最終値の3）を参照する
// letを使うことで、各反復のiの値がキャプチャされる
// また、テンプレートリテラルを使って可読性を向上

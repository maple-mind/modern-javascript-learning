# モダンJavaScriptの変数宣言

## 概要
ECMAScript 2015（ES6）以降のモダンJavaScriptでは、変数宣言に3つの方法があります：`var`、`let`、`const`。
これらの宣言方法の違いを理解することは、効果的なJavaScriptプログラミングの基礎となります。

## 変数宣言の方法

### 1. var
最も古い変数宣言方法で、関数スコープを持ちます。

**特徴:**
- 関数スコープ（function-scoped）
- 宣言前に使用すると`undefined`となる（ホイスティング）
- 再宣言・再代入が可能
- グローバルオブジェクトのプロパティになる可能性がある

### 2. let
ES6で導入された、よりモダンな変数宣言方法です。

**特徴:**
- ブロックスコープ（block-scoped）
- 宣言前に使用するとReferenceErrorになる（TDZ - Temporal Dead Zone）
- 再宣言は不可、再代入は可能
- グローバルオブジェクトのプロパティにならない

### 3. const
不変の値（定数）を宣言するためのキーワードです。

**特徴:**
- ブロックスコープ（block-scoped）
- 宣言と同時に初期化が必要
- 再宣言・再代入が不可
- オブジェクトや配列の内容は変更可能（イミュータブルではない）

## スコープの理解

### ブロックスコープ vs 関数スコープ
```javascript
function scopeExample() {
  if (true) {
    var functionScoped = "I am function scoped";
    let blockScoped = "I am block scoped";
    const alsoBlockScoped = "I am also block scoped";
  }
  
  console.log(functionScoped);     // "I am function scoped"
  console.log(blockScoped);        // ReferenceError
  console.log(alsoBlockScoped);    // ReferenceError
}
```

## ベストプラクティス

1. **デフォルトで`const`を使用する**
   - 値が変更されないことを意図する場合は常に`const`を使用
   - コードの意図を明確にし、バグを防ぐ

2. **再代入が必要な場合は`let`を使用する**
   - カウンター変数やループ内の変数など

3. **`var`の使用を避ける**
   - レガシーコードのメンテナンス以外では使用しない
   - 予期しない動作やバグを防ぐため

4. **変数は使用する直前に宣言する**
   - 変数のスコープを最小限に保つ
   - コードの可読性と保守性を向上させる

## まとめ
モダンJavaScriptでは、`let`と`const`を適切に使い分けることで、より安全で予測可能なコードを書くことができます。`const`をデフォルトとし、必要な場合のみ`let`を使用することをお勧めします。レガシーコードを除き、`var`の使用は避けるべきです。

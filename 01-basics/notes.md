# モダンJavaScriptの変数宣言に関する気づきとメモ

## 実際の開発現場での使い分け

### チーム開発におけるルール設定
多くの現代的なプロジェクトでは、以下のようなルールを設定していることが多い：
- デフォルトで`const`を使用
- 変更が必要な場合のみ`let`を使用
- `var`は使用禁止（ESLintなどで警告される設定）

```javascript
// 推奨パターン
const config = getConfig();  // 変更しない値
let count = 0;               // 変更する値
```

### レガシーコードとの共存
古いコードベースでは`var`が使われていることが多いため、新しいコードを書く際に注意が必要。

## パフォーマンスの観点

変数宣言の方法によるパフォーマンスの違いは実質的にはほとんどない。最適化の観点では以下の点に注意：

- 変数のスコープを最小限に保つことで、JavaScriptエンジンのメモリ管理が効率化される
- `const`を使うことでJITコンパイラの最適化の手助けになる可能性がある

## バグの防止

`let`と`const`を適切に使うことで防げる典型的なバグ：

1. **意図しない再代入**
```javascript
const API_URL = 'https://api.example.com';
// 誤って再代入しようとしてもエラーになるため安全
// API_URL = 'https://wrong-api.example.com'; // Error!
```

2. **ループ変数の漏れ**
```javascript
// 問題あり
for (var i = 0; i < 10; i++) { /* ... */ }
console.log(i); // 10 - ループの外でもアクセス可能

// 安全
for (let j = 0; j < 10; j++) { /* ... */ }
// console.log(j); // ReferenceError - ループの外ではアクセス不可
```

3. **非同期処理でのクロージャの問題**
```javascript
// varを使った問題のあるコード
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// letを使った正しいコード
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

## 個人的な学習メモ

### `const`の誤解
- `const`はイミュータブル（不変）を意味するわけではなく、再代入不可を意味する
- オブジェクトのプロパティは変更可能であることを忘れないこと
- 完全にイミュータブルにするには`Object.freeze()`が必要（ネストされたオブジェクトには効かない）

### TDZ (Temporal Dead Zone)の理解
- `let`と`const`は宣言前に参照するとエラーになる（TDZ）
- これはコーディングの安全性を高めるための機能
- 変数を使う前に初期化する習慣をつけることが大切

### 命名規則との関連
- 定数（再代入しない値）は大文字のスネークケースで表現することが多い
  ```javascript
  const MAX_RETRY_COUNT = 3;
  const API_BASE_URL = 'https://api.example.com';
  ```
- ただし、オブジェクトや配列をすべて大文字にするのは避ける
  ```javascript
  // 良い例
  const defaultSettings = { theme: 'dark', fontSize: 16 };
  // 避けるべき例
  const DEFAULT_SETTINGS = { theme: 'dark', fontSize: 16 };
  ```

## 疑問点と今後の調査項目

- [ ] `const`で宣言した配列・オブジェクトの深いイミュータビリティを効率的に実現する方法
- [ ] ブロックスコープの変数とガベージコレクションの関係
- [ ] TypeScriptでの`const`と`readonly`の違いについて調査
- [ ] Reactのuseステートフックと変数宣言の関係

## リンク集

- [MDN - let](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/let)
- [MDN - const](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/const)
- [MDN - var](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/var)
- [JavaScript.info - 変数](https://ja.javascript.info/variables)

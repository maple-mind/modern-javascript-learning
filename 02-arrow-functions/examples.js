/**
 * アロー関数の使用例と説明
 */

//=========================================
// 1. アロー関数の基本形
//=========================================

// 従来の関数宣言
function traditionalFunc() {
    return "Hello";
}

// アロー関数の基本形
const arrowFunc = () => {
    return "Hello";
};

// 1行の場合は中括弧とreturnを省略可能
const shortArrowFunc = () => "Hello";

//=========================================
// 2. パラメータの扱い方
//=========================================

// パラメータが1つの場合は()を省略可能
const greet = name => `Hello, ${name}!`;
console.log(greet("太郎")); // "Hello, 太郎!"

// 複数のパラメータの場合は()が必要
const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

// デフォルトパラメータの使用
const greetWithTitle = (name, title = "さん") => `Hello, ${name}${title}!`;
console.log(greetWithTitle("田中")); // "Hello, 田中さん!"
console.log(greetWithTitle("山田", "様")); // "Hello, 山田様!"

//=========================================
// 3. 戻り値の書き方
//=========================================

// 1行の場合の暗黙的な返り値
const multiply = (a, b) => a * b;

// オブジェクトを返す場合は()が必要
const createUser = (name, age) => ({ name, age });
console.log(createUser("田中", 25)); // { name: "田中", age: 25 }

// 複数行の処理がある場合
const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const tax = total * 0.1;
    return total + tax;
};

//=========================================
// 4. 配列操作での活用
//=========================================

const numbers = [1, 2, 3, 4, 5];

// map: 値の変換
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter: 条件に合う要素の抽出
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: 値の集約
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// チェーンでの使用
const processNumbers = numbers
    .map(num => num * 2)
    .filter(num => num > 5)
    .reduce((acc, curr) => acc + curr, 0);

//=========================================
// 5. 非同期処理での活用
//=========================================

// Promise との組み合わせ
const fetchUserData = (userId) => {
    return fetch(`https://api.example.com/users/${userId}`)
        .then(response => response.json())
        .then(data => data.user);
};

// async/await との組み合わせ
const fetchUserDataAsync = async (userId) => {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const data = await response.json();
        return data.user;
    } catch (error) {
        console.error('エラーが発生しました:', error);
        throw error;
    }
};

//=========================================
// 6. イベント処理での活用
//=========================================

// シンプルなイベントリスナー
document.getElementById('button').addEventListener('click', () => {
    console.log('ボタンがクリックされました');
});

// イベントオブジェクトの利用
document.getElementById('input').addEventListener('input', (e) => {
    console.log('入力値:', e.target.value);
});

//=========================================
// 7. クロージャーでの活用
//=========================================

const createCounter = () => {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
};

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2

//=========================================
// 8. オブジェクトでの使用例
//=========================================

const user = {
    name: "田中",
    // メソッドとしての使用（注意: thisの束縛に注意が必要）
    sayHi: () => {
        console.log(`Hi, ${this.name}`); // 注意: thisは外側のスコープを参照
    },
    // 推奨される方法
    greet() {
        console.log(`Hi, ${this.name}`);
    }
};

//=========================================
// 9. 高階関数での活用
//=========================================

// 関数を返す関数
const multiply2 = (multiplier) => (number) => number * multiplier;
const double = multiply2(2);
console.log(double(5)); // 10

// カリー化の例
const curry = (fn) => {
    return (a) => {
        return (b) => {
            return fn(a, b);
        };
    };
};

const curriedAdd = curry((a, b) => a + b);
console.log(curriedAdd(1)(2)); // 3

//=========================================
// 10. 実践的なユースケース
//=========================================

// データ変換
const users = [
    { id: 1, name: "田中", age: 25 },
    { id: 2, name: "鈴木", age: 30 },
    { id: 3, name: "佐藤", age: 20 }
];

// 複雑なデータ処理
const processUsers = users
    .filter(user => user.age >= 25)
    .map(user => ({
        fullName: `${user.name}様`,
        age: user.age,
        canDrink: true
    }))
    .sort((a, b) => a.age - b.age);

// デバウンス関数の実装
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

/**
 * 注意点とベストプラクティス:
 * 
 * 1. アロー関数は独自のthisを持たない
 * 2. コンストラクタとして使用できない
 * 3. argumentsオブジェクトにアクセスできない
 * 4. yield キーワードは使用できない
 * 5. オブジェクトのメソッドとして使用する場合はthisの扱いに注意
 */

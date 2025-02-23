// 1. 基本的なアロー関数
const greet = () => {
    console.log('こんにちは！');
};

// 2. パラメータを受け取る
const add = (a, b) => {
    return a + b;
};

// 3. 暗黙的な返り値
const multiply = (a, b) => a * b;

// 4. パラメータが1つの場合
const square = x => x * x;

// 5. オブジェクトを返す
const createPerson = (name, age) => ({
    name: name,
    age: age
});

// 6. 配列操作の例
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// 7. 非同期処理の例
const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
};

// 8. イベントリスナーでの使用
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMの読み込みが完了しました');
});

// 9. メソッドチェーンでの使用
const users = [
    { name: '田中', age: 25 },
    { name: '鈴木', age: 30 },
    { name: '佐藤', age: 20 }
];

const youngUsers = users
    .filter(user => user.age < 28)
    .map(user => user.name);

// 10. デフォルトパラメータの使用
const greeting = (name = 'ゲスト') => `こんにちは、${name}さん！`;

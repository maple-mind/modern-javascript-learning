// 練習問題1の解答
const double = num => num * 2;

// 練習問題2の解答
const tripleAll = numbers => numbers.map(num => num * 3);

// 練習問題3の解答
const createPerson = (name, age) => ({
    name: name,
    age: age
});

// 練習問題4の解答
const filterEvens = numbers => numbers.filter(num => num % 2 === 0);

// 練習問題5の解答
const fetchUserById = async (id) => {
    try {
        const response = await fetch('https://api.example.com/users/' + id);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('ユーザー情報の取得に失敗しました:', error);
    }
};

// 練習問題6の解答
const getAdultNames = users => users
    .filter(user => user.age >= 20)
    .map(user => user.name.toUpperCase());

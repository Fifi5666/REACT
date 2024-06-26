const person = {
    name : 'aloha',
    age  : 24,
    gender : '남자'
}

// 객체의 구조 분해 할당(rest를 꼭 쓸 필요는 없다.)
const {name, age, ...rest} = person

console.log(name);
console.log(age);
console.log(rest);
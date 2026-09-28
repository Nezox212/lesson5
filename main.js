//1.1
const myName = "Ruslan"
const myAge = 16
const  isStudent = true
const hobbies = ["gym", "eat", "sleep"]
console.log("Я " + myName + ", мне " + myAge + " я студент?: " + isStudent + " .мои  хобби : " + hobbies)
//1.2
const num1 = 50
const num2 = 10
console.log( num1 + num2)
console.log( num1 - num2)
console.log( num1 * num2)
console.log( num1 / num2)
//1.3
const name ="John"
const age = 20
console.log(name + " is " + age + " years old")
//2.1
const nameForAge = +prompt("Введите ваш возраст")
if( nameForAge  < 13){
    console.log("Ребёнок")
}
else if(nameForAge >= 13 && nameForAge <= 17){
    console.log("Подросток")
}
else if ( nameForAge  => 18 && nameForAge <= 65){
    console.log("Взрослый")
}
else if (nameForAge > 65 ){
    console.log("Пенсионер")
}
else( console.log("ошибка"))
//2.2
const checkEvenOdd = (number) => {
    if(number % 2 === 0){
        console.log(number + " Четное")
    }else (console.log(number + " Нечетное"))
}
checkEvenOdd(+prompt("ВВедите число для определения четности нечетности"))
//2.3
const ageToPass = +prompt ("Введите возраст для определения")
const tall = +prompt ("Введите рост")
if(ageToPass < 5){
    console.log("Слишком мал")
}
else if (ageToPass >= 5 && ageToPass <= 12){
    console.log("добро пожаловать")
}
else if (ageToPass >= 13 && ageToPass <= 18 && tall > 160){
    console.log("добро пожаловать")
}
else(console.log("Не разрешено"))
//3.1
for(let i = 0; i <= 10; i++){
    console.log(i + " * " + " 7 " + " = " + 7 * i)
}
//3.2
let sumOfNumber = 0
const sumNumbers = (n) => {
    for(let i = 0; i <= n; i++){
        sumOfNumber += i
    }
    console.log(sumOfNumber)
}
sumNumbers(5)
//3.3
let i2 = 20;

while (i2 >= 1) {
    console.log(i2);
    i2--;
}
//4.1
const grades = [5, 4, 3, 5, 2, 4, 5];

let massGrades = 0;

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
    massGrades += grades[i];
}

console.log("сумма оценок: " + massGrades);
console.log("Средняя оценка: " + massGrades / grades.length);

let max = grades[0];

for (let i = 1; i < grades.length; i++) {
    if (grades[i] > max) {
        max = grades[i];
    }
}

console.log("Максимальная оценка: " + max);
//4.2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < numbers.length ; i++){
    if(numbers[i] % 2 === 0) console.log(numbers[i])
}
//4.3
const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === city) {
            return i;
        }
    }

    return -1;
}

console.log(findCity(cities, "Каракол"));
console.log(findCity(cities, "Нарын"));
//5.1
const student= {
    name: "ruslan",
    age: 16,
    courses: ["frontend", "backend", " ux/ui"],
    isActive: true,
}
console.log(student)
student.age++

for(let course of student.courses){
    console.log(course)
}
//5.2
const product = {
    name: "apple",
    price: 100,
    quantity: 5,
}
const getTotalCost = (product) => {
    console.log(product.name + " = " + product.price * product.quantity)
}
getTotalCost (product);
//5.3
const books = [
    {
        title: "Гарри Поттер и философский камень",
        author: "Дж. К. Роулинг",
        year: 1997
    },
    {
        title: "1984",
        author: "Джордж Оруэлл",
        year: 1949
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        year: 1943
    }
];

for (let book of books) {
    console.log(book.title + " — " + book.author + " (" + book.year + ")");
}

let oldestBook = books[0];

for (let book of books) {
    if (book.year < oldestBook.year) {
        oldestBook = book;
    }
}

console.log("Самая старая книга:", oldestBook.title);
//6.1
const calculateDiscount = (price, discount) => {
    console.log(price * (1 - discount / 100));
}
calculateDiscount(100, 10)
calculateDiscount(90, 50)
calculateDiscount(2400, 75)
calculateDiscount(10,99.99)

//6.2
const getGrade = (score) => {
    if (score >= 80 && score <= 100) return "A"
    if (score >= 60 && score <= 79) return "B"
    if (score >= 40 && score <= 59) return "C"
    if (score >= 0 && score <= 39) return "F"
    return "Ошибка"
}
console.log(getGrade(90))
//6.3
const  getMaxNumber= (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(getMaxNumber([5, 10, 3, 8, 2]));
console.log(getMaxNumber([100, 25, 7, 50]));
console.log(getMaxNumber([-5, -2, -10, -1]));


//7.1
const inputElement = document.querySelector("#taskInput");
const buttonElement = document.querySelector("#addBtn");
const listElement = document.querySelector("#taskList");

const createElement = () => {
    const itemElement = document.createElement("li");
    listElement.append(itemElement);
    itemElement.setAttribute("class", "taskItem");
    itemElement.textContent = inputElement.value;
    inputElement.value = ""
}
buttonElement.addEventListener("click", createElement)

//7.2
const themeButtonElement = document.querySelector("#themeBtn");
const contentElement = document.querySelector("#mainContent");

let isDark = false;

themeButtonElement.addEventListener("click", () => {
    isDark = !isDark;

    if (isDark) {
        document.body.style.backgroundColor = "black";
        themeButtonElement.style.backgroundColor = "#dfdada";
        themeButtonElement.style.color = "#1a1b1a";
        contentElement.style.color = "white";
        themeButtonElement.textContent = "Светлая тема"
    } else {
        document.body.style.backgroundColor = "white";
        themeButtonElement.style.backgroundColor = "black";
        themeButtonElement.style.color = "white";
        contentElement.style.color = "black";
        themeButtonElement.textContent = "Темная тема"
    }
});
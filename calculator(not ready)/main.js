const numbers = document.querySelectorAll('.number');
const screen = document.querySelector('.screen');

numbers.forEach(number => {
    number.addEventListener('click', () => {
        screen.textContent += number.textContent;
    });
});

const plus = document.querySelectorAll('.plus');


plus.forEach(plus => {
    plus.addEventListener('click', () => {
        screen.textContent += plus.textContent;
    });
});



const minus = document.querySelectorAll('.minus');


minus.forEach(minus => {
    minus.addEventListener('click', () => {
        screen.textContent += minus.textContent;
    });
});



const devide = document.querySelectorAll('.devide');


devide.forEach(devide => {
    devide.addEventListener('click', () => {
        screen.textContent += devide.textContent;
    });
});



const multiplication = document.querySelectorAll('.multiplication');


multiplication.forEach(multiplication => {
    multiplication.addEventListener('click', () => {
        screen.textContent += multiplication.textContent;
    });
});

const equal = document.querySelectorAll('.equals')
equal.forEach(equal => {
    equal.addEventListener('click', () => {
        screen.textContent = eval(screen.textContent);
    });
});
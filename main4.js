//("" , () =>{})

//1) Создать некий счетчик. В HTML две кнопки (increment, decrement) или ("-", "+")
// и отобразить в HTML переменную внутри которой 0. При нажатии на эти кнопки должно
// меняться значение +1 или -1 при нажатии на соответствующую кнопку. При нажатии на
// плюс отображаемая цифра должна менять цвет на зеленый, а при нажатии на минус в красный.
// Нельзя уменьшать значение ниже нуля.
let clicks = 0
console.log(document.body)
let clicksCountElement = document.querySelector(".block")
const incrementElement = document.querySelector(".plus");
const decrementElement = document.querySelector(".minus");

incrementElement.addEventListener("mouseover", () => {incrementElement.textContent = "+1"})
incrementElement.addEventListener("mouseout", () => {incrementElement.textContent = "increment"})
decrementElement.addEventListener("mouseover", () => {decrementElement.textContent = "-1"})
decrementElement.addEventListener("mouseout", () => {decrementElement.textContent = "decrement"})



incrementElement.addEventListener("click", () => {
    clicks++;
    clicksCountElement.textContent = clicks;
    clicksCountElement.style.color = "green";
});
decrementElement.addEventListener("click", (e) => {


    if(clicksCountElement.textContent > 0){
        clicks--
        clicksCountElement.textContent = clicks;
        clicksCountElement.style.color = "red";

    }else{
        alert("Не может быть ниже нуля")
    }
    });



//2) Создать блок 500 на 500 с бордером и отобразить внутри в тексте x: y: соответствующие
// координаты при движении мыши внутри этого блока.

const coordinatesElement = document.querySelector(".box");
coordinatesElement.addEventListener("mousemove", (event) => {coordinatesElement.textContent = "X: " + event.offsetX + " Y: " + event.offsetY;});



//3) Создайте input в HTML, куда пользователь может вводить название цвета (red, blue, green и т. д.).
// При вводе цвета (в input), фон страницы должен менять цвет в реальном времени когда инпут меняется.



const colorsElement = document.querySelector(".colorChanger");
colorsElement.addEventListener("input", () => {
    document.body.style.backgroundColor = colorsElement.value;
})

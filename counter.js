const DecButton = document.querySelector('.DecButton');
const ResButton = document.querySelector('.ResButton');
const IncButton = document.querySelector('.IncButton');
const text = document.querySelector('.text');

function changeColor() {
    if (text.textContent < 0) {
        text.style.color = 'red';
    }
    if (text.textContent == 0) {
        text.style.color = 'black';
    }
    if (text.textContent > 0) {
        text.style.color = 'green';
    }
}
DecButton.addEventListener('click', () => {
    --text.textContent;
    changeColor();
})
ResButton.addEventListener('click', () => {
    text.textContent = 0;
    changeColor();
})
IncButton.addEventListener('click', () => {
    ++text.textContent;
    changeColor()
})
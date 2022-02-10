const container = document.querySelector('#container');
const colors = ['#090056','#b2ffff','#56004c','#b800ff','#a6ff90'];
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',() => setColor(square))
    square.addEventListener('mouseout',() => removeColor(square))
    container.appendChild(square)
}

function setColor(e){
    const color = getRandomColor()
    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e){
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
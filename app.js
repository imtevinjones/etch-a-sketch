let color = 'pink';
let randomColors = false;

function createGrid (size) {
    const section = document.querySelector('section');
    grid_squares = document.querySelectorAll('.grid_squares');
    grid_squares.forEach((div) => div.remove());
    section.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    section.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let area = size * size;
    for (i = 0; i < area; i++) {
        let square = document.createElement('div');
        square.classList.add('grid_squares');
        square.style.border = '0.5px solid black';
        square.classList.add('grid_squares')
        square.addEventListener('mouseenter', changeBackgroundOnHover)
        section.appendChild(square);
    }
}

createGrid(16)

function changeSize () {
    input = document.querySelector('.square_size').value;
    if (input >=2 || input <= 100) {
        createGrid(input)
    } else {
        alert('you have too many squares!')
    }
}

function changeBackgroundOnHover () {
    if (randomColors) {
        this.style.background = randomRgbColor();
    } else {
        this.style.background = color;
    }
}

function changeColor (choice) {
    color = choice;
    randomColors = false;
}

function randomRgbColor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function clearSquares () {
    grid_squares = document.querySelectorAll('.grid_squares');
    grid_squares.forEach((div) => div.style.backgroundColor = 'white')
}
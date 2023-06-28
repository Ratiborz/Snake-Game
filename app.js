const board = document.querySelector('#board'); // Доска 
const SQUARES_NUMBER = 702; // Количество клеток 

for (let i = 0; i < SQUARES_NUMBER; i++) { // Рисует установленное количество клеток 
    const square = document.createElement('div');
    square.classList.add('square');

    board.append(square);
}; 
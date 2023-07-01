const board = document.querySelector('#board'); // Доска 
const SQUARES_NUMBER = 702; // Количество клеток 
const BOARD_WIDTH = 26; // Ширина доски в клетках

for (let i = 0; i < SQUARES_NUMBER; i++) { // Рисует установленное количество клеток 
    const square = document.createElement('div');
    square.classList.add('square');

    const x = i % BOARD_WIDTH; // Рассчет X координаты
    const y = Math.floor(i / BOARD_WIDTH); // Рассчет Y координаты
    
    square.setAttribute('data-x', x);
    square.setAttribute('data-y', y);

    board.append(square);
}; 
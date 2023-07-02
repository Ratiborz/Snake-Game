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

const snakeLength = 5; // Длина змейки
const startX = Math.floor(BOARD_WIDTH / 2); // Стартовая X координата змейки
const startY = Math.floor(BOARD_WIDTH / 2); // Стартовая Y координата змейки

const snakePositions = []; // Массив позиций клеток, которые занимает змейка

for (let i = 0; i < snakeLength; i++) { // Создание змейки и получение ее позиций
  const positionX = startX;
  const positionY = startY + i;
  
  snakePositions.push(positionY + (positionX * BOARD_WIDTH));   // Добавление позиции в массив
}

// Пройти по каждой клетке на доске и присвоить класс 'snake' если позиция есть в snakePositions
const squares = document.querySelectorAll('.square');
snakePositions.forEach(position => {
    squares[position].classList.add('snake');
});

const headIndex = snakePositions[snakeLength - 1]; 
squares[headIndex].classList.add('snake-head'); // Красит голову змейки 
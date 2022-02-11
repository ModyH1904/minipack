import {update as updateSnake, draw as drawSnake, snakeSpeed,
getSnakeHead, snakeIntersect, } from './snakeObj.js';
let lastRenderTime = 0;
const gameBoard = document.getElementById('Game-Board');
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js'

let gameOver = false;

function main(currentTime){
    if (gameOver){
        if(confirm('You lost. Press Ok to reset')){
            window.location = './index.html';
        }
    }
        return
    }



    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;

    
    
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();

}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersect();
}

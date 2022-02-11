import {onsnake, expandSnake} from './snakeObj.js'
import {randomGridPos} from './grid.js'

let food = getRandomFoodPos();
const expansionRate = 1;



export function update(){
    if(onsnake(food)) {
        expandSnake(expansionRate);
        food = getRandomFoodPos();
    }
}

export function draw(gameBoard){
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
}

function getRandomFoodPos(){
    let newFoodPos;

    while (newFoodPos == null || onsnake(newFoodPos)){
        newFoodPos = randomGridPos();
    }
    return newFoodPos;
}



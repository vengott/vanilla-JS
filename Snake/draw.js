const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

console.log(canvas)

const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake;

var snaker = (function setup(){
    snake = new Snake();
    // snake.draw();

    window.setInterval(() =>{
        snake.update();
        snake.draw();
    },250);

}());

window.addEventListener('keydown', ((evt) => {
    console.log(evt);
    const direction = evt.key.replace('Arrow','');
    console.log(direction);
    snake.changeDirection(direction);
}))
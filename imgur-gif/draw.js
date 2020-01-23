const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 5;

console.log(canvas)

const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake;
let direction;

var pinkBlock = (function setup(){
    block = new Block();
    // window.setInterval(() =>{
    //     block.update();
    //     block.draw();
    // },250);

}());

var graybutt = (function clicker(){
    bound = new Boundaries();
        
}());

canvas.addEventListener('mouseenter', ((evt) => {
    console.log(evt);
    block.changeDirection(direction);
    block.update(1);
    block.draw();
    block.update(1);
    block.draw();
}))

// canvas.addEventListener('mousemove', ((evt) => {
//     console.log(evt);
//     block.changeDirection(direction);
//         setInterval(block.update(1),1000);
//         setInterval(block.draw(),1000);
// }))

canvas.addEventListener('click', ((evt) => {
    console.log(evt);
    block.changeDirection(direction);
        block.update(1);
        block.draw();
}))


// window.addEventListener('mouseover', ((evt) => {
//     alert('Mouse is here');
//     console.log(evt);
//     //block.draw.ctx.fillStyle = "#FF0000";
//     //const direction = 'Up';
//     direction = evt.key.replace('Arrow','');
//     block.changeDirection(direction);
// }))
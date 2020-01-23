function Boundaries(){
    this.x = 10;
    this.y = 10;
    scale1 = scale*5;
        ctx.fillStyle= "#FFFFFF";
        ctx.fillRect(0, (canvas.height-scale1)/2, scale1, scale1);
        ctx.fillRect(canvas.height-(scale1), (canvas.height-scale1)/2, scale1, scale1);
        ctx.fillRect((canvas.height-(scale1))/2, (canvas.height-scale1), scale1, scale1);
        ctx.fillRect((canvas.height-scale1)/2, 0, scale1, scale1);
        console.log(scale1)
}

// var elem = document.getElementById('canvas'),
//     elemLeft = elem.offsetLeft,
//     elemTop = elem.offsetTop,
//     context = elem.getContext('2d'),
//     elements = [];

// // var block = new Block();

// // Add event listener for `click` events.
// // elem.addEventListener('click', function(event) {
// elem.addEventListener('mouseover', function(event) {
//     var x = event.pageX - elemLeft,
//         y = event.pageY - elemTop;

//     // Collision detection between clicked offset and element.
//     elements.forEach(function(element) {
//         if (y > element.top && y < element.top + element.height 
//             && x > element.left && x < element.left + element.width) {
//             alert('clicked an element');
//             direction = 'Down';
//         }
//     });

// }, false);

// // Add element.
// elements.push({
//     colour: '#05EFFF',
//     width: 300,
//     height: 300,
//     top: 20,
//     left: 15
// });

// // Render elements.
// elements.forEach(function(element) {
//     context.fillStyle = element.colour;
//     context.fillRect(element.left, element.top, element.width, element.height);
// })
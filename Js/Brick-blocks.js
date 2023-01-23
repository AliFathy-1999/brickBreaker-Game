
const rows = 6;
const columns = 24;


class Brick{
    width = 10;
    height = 5;
    padding = 12;
    setTop;
    setLeft;
    color;

    constructor(top, left, color){
        this.setTop = top;
        this.setLeft = left;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.setLeft, this.setTop, this.width, this.height);
        this.setLeft = this.setLeft + this.padding;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        
    }
    
};

let R_top = 10;
let R_left = 10;

const Brick_block = new Brick(R_top, R_left,"green");

for(i = 0; i < rows; i++){
    
    for(j = 0; j < columns; j++){
        Brick_block.draw();
    }
    Brick_block.setTop += R_top
    Brick_block.setLeft = R_left
}

// canvas.addEventListener('mousemove', function(event) {
//     // Check whether point is inside circle
//     if (ctx.isPointInPath(Brick_block, event.offsetX, event.offsetY)) {
//       ctx.fillStyle = 'green';
//     }
//     else {
//       ctx.fillStyle = 'red';
//     }
  
//     // Draw circle
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fill(Brick_block);
//   });
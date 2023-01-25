//Class for drawing small rects
const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

class Brick{
    height = 5;
    width = 10;
    padding = 15;
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
        this.setLeft += this.padding;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        
    }
    
};


//The game blocks Levels
let rows;
let columns;

//First level
function first_level(){
    rows = 5;
    columns = 19;
    let R_top = 10;
    let R_left = 10;
    const Brick_block = new Brick(R_top, R_left,"green");
    for( i = 0; i < rows; i++){
        for(j = 0; j < columns; j++){
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
    }
}

//Second level
export function second_level(){
    rows = 7;
    columns = 15;
    let R_top = 10;
    let R_left = 10;
    const Brick_block = new Brick(R_top, R_left,"green");
    for(let i = 0; i < rows; i++){
        R_left += 10
        if(i % 2 === 0){
            Brick_block.color = "red"
        }else{
            Brick_block.color = "green"
        }
        for(let j = 0; j < columns; j++){
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
        
    }
}

//Third level
function third_level(){
    rows = 4;
    columns = 20;
    let R_top = 10;
    let R_left = 15;
    const Brick_block = new Brick(R_top, R_left,"green");
    for(i = 0; i < rows; i++){
        if(i % 2 === 0){
            Brick_block.color = "pink"
        }else{
            Brick_block.color = "purple"
        }
        for(j = 0; j < columns; j++){
            if(j === 2){
                columns -= 2
                R_left += 15;
            }
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
        
    }
    columns = 20;
    R_left = 15;
    const Brick_block2 = new Brick(R_top, R_left,"pink");
    Brick_block2.setTop = Brick_block.setTop
    for(i = 0; i < rows; i++){
        if(i % 2 === 0){
            Brick_block2.color = "pink"
        }else{
            Brick_block2.color = "purple"
        }
        for(j = 0; j < columns; j++){
            if(j === 2){
                columns -= 2
                R_left += 15;
            }
            Brick_block2.draw();
        }
        Brick_block2.setTop += R_top
        Brick_block2.setLeft = R_left
    }
}

// second_level();


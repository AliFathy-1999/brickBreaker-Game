//Class for drawing small rects
const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

class Brick{
    height = 15;
    width = 50;
    padding = 60;
    setTop;
    setLeft = canvas.width / 2;
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
 export  let blockDimn = [];
//First level
export function first_level(){
    blockDimn = [];
    rows = 8;
    columns = 25;
    let R_top = 30;
    let R_left = canvas.width / 8;
    let block_properties;
    const Brick_block = new Brick(R_top, R_left,"green");
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            block_properties = {
                'x': Brick_block.setLeft,
                'y':Brick_block.setTop,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
    }
    
}
//Second level
export function second_level(){
    blockDimn = [];
    rows = 7;
    columns = 25;
    let R_top = 30;
    let R_left = canvas.width / 8;
    let block_properties;
    const Brick_block = new Brick(R_top, R_left,"green");
    for(let i = 0; i < rows; i++){
        R_left += 15
        if(i % 2 === 0){
            Brick_block.color = "red"
        }else{
            Brick_block.color = "green"
        }
        for(let j = 0; j < columns; j++){
            block_properties = {
                'x': Brick_block.setLeft,
                'y':Brick_block.setTop,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
    }
    
}

//Third level
export function third_level(){
    blockDimn = [];
    rows = 6;
    columns = 25;
    let R_top = 30;
    let R_left = canvas.width / 8;
    let block_properties;
    const Brick_block = new Brick(R_top, R_left,"green");
    for(let i = 0; i < rows; i++){
        if(i % 2 === 0){
            Brick_block.color = "pink"
        }else{
            Brick_block.color = "purple"
        }
        for(let j = 0; j < columns; j++){
            if(j === 2){
                columns -= 2
                R_left += 60;
            }
            block_properties = {
                'x': Brick_block.setLeft,
                'y':Brick_block.setTop,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
        
    }
    columns = 25;
    R_left = canvas.width / 8;
    const Brick_block2 = new Brick(R_top, R_left,"pink");
    Brick_block2.setTop = Brick_block.setTop
    for(let i = 0; i < rows; i++){
        if(i % 2 === 0){
            Brick_block2.color = "pink"
        }else{
            Brick_block2.color = "purple"
        }
        for(let j = 0; j < columns; j++){
            if(j === 2){
                columns -= 2
                R_left += 60;
            }
            block_properties = {
                'x': Brick_block2.setLeft,
                'y':Brick_block2.setTop,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block2.draw();
        }
        Brick_block2.setTop += R_top
        Brick_block2.setLeft = R_left
    }
}

//Forth level
export function forth_level(){
    blockDimn = [];
    rows = 9;
    columns = 25;
    let R_top = 50;
    let R_left = canvas.width / 10; 
    let block_properties;
    
    //first pyr
    const Brick_block = new Brick(R_top, R_left,"#554654");
    Brick_block.setTop = R_top;
    Brick_block.setLeft = R_left - 20
    for(let j = 0; j < columns +2; j++){
        block_properties = {
            'x': Brick_block.setLeft,
            'y':Brick_block.setTop,
            'health': 2
        }
        blockDimn.push(block_properties);
        Brick_block.draw();
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < i; j++){
            block_properties = {
                'x': Brick_block.setLeft,
                'y':Brick_block.setTop,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block.color = "yellow";
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
    }

    Brick_block.setLeft = R_left - 20
    for(let j = 0; j < columns +2; j++){
        block_properties = {
            'x': Brick_block.setLeft,
            'y':Brick_block.setTop,
            'health': 2
        }
        blockDimn.push(block_properties);
        Brick_block.color = "#554654";
        Brick_block.draw();
    }

    //Second pyr
    R_left = 750;
    const Brick_block2 = new Brick(R_top, R_left,"#001552");
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < i; j++){
            block_properties = {
                'x': Brick_block2.setLeft,
                'y':Brick_block2.setTop,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block2.draw();
        }
        Brick_block2.setTop += R_top
        Brick_block2.setLeft = R_left
    }

    //Third pyr
    R_left = 1300;
    const Brick_block3 = new Brick(R_top, R_left,"#FF9E01");
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < i; j++){
            block_properties = {
                'x': Brick_block3.setLeft,
                'y':Brick_block3.setTop,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block3.draw();
        }
        Brick_block3.setTop += R_top
        Brick_block3.setLeft = R_left
    }
}


// export {blockDimn};
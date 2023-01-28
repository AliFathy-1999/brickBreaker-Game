//Class for drawing small rects
const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");



class Brick{
    width = 80;
    height = 25;
    padding = 10;
    setTop = 40;
    setLeft = 40;
    color;
    constructor(color){
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.setLeft, this.setTop, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        
    }
    
};


//The game blocks Levels
export let rows = 8;
export let columns = 20;
export let blockDimn = [];
for (var c = 0; c < rows; c++) {
    blockDimn[c] = [];
    for (var r = 0; r < columns; r++) {
        blockDimn[c][r] = { x: 0, y: 0, health: 2 };
    }
}

//First level
export function first_level(){

    const Brick_block = new Brick("green");
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            if (blockDimn[i][j].health === 2) { 
                Brick_block.setLeft = 100;
                Brick_block.setTop = 70;
                Brick_block.setLeft = (j * (Brick_block.width + Brick_block.padding)) + Brick_block.setLeft;
                Brick_block.setTop = (i * (Brick_block.height + Brick_block.padding)) + Brick_block.setTop;
                blockDimn[i][j].x = Brick_block.setLeft;
                blockDimn[i][j].y = Brick_block.setTop;
                Brick_block.draw();
            }
                else if(blockDimn[i][j].health === 1)
                {   
                    const Brick2 = new Brick("red");
                    Brick2.setLeft = 100;
                    Brick2.setTop = 70;
                    Brick2.setLeft = (j * (Brick2.width + Brick2.padding)) + Brick2.setLeft;
                    Brick2.setTop = (i * (Brick2.height + Brick2.padding)) + Brick2.setTop;
                    blockDimn[i][j].x = Brick2.setLeft;
                    blockDimn[i][j].y = Brick2.setTop;
                    Brick2.draw();
                }
        }
    }
    
}
//Second level
export function second_level(){
    blockDimn = [];
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
                'width': Brick_block.width,
                'height': Brick_block.height,
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
                'width': Brick_block.width,
                'height': Brick_block.height,
                'health': 2
            }
            blockDimn.push(block_properties);
            Brick_block.draw();
        }
        Brick_block.setTop += R_top
        Brick_block.setLeft = R_left
        
    }
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
                'width': Brick_block2.width,
                'height': Brick_block2.height,
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
            'width': Brick_block.width,
            'height': Brick_block.height,
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
                'width': Brick_block.width,
                'height': Brick_block.height,
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
            'width': Brick_block.width,
            'height': Brick_block.height,
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
                'width': Brick_block2.width,
                'height': Brick_block2.height,
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
                'width': Brick_block3.width,
                'height': Brick_block3.height,
                'health': 2
            }
            if(blockDimn[i]['health'] === 1){
                Brick_block3.setLeft,
                Brick_block3.setTop,
                Brick_block3.draw();
            }
            blockDimn.push(block_properties);
            Brick_block3.draw();
        }
        Brick_block3.setTop += R_top
        Brick_block3.setLeft = R_left
    }
}


// export {blockDimn};
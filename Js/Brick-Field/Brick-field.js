const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");

const start = document.getElementById("start-play");
const stop  = document.getElementById("stop-play");
let intervalID;

const selected_level = document.getElementById("Levels");
let bouncing_time = 400;

const score = document.getElementById("score-value");
const lives_remaining = document.getElementById("lives-remaining");

let score_value = 0;
let lives_remaining_value = 2;


class Ball {

    static dx = 2;
    static dy = -2;

    constructor(xCenter, yCenter, r, alpha, theta) {
        this.x = xCenter;
        this.y = yCenter;
        this.radius = r;
        this.startAngel = alpha;
        this.endAngel = theta;
    }

    darw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngel, this.endAngel);
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "blue";
        ctx.fill();
        ctx.stroke();
        this.x += Ball.dx;
        this.y += Ball.dy;

        // Bouncing off the walls 
        // Bouncing off Left & Right
        if (this.x + Ball.dx > canvas.width - this.radius || this.x + Ball.dx < this.radius) {
            Ball.dx = -Ball.dx;
        }

        // Bouncing off UP & Down
        if (this.y + Ball.dy > canvas.height - this.radius || this.y + Ball.dy < this.radius) {
            Ball.dy = -Ball.dy;
        }
    }

    remove() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

};


selected_level.addEventListener('change', (event) => {
    let level = event.target.value;
    switch (level) {
        case "intermediate":
            bouncing_time = 300;
            break;

        case "hard":
            bouncing_time = 100;
            break;

        default:
            bouncing_time = 500;
            break;
    }
})


let ball_XCenter = canvas.width / 2;
let ball_YCenter = canvas.height - 10;
const breaking_ball = new Ball(ball_XCenter, ball_YCenter, 3, 0, (2 * Math.PI));
breaking_ball.darw();

function drawShape(shape) {
    shape.remove();
    shape.darw();
}


start.addEventListener("click", () => {
    intervalID= setInterval(() => {
        drawShape(breaking_ball);
    }, bouncing_time);

})

stop.addEventListener("click", () => {
  clearInterval(intervalID);
  breaking_ball.remove();
  breaking_ball.x=ball_XCenter;
  breaking_ball.y= ball_YCenter;
  breaking_ball.darw();
  
})

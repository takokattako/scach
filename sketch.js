let ballX, ballY, ballSpeedX, ballSpeedY;
let ballAX, ballAY, ballSpeedAX, ballSpeedAY;
let ballRadius;
let paddleX, paddleY, paddleSpeed, paddleWidth, paddleHeight;

function setup() {
    createCanvas(600, 400);
    ballX = width / 2;
    ballY = height / 2;
    ballSpeedX = 5;
    ballSpeedY = -5;
    ballAX = width / 2 - 100;
    ballAY = height / 2 - 100;
    ballSpeedAX = 3;
    ballSpeedAY = 3;
    ballRadius = 15;
    paddleX = width / 2;
    paddleY = height - 30;
    paddleSpeed = 5;
    paddleWidth = 150;
    paddleHeight = 15;
}

function draw() {
    background(0);
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    ballAX = ballAX + ballSpeedAX;
    ballAY = ballAY + ballSpeedAY;
    
    // パドルを動かす
    if (keyIsDown(LEFT_ARROW)) {
        paddleX = paddleX - paddleSpeed
    }
    if (keyIsDown(RIGHT_ARROW)) {
        paddleX = paddleX + paddleSpeed
    }

    // パドルに当たったら（2つ分）
    if (paddleX < ballX && ballX < paddleX + paddleWidth && paddleY - ballRadius < ballY && ballY < paddleY) {
        ballSpeedY = -ballSpeedY;
    }
    if (paddleX < ballAX && ballAX < paddleX + paddleWidth && paddleY - ballRadius < ballAY && ballAY < paddleY) {
        ballSpeedAY = -ballSpeedAY;
    }

    // 右に当たったら
    if (width < ballX + ballRadius) {
        ballSpeedX = -ballSpeedX;
    }
    if (width < ballAX + ballRadius) {
        ballSpeedAX = -ballSpeedAX;
    }
    // 左に当たったら
    if (ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballAX - ballRadius < 0) {
        ballSpeedAX = -ballSpeedAX;
    }
    // 上に当たったら
    if (ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballAY - ballRadius < 0) {
        ballSpeedAY = -ballSpeedAY;
    }

    // 下に当たったら（どちらか1つでも）
    if (ballY + ballRadius > height || ballAY + ballRadius > height) {
        ballSpeedX = 0;
        ballSpeedY = 0;
        ballSpeedAX = 0;
        ballSpeedAY = 0;
        fill("white");
        textAlign(CENTER);
        text("GAME OVER", width / 2, height / 2);
    }
    // 2つのボール描画
    circle(ballX, ballY, ballRadius * 2);
    circle(ballAX, ballAY, ballRadius * 2);
    rect(paddleX, paddleY, paddleWidth, paddleHeight);
}

const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

let x = canvas.width / 2
let y = canvas.height - 30

let dx = -1
let dy = -3

let rightPressed = false
let leftPressed = false

const paddleHeight = 10
const paddleWidth = 75
let paddleX = (canvas.width - paddleWidth) / 2

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false
    }
}

function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
    ctx.fillStyle = "black"
    ctx.fill()
    ctx.closePath()
}

drawPaddle()

const ballRadius = 10

function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = "#0095DD"
    ctx.fill()
    ctx.closePath()
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBall()
    drawPaddle()

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy
    }

    if (rightPressed) {
        paddleX += 7
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth
        }
    } else if (leftPressed) {
        paddleX -= 7
        if (paddleX < 0) {
            paddleX = 0
        }
    }

    x += dx
    y += dy
}

// refreshes animation every 10 milliseconds
setInterval(draw, 10)

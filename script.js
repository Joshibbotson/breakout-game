const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

let x = canvas.width / 2
let y = canvas.height - 30

let dx = -4
let dy = -3

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
    x += dx
    y += dy

    // checks if ball is hitting the wall via co-ordinates
    if (y + dy < ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy
    } else if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx
    }
}

// refreshes animation every 10 milliseconds
setInterval(draw, 10)

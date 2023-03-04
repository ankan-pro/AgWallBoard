var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var mouseDown = false;
var lastX, lastY;

canvas.addEventListener('mousedown', function (event) {
    mouseDown = true;
    lastX = event.pageX - canvas.offsetLeft;
    lastY = event.pageY - canvas.offsetTop;
});

canvas.addEventListener('mousemove', function (event) {
    if (mouseDown) {
        var currentX = event.pageX - canvas.offsetLeft;
        var currentY = event.pageY - canvas.offsetTop;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        lastX = currentX;
        lastY = currentY;
    }
});

canvas.addEventListener('mouseup', function (event) {
    mouseDown = false;
});
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImage() {
    var dataUrl = canvas.toDataURL();
    window.open(dataUrl);
}

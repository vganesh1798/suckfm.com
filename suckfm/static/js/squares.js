var intervalID = window.setInterval(pickColor, 500);

function pickColor() {
    var colors = ['#cd6451', '#69da46', '#4ad5a0', '#5e60cb', '#b8c560'];
    var x = document.getElementsByClassName('square');

    for(var i of x) {
        i.style.background = colors[Math.floor(Math.random() * colors.length)];
    }
}

var curIndex = 1;
let currentImage = 1;
const maxImage = 2;
const img = './static/img/slider/image*_blue.jpeg'

slider();

function slider() {
    setInterval(function() {
        let source = "url('./static/img/slider/image" + currentImage + "_blue.jpeg')";
        document.getElementById("sliderImage").style.backgroundImage = source;
        currentImage++;
        if (currentImage > maxImage) currentImage = 1;
    }, "10000");
}

function login(user) {
    if (user == 'employer') window.location.href = "../pracodawca.html";
    else if (user == 'employee') window.location.href = "../oferty.html";
    else return false;
}
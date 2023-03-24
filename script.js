var curIndex = 1;
const maxImage = 2;
const img = './static/img/slider/image*_blue.jpeg'
const duration = 10000;

function slider() {
    setInterval(function() {
        let source = "url('./static/img/slider/image" + image.toString() + "_blue.jpeg')";
        document.getElementById("sliderImage").style.backgroundImage = source;
        image++;
        if (image > maxImage) image = 1;
        console_log(image);
    }, "10000");
}

function sliderNext() {
    image++;
    if (image > maxImage) image = 1;
    let source = "url('./static/img/slider/image" + image.toString() + "_blue.jpeg')";
    document.getElementById("sliderImage").style.backgroundImage = source;
}

function sliderPrevious() {
    image--;
    if (image < 1) image = maxImage;
    let source = "url('./static/img/slider/image" + image.toString() + "_blue.jpeg')";
    document.getElementById("sliderImage").style.backgroundImage = source;
}

function changeButtonValue(element) {
     document.getElementById("dropdown-button").innerHTML = element.innerHTML;
}
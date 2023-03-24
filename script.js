
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
        console_log(currentImage);
    }, "10000");

}

function sliderNext() {
    currentImage++;
    if (currentImage > maxImage) currentImage = 1;
    let source = "url('./static/img/slider/image" + currentImage + "_blue.jpeg')";
    document.getElementById("sliderImage").style.backgroundImage = source;
}

function sliderPrevious() {
    currentImage--;
    if (currentImage < 1) currentImage = maxImage;
    let source = "url('./static/img/slider/image" + currentImage + "_blue.jpeg')";
    document.getElementById("sliderImage").style.backgroundImage = source;
}

function filterOffers(element) {

    let target_industry = element.innerHTML;
    let offers = document.getElementsByClassName("offer-big");
    
    document.getElementById("dropdown-button").innerHTML = target_industry;
    
    for (let i = 0; i < offers.length; i++) {
        
        let industry = offers[i].getElementsByTagName("span")[0].innerHTML;
        console.log(industry);
        
        if (industry == target_industry || target_industry == 'Wszystkie') {
            offers[i].style.display = "block";
        } else {
            offers[i].style.display = "none";
        }
    }

}
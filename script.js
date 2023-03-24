
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
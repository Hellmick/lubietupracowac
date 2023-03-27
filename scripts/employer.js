
var offersList = []

function showOffers() {
    let element = document.getElementById("offers");

    element.innerHTML = "<h1>Twoje aktywne oferty:</h1>";
    for (let i = 0; i < offersList.length; i++) {
        if (offersList[i].visible) {
            var offer_html =  '<div class="offer-wide" onclick=\"selectOffer(' + i + ')\">' +
                `<div>
                    <h3>` + offersList[i]['company'] + `</h3>
                    <h2>` + offersList[i]['position'] + `</h2>
                    <span id="industry">` + offersList[i]['industry'] + `</span>
                </div>
                <div>
                    <p>` + offersList[i]['short_description'] + '</p>';
            if (offersList[i]['show_range']) offer_html += '<p>' + offersList[i]['pay_range'] + '</p>'; 
            offer_html += "</div></div>";

            element.innerHTML += offer_html;
        }
    }
}

function addOffer() {
    offersList.push({ 
        position: document.getElementById("new-offer-position").textContent, 
        company: 'Przykładowa firma', 
        description: document.getElementById("new-offer-description").textContent, 
        industry: industry.value, 
        location: document.getElementById("new-offer-location").textContent, 
        pay_range: 'mucho peso', 
        visible: true, 
        show_range: true 
    });
    
    showOffers();
}

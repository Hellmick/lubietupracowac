
var offersList = [
    { position: 'TIBCO Developer', company: 'Firma IT 1', description: 'lorem ipsum dolor sit', industry: 'IT', location: 'Bydgoszcz', pay_range: 'mucho peso', visible: true, show_range: true },
    { position: 'Żul', company: 'Piwo', description: 'go ha go ha go ha 3 zlote', industry: 'Sprzedaż', location: 'Bydgoszcz', pay_range: 'mediocremente peso', visible: true, show_range: true },
    { position: 'Oferta 3', company: 'Firma Gastronomiczna 1', description: 'lorem ipsum dolor sit', industry: 'Gastronomia', location: 'Torun', pay_range: 'poco peso', visible: true, show_range: true },
    { position: 'Middleware Developer', company: 'Firma IT 2', description: 'lorem ipsum dolor sit', industry: 'IT', location: 'Świecie', pay_range: 'mucho peso', visible: true, show_range: true },
    { position: 'Oferta 5', company: 'Firma Sprzedazowa 1', description: 'lorem ipsum dolor sit', industry: 'Sprzedaż', location: 'Chełmno', pay_range: 'mediocremente peso', visible: true, show_range: false },
    { position: 'Oferta 6', company: 'Firma Gastronomiczna 2', description: 'lorem ipsum dolor sit', industry: 'Sprzedaż', location: 'Grudziądz', pay_range: 'poco peso', visible: true, show_range: true },
]

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

function filterOffers(element) {
    let target_industry = element.innerHTML;
    let offers = document.getElementsByClassName("offer-wide");
    
    document.getElementById("dropdown-button").innerHTML = target_industry;
    for (let i = 0; i < offers.length; i++) {
        let industry = offers[i].getElementsByTagName("span")[0].innerHTML;
        
        console.log(industry);
        if (industry == target_industry || target_industry == 'Wszystkie') offers[i].style.display = "block"; 
        else offers[i].style.display = "none";
    }
}


/* global exports, Map */
/**
 * Calculate similarity between two strings
 * @param {string} str1 First string to match
 * @param {string} str2 Second string to match
 * @param {number} [substringLength=2] Optional. Length of substring to be used in calculating similarity. Default 2.
 * @param {boolean} [caseSensitive=false] Optional. Whether you want to consider case in string matching. Default false;
 * @returns Number between 0 and 1, with 0 being a low match score.
 */
function stringSimilarity(str1, str2, substringLength = 2, caseSensitive = false) {
    if (!caseSensitive) {
      str1 = str1.toLowerCase()
      str2 = str2.toLowerCase()
    }
  
    if (str1.length < substringLength || str2.length < substringLength) return 0
  
    const map = new Map()
    for (let i = 0; i < str1.length - (substringLength - 1); i++) {
      const substr1 = str1.substr(i, substringLength)
      map.set(substr1, map.has(substr1) ? map.get(substr1) + 1 : 1)
    }
  
    let match = 0
    for (let j = 0; j < str2.length - (substringLength - 1); j++) {
      const substr2 = str2.substr(j, substringLength)
      const count = map.has(substr2) ? map.get(substr2) : 0
      if (count > 0) {
        map.set(substr2, count - 1)
        match++
      }
    }
  
    return (match * 2) / (str1.length + str2.length - (substringLength - 1) * 2)
  }

function searchOffers() {
    let user_input = document.getElementById("search-input").value;
    for (let i = 0; i < offersList.length; i++) {
        if (user_input == "") {
            offersList[i]['visible'] = true;
            continue;
        } 
        let similarity = stringSimilarity(user_input, offersList[i]['position']);
        if (parseFloat(similarity) > 0.2) offersList[i]['visible'] = true;
        else offersList[i]['visible'] = false;
        console.log("Offer: " + offersList[i]['position'] + " Similarity: " + similarity);
    }
    showOffers();
    filterOffers(document.getElementById("dropdown-button"));
}


function refreshOffers() {
    searchOffers(); 
    showOffers(); 
    filterOffers(document.getElementById("dropdown-button"));
}

function selectOffer(id) {
    let offer = '<h1>' + offersList[id]['position'] + '</h1>';
    offer += '<h2>' + offersList[id]['company'] + '</h2>';
    offer += '<h3>' + offersList[id]['location'] + '</h3>';
    offer += '<p>' + offersList[id]['description'] + '</p>';

    document.getElementById('selected-offer').innerHTML = offer;
}

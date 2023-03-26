
var offersList = [
    { position: 'Oferta 1', company: 'Firma IT 1', description: 'lorem ipsum dolor sit', industry: 'IT', pay_range: 'mucho peso', visible: true, show_range: true },
    { position: 'Oferta 2', company: 'Firma Sprzedazowa 1', description: 'lorem ipsum dolor sit', industry: 'Sprzedaż', pay_range: 'mediocremente peso', visible: true, show_range: true },
    { position: 'Oferta 3', company: 'Firma Gastronomiczna 1', description: 'lorem ipsum dolor sit', industry: 'Gastronomia', pay_range: 'poco peso', visible: true, show_range: true },
    { position: 'Oferta 4', company: 'Firma IT 2', description: 'lorem ipsum dolor sit', industry: 'IT', pay_range: 'mucho peso', visible: true, show_range: true },
    { position: 'Oferta 5', company: 'Firma Sprzedazowa 1', description: 'lorem ipsum dolor sit', industry: 'Sprzedaż', pay_range: 'mediocremente peso', visible: true, show_range: false },
    { position: 'Oferta 6', company: 'Firma Gastronomiczna 2', description: 'lorem ipsum dolor sit', industry: 'Gastronomia', pay_range: 'poco peso', visible: true, show_range: true },
]

function showOffers() {
    let element = document.getElementById("offers");
    for (let i = 0; i < offersList.length; i++) {
        if (offersList[i].visible) {
            var offer_html =  `
             <div class="offer-big" data-value="1">
                <div>
                    <h3>` + offersList[i]['company'] + `</h3>
                    <h2>` + offersList[i]['position'] + `</h2>
                    <span id="industry">` + offersList[i]['industry'] + `</span>
                </div>
                <div>
                    <p>` + offersList[i]['description'] + '</p>';
                    if (offersList[i]['show_range']) offer_html += '<p>' + offersList[i]['pay_range'] + '</p>'; 
                    offer_html += `
                </div>
            </div>`;

            element.innerHTML += offer_html;
        }
    }
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


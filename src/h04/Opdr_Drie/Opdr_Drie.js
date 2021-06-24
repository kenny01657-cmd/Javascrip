var plaatjes = [1, 2, 3, 4];

var ogenEl = document.getElementById("ogen-el");

var neusEl = document.getElementById("neus-el");

var mondEl = document.getElementById("mond-el");

var ogenTeller = 0;
var neusTeller = 0;
var mondTeller = 0;

ogenEl.addEventListener("click", function() {
    ogenEl.style.backgroundImage = "url('Ogen/Ogen" + ogenSlider() + ".jpg')";
});

neusEl.addEventListener("click", function() {
    neusEl.style.backgroundImage = "url('Neus/Neus" + neusSlider() + ".jpg')";
});

mondEl.addEventListener("click", function() {
    mondEl.style.backgroundImage = "url('Mond/Mond" + mondSlider() + ".webp')";
});

function ogenSlider() {
    if(ogenTeller >= plaatjes.length) {
        ogenTeller = plaatjes[0];
    }
    else {
        ogenTeller++;
    }
    console.log(ogenTeller);
    return ogenTeller;
}

function neusSlider() {
    if(neusTeller >= plaatjes.length) {
        neusTeller = plaatjes[0];
    }
    else {
        neusTeller++;
    }
    console.log(neusTeller);
    return neusTeller;
}

function mondSlider() {
    if(mondTeller >= plaatjes.length) {
        mondTeller = plaatjes[0];
    }
    else {
        mondTeller++;
    }
    console.log(mondTeller);
    return mondTeller;
}
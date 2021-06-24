let plaatjes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slideholder = document.getElementById("slideholder");
let teller = 0;

slideholder.style.backgroundImage = "url('img/aap1.jpg')";

slideholder.addEventListener("click", function() {
   getAap();
   slideholder.style.backgroundImage = "url('img/aap" + getAap() + ".jpg')";
});


function getAap() {
    if(teller >= plaatjes.length) {
        teller = plaatjes[0];
    }
    else {
        teller++;
    }
    console.log(teller);
    return teller;
}
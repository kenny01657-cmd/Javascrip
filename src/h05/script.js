pics = document.getElementById("pics");
createPicHolders();
createAapImages();

function createPicHolders() {
    for( let i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createAapImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(let i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        aapPlaatje = document.createElement("img");
        aapPlaatje.src = "img/aap" + (i+1) + ".jpg";
        aapPlaatje.id = (i+1);
        aapPlaatje.addEventListener("click", function() {
            maakFav(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(aapPlaatje);
    }
}

function maakFav(id) {
    console.log("Hallo" + id);
    notSoFav = document.getElementsByClassName("favoriet");

    for(let i = 0; i < notSoFav.length; i++) {
        notSoFav[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/Heart.jpg')";
}

// picHolders maken
// picHolder bevat een plaatje van een aap en een favoriteSymbool

// apen plaatjes toevoegen aan de picHolders
// favoriteSymbool toevoegen aan picHolders
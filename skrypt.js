
let aktualnyGracz = "kolko";

function ruch(obraz) {

    if (obraz.src.includes("nic.png")) {

        if (aktualnyGracz == "kolko") {
            obraz.src = "o.png";

            document.getElementById("lewa").style.display = "none";
            document.getElementById("prawa").style.display = "block";

            aktualnyGracz = "krzyżyk";
        }

        else {
            obraz.src = "x.png";

            document.getElementById("lewa").style.display = "block";
            document.getElementById("prawa").style.display = "none";

            aktualnyGracz = "kolko";
        }

      
        obraz.parentElement.style.backgroundColor = "SeaGreen";
    }
}
   
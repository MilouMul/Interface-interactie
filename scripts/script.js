// JavaScript Document

var hammerSound = new Audio("./Sounds/hammersound.mp3")

// kat

var Kat = document.querySelector("main > img");

var miauwSound = new Audio("./Sounds/mixkit-big-wild-cat-scary-roar-88.wav")

// Button 1

var deButton1 = document.querySelector("button:nth-of-type(1)");


deButton1.addEventListener("click", showBlokje1);


function showBlokje1() {
	
	var blokje1 = document.querySelector("li:nth-of-type(1)");

    var Bobje2 = document.querySelector("li:nth-of-type(12)");
	
	blokje1.classList.add("zichtbaar");

    Bobje2.classList.add("zichtbaar");

    // info veranderen

    var deH2 = document.querySelector("article h2");
    var deH3 = document.querySelector("article h3");
    var deP = document.querySelector("article p");
    var DeImg = document.querySelector("article img");

    deH2.innerHTML = "Bob 1998";
    deH3.innerHTML = "Eerste prototype versie";
    deP.innerHTML = "Curtis Jobling ontworp een nieuwe Bob in 1998. Dit was het eerste prototype. Je ziet dat bob hier al een tuinpakje aan heeft en dat hij wat breder is gemaakt. Wat ook opvallend is, is dat hij weer een gele helm op heeft. Dit is ook nooit veranderd als je kijkt naar de volgende Bobjes. ";
    DeImg.src = "./images/plaatje1998bob.jpg";

    hammerSound.play();
}

// Button 2

var deButton2 = document.querySelector("button:nth-of-type(2)");

deButton2.addEventListener("click", showBlokje2en3);

function showBlokje2en3() {
	
	var blokje2 = document.querySelector("li:nth-of-type(2)");
	var blokje3 = document.querySelector("li:nth-of-type(3)");

    var Bobje3 = document.querySelector("li:nth-of-type(13)");
	
	blokje2.classList.add("zichtbaar");
	blokje3.classList.add("zichtbaar");

    Bobje3.classList.add("zichtbaar");

    // Info veranderen

    var deH2 = document.querySelector("article h2");
    var deH3 = document.querySelector("article h3");
    var deP = document.querySelector("article p");
    var DeImg = document.querySelector("article img")

    deH2.innerHTML = "Bob 1999";
    deH3.innerHTML = "De klassieke Bob";
    deP.innerHTML = "Je ziet dat deze bob iets moderner is geworden/scherper. Hij heeft nog steeds zijn tuinpakje en geruiten truitje aan. Ze gebruiken nu nog steeds stop-frame-animatie om de filmpjes te maken. Deze video’s werden uitgezonden van 1999 tot 2004. Daarna bleven het steeds herhalingen. Deze Bob is wel het langst op tv geweest en daarom komt deze Bob je waarschijnlijk het bekendst voor. Naar mijn mening is dit ook het leukste Bobje.";
    DeImg.src = "./images/plaatje1999bob.jpeg";

    hammerSound.play();
}


// Button 3

var deButton3 = document.querySelector("button:nth-of-type(3)");

deButton3.addEventListener("click", showBlokje4en5en6);

function showBlokje4en5en6() {
	
	var blokje4 = document.querySelector("li:nth-of-type(4)");
	var blokje5 = document.querySelector("li:nth-of-type(5)");
    var blokje6 = document.querySelector("li:nth-of-type(6)");

    var Bobje4 = document.querySelector("li:nth-of-type(14)");
	
	blokje4.classList.add("zichtbaar");
	blokje5.classList.add("zichtbaar");
    blokje6.classList.add("zichtbaar");

    Bobje4.classList.add("zichtbaar");

    // Info veranderen

    var deH2 = document.querySelector("article h2");
    var deH3 = document.querySelector("article h3");
    var deP = document.querySelector("article p");
    var DeImg = document.querySelector("article img");

    deH2.innerHTML = "Bob nu";
    deH3.innerHTML = "De nieuwe Bob";
    deP.innerHTML = " Bob de bouwer wordt nu zelf verbouwd. Het bolletje mannetje is omgetoverd tot een slankere en stoerdere Bob. De tuinbroek wordt vervangen door een veiligheidsvestje, hij krijgt een stoer horloge om en heeft nu bruine ogen. Veel mensen zijn het hier niet mee eens. Ze gebruiken nu ook geen stop-frame-animatie meer, maar Bob zal gemaakt worden met computeranimatie. Alles gaat veel soepeler. Ook leeft Bob in een hippie stad (spring City).";
    DeImg.src = "./images/plaatjenubob.jpg";

    hammerSound.play();
    
}

// Button 4

var deButton4 = document.querySelector("button:nth-of-type(4)");

deButton4.addEventListener("click", showBlokje7en8en9en10);

function showBlokje7en8en9en10() {
	
	var blokje7 = document.querySelector("li:nth-of-type(7)");
	var blokje8 = document.querySelector("li:nth-of-type(8)");
    var blokje9 = document.querySelector("li:nth-of-type(9)");
    var blokje10 = document.querySelector("li:nth-of-type(10)");

    var Bobje5 = document.querySelector("li:nth-of-type(15)");
	
	
	blokje7.classList.add("zichtbaar");
	blokje8.classList.add("zichtbaar");
    blokje9.classList.add("zichtbaar");
	blokje10.classList.add("zichtbaar");

    Bobje5.classList.add("zichtbaar");


// Info veranderen

    var deH2 = document.querySelector("article h2");
    var deH3 = document.querySelector("article h3");
    var deP = document.querySelector("article p");
    var DeImg = document.querySelector("article img")

    deH2.innerHTML = "Bobje Milou";
    deH3.innerHTML = "De toekomstige Bob"
    deP.innerHTML = "Deze Bob kennen veel mensen nog niet. Ze verwachten dat dit Bobje rond 2025 uit zal komen, omdat er te veel haat is op de nieuwe Bob. Deze Bob zal weer gebruik maken van stop-frame-animatie. Verder is alles nog onbekend...";
    DeImg.src = "./images/bobmilouafbeelding.png";

    hammerSound.play();

}

// kat

Kat.addEventListener("click", katmiauw)

function katmiauw(){
    miauwSound.play();
}


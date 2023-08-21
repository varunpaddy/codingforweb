// Your JavaScript goes here

function selectImage(){
    let element = document.getElementById("dropdown").value;
    document.getElementById("imagebox").src = element;
}

function showTopHeaders(){
    let toptitle = document.getElementById("topHeader").value;
    let text3 = document.getElementById("text-1");
    text3.innerHTML = toptitle;

}

function showBottomHeaders(){
    let bottomtitle = document.getElementById("bottomHeader").value;
    let text4 = document.getElementById("text-2");
    text4.innerHTML = bottomtitle;


}

function changeFontFamily() {
    let selectedFont = document.querySelector('input[name="fontFamily"]:checked').value;
    let textElements = document.querySelectorAll(".text");

    textElements.forEach(function(element) {
        element.style.fontFamily = selectedFont;
    });
}

function selectFontColor(){
    let fontColor = document.getElementById("dropdown21").value;
    document.getElementById("text-1").style.color = fontColor;
    document.getElementById("text-2").style.color = fontColor;
}

function changeFontSize(){
    let textSize = document.getElementById("font-size").value;
    document.getElementById("text-1").style.fontSize = textSize + "px";
    document.getElementById("text-2").style.fontSize = textSize +"px";
}

function changeFontStroke(){
    let fontStroke = document.getElementById("stroke").value;
    document.getElementById("text-1").style.webkitTextStrokeWidth = fontStroke + "px";
    document.getElementById("text-2").style.webkitTextStrokeWidth = fontStroke + "px";
}


function selectImage() {
    let element = document.getElementById("dropdown").value;
    document.getElementById("imagebox").src = element;

    let selectedArtist = document.querySelector('#dropdown option:checked').text;
    let audioPlayer = document.getElementById("audio-player");
    let adlibs = document.querySelectorAll('.adlibs');

    // Hide all adlibs
    adlibs.forEach(adlib => {
        adlib.style.display = "none";
    });

    // Show the adlibs of the selected artist
    if (selectedArtist === "Carti") {
        let cartiAdlibs = document.getElementById("carti-adlibs");
        cartiAdlibs.style.display = "block";

        // Play a random Carti adlib
        let randomAdlibNumber = Math.floor(Math.random() * 4) + 1; // Assuming you have 4 adlibs
        audioPlayer.src = `path/to/carti/adlibs${randomAdlibNumber}.mp3`;
        audioPlayer.play();
    }

    if (selectedArtist === "Travis Scott") {
        let travisAdlibs = document.getElementById("travis-adlibs");
        travisAdlibs.style.display = "block";

        // Play a random Travis adlib
        let randomAdlibNumber = Math.floor(Math.random() * 4) + 1; // Assuming you have 4 adlibs
        audioPlayer.src = `path/to/travis/adlibs${randomAdlibNumber}.mp3`;
        audioPlayer.play();
    }

    if (selectedArtist === "Metro Boomin") {
        let metroAdlibs = document.getElementById("metro-adlibs");
        metroAdlibs.style.display = "block";

        // Play a random Metro adlib
        let randomAdlibNumber = Math.floor(Math.random() * 3) + 1; // Assuming you have 3 adlibs
        audioPlayer.src = `path/to/metro/adlibs${randomAdlibNumber}.mp3`;
        audioPlayer.play();
    }


}






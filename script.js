
let gallery = document.getElementById("gallery");
let photos = ["Alaska.png", "Anime.png", "blue_tit.png", "clouds.png", "hurricane.png", "lake.png", "moorente.png", "sea.png", "snow_leopard.png", "snow-bunting.png", "travel.png", "winter.png"];
let overlaySection = document.getElementById("overlaySection");
let currentIndex = 0;


function renderGallery() {

    for (let index = 0; index < photos.length; index++) {

        gallery.innerHTML += `
            <img
                src="./assets/img/${photos[index]}"
                tabindex="0"
                onclick="openOverlay(${index})"
                onkeydown="if (event.key === 'Enter') openOverlay(${index})"
            >
        `;

    }
}


function openOverlay(index) {

    currentIndex = index;

    overlaySection.innerHTML = `
        <dialog id="overlay"
            onclose="overlaySection.innerHTML = ''"
            onclick="if (event.target === this) closeOverlay()">

            <h3 id="imageTitle">${photos[index]}</h3>

            <button id="closeButton" onclick="closeOverlay()">
                <img src="./assets/icon/x-button.svg">
            </button>

            <img id="overlayImage" src="./assets/img/${photos[index]}">

            <div id="overlayNavigation">

                <button id="previousButton" onclick="changeImage(-1)">
                    <img src="./assets/icon/arrow-button-left.svg">
                </button>

                <span id="imageCounter">${index + 1}/${photos.length}</span>

                <button id="nextButton" onclick="changeImage(1)">
                    <img src="./assets/icon/arrow-button-right.svg">
                </button>

            </div>

        </dialog>
    `;

    document.getElementById("overlay").showModal();
}


function closeOverlay() {

    document.getElementById("overlay").close();

}


function changeImage(direction) {

    currentIndex = currentIndex + direction;

    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    }

    if (currentIndex >= photos.length) {
        currentIndex = 0;
    }

    document.getElementById("overlayImage").src = "./assets/img/" + photos[currentIndex];

    document.getElementById("imageTitle").innerHTML = photos[currentIndex];

    document.getElementById("imageCounter").innerHTML = (currentIndex + 1) + "/" + photos.length;

}

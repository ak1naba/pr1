// Variables
let buttonYes = document.querySelector('#yes');
let buttonNo = document.querySelector('#no');

let widthScreen = window.innerWidth;
let heigthScreen = window.innerHeight;

// Actions
buttonYes.addEventListener('click', function(){
    randomHeightPositon = getRandomArbitrary(buttonYes.offsetHeight, heigthScreen);
    randomWidthPositon = getRandomArbitrary(buttonYes.offsetWidth, widthScreen);
    console.log(randomHeightPositon, randomWidthPositon);
    
    buttonYes.style.cssText = `position:absolute; left:${randomWidthPositon}px; top: ${randomHeightPositon}px`;
})
buttonNo.addEventListener('click', function(){
    window.close();
})

// Functions
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

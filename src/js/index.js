const advanceClick = document.getElementById("advance");
const returnClick = document.getElementById("return");
const cards = document.querySelectorAll(".card");


let actualCard = 0;

function hideSelectedCard() {
  const selectedCard = document.querySelector(".selected");
  selectedCard.classList.remove("selected");
}

function addSelectedClass() {
  cards[actualCard].classList.add("selected");
}

advanceClick.addEventListener("click", function () {
  if (actualCard === cards.length - 1) {
    actualCard = 0;
    hideSelectedCard();
    addSelectedClass();

    return;
  }

  hideSelectedCard();

  actualCard++;
  addSelectedClass();
});

returnClick.addEventListener("click", function () {
  if (actualCard === 0) {
    actualCard = cards.length - 1;
    hideSelectedCard();
    addSelectedClass();

    return;
  }

  hideSelectedCard();

  actualCard--;
  addSelectedClass();
});

function audioPlay(){
  if(actualCard === 0){
    const akali = document.createElement('audio');
    akali.setAttribute('src', 'src/audio/akali-voice.ogg');
    akali.play();
  }else if (actualCard === 1){
    const yasuo = document.createElement('audio');
    yasuo.setAttribute('src', 'src/audio/yasuo-voice.mp3');
    yasuo.play();
  }else if(actualCard === 2){
    const irelia = document.createElement('audio');
    irelia.setAttribute('src', 'src/audio/irelia-voice.ogg');
    irelia.play();
  }else if(actualCard === 3){
    const draven = document.createElement('audio');
    draven.setAttribute('src', 'src/audio/draven-voice.ogg');
    draven.play();
  }else if(actualCard === 4){
    const riven = document.createElement('audio');
    riven.setAttribute('src', 'src/audio/riven-voice.ogg');
    riven.play();
  }else if(actualCard === 5){
    const yone = document.createElement('audio');
    yone.setAttribute('src', 'src/audio/yone-voice.mp3');
    yone.play();
  }
}
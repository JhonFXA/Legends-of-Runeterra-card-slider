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
    const akali = document.getElementById('akali-voice');
    akali.play();
  }else if (actualCard === 1){
    const yasuo = document.getElementById('yasuo-voice');
    yasuo.play();
  }else if(actualCard === 2){
    const irelia = document.getElementById('irelia-voice');
    irelia.play();
  }else if(actualCard === 3){
    const draven = document.getElementById('draven-voice');
    draven.play();
  }else if(actualCard === 4){
    const riven = document.getElementById('riven-voice');
    riven.play();
  }else if(actualCard === 5){
    const yone = document.getElementById('yone-voice');
    yone.play();
  }
}
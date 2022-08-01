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

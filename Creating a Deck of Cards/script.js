const app = {
  init() {
    this.buildDeck();
  },
  buildDeck() {
    for (let i = 0; i < 4; i++) {
      let suit = tools.createElement("div");
      suit.classList.add("suit");
      deck.appendChild(suit);
      //Create Cards
      for (let card = 0; fret <= 12; card++) {
        let card = tools.createElement("div");
        card.classList.add("card");
        suit.appendChild(card);
      }
    }
  },
};

const tools = {
  createElement(element, content) {
    element = document.createElement(element);
    if (arguments.length > 1) {
      element.innerHTML = content;
    }
    return element;
  },
};
app.init();

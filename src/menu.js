const menuTab = (() => {
  const Card = class {
    constructor(img, title, desc, price) {
      this.cardPhoto = img;
      this.cardTitle = title;
      this.cardDesc = desc;
      this.price = price;
    }
  };

  const cards = [
    new Card(
      "./img/shake.png",
      "Five Dollar Milkshake",
      "I don't know if its worth five dollars, but it's pretty @!#$ing good!",
      "$9.66"
    ),
    new Card(
      "./img/steak.jpg",
      "Douglas Sirk Steak",
      "Ribeye, cooked bloody as hell or burnt to a crisp.",
      "$26.99"
    ),
    new Card(
      "./img/royale.jpg",
      "Royale with Cheese",
      "Ketchup, mustard, cheese, and pickles",
      "$6.99"
    ),
    new Card(
      "./img/kahuna.jpg",
      "Big Kahuna Burger",
      "Fully loaded burger with a pineapple slice",
      "$11.99"
    ),
    new Card(
      "./img/pancake.jpg",
      "Blueberry Pancakes",
      "Fluffy pancakes stuffed with fresh blueberries",
      "$7.99"
    ),
  ];

  const render = () => {
    const body = document.getElementById("content");
    const tabContent = document.createElement("div");
    tabContent.classList.add("tabContent");
    body.appendChild(tabContent);
    tabContent.innerHTML = "";
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", "cardCont");
    tabContent.appendChild(cardContainer);
    for (let i = 0; i < cards.length; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      cardContainer.appendChild(card);
      let photo = document.createElement("div");
      photo.classList.add("cardPhoto");
      photo.innerHTML = `<img src="${cards[i].cardPhoto}">`;
      card.appendChild(photo);
      let title = document.createElement("div");
      title.classList.add("cardTitle");
      title.innerHTML = cards[i].cardTitle;
      card.appendChild(title);
      let desc = document.createElement("div");
      desc.classList.add("cardDesc");
      desc.innerHTML = cards[i].cardDesc;
      card.appendChild(desc);
      let price = document.createElement("div");
      price.classList.add("price");
      price.innerHTML = cards[i].price;
      card.appendChild(price);
    }
  };
  return {
    render,
  };
})();

export default menuTab;

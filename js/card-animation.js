class YBCard {
  constructor(id, title, description, button, image) {
    this.idCard = id;
    this.titre = title;
    this.description = description;
    this.button = button;
    this.image = image;
  }

  initCard() {
    this.updateDom();
    this.activateListeners();
  }

  updateDom() {
    var cardDom = document.getElementById(this.idCard);
    if (cardDom.hasChildNodes()) {
      var cardDomImage = cardDom.getElementsByClassName("card-image")[0];
      cardDomImage.src = this.image;

      var cardDomTitle = cardDom.getElementsByClassName("card-title")[0];
      cardDomTitle.innerHTML = this.titre;

      var cardDomDesc = cardDom.getElementsByClassName("card-desc")[0];
      cardDomDesc.innerHTML = this.description;

      var cardDomBut = cardDom.getElementsByClassName("card-button")[0];
      cardDomBut.innerHTML = this.button;
    }
  }

  activateListeners() {
    var cardDom = document.getElementById(this.idCard);
    cardDom.addEventListener(
      "mouseover",
      function (event) {
        const title = document.getElementById(`title-${cardDom.id}`);
        title.classList.add("d-none")
        var cardDomTitle = cardDom.getElementsByClassName("card-title")[0];
        var cardDomDesc = cardDom.getElementsByClassName("card-desc")[0];
        var cardDomBut = cardDom.getElementsByClassName("card-button")[0];
        var cardDomMiddle = cardDom.getElementsByClassName("card-mid")[0];
        var cardMiddleHeight =
          cardDomTitle.offsetHeight +
          cardDomDesc.offsetHeight +
          cardDomBut.offsetHeight;
        cardDomMiddle.style.height = cardMiddleHeight + 50 + "px";
      },
      false
    );

    cardDom.addEventListener(
      "mouseout",
      function (event) {
        var cardDomMiddle = cardDom.getElementsByClassName("card-mid")[0];
        cardDomMiddle.style.height = 0 + "px";
        const title = document.getElementById(`title-${cardDom.id}`);
        title.classList.remove("d-none")
      },
      false
    );
  }
}

var card1 = new YBCard(
  "card1",
  "Yoga app",
  "UX/UI Design <br/><br/> Technology: Figma<br/><br/> ",
  "Know more",
  "/asset/img/yoga-app-one.png"
);
card1.initCard();

var card2 = new YBCard(
  "card2",
  "FitShape Gym",
  "UI Developer <br/><br/> Technology: HTML, CSS, JavaScript, Bootstrap<br/><br/> ",
  "Know more",
  "/asset/img/fit-shape-card.png"
);
card2.initCard();

var card3 = new YBCard(
  "card3",
  "COOF",
  "UI Developer <br/><br/> Technology: Nuxt, Nuxt.UI, TailwindCSS, Web3 Modal<br/><br/> ",
  "Know more",
  "/asset/img/coff-img.svg"
);
card3.initCard();

var card4 = new YBCard(
    "card4",
    "Celu app",
    "UX/UI Design<br/><br/> Technology: Figma, Photoshop.<br/><br/> ",
    "Know more",
    "/asset/img/celuapp-card.png"
  );
  card4.initCard();

  var card5 = new YBCard(
    "card5",
    "Traviu",
    "UX/UI Design<br/><br/> Technology: Figma<br/><br/> ",
    "Know more",
    "/asset/img/traviu-card.png"
  );
  card5.initCard();

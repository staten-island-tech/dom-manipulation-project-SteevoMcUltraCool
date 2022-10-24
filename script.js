const DOM = {
  enterName: document.getElementById("enterName"),
  enterHeight: document.getElementById("enterHeight"),
  enterSong: document.getElementById("enterSong"),

  chanceButtons: document.getElementsByName("secondChances"),
  spontButtons: document.getElementsByName("spontaneous"),
  helpfulButtons: document.getElementsByName("helpful"),

  hairTrue: document.getElementById(hairTrue),
  gpaTrue: document.getElementById(gpaTrue),
  bmiTrue: document.getElementById(bmiTrue),
};

function getRadioButtonValue(buttons) {
  for (i = 0; i < buttons.length, (i = i + 1); ) {
    if (buttons[i].checked) {
      return buttons[i].value;
    }
  }
}
let plants = {
  Sunflower: {
    name: "Sunflower",
    secondChances: 4,
    spontaneous: 1,
    helpful: 5,

    hair: true,
    gpa: true,
    bmi: false,
  },
  Peashooter: {
    name: "Peashooter",
    secondChances: 2,
    spontaneous: 4,
    helpful: 3,

    hair: true,
    gpa: true,
    bmi: false,
  },
  WallNut: {
    name: "Wall-Nut",
    secondChances: 3,
    spontaneous: 2,
    helpful: 4,

    hair: true,
    gpa: false,
    bmi: true,
  },
  HypnoShroom: {
    name: "Hypno-Shroom",
    secondChances: 5,
    spontaneous: 4,
    helpful: 4,

    hair: false,
    gpa: true,
    bmi: false,
  },
  PotatoMine: {
    name: "Potato-Mine",
    secondChances: 1,
    spontaneous: 5,
    helpful: 1,

    hair: false,
    gpa: true,
    bmi: false,
  },
  BonkChoy: {
    name: "Bonk-Choy",
    secondChances: 2,
    spontaneous: 4,
    helpful: 2,

    hair: false,
    gpa: false,
    bmi: false,
  },
};

function compareToPlant(plant, secondChances) {}

function fetchResults() {
  let secondChances = getRadioButtonValue(DOM.chanceButtons);
  for (let k in plants) {
  }
}

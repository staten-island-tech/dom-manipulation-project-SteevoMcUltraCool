const DOM = {
  enterName: document.getElementById("enterName"),
  enterHeight: document.getElementById("enterHeight"),
  enterSong: document.getElementById("enterSong"),

  chanceButtons: document.getElementsByName("secondChances"),
  spontButtons: document.getElementsByName("spontaneous"),
  helpfulButtons: document.getElementsByName("helpful"),

  hairTrue: document.getElementById("hairTrue"),
  gpaTrue: document.getElementById("gpaTrue"),
  bmiTrue: document.getElementById("bmiTrue"),

  rr: document.getElementById("rr"),
};

function getRadioButtonValue(buttons) {
  for (i = 0; i < buttons.length, (i = i + 1); ) {
    console.log(buttons[i]);
    if (buttons[i].checked) {
      return buttons[i].value;
    }
  }
}
let plants = {
  Sunflower: {
    name: "Sunflower",
    height: 65,
    secondChances: 4,
    spontaneous: 1,
    helpful: 5,

    hair: true,
    gpa: true,
    bmi: false,
  },
  Peashooter: {
    name: "Peashooter",
    height: 70,
    secondChances: 2,
    spontaneous: 4,
    helpful: 3,

    hair: true,
    gpa: true,
    bmi: false,
  },
  WallNut: {
    name: "Wall-Nut",
    height: 69,
    secondChances: 3,
    spontaneous: 2,
    helpful: 4,

    hair: true,
    gpa: false,
    bmi: true,
  },
  HypnoShroom: {
    name: "Hypno-Shroom",
    height: 62,
    secondChances: 5,
    spontaneous: 4,
    helpful: 4,

    hair: false,
    gpa: true,
    bmi: false,
  },
  PotatoMine: {
    name: "Potato-Mine",
    height: 59,
    secondChances: 1,
    spontaneous: 5,
    helpful: 1,

    hair: false,
    gpa: true,
    bmi: false,
  },
  BonkChoy: {
    name: "Bonk-Choy",
    height: 74,
    secondChances: 2,
    spontaneous: 4,
    helpful: 2,

    hair: false,
    gpa: false,
    bmi: false,
  },
};

function compareToPlant(
  plant,
  height,
  secondChances,
  spontaneous,
  helpful,
  hair,
  gpa,
  bmi
) {
  let heightDiff = Math.min(Math.abs(height - plant.height), 10);
  let secondChanceDiff = Math.abs((secondChances - plant.secondChances) * 4.5);
  let spontaneousDiff = Math.abs((spontaneous - plant.spontaneous) * 4.5);
  let helpfulDiff = Math.abs((helpful - plant.helpful) * 4.5);
  let hairDiff = 12,
    gpaDiff = 12,
    bmiDiff = 12;
  if (hair == plant.hair) {
    hairDiff = 0;
  }
  if (gpa == plant.gpa) {
    gpaDiff = 0;
  }
  if (bmi == plant.bmi) {
    bmiDiff = 0;
  }
  return (
    100 -
    (heightDiff +
      secondChanceDiff +
      spontaneousDiff +
      helpfulDiff +
      hairDiff +
      gpaDiff +
      bmiDiff)
  );
}

function fetchResults() {
  let height = Number(DOM.enterHeight.value);
  let secondChances = getRadioButtonValue(DOM.chanceButtons);
  let spontaneous = getRadioButtonValue(DOM.spontButtons);
  let helpful = getRadioButtonValue(DOM.helpfulButtons);

  let hair = DOM.hairTrue.checked;
  let gpa = DOM.gpaTrue.checked;
  let bmi = DOM.bmiTrue.checked;
  let closestScore = 0;
  let closestPlant = {};
  for (let k in plants) {
    let c = compareToPlant(
      plants[k],
      height,
      secondChances,
      spontaneous,
      helpful,
      hair,
      gpa,
      bmi
    );
    if (c > closestScore) {
      closestScore = c;
      closestPlant = plants[k];
    }
  }
  DOM.rr.innerHTML = `You ara a : ${closestPlant.name} with a ${closestScore}% similarity!`;
}

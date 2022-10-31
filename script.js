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
  roof: document.getElementById("roof"),
};

let playing = false;
function playAudio() {
  console.log(playing);
  if (!playing) {
    DOM.roof.play();
    playing = true;
  }
}
document.body.addEventListener("keydown", playAudio);
document.body.addEventListener("click", playAudio);
document.body.addEventListener("touchstart", playAudio);

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

    img: "url(imgs/Sunflowa.gif)",
    bio: `You are helpful and kind. You are smart, reserved, and enjoy helping others. You most likely enjoy reading and the simple things in life.`,
    description: ``,
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

    img: "url(imgs/pea.webp)",
    bio: `Sometimes you help others, but oftentimes you are willing to go out on a limb and take a risk/ You are smart, athletic, and always ready for action.`,
    description: ``,
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

    img: "url(imgs/WallNut.gif)",
    bio: `Sometimes you help others, but oftentimes you are willing to go out on a limb and take a risk/ You are smart, athletic, and always ready for action.`,
    description: ``,
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

    img: "url(imgs/hypno.webp)",
    bio: `You always try to see the good in people. You are a risk taker, but you also do what you can to help others in need.`,
    description: ``,
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

    img: "url(imgs/PotMin.webp)",
    bio: `SPUDOW! You have an EXPLOSIVE personality. You may be smart, but oftentimes, it gets overlooked by some of the stupid things you do.`,
    description: ``,
  },
  BonkChoy: {
    name: "Bonk-Choy",
    height: 74,
    secondChances: 1,
    spontaneous: 4,
    helpful: 2,

    hair: false,
    gpa: false,
    bmi: false,

    img: "url(imgs/Bonk.webp)",
    bio: `You love to fight. You may be argumentative, but people understand where you are coming from. You aren't the brightest bulb in the box, however. `,
    description: ``,
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
  DOM.rr.innerHTML = `
  <h3>${closestPlant.name}</h3> 
  <div class="split">
  <div class="theImg" style="background-image:${closestPlant.img}"></div>
  <div class="text">Hello ${DOM.enterName.value}! You match up with a ${closestScore}% similarity. ${closestPlant.bio} </div> 
  </div>
  <p>${closestPlant.description}</p>`;
  DOM.rr.style.display = "block";
  DOM.rr.style.visibility = "visible";
}

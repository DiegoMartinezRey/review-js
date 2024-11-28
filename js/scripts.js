const counterTextElement = document.getElementById("counter-text");
const buttonsElement = document.getElementById("buttons");
const resetButtonElement = document.querySelector('button[data-type="reset"]');

const randomWordTextElement = document.getElementById("random-word-title");
const randomWordButtonElement = document.getElementById("change-word-button");

const inputPasswordElement = document.getElementById("input-password");
const listPasswordElement = document.getElementById("list");

const numbers = "1234567890";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

//  [1,3,34,23,45,23,4,1].includes(213213123)
//[ABCDEFGHIJKLMNOPQRSTUVWX,Y,Z,joseFa].includes(joseFa)

const words = [
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "flower",
  "grape",
  "house",
  "island",
  "jungle",
  "kite",
  "lion",
  "mountain",
  "night",
  "ocean",
  "piano",
  "queen",
  "river",
  "sun",
  "tree",
  "umbrella",
  "village",
  "water",
  "xylophone",
  "yellow",
  "zebra",
  "garden",
  "window",
  "cloud",
  "rocket",
];

let count = 0;
resetButtonElement.disabled = true;

const getButtonFunction = (e) => {
  const dataButton = e.target.dataset.type;

  if (dataButton === "decrement") {
    count--;
  } else if (dataButton === "increment") {
    count++;
  } else {
    count = 0;
  }

  if (count === 0) {
    resetButtonElement.disabled = true;
  } else {
    resetButtonElement.disabled = false;
  }

  counterTextElement.textContent = count;
};

const getRandomWord = () => {
  const randomNumber = Math.floor(Math.random() * words.length);
  const randomWord = words[randomNumber];
  randomWordTextElement.textContent = randomWord;
};

const getNumberOfUpperCase = (password) => {
  let countUpperCase = 0;

  for (const letter of password) {
    if (uppercase.includes(letter)) {
      countUpperCase++;
    }
  }

  if (countUpperCase > 0) {
    document.getElementById("1").classList.add("checked");
  } else {
    document.getElementById("1").classList.remove("checked");
  }

  document.getElementById(
    "1"
  ).textContent = `El texto tiene ${countUpperCase} mayúsculas`;
};

const getNumberOfNumbers = (password) => {
  let countNumbers = 0;

  for (const number of password) {
    if (numbers.includes(number)) {
      countNumbers++;
    }
  }

  if (countNumbers > 0) {
    document.getElementById("2").classList.add("checked");
  } else {
    document.getElementById("2").classList.remove("checked");
  }

  document.getElementById(
    "2"
  ).textContent = `El texto tiene ${countNumbers} números`;
};

const getNumberOfSpecialChar = (password) => {
  let countSpecialCharacters = 0;

  for (const specialChar of password) {
    if (specialCharacters.includes(specialChar)) {
      countSpecialCharacters++;
    }
  }

  if (countSpecialCharacters > 1) {
    document.getElementById("3").classList.add("checked");
  } else {
    document.getElementById("3").classList.remove("checked");
  }

  document.getElementById(
    "3"
  ).textContent = `El texto tiene ${countSpecialCharacters} caracteres especiales`;
};

const getNumberOfCharacters = (password) => {
  if (password.length > 5) {
    document.getElementById("0").classList.add("checked");
  } else {
    document.getElementById("0").classList.remove("checked");
  }

  document.getElementById(
    "0"
  ).textContent = `El texto tiene ${password.length} caracteres`;
};

const checkPassword = (e) => {
  e.preventDefault();
  const password = e.target.value;

  if (listPasswordElement.childElementCount === 0) {
    for (let i = 0; i < 4; i++) {
      const newItem = document.createElement("li");
      if (i === 0) {
        newItem.textContent = `El texto tiene 0 caracteres`;
      } else if (i === 1) {
        newItem.textContent = `El texto tiene 0 mayúsculas`;
      } else if (i === 2) {
        newItem.textContent = `El texto tiene 0 números`;
      } else {
        newItem.textContent = `El texto tiene 0 caracteres especiales`;
      }
      newItem.setAttribute("id", i);
      newItem.setAttribute("class", "notChecked");
      listPasswordElement.append(newItem);
    }
  }

  getNumberOfCharacters(password);
  getNumberOfUpperCase(password);
  getNumberOfNumbers(password);
  getNumberOfSpecialChar(password);
};

buttonsElement.addEventListener("click", getButtonFunction);
randomWordButtonElement.addEventListener("click", getRandomWord);
inputPasswordElement.addEventListener("input", checkPassword);

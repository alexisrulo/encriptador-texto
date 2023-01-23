// Componentes
const textInput = document.querySelector(".input");
const textOutput = document.querySelector(".output-text");
const noMessege = document.querySelector(".witout-messenge");
const showMessege = document.querySelector(".output");

// Botones
const encriptar = document.querySelector(".btn-encripar");
const desencriptar = document.querySelector(".btn-desencriptar");
const copiar = document.querySelector(".btn-copiar");

// Vocales y keys
const vowel = ["a", "e", "i", "o", "u"];
const keys = ["ai", "enter", "imes", "ober", "ufat"];

copiar.addEventListener("click", () => {
  navigator.clipboard.writeText(textOutput.innerText);
});

encriptar.addEventListener("click", () => {
  textOutput.innerText = encriptador(textInput.value);
});

desencriptar.addEventListener("click", () => {
  textOutput.innerText = descripter(textInput.value);
});

const encriptador = (text) => {
  if (text === "") {
    noMessege.classList.add("show");
    showMessege.classList.remove("show");
    return;
  }
  noMessege.classList.remove("show");
  showMessege.classList.add("show");
  text = text.split("");
  const textEncripted = text.map((letter) => {
    if (vowel.includes(letter)) {
      return keys[vowel.indexOf(letter)];
    }
    return letter;
  });
  return textEncripted.join("");
};

const descripter = (text) => {
  if (text === "") {
    noMessege.classList.add("show");
    showMessege.classList.remove("show");
    return;
  }
  noMessege.classList.remove("show");
  showMessege.classList.add("show");
  text = text.split("ai").join("a");
  text = text.split("enter").join("e");
  text = text.split("imes").join("i");
  text = text.split("ober").join("o");
  text = text.split("ufat").join("u");
  return text;
};

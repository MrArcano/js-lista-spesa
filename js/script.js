const spesaArray = [
  "Pane",
  "Pasta",
  "Pomodori",
  "Carne",
  "Uova",
  "Latte",
  "Zucchero",
];

let counter = 0;
let message = "";

while (counter <= spesaArray.length - 1) {
  message += spesaArray[counter] + " ";
  counter++;
}

console.log(message);
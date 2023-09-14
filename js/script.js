const ulList = document.getElementById("ul-list");

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

while (counter <= spesaArray.length - 1) {
      ulList.innerHTML += `<li class="list-group-item"> ${spesaArray[counter]} </li>`
  counter++;
}
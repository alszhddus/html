let food = ["햄버거", "돈가스", "칼국수", "김치찌개", "쌀국수"];
let i = Math.floor(Math.random() * food.length);
console.log(i);
document.write(food[i]);
let bg = ["red", "blue", "green", "pink", "yellow"];
let j = Math.floor(Math.random() * 5);
document.querySelector("body").style.backgroundColor = bg[j];
let n = Math.floor(Math.random() * 6);
document.querySelector("body").style.backgroundImage =
  "url(images/photo" + (n + 1) + ".jpg)";

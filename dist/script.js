let string = document.querySelector("span");

const meaningfulArray = [
  "a surgeon",
  "a search & rescue officer",
  "a jeweler",
  "happy",
  "kind",
  "a scuba diver",
  "a pilot",
  "an artist",
  "an archaeologist"
];

const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let stringLenNum = Math.floor(5 + Math.floor(Math.random() * 7));

let newstr = "";

function loop1() {
  for (let i = 0; i < stringLenNum; i++) {
    let randomAlphabetNumber = Math.floor(Math.random() * 26);

    newstr += alphabetArray[randomAlphabetNumber];
  }

  string.innerText = newstr;
  newstr = "";
}

var newstr2 = "";
function loop2() {
  let meaningstrNum = Math.floor(Math.random() * 7);

  newstr2 += meaningfulArray[meaningstrNum];

  string.innerText = newstr2;
  console.log(newstr2);
  newstr2 = "";
}

function actualcallback() {
  let time = 100;
  for (let i = 0; i < 6; i++) {
    setTimeout(loop1, time);
    time += 100;
  }
  setTimeout(loop2, 900);
}

setInterval(actualcallback, 2000);
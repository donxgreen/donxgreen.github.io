const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

myVariable = "Bob";

let myVariable = "Bob";
myVariable = "Steve";

/*
Everything in between is a comment.
*/

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
let myVariable = document.querySelector("h1");

alert("hello!");

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

cross-icon2.jpg
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cross-icon.jpg") {
    myImage.setAttribute("src", "images/cross-icon2.jpg");
  } else {
    myImage.setAttribute("src", "images/cross-icon.jpg");
  }
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}


if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});




let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

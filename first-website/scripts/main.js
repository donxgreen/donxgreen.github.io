// Select elements
const myHeading = document.querySelector("#page-title");
const myButton = document.getElementById("userButton");
const myImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumb");

// Set initial heading text
myHeading.textContent = "Jesus Christ, Our Savior";

// Image switcher function for the main cross image
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cross-icon.jpg") {
        myImage.setAttribute("src", "images/cross-icon2.jpg");
    } else {
        myImage.setAttribute("src", "images/cross-icon.jpg");
    }
});

// User name function
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Jesus loves you, ${myName}!`;
    }
}

// Check for stored name
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Jesus loves you, ${storedName}!`;
}

// Event listener for the button
myButton.addEventListener("click", () => {
    setUserName();
});

// Image gallery function
thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        const newSrc = thumb.getAttribute("src");
        myImage.setAttribute("src", newSrc);
    });
});

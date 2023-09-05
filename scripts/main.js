const myImg = document.querySelector("img");

myImg.onclick = () => {
  const mySrc = myImg.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImg.setAttribute("src", "images/chrome.png");
  } else {
    myImg.setAttribute("src", "images/firefox.png");
  }
};

const myBtn = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name: ");
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

myBtn.onclick = () => {
  setUserName();
};

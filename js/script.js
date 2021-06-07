// Define UI
var inch = document.querySelector("#inch");
var result = document.querySelector("#result");

// Define Function
function inchToFeet() {
    var feet = inch.value / 12;
    result.innerText = feet;
};

// Define Event Listener
inch.addEventListener("keyup", inchToFeet);


console.log("I'm already inserted!");

const display = document.getElementById('display');

function displayFunction(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculateInput() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "invalid grah";
    }
}
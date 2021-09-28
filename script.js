var metricButton = document.getElementById("metricBtn");
var usButton = document.getElementById("usBtn");
var form = document.getElementById("form");
var weightLabel = document.getElementById("weight-label");
var heightLabel = document.getElementById("height-label");
var result = document.getElementById("result");


var calculateButton = document.getElementById("calculateBtn")

var selectionDisplay = document.getElementById("selectionChosen");
var selectionChosen = "";

metricButton.addEventListener('click', () => {
    selectionDisplay.textContent = metricButton.value;
    selectionChosen = "M";
    form.style.display = "block";
    weightLabel.textContent = "Weight in kg:";
    heightLabel.textContent = "Height in cm:";
})

usButton.addEventListener('click', () => {
    selectionDisplay.textContent = usButton.value;
    selectionChosen = "U"
    form.style.display = "block";
    weightLabel.textContent = "Weight in lbs";
    heightLabel.textContent = "Height in inches";
})

calculateButton.addEventListener("click", () => {
    calculateBMI();
})

function calculateBMI() {
    var weightInput = parseFloat(document.getElementById("weight").value);
    var heightInput = parseFloat(document.getElementById("height").value);

    let total = 0.0;
    switch(selectionChosen) {
        case "M":
            console.log(heightInput*heightInput);
            total = ((weightInput / heightInput/ heightInput) * 10000);
            result.textContent = total;
            console.log(total);
            break;

        case "U":
            total = ((weightInput / heightInput /heightInput) * 703);
            console.log(total);
            result.textContent = total;
            break;
    }
}
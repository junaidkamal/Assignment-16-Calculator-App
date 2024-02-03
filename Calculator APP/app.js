var displayInput = document.getElementById("displayInput");
function getVal(val){
    displayInput.value += val;
}
function clearAll() {
    displayInput.value = "";
}
function calculate() {
    displayInput.value = eval(displayInput.value)
}

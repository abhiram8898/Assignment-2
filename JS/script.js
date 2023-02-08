function sum1() {
    var num = document.getElementById("i").value;
    var num2 = document.getElementById("ii").value;
    document.getElementById("iii").value = parseInt(num) + parseInt(num2);
}
function dif() {
    var num = document.getElementById("i").value;
    var num2 = document.getElementById("ii").value;
    document.getElementById("iii").value = parseInt(num) - parseInt(num2);
}

function div() {
    var num = document.getElementById("i").value;
    var num2 = document.getElementById("ii").value;
    document.getElementById("iii").value = parseInt(num) / parseInt(num2);
}
function mul() {
    var num = document.getElementById("i").value;
    var num2 = document.getElementById("ii").value;
    document.getElementById("iii").value = parseInt(num) * parseInt(num2);
}

function sigmoid(i) {
    return 1 / (1 + Math.exp(-i));
}

function neuron(w, b, i) {
    return sigmoid((w * i) + b);
}

function twoInputNeuron(w, b, i, i2) {
    return sigmoid((w * i) + (w * i2) + b);
}

var sout = document.getElementById("singNeuronOutput")
var rsnb = document.getElementById("RunSingNeuronButton")

rsnb.onclick = function () {
    const w = parseFloat(prompt("Input weight: "));
    const b = parseFloat(prompt("Input bias: "));
    const i = parseFloat(prompt("Input input: "));

    sout.innerHTML = "Output: " + String(neuron(w, b, i));
}

var tout = document.getElementById("twoNeuronOutput")
var tsnb = document.getElementById("RunTwoNeuronButton")

tsnb.onclick = function () {
    const w = parseFloat(prompt("Input weight: "));
    const b = parseFloat(prompt("Input bias: "));
    const i = parseFloat(prompt("Input input 1: "));
    const i2 = parseFloat(prompt("Input input 2: "));

    tout.textContent = "Output: " + String(twoInputNeuron(w, b, i, i2));
}
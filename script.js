function sigmoid(i) {
    return 1 / (1 + Math.exp(-i));
}

function neuron(w, b, i) {
    return sigmoid((w * i) + b);
}

function twoInputNeuron(w, w2, b, i, i2) {
    return sigmoid((w * i) + (w2 * i2) + b);
}

function threeInputNeuron(w, w2, w3, b, i, i2, i3) {
    return sigmoid((w * i) + (w2 * i2) + (w3 * i3) + b);
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
    const w = parseFloat(prompt("Input weight 1: "));
    const w2 = parseFloat(prompt("Input weight 2: "));
    const b = parseFloat(prompt("Input bias: "));
    const i = parseFloat(prompt("Input input 1: "));
    const i2 = parseFloat(prompt("Input input 2: "));

    tout.textContent = "Output: " + String(twoInputNeuron(w, w2, b, i, i2));
}

var thout = document.getElementById("threeNeuronOutput")
var thsnb = document.getElementById("RunThreeNeuronButton")

thsnb.onclick = function () {
    const w = parseFloat(prompt("Input weight 1: "));
    const w2 = parseFloat(prompt("Input weight 2: "));
    const w3 = parseFloat(prompt("Input weight 3: "));
    const b = parseFloat(prompt("Input bias: "));
    const i = parseFloat(prompt("Input input 1: "));
    const i2 = parseFloat(prompt("Input input 2: "));
    const i3 = parseFloat(prompt("Input input 3: "));

    thout.textContent = "Output: " + String(twoInputNeuron(w, w2, w3, b, i, i2, i3));
}
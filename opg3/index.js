let c = parseFloat(prompt("Celsius til fahrenheit"));
let f = parseFloat(prompt("Fahrenheit til celsius"));

function cel() {
  return c * 1.8 + 32;
}

function fah() {
  return Math.round((f-32) / 1.8);
}

console.log("Celsius til fahrenheit: " + cel());
console.log("Fahrenheit til celsius: " + fah());

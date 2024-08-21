const username = "Santeri";
const password = "321";

let myUsername = prompt("Skriv ditt navn");
let myPassword = prompt("Skriv ditt passord");

if (username == myUsername && password == myPassword) {
  console.log("velkommen")
} else {
  console.log("ikke velkommen")
}
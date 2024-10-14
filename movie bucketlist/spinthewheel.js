let option1 = prompt("option 1");
let option2 = prompt("option 2");

let options = [option1, option2];

let k = Math.floor((Math.random() * options.length));
let chosenopt= (options[k]).toString();
alert(chosenopt);
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question('Geef het aantal dagen: '));
let uren = parseFloat(await userInput.question('Geef het aantal uren: '));
let minuten = parseFloat(await userInput.question('Geef het aantal minuten: '));
let seconden = parseFloat(await userInput.question('Geef het aantal seconden: '));

let totaalSeconden = (dagen * 86400) + (uren * 3600) + (minuten * 60) + seconden

console.log('Aantal seconden: '+ totaalSeconden);

process.exit();



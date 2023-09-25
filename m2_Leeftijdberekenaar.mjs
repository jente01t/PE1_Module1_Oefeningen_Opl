import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question('Wat is je geboortejaar?')); 
let toekomstJaar = parseFloat(await userInput.question('In welk jaar wil je je leeftijd weten?'));

toekomstJaar = toekomstJaar - geboorteJaar 
let toekomstJaar2 = toekomstJaar - 1

console.log('Je zal ' + toekomstJaar2 + ' of ' + toekomstJaar + ' jaar oud zijn.')

process.exit();
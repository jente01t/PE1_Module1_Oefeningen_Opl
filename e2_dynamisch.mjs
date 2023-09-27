import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let name = await userInput.question('Wat is je naam?');
let age = await userInput.question('Wat is je leeftijd?');
let favoriteGame = await userInput.question('Wat is je favoriete game?');

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();

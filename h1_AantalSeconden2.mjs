import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let seconden = 106332;

const dagen = Math.floor(seconden / (24*60*60));
seconden = seconden % (24*60*60);
const uren = Math.floor(seconden/ (60*60));
seconden = seconden % 60*60
const minuten = Math.floor(seconden/ 60);
seconden = seconden % 60


console.log(dagen);
console.log(uren);
console.log(minuten);
console.log(seconden);

process.exit();
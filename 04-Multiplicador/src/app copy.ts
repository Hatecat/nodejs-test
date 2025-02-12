import fs from 'fs';

let outputMessage = '';
const base = 5;
const outputDir = 'output/';
let fileName = `tabla del ${base}.txt`;
const headerMessage = `
=====================================
Tabla del ${base}
=====================================\n
`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}


fs.existsSync('output') || fs.mkdirSync('output');
fs.writeFileSync(outputDir  + fileName , headerMessage + outputMessage);
// console.log(headerMessage);
// console.log(outputMessage);
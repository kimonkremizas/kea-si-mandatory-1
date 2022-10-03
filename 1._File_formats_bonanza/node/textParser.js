import fs from 'fs';
import path from 'path';

const filePath = path.join('../weather');
const data = fs.readFileSync(filePath, 'utf8');
const text = data.split('\n');
console.log(text);
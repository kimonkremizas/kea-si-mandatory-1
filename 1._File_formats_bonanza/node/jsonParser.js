import fs from 'fs';
import path from 'path';

const filePath = path.join('../weather.json');
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);
console.log(json);
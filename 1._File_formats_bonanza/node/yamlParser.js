import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const filePath = path.join('../weather.yaml');
const data = fs.readFileSync(filePath, 'utf8');
const json = yaml.loadAll(data);
console.log(json);

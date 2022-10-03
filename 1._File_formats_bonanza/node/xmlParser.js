import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

const filePath = path.join('../weather.xml');
const data = fs.readFileSync(filePath, 'utf8');
const parser = new xml2js.Parser();
parser.parseString(data, (err, result) => {
    console.log(result);
}
);
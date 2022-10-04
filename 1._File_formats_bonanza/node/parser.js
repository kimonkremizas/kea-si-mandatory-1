import fs from 'fs'
import path from 'path';
import Papa from 'papaparse';
import yaml from 'js-yaml';
import { XMLParser } from 'fast-xml-parser';

const textPath = path.join('../weather');
const jsonPath = path.join('../weather.json');
const xmlPath = path.join('../weather.xml');
const csvPath = path.join('../weather.csv');
const yamlPath = path.join('../weather.yaml');

export const parseTEXT = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedFile = data.split('\n');
    return(parsedFile);
}

export const parseJSON = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedFile = JSON.parse(data);
    return(parsedFile);
}

export const parseXML = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const parser = new XMLParser();
    const parsedFile = parser.parse(data);
    return(parsedFile);
}

export const parseCSV = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedFile = Papa.parse(data, {header: true});
    return(parsedFile);
}

export const parseYAML = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedFile = yaml.loadAll(data);
    return(parsedFile);
}

export default {
    parseTEXT,
    parseJSON,
    parseXML,
    parseCSV,
    parseYAML
}

console.log("text:\n");
console.log(parseTEXT(textPath));
console.log("\n______________________");

console.log("json:\n");
console.log(parseJSON(jsonPath));
console.log("\n______________________");

console.log("xml:\n");
console.log(parseXML(xmlPath));
console.log("\n______________________");

console.log("csv:\n");
console.log(parseCSV(csvPath));
console.log("\n______________________");

console.log("yaml:\n");
console.log(parseYAML(yamlPath));
console.log("\n______________________");
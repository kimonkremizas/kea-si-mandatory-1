import fs from 'fs'
import csv from 'fast-csv'

const data = []
 
fs.createReadStream('../weather.csv')
  .pipe(csv.parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', row => data.push(row))
  .on('end', () => console.log(data));
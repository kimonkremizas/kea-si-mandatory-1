import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import weatherRouter from "./routers/xml.js";

const app = express();
app.use(cors());

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Weather API',
        version: '0.0.1',
      },
    },
    apis: ['./routers/*.js'], 
};
  
const openapiSpecification = swaggerJsDoc(options);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use(weatherRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});

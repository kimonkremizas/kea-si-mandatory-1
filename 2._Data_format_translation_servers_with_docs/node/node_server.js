import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import weatherXmlRouter from "./routers/yaml.js";
import weatherYamlRouter from "./routers/yaml.js";

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

app.use(weatherXmlRouter);
app.use(weatherYamlRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});

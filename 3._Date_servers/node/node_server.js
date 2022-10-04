import express from "express";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import timeRouter from "./routers/time.js";

const app = express();
app.use(cors());

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Date API',
        version: '0.0.1',
      },
    },
    apis: ['./routers/*.js'], 
};

const openapiSpecification = swaggerJsDoc(options);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));
app.use(timeRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT);
});

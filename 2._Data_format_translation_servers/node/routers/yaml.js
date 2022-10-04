import { Router } from "express";
import path from 'path';
import parser from "../../../1._File_formats_bonanza/node/parser.js";
import YAML from 'yaml'

const router = Router();

/**
 * @openapi
 * /yaml:
 *   get:
 *     summary: Returns the weather in yaml format
 *     description: Get the weather
 *     responses:
 *       200:
 *         description: Returns an object of weather data.
 */
router.get("/yaml", (req, res) => {
    const jsonPath = path.join('../../0._Files/weather.json');
    const weatherInYaml = new YAML.Document();
    weatherInYaml.contents = parser.parseJSON(jsonPath);
    res.send(weatherInYaml.toString());
});

export default router;

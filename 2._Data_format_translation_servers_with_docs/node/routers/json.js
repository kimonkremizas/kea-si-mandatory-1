import { Router } from "express";
import path from 'path';
import parser from "../../../1._File_formats_bonanza/node/parser.js";
const router = Router();

/**
 * @openapi
 * /json:
 *   get:
 *     summary: Returns the weather in json format
 *     description: Get the weather
 *     responses:
 *       200:
 *         description: Returns an object of weather data.
 */
router.get("/json", (req, res) => {
    const xmlPath = path.join('../../0._Files/weather.xml');
    const weatherInJson = parser.parseXML(xmlPath);
    res.send(weatherInJson);
});

export default router;

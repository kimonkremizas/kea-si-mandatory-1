import { Router } from "express";
const router = Router();

/**
 * @openapi
 * /json:
 *   get:
 *     summary: Returns the data in json format
 *     description: Get the data
 *     responses:
 *       200:
 *         description: Returns an object of data.
 */
router.get("/json", (req, res) => {
    res.send({ weather: []});
});

export default router;

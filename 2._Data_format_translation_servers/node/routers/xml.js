import { Router } from "express";
const router = Router();

/**
 * @openapi
 * /xml:
 *   get:
 *     summary: Returns the data in xml format
 *     description: Get the data
 *     responses:
 *       200:
 *         description: Returns an object of data.
 */
router.get("/xml", (req, res) => {
    res.send({ weather: []});
});

export default router;

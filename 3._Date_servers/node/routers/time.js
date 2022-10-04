import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /node-time:
 *   get:
 *     summary: Returns the current date and time in ISO 8601 format
 *     description: Get the current date and time
 *     responses:
 *       200:
 *         description: Returns the current date and time.
 */
 router.get('/node-time', (req, res) => {
    
    res.send(new Date().toISOString());
});


export default router;

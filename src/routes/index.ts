import { Router } from "express";
import uploadPropertyCSV from "src/controllers/assests/upload-property-csv";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome
 *     description: Welcome endpoint for the Assets API.
 *     responses:
 *       '200':
 *         description: Welcome message.
 */
router.get("/", (req, res) => {
  res.send("Welcome to Assests API!");
});

/**
 * @swagger
 * /upload-property-csv:
 *   post:
 *     summary: Upload Property CSV
 *     description: Upload a CSV file for property data.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: CSV data inserted into the database.
 *       '400':
 *         description: No file uploaded.
 *       '500':
 *         description: Error occurred while processing the CSV file.
 */

router.post("/upload-property-csv", upload.single("file"), uploadPropertyCSV);

export default router;

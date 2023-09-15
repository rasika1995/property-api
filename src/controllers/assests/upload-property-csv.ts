import { Request, Response } from "express";
import { uploadPropertyCSVService } from "src/services/assests/upload-property-csv";

const uploadPropertyCSVController = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const result = await uploadPropertyCSVService(req.file.buffer.toString("utf-8"));

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error occurred while processing the CSV file." });
  }
};

export default uploadPropertyCSVController;


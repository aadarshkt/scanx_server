import { Router } from "express";
const router = Router();
import {
  createSACRecord,
  createLibraryRecord,
} from "../controllers/locationController.js";

router.post(
  "/createRecord",
  (req, res) => {
    const location = req.query.location;
    switch (location) {
      case "Library":
        createLibraryRecord(req, res);
      case "SAC":
        createSACRecord(req, res);
        break;
      default:
        res.send("Invalid Location");
    }
  }
);

export default router;

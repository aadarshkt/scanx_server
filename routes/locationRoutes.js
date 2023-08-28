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
        createLibraryRecord;
      case "SAC":
        createSACRecord;
        break;

      default:
        break;
    }
  }
);

export default router;

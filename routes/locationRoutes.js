import { Router } from "express";
const router = Router();
import {
  createSACRecord,
  createLibraryRecord,
  fetchAllSACrecords,
  fetchAllLibraryrecords,
} from "../controllers/locationController.js";

router.post(
  "/createRecord",
  (req, res) => {
    const location = req.query.location;
    switch (location) {
      case "LIBRARY":
        createLibraryRecord(req, res);
      case "SAC":
        createSACRecord(req, res);
        break;
      default:
        res.send("Invalid Location");
    }
  }
);

router.get("/", (req, res) => {
  const location = req.query.location;
  switch (location) {
    case "LIBRARY":
      fetchAllLibraryrecords(req, res);
      break;
    case "SAC":
      fetchAllSACrecords(req, res);
      break;
    default:
      res.send("Invalid Location");
  }
});

export default router;

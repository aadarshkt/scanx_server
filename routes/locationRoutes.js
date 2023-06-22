import { Router } from "express";
const router = Router();
import {
  createSACRecord,
  createLibraryRecord,
} from "../controllers/locationController.js";

router.post(
  "/createSACRecord",
  createSACRecord
);
router.post(
  "/createLibraryRecord",
  createLibraryRecord
);

export default router;

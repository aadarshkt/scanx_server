import { Router } from "express";
const router = Router();
import {
  createStudent,
  updateProfile,
  updateStudent,
} from "../controllers/studentController.js";

// Define the route for creating a new student
router.post("/", createStudent);
router.post(
  "/updateProfile",
  updateProfile
);
router.put("/update", updateStudent);

export default router;

import { Router } from "express";
const router = Router();
import {
  createStudent,
  updateStudent,
} from "../controllers/studentController.js";

// Define the route for creating a new student
router.post("/", createStudent);
router.put("/update", updateStudent);

export default router;

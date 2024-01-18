import { Router } from "express";
const router = Router();
import {
  createStudent,
  updateProfile,
  updateStudent,
  getLastLocation,
  delete_student,
} from "../controllers/studentController.js";

//getLast location
router.get("/last_location", getLastLocation);

// Define the route for creating a new student
router.post("/", createStudent);
router.post("/updateProfile", updateProfile);
router.put("/update", updateStudent);
router.delete("/delete", delete_student);

export default router;

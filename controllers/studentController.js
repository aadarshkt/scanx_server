import query from "../config/db.js";
import { createSACRecord, updateSACStatus, createLibraryRecord, updateLibraryStatus } from "./locationController.js";
import { DateTime } from "luxon";
import bcrypt from "bcrypt";
import { verifyToken } from "../middleware/token.js";

//get last location and time on any location
const getLastLocation = async (req, res) => {
  //verification with jwt token of user.
  const userId = verifyToken(req, res);

  const searchLastLocationQuery =
    "SELECT last_location, total_sac_time, total_library_time FROM students WHERE id = $1";
  const last_location_response = await query(searchLastLocationQuery, [userId], res);
  if (last_location_response.length > 0) {
    return res.status(200).json({
      last_location: last_location_response[0].last_location,
      total_sac_time_spent: last_location_response[0].total_sac_time,
      total_library_time_spent: last_location_response[0].total_library_time,
    });
  }

  return res.status(401).json({ message: "Unauthorised" });
};

//register new student
async function createStudent(req, res) {
  const { name, roll_number, email, mobile_number, last_location, password, room_no, hostel } = req.body;

  console.log(req.body);

  //check for already existing email
  const checkEmailQuery = "SELECT COUNT(*) AS email_count FROM students WHERE email = $1";

  const isPresent = await query(checkEmailQuery, [email], res);
  if (isPresent[0].email_count > 0) {
    //status code 409 for conflict
    return res.status(409).json({
      message: "Email already is use",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  // Execute the insert query to create a new student
  await query(
    "INSERT INTO students (name, roll_number, email, last_location, status, total_library_time, total_sac_time, mobile_number, room_no, hostel, hashedpassword) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
    [name, roll_number, email, last_location, -1, 0, 0, mobile_number, room_no, hostel, hashedPassword]
  );
  return res.json({ message: "Creation of student successful" });
}

const updateProfile = async (req, res) => {
  try {
    const { name, roll_number, email, last_location, total_library_time, total_sac_time } = req.body;
    const searchProfileQuery = "SELECT * FROM students WHERE email = $1";
    const [row] = await query(searchProfileQuery, [email], res);
    if (row.length == 0) {
      console.error("No matching student found for update");
    } else {
      const updateProfileQuery =
        "UPDATE students SET (name, roll_number, last_location, total_library_time, total_sac_time) VALUES ($1, $2, $3, $4, $5)";
      await query(updateProfileQuery, [name, roll_number, last_location, total_library_time, total_sac_time], res);
    }
  } catch (error) {
    console.error("Error updating Profile");
  }
};

// Controller function to update last_location and status in students table
//Entry or exit of student
const updateStudent = async (req, res) => {
  try {
    const { name, roll_no, mobile_number, room_no, hostel, description, current_location } = req.body;

    const prevQuery = "SELECT last_location, status FROM students WHERE name = $1 AND roll_number = $2";

    const studentCredentials = [name, roll_number];

    const [rows] = await query(prevQuery, studentCredentials, res);

    if (rows.length === 0) {
      return res.status(404).send("No matching student found.");
    }

    let status = rows[0].status;
    //status 0 is in and status 1 is out
    if (status == 0) {
      status = 1;
      //TODO: use current_location and last_location to check for consistency otherwise alert user
      //and then upate the DB.
      //if(current_location != last_location) alert('user') and status=0;
    } else {
      status = 0;
    }

    //update location table.
    if (current_location === "SAC") {
      if (status == 1) {
        await updateSACStatus(
          {
            body: {
              name,
              roll_number,
            },
          },
          {
            status: function (statusCode) {
              console.log("Response status:", statusCode);
            },
            send: function (message) {
              console.log("Response message:", message);
            },
          }
        );
      } else if (status == 0) {
        await createSACRecord(req, res);
      }
    } else {
      if (status == 1) {
        await updateLibraryStatus(
          {
            body: {
              name,
              roll_number,
            },
          },
          {
            status: function (statusCode) {
              console.log("Response status:", statusCode);
            },
            send: function (message) {
              console.log("Response message:", message);
            },
          }
        );
      } else if (status == 0) {
        await createLibraryRecord(req, res);
      }
    }

    //Update students table.
    const query = "UPDATE students SET last_location = $1, status = $2 WHERE name = $3 AND roll_number = $4";

    const values = [current_location, status, name, roll_number];

    const [result] = await query(query, values, res);

    if (result.affectedRows === 0) {
      return res.status(404).send("No matching student found.");
    }

    res.status(200).send("Student updated successfully!");
  } catch (error) {
    console.error("Error updating student: " + error.stack);
    res.status(500).send("Error updating student.");
  }
};

const delete_student = async (req, res) => {
  const { email, password } = req.body;
  const searchEmail = "SELECT * FROM students WHERE email = $1";
  const rows = await query(searchEmail, [email]);
  if (rows.length == 0) {
    console.log("Error finding the email");
    return res.status(401).json({
      error: "Unauthorised access, Invaild email",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, rows[0].hashedpassword);
  if (!isPasswordValid) {
    console.error("The password is not valid");
    return res.status(401).json({
      error: "Invalid authentication credentials",
    });
  }

  const delete_query = "DELETE FROM students WHERE email = $1";
  await query(delete_query, [email]);
  return res.status(200).json({ message: "successfully deleted message" });
};

export { createStudent, getLastLocation, updateStudent, updateProfile, delete_student };

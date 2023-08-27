import query from "../config/db.js";
import {
  createSACRecord,
  updateSACStatus,
  createLibraryRecord,
  updateLibraryStatus,
} from "./locationController.js";
import { DateTime } from "luxon";

//create a new student
async function createStudent(req, res) {
  const {
    name,
    roll_number,
    email,
    last_location,
    total_library_time,
    total_sac_time,
  } = req.body;

  // Convert datetime values to MySQL datetime format using Luxon
  const formattedLibraryTime = new Date(
    DateTime.now()
  );
  const formattedSACTime = new Date(
    DateTime.now()
  );

  try {
    // Execute the insert query to create a new student
    await query(
      "INSERT INTO students (name, roll_number, email, last_location, status, total_library_time, total_sac_time) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        roll_number,
        email,
        last_location,
        -1,
        formattedLibraryTime,
        formattedSACTime,
      ]
    );

    return res
      .status(200)
      .send(
        "Student created successfully!"
      );
  } catch (error) {
    console.error(
      "Error executing MySQL query: " +
        error.stack
    );
    return res
      .status(500)
      .send(
        "Error executing MySQL query."
      );
  }
}

// Controller function to update last_location and status in students table
//Entry or exit of student
const updateStudent = async (
  req,
  res
) => {
  try {
    const {
      name,
      roll_no,
      mobile_number,
      room_no,
      hostel,
      description,
      current_location,
    } = req.body;

    const prevQuery =
      "SELECT last_location, status FROM students WHERE name = ? AND roll_number = ?";

    const studentCredentials = [
      name,
      roll_number,
    ];

    const [rows] = await query(
      prevQuery,
      studentCredentials
    );

    if (rows.length === 0) {
      return res
        .status(404)
        .send(
          "No matching student found."
        );
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
            status: function (
              statusCode
            ) {
              console.log(
                "Response status:",
                statusCode
              );
            },
            send: function (message) {
              console.log(
                "Response message:",
                message
              );
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
            status: function (
              statusCode
            ) {
              console.log(
                "Response status:",
                statusCode
              );
            },
            send: function (message) {
              console.log(
                "Response message:",
                message
              );
            },
          }
        );
      } else if (status == 0) {
        await createLibraryRecord(
          req,
          res
        );
      }
    }

    //Update students table.
    const query =
      "UPDATE students SET last_location = ?, status = ? WHERE name = ? AND roll_number = ?";

    const values = [
      current_location,
      status,
      name,
      roll_number,
    ];

    const [result] = await query(
      query,
      values
    );

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .send(
          "No matching student found."
        );
    }

    res
      .status(200)
      .send(
        "Student updated successfully!"
      );
  } catch (error) {
    console.error(
      "Error updating student: " +
        error.stack
    );
    res
      .status(500)
      .send("Error updating student.");
  }
};

export { createStudent, updateStudent };

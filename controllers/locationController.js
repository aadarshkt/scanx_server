import query from "../config/db.js";
import { DateTime } from "luxon";
import { calculateTimeDifference } from "../utils/helperFunctions.js";

//fetch all sac records
const fetchAllSACrecords = async (
  req,
  res
) => {
  const results = await query(
    "SELECT * FROM SAC"
  );
  res.json(results);
};

//create new record when user is entering
const createSACRecord = async (
  req,
  res
) => {
  const {
    name,
    roll_no,
    email,
    mobile_number,
    room_no,
    hostel,
  } = req.body;
  //Todo handle description
  const description = "";
  try {
    //TODO : implement current feature.
    // // Query the previous row to get the current_in value
    // const [prevRow] = await query(
    //   "SELECT current_in FROM SAC LIMIT 1"
    // );

    // // Get the current_in value from the previous row
    // const previousCurrentIn =
    //   prevRow && prevRow[0]
    //     ? prevRow[0].current_in
    //     : null;

    // const current_in =
    //   previousCurrentIn + 1;

    //we know location for this function has been called.
    //we know email of student
    //check status of that student at that location
    //if status 1 means in, exit that student call updateSACStatus
    //if status 0 or not available enter that student call insert query.
    const checkStatusQuery =
      "SELECT status FROM SAC WHERE email = ? AND status = ?";
    const resStatus = await query(
      checkStatusQuery,
      [email, 1],
      res
    );
    const prevStatus =
      resStatus.length > 0
        ? resStatus[0].status
        : -1;

    console.log(
      "prevStatus" + prevStatus
    );

    if (
      prevStatus == -1 ||
      prevStatus == 0
    ) {
      const currentTime = new Date(
        DateTime.now()
      );
      // Execute the insert query
      await query(
        "INSERT INTO SAC (name, roll_no, email, mobile_number, room_no, hostel, entry_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          name,
          roll_no,
          email,
          mobile_number,
          room_no,
          hostel,
          currentTime,
          1,
        ],
        res
      );
      const updateLastLocation =
        "UPDATE students SET last_location = ?, status = ? WHERE email = ?";
      await query(
        updateLastLocation,
        ["SAC", 1, email],
        res
      );
      return res
        .status(200)
        .send(
          "SAC Record created successfully!"
        );
    } else {
      await updateSACStatus(req, res);
    }
  } catch (error) {
    console.error(
      "Error creating SAC record: " +
        error.stack
    );
    res
      .status(500)
      .send(
        "Error creating SAC record."
      );
  }
};

// Controller function to update the status in the SAC table when exiting
const updateSACStatus = async (
  req,
  res
) => {
  try {
    const { email } = req.body;

    //get previous current_in
    const prevRow = await query(
      "SELECT current_in FROM SAC LIMIT 1"
    );

    // Get the current_in value from the previous row
    const previousCurrentIn =
      prevRow.length > 0
        ? prevRow[0].current_in
        : null;

    //TODO: You are allowing to in even when in is there previously,
    //out first then in for the below function.
    const current_in =
      previousCurrentIn - 1;

    const currentTime = new Date(
      DateTime.now()
    );

    //fetch entry_at value of a particular student such that status is 1.
    const entryQuery =
      "SELECT * FROM SAC WHERE email = ? AND status = ?";
    const entryResult = await query(
      entryQuery,
      [email, 1],
      res
    );
    const entryTime =
      entryResult.length > 0
        ? entryResult[0].entry_at
        : currentTime;
    //Calculate total time spent in a location
    const timeSpent =
      currentTime - entryTime;

    //get already total time spent in SAC.
    const get_prev_time_query =
      "SELECT total_sac_time FROM students WHERE email = ?";
    const prev_total_time_spent =
      await query(
        get_prev_time_query,
        [email],
        res
      );

    const total_time_spent =
      prev_total_time_spent[0]
        .total_sac_time + timeSpent;

    console.log(
      "time spent" + timeSpent
    );
    console.log(
      "prev total time" +
        prev_total_time_spent[0]
          .total_sac_time
    );
    console.log(total_time_spent);

    //update student table with time spent at location
    const updateTimeSpentQuery =
      "UPDATE students SET total_sac_time = ? WHERE email = ?";
    await query(
      updateTimeSpentQuery,
      [total_time_spent, email],
      res
    );

    //exit and update exit_at, current_in and status of out.
    const exitSACQuery =
      "UPDATE SAC SET status = ?, current_in = ?, exit_at = ? WHERE email = ? AND status = ?";

    console.log(email);

    const values = [
      0,
      current_in,
      currentTime,
      email,
      1,
    ];

    const exitResult = await query(
      exitSACQuery,
      values,
      res
    );
    //update last location
    const updateLastLocation =
      "UPDATE students SET last_location = ?, status = ? WHERE email = ?";
    await query(
      updateLastLocation,
      ["SAC", 0, email],
      res
    );

    return res.status(200).json({
      message:
        "SAC exit status updated successfully!",
    });
  } catch (error) {
    console.error(
      "Error updating SAC exit status: " +
        error.stack
    );
    return res.status(500).send({
      message:
        "Error updating SAC exit status.",
    });
  }
};

//fetch all Library records
const fetchAllLibraryrecords = async (
  req,
  res
) => {
  try {
    const results = await query(
      "SELECT * FROM Library"
    );
    res.json(results);
  } catch (err) {
    console.error(
      "There was an error in fetching records" +
        err
    );
  }
};

const createLibraryRecord = async (
  req,
  res
) => {
  const {
    name,
    roll_no,
    email,
    mobile_number,
    room_no,
    hostel,
  } = req.body;

  //Todo handle description and status
  try {
    const checkStatusQuery =
      "SELECT status FROM Library WHERE email = ? AND status = ?";
    const resStatus = await query(
      checkStatusQuery,
      [email, 1],
      res
    );
    const prevStatus =
      resStatus.length > 0
        ? resStatus[0].status
        : -1;

    if (
      prevStatus == -1 ||
      prevStatus === 0
    ) {
      const currentTime = new Date(
        DateTime.now()
      );
      // Execute the insert query
      await query(
        "INSERT INTO Library (name, roll_no, email, mobile_number, room_no, hostel, entry_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          name,
          roll_no,
          email,
          mobile_number,
          room_no,
          hostel,
          currentTime,
          1,
        ],
        res
      );
      const updateLastLocation =
        "UPDATE students SET last_location = ?, status = ? WHERE email = ?";
      await query(
        updateLastLocation,
        ["Library", 1, email],
        res
      );
      return res
        .status(200)
        .send(
          "Library Record created successfully!"
        );
    } else {
      await updateLibraryStatus(
        req,
        res
      );
    }
  } catch (error) {
    console.error(
      "Error creating Library record: " +
        error.stack
    );
    res
      .status(500)
      .send(
        "Error creating Library record."
      );
  }
};

// Controller function to update the status in the SAC table when exiting
//exit function
const updateLibraryStatus = async (
  req,
  res
) => {
  try {
    const { email } = req.body;

    //get previous current_in
    const [prevRow] = await query(
      "SELECT current_in FROM Library LIMIT 1"
    );

    // Get the current_in value from the previous row
    const previousCurrentIn =
      prevRow && prevRow[0]
        ? prevRow[0].current_in
        : null;

    //TODO: You are allowing to in even when in is there previously,
    //out first then in for the below function.
    const current_in =
      previousCurrentIn - 1;

    const currentTime = new Date(
      DateTime.now()
    );

    //fetch entry_at value of a particular student such that status is 1.
    const entryQuery =
      "SELECT * FROM Library WHERE email = ? AND status = ?";
    const entryResult = await query(
      entryQuery,
      [email, 1],
      res
    );
    const entryTime =
      entryResult.length > 0
        ? entryResult[0].entry_at
        : currentTime;
    //Calculate total time spent in a location
    const timeSpent =
      currentTime - entryTime;

    //get already total time spent in Library.
    const get_prev_time_query =
      "SELECT total_library_time FROM students WHERE email = ?";
    const prev_total_time_spent =
      await query(
        get_prev_time_query,
        [email],
        res
      );

    const total_time_spent =
      prev_total_time_spent[0]
        .total_library_time + timeSpent;

    //update student table with time spent at location
    const updateTimeSpentQuery =
      "UPDATE students SET total_library_time = ?, status = ? WHERE email = ?";
    await query(
      updateTimeSpentQuery,
      [total_time_spent, 0, email],
      res
    );

    //exit library with changing status and current_in
    const exitLibraryQuery =
      "UPDATE Library SET status = ?, current_in = ?, exit_at = ? WHERE email = ? AND status = ?";

    const values = [
      0,
      current_in,
      currentTime,
      email,
      1,
    ];

    await query(
      exitLibraryQuery,
      values,
      res
    );
    res
      .status(200)
      .send(
        "Library exit status updated successfully!"
      );
  } catch (error) {
    console.error(
      "Error updating Library exit status: " +
        error
    );
    res
      .status(500)
      .send(
        "Error updating Library exit status."
      );
  }
};

// Controller function to get a single value from the current_in column of SAC
const getCurrentInValue = async (
  req,
  res
) => {
  try {
    const [row] = await query(
      "SELECT current_in FROM SAC LIMIT 1"
    );

    if (!row) {
      return res
        .status(404)
        .send("No records found.");
    }

    const currentValue = row.current_in;
    res.status(200).json(currentValue);
  } catch (error) {
    console.error(
      "Error retrieving current_in value: " +
        error.stack
    );
    res
      .status(500)
      .send(
        "Error retrieving current_in value."
      );
  }
};

export {
  createSACRecord,
  createLibraryRecord,
  getCurrentInValue,
  updateSACStatus,
  updateLibraryStatus,
  fetchAllSACrecords,
  fetchAllLibraryrecords,
};

import query from "../config/db.js";

//create new record when user is entering
const createSACRecord = async (
  req,
  res
) => {
  const {
    name,
    roll_no,
    mobile_number,
    room_no,
    hostel,
    description,
  } = req.body;

  try {
    // Query the previous row to get the current_in value
    const [prevRow] = await query(
      "SELECT current_in FROM SAC LIMIT 1"
    );

    // Get the current_in value from the previous row
    const previousCurrentIn =
      prevRow && prevRow[0]
        ? prevRow[0].current_in
        : null;

    const current_in =
      previousCurrentIn + 1;

    // Execute the insert query
    await query(
      "INSERT INTO SAC (name, roll_no, mobile_number, room_no, hostel, status, current_in, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        roll_no,
        mobile_number,
        room_no,
        hostel,
        0,
        current_in,
        description,
      ]
    );
    return res
      .status(200)
      .send(
        "Record created successfully!"
      );
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
    const { name, roll_number } =
      req.body;

    //get previous current_in
    const [prevRow] = await query(
      "SELECT current_in FROM SAC LIMIT 1"
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

    const query =
      "UPDATE SAC SET status = ?, current_in = ? WHERE name = ? AND roll_no = ?";

    const values = [
      1,
      current_in,
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
          "No matching record found in SAC table."
        );
    }

    res
      .status(200)
      .send(
        "SAC exit status updated successfully!"
      );
  } catch (error) {
    console.error(
      "Error updating SAC exit status: " +
        error.stack
    );
    res
      .status(500)
      .send(
        "Error updating SAC exit status."
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
    mobile_number,
    room_no,
    hostel,
    status,
    description,
  } = req.body;

  try {
    const [prevRow] = await query(
      "SELECT current_in FROM Library LIMIT 1"
    );

    // Get the current_in value from the previous row
    const previousCurrentIn =
      prevRow && prevRow[0]
        ? prevRow[0].current_in
        : null;

    const current_in =
      previousCurrentIn + 1;

    // Execute the insert query
    await query(
      "INSERT INTO Library (name, roll_no, mobile_number, room_no, hostel, status, current_in, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        roll_no,
        mobile_number,
        room_no,
        hostel,
        status,
        current_in,
        description,
      ]
    );
    return res
      .status(200)
      .send(
        "Record created successfully!"
      );
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
//exit function
const updateLibraryStatus = async (
  req,
  res
) => {
  try {
    const { name, roll_number } =
      req.body;

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

    const query =
      "UPDATE Library SET status = ?, current_in = ? WHERE name = ? AND roll_no = ?";

    const values = [
      1,
      current_in,
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
          "No matching record found in SAC table."
        );
    }

    res
      .status(200)
      .send(
        "Library exit status updated successfully!"
      );
  } catch (error) {
    console.error(
      "Error updating Library exit status: " +
        error.stack
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
};

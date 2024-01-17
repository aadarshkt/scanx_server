import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const generateToken = (user) => {
  //sign jwt payload, mark it as userId which could be extracted at the time of verification.
  return jwt.sign({ userId: user.id }, secretKey, { expiresIn: "24h" });
};

// Middleware to verify JWT checks if token is available and valid, if valid return
//userId from the token, if invalid then respond with unauthrised access.
const verifyToken = (req, res) => {
  // Extract the authorization token from the request headers
  const authorizationHeader = req.headers["authorization"];

  // Check if the authorization header is present
  if (!authorizationHeader) {
    res.status(401).json({
      message: "No authorization token provided",
    });
    throw new Error("No authorization token provided");
    return;
  }

  // Split the authorization header to extract the token
  const tokenParts = authorizationHeader.split(" ");

  // Check if the header has the correct format
  if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== "bearer") {
    res.status(401).json({
      message: "Invalid authorization header format",
    });
    throw new Error("Invalid authorization header format");
    return;
  }

  const token = tokenParts[1]; // Extracted token

  //availablity part.
  //handle no token request
  if (!token) {
    res.status(401).json({
      message: "Unauthorized",
    });
    throw new Error("Unauthorized");
    return;
  }

  //validity part.
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.userId;
  } catch (error) {
    res.status(401).json({
      message: "Invalid authentication credentials",
    });
    throw new Error("Invalid authentication credentials");
  }
};

export { generateToken, verifyToken };

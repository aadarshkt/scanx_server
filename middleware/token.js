import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey =
  process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign(
    { userId: user.id },
    secretKey,
    { expiresIn: "24h" }
  );
};

// Middleware to verify JWT
const verifyToken = (
  req,
  res,
  next
) => {
  const token =
    req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  jwt.verify(
    token,
    secretKey,
    (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Token is not valid",
        });
      }

      req.userId = decoded.userId;
      next();
    }
  );
};

export { generateToken, verifyToken };

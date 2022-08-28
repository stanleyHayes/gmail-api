const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT,
    nodeENV: process.env.NODE_ENV,
    mongoDBURI: process.env.MONGO_DB_URI,
    jwtSecret: process.env.JWT_SECRET,
    otpLength: process.env.OTP_LENGTH
}

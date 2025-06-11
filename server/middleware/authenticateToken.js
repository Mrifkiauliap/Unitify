const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const verifyAsync = promisify(jwt.verify);

module.exports = {
    authenticateToken: async (req, res, next) => {
        try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Token tidak ditemukan" });  
        }

        const user = await verifyAsync(token, process.env.JWT_KEY);
        req.user = user;
        next();
        } catch (err) {
        console.error("JWT Error:", err.message);
        return res.status(403).json({ message: "Token tidak valid atau kadaluarsa" });
        }
    },
};

const jwt = require("jsonwebtoken");

exports.checkAuth = (req, res, next) => {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];

    if(!token) {
        return res.status(401).json({
            message: "Acesso negado."
        })
    }

    try {
        const SECRET = process.env.SECRET;

        jwt.verify(token, SECRET);

        next();
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
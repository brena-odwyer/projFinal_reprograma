const bcrypt = require("bcrypt");

exports.hashPassword = async(password, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        return hash;
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};
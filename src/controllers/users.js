const User = require("../models/user");
const { hashPassword } = require("../helpers/hashPassword");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const newUserRegister = async (req, res) => {
    try {
        const { email, password } = req.body;

        const newUser = new User({
            email,
            password
        });

        const passwordHashed = await hashPassword(newUser.password, res)
        newUser.password = passwordHashed

        const user = await User.findOne({ email: req.body.email });

        if (user) {
            res.status(400).json({ message: "Usuário já cadastrado no sistema" })
        }

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "Usuário cadastrado com sucesso.",
            savedUser
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email }).select("+password");

        if (!user) {
            return res.status(400).json({ message: "Email ou senha incorretos" })
        };

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(400).json({ message: "Email ou senha incorretos" })
        };
        const SECRET = process.env.SECRET;
        const token = jwt.sign({ id: user._id, email: user.email }, SECRET);

        res.status(200).json({
            message: "Login efetuado com sucesso.",
            token
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const updateUserById = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findById(req.params.id);

        if(!user) {
            return res.status(404).json({message: "Usuário não encontrado."});
        }

        user.email = email || user.email
        user.password = password || user.password

        const updatedUser = await user.save();

        res.status(200).json({
            message: "Usuário atualizado",
            updatedUser
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
};

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user) {
            return res.status(404).json({message: "Usuário não encontrado."});
        }

        await user.delete();
        res.status(200).json({message: "Usuário deletado com sucesso."})
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    newUserRegister,
    login,
    updateUserById,
    deleteUserById
}
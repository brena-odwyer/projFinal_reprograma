const Student = require("../models/student");

const createStudent = async (req, res) => {
    try {
        const { name, city, university, contactPhone, description, hasWhatsapp, donation, user } = req.body;

        const newStudent = new Student({
            name,
            city,
            university,
            contactPhone,
            description,
            hasWhatsapp,
            donation,
            user
        })

        const existingStudent = await Student.findOne({ user: req.body.user });
        if (existingStudent) {
            return res.status(400).json({
                error: "Estudante já cadastrado"
            })
        }

        const salveStudent = await newStudent.save();
        res.status(201).json({
            message: "Estudante cadastrado com sucesso",
            salveStudent
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const allStudents = async (req, res) => {
    try {
        const students = await Student.find().populate("user");
        res.status(200).json({
            message: "Lista de estudantes",
            students
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const studentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({message: "Estudante não encontrado."});
        }
        res.status(200).json({
            message: "Estudante:",
            student
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const studentByName = async (req, res) => {
    try {
        const name = req.query.name
        const studentByName = await Student.find({name: {$regex : name, $options: 'i'}});
        if(!studentByName) {
            throw new Error ("Nome não encontrado.")
        }
        res.status(200).json({
            "message": "Estudante encontrado",
            studentByName
        })

    } catch (error) {
        res.status(500).json({
            message: error.message 
        });
    }
};

const studentByUniveristy = async (req, res) => {
    try {
        const university = req.query.university
        const allStudentsByUniversity = await Student.find({university: {$regex: university, $options:'i'}});
        if(allStudentsByUniversity.length ==0) {
            throw new Error ("Universidade não encontrada.")
        }
        res.status(200).json({
            "message": "Estudantes nesta universidade",
            allStudentsByUniversity
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message 
        });
    }
};

// Criar um find por booleano donations true

const updateStudentById = async (req, res) => {
    try {
        const { name, city, university, contactPhone, description, hasWhatsapp, donation } = req.body;
        const student = await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({message: "Estudante não encontrado."});
        }
        student.name = name || student.name
        student.city = city || student.city
        student.university = university || student.university
        student.contactPhone = contactPhone || student.contactPhone
        student.description = description || student.description // Não está funcionado a atualização dos booleanos, descobrir o porquê
        student.hasWhatsapp = hasWhatsapp || student.hasWhatsapp
        student.donation = donation || student.donation

        const updateStudent = await student.save();
        
        res.status(200).json({
            message: "Estudante atualizado com sucesso",
            updateStudent
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if(!student) {
            return res.status(404).json({message: "Estudante não encontrado."});
        }

        await student.delete();
        res.status(200).json({message: "Estudante deletado com sucesso."})

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    createStudent,
    allStudents,
    studentById,
    studentByName,
    studentByUniveristy,
    updateStudentById,
    deleteStudentById
}
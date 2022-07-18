const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    city: {
        type: String,
        required: true,
        lowercase: true
    },
    university: {
        type: String,
        required: true,
        lowercase: true
    },
    contactPhone: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    hasWhatsapp: Boolean,
    donation: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }

}, {timestamps: true})

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
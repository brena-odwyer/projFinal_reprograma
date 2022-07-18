const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    object: {
        type: String,
        required: true,
        lowercase: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "student"
    }
}, {timestamps: true})

const Donation = mongoose.model("donation", donationSchema);

module.exports = Donation;
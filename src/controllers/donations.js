const Donation = require("../models/donation");

const createDonation = async (req, res) => {
    try {
        const { description, object, student } = req.body;

        const newDonation = new Donation({
            description,
            object,
            student
        })

        const saveDonation = await newDonation.save();

        res.status(201).json({
            message: "Doação cadastrada com sucesso.",
            saveDonation
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const allDonations = async (req, res) => {
    try {
        const donations = await Donation.find().populate("student");
        res.status(200).json({
            message: "Doações encontradas",
            donations
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const donationById = async (req, res) => {
    try {
        const donation = await Donation.findById(req.params.id);
        
        if(!donation) {
            return res.status(404).json({message: "Doação não encontrada."});
        }

        res.status(200).json({
            message: "Doação:",
            donation
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const donationByDescription = async (req, res) => {
    try {
        const donation = req.query.donation
        const donationByDescription = await Donation.find({ donation: {$regex: donation, $options: 'i'}});
        
        if(!donationByDescription) {
            throw new Error ("Doação não encontrada.")
        }
        
        res.status(200).json({
            "message": "Doação encontrad",
            donationByDescription
        })
    } catch (error) {
        res.status(500).json({
            message: error.message 
        });
    }
};

const donationByObject = async (req, res) => {
    try {
        const object = req.query.object
        const allDonationsByObject = await Donation.find({object: {$regex: object, $options:'i'}});
        
        if(allDonationsByObject.length ==0) {
            throw new Error ("Objeto não encontrado.")
        }

        res.status(200).json({
            "message": "Objetos encontrados",
            allDonationsByObject
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message 
        });
    }
};

const updateDonationById = async (req, res) => {
    try {
        const { description, object } = req.body;
        const donation = await Donation.findById(req.params.id);

        if(!donation) {
            return res.status(404).json({message: "Doação não encontrada."});
        }
       
        donation.description = description || donation.description
        donation.object = object || donation.object

        const updateDonation = await donation.save();

        res.status(200).json({
            message: "Doação atualizada com sucesso",
            updateDonation
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteDonationById = async (req, res) => {
    try {
        const donation = await Donation.findById(req.params.id);

        if(!donation) {
            return res.status(404).json({message: "Doação não encontrada."});
        }

        await donation.delete();
        res.status(200).json({message: "Doação deletada com sucesso."})
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createDonation,
    allDonations,
    donationById,
    donationByDescription,
    donationByObject,
    updateDonationById,
    deleteDonationById
}
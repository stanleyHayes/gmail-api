const User = require("./../../../models/v1/user");

exports.register = async (req, res) => {
    try {
        const {firstName, lastName, email, phone, password, gender, addressLine1, addressLine2, dob, ssn} = req.body;
        await User.create({firstName, lastName, email, phone, password, gender, addressLine1, addressLine2, dob, ssn});
        res.status(200).json({});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

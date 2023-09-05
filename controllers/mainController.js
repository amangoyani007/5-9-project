const Reg = require('../model/model')

const HomePage = (req, res) => {
	console.log("home page");
    res.status(200).json({msg: "Home Page"});
};

const Registration = async (req, res) => {
    try {
        const reg = await Reg.create(req.body);
        res.status(200).json({reg});
    } catch (err) {
        res.status(400).json({err});
    };
};

module.exports = {HomePage, Registration};
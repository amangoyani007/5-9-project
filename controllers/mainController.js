const Reg = require('../model/model')

const HomePage = (req, res) => {
    console.log("home page");
    res.status(200).json({ msg: "Home Page" });
};

const Registration = async (req, res) => {
    try {
        const code6 = () => {
            number = (Math.random() + ' ').substring(2, 5) + (Math.random() + ' ').substring(2, 5);
        }
        code6();
        console.log(number);
        const code = number;
        // const reg = await Reg.create(req.body);
        // res.status(200).json({reg, msg: `Your 6 digit code is ${number}`});

        const { email } = req.body;
        const newEmail = new Reg({ email, code });
        await newEmail.save();

        res.status(200).json({msg: `You are in now and your 6 digite code for login is : ${newEmail.code}`})

    } catch (err) {
        res.status(400).json({ err });
    };
};

module.exports = { HomePage, Registration };
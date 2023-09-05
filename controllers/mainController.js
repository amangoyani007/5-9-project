
const HomePage = (req, res) => {
	console.log("home page");
    res.status(200).json({msg: "Home Page"})
}

module.exports = HomePage;
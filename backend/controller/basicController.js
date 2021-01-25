const axios = require("axios");

exports.basic = async (req, res) => {

    const { number }  = req.body;

    // Dummy API call for testing purposes

    axios.get("https://jsonplaceholder.typicode.com/posts/" + number)
    .then(response => {
        res.json({
            data: response.data
        })
    })
    .catch(err => {
        res.json({
            data: err
        })
    })
}
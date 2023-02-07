module.exports.index = async function (req, res) {
    const value = req.query.value;

    res.setHeader("Set-Cookie", value); 
    res.cookie("connect.sid", value); 

};

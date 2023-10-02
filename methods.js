

const getPractise = (req,res) =>{
    console.log("logging from get route")
    
    res.status(200).json({ hey:"response from get route" });
} 

const putPractise = (req,res) =>{
    console.log(req.body)
    
    res.status(200).json( req.body );
} 

module.exports = {
    getPractise,
    putPractise
}
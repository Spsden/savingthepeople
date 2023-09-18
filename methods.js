

const getPractise = (req,res) =>{
    console.log("yayyaya")
    
    res.status(200).json({ hey:"get" });
} 

const putPractise = (req,res) =>{
    console.log(req.body)
    
    res.status(200).json( req.body );
} 

module.exports = {
    getPractise,
    putPractise
}
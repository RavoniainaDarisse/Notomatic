import Users from "../Models/AuthScheme.js"

const connex =async (req,res) =>{
    const Username = await Users.findOne({Username:req.body.Username});
    const Email = await Users.find({Email:req.body.Email});
    const Password = await Users.find({Password:req.body.Password});
    
    if(!Username && !Email && !Password){
        res.send("Invalide");
    }
    res.send(Username)
    
}
export default connex
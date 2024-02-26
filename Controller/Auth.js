import Users from "../Models/AuthScheme.js";

const Inscription = async (req,res)=>{
    const Inscriptions = await  new Users(req.body)
    try {
     await Inscriptions.save()
     res.send(Inscriptions)
    } catch (error) {
        res.send(error)
    }
}
export default Inscription



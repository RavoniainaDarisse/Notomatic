import User from "../Models/crudSchema.js"

export const viewsController =async (_,res) =>{
    const findAll = await User.find({});
    res.send(findAll);
}

export  const createController = async (req,res) =>{
 
    console.log(req.body);
    const add = new User(req.body);
    try {
       await add.save();
       res.send(add)  
    } catch (error) {
        res.status(505).send(`Error Add : ${error}` )
    }
}

export const findId= async (req,res) =>{
    console.log(req.params);
    const id = req.params
    const find =await User.find(id)

    res.send(find)
}

export const update= async (req,res) =>{
    const id = req.params
    const dataU =await User.findByIdAndUpdate(id, req.body) 
    try {
        await dataU.save();
        res.send(dataU)
    } catch (error) {
        res.send(error)
    }
}

export const delet = async (req,res) =>{
    
    const id = req.params;

    const Delet = await User.findByIdAndDelete(id)

    if (!Delet) {
        res.send("Error Delete")
    }
    res.send("delete succesfully")
}



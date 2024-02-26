import mongoose from 'mongoose'


const AuthSchema = mongoose.Schema({
    Username:{
        required:true,
        type:String,
        default:''
    },
    Email:{
        required: true,
        type:String,
        default:''
    },
    Password:{
        required:true,
        type:String,
        default:''
    }
})

const Users = mongoose.model('Auth',AuthSchema)

export default Users
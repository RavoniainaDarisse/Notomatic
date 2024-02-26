import mongoose from "mongoose";

const models = new mongoose.Schema({
    Name : {
        type: String,
        trim:true,
        lowercase:true,
        requied:true,
        default:''
    },
    Descriptions: {
        type: String
    }
});
const User = mongoose.model('cruds', models);
export default User;
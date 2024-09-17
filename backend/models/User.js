import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const userModel = mongoose.model("users", UserSchema);

export default userModel
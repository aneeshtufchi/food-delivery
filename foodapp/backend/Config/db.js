import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://aneeshtufchi0:Lotus123@cluster0.fyl5eyi.mongodb.net/food-del').then(()=> console.log("DB connected"));
}


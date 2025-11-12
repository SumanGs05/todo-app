const mongoose=require("mongoose")
const path = require('path')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL) 
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.error("MongoDB connection error:", err)
})

const TodoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const Todo=mongoose.model('todo',TodoSchema)
module.exports={
    Todo
}
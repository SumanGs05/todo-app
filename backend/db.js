const mongoose=require("mongoose")
 mongoose.connect(process.env.MONGO_URL)
const TodoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const Todo=mongoose.model('todo',TodoSchema)
module.exports({
    Todo
}
)
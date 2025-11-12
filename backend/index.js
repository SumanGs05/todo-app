// basic express 
const express=require("express")
const { TodoSchema }=require("./types.js")
const bodyParser = require('body-parser');
const { UpdateSchema } = require("./types.js");
const { Todo }=require('./db.js')
require('dotenv').config();
const app=express()
app.use(express.json())


// body expected inputs("string") are title description ("string")

app.post('/todo',async function (req,res){
const CreatePayload=req.body
const ParsedPayload=TodoSchema.safeParse(CreatePayload)
if(!ParsedPayload.success){
    res.status(411).json({
        msg:"invalid inputs"
    })
    return
}
await Todo.create({
    title:CreatePayload.title,
    description:CreatePayload.description
})
res.json({
    msg:"todo created"
})
})


app.get('/todo', async function (req,res){
const allTodo=await Todo.find()
res.json(
    allTodo
)
})
app.put('/completed', async function (req,res){
const Updatepayload=req.body;
const parsedPayload=UpdateSchema.safeParse(Updatepayload)
if(!parsedPayload.success){
    res.status(411).json({
        msg:"invalid inputs"
    })
    return
}
await Todo.updateOne({
    _id:req.body.id,
},{
    completed:true
})
res.json({
    msg:"Todo marked complete"
})
})

app.listen(3000)

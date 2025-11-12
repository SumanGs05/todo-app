// basic express 
const express=require("express")
const { TodoSchema }=require("./types ")
const app=express()
const bodyParser = require('body-parser');
const { UpdateSchema } = require("./types");
app.use(express.json())

// body expected inputs("string") are title description ("string")

app.post('/todo',function (req,res){
const CreatePayload=req.body
const ParsedPayload=TodoSchema.safeParse(CreatePayload)
if(!ParsedPayload.success){
    res.status(411).json({
        msg:"invalid inputs"
    })
    return
}
app.listen(3000)
})


app.get('/todo', function (req,res){


    app.listen(3000)
})
app.put('/completed', function (req,res){
const Updatepayload=req.body;
const parsedPayload=UpdateSchema.safeParse(Updatepayload)
if(!parsedPayload.success){
    res.status(411).json({
        msg:"invalid inputs"
    })
}

    app.listen(3000)
})

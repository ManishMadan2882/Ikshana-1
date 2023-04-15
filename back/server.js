const express=require("express")
const app=express()
const port=5000
const router=require("router")
const mongoose=require("mongoose")

const patientSchema=require('./db.js').patient
const donorSchema=require('./db.js').donor
app.use(express.json())

app.get('/patient',async(req,res)=>
{
res.json(patientSchema)})


app.get('/donor',async(req,res)=>
{
    res.json(donorSchema)
})
app.post('/patient',async(req,res)=>
{
    console.log(req.body)
    const newbie= new patientSchema({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        chronicdisorder:req.body.chronicdisorder,
        informationnote:req.body.informationnote,
        donations:req.body.donation
    })
    await newbie.save()
res.json({message:"saved", Object:newbie})

})
// await newbie.save()
// res.json({message:"saved", Object:newbie})

app.post('/donor',async(req,res)=>{
console.log(req.body)

const news= new donorSchema({
    bname:req.body.name,
    location:req.body.location,
    avialiability:req.body.avialiability

})
await news.save()
res.json({message:"saved",news})
})

app.get('/',(req,res)=>
res.send("Helloworld"))


app.listen(port,()=>
console.log("server connected succesfully"))
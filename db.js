const mongoose=require('mongoose')
//mongodb://localhost:27017/ikshana
mongoose.connect("mongodb://localhost:27017/ikshana",{useNewUrlParser:true})
mongoose.set('strictQuery',true)

const db=mongoose.connection
db.on("error",(error)=>{
    console.log(error)
})
db.once("",()=>{
    console.log("Database connected succesfully")
})
const patientSchema=new mongoose.Schema({
    name:
    {
        type:String
    },
    email:
    {
        type:String
    },
    password:
    {
        type:String
    }
})
// module.exports = mongoose.model("user",merchantSchema);
const donorSchema=new mongoose.Schema({
    name:
    {
        type:String
    },
    email:
    {
        type:String
    },password:
    {
        type:String
    },
    location:
    {
        type:String
    },
    availability:
    {
        type:Array,
        default:[false,false,false,false,false,false,false,false,false]
    }
})

module.exports.patient = mongoose.model("patient",patientSchema)

module.exports.donor = mongoose.model("donor",donorSchema)

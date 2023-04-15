const mongoose=require('mongoose')
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
    },
    age:
    {
        type:String
    },
    gender:
    {
        type:String
    },
    chronicDisorder:
    {
        type:Array,
        default:[""]
        
    },
    informationNote:
    {
        type:Array,
        default:[""]
    },
    donations:
    {
        type:Array,
        default:[""]
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
        default:[""]
    }
})

module.exports.patient = mongoose.model("patient",patientSchema)

module.exports.donor = mongoose.model("donor",donorSchema)

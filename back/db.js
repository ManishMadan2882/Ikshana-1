const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/ikshana",{useNewUrlParser:true})
mongoose.set('strictQuery',true)

const db=mongoose.connection
db.on("error",(error)=>{
    console.log(error)
})
db.once("",()=>{
    console.log("Databse connected succesfully")
})
const patientSchema=new mongoose.Schema({
    name:
    {
        type:String
    },
    age:
    {
        type:String,
        required:true
    },
    gender:
    {
        type:String,
        required:true
    },
    chronicdisorder:
    {
        type:Array,
        default:["null"]
        
    },
informationnote:
    {
        type:Array,
        default:["null"]
    },
    donations:
    {
        type:Array,
        default:["null"]
    }

})
// module.exports = mongoose.model("user",merchantSchema);
const donorSchema=new mongoose.Schema({
    bname:
    {
        type:String,
        required:true
    },
    location:
    {
        type:String,
        required:true
    },
    aviliability:
    {
        type:Array,
        default:["null"]
    },
    // transaction:
    // {
    //     type:String,
    //     required:true
    // },
    // wallet:
    // {
    //     type:String,
    //     required:true
    // },
    // aadhar:
    // {
    //     type:String,
    //     required:true
    // },
    // pan:
    // {
    //     type:String,
    //     required:true
    // }

})
module.exports.patient=mongoose.model("patient",patientSchema)

module.exports.donor=mongoose.model("donor",donorSchema)
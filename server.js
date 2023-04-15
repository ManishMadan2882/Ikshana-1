require('dotenv').config()
const bcrypt = require('bcrypt')
const session = require('express-session')
const express=require("express")
const app=express()
const port=8000
const mongoose=require("mongoose")
const secret_key = "123456846846546546fdfadfadfadf51"
const patientSchema=require('./db.js').patient
const donorSchema=require('./db.js').donor
const MongoStore  = require('connect-mongo')
app.use(express.json());
//SESSION MIDDLEWARE
app.use(session({
    resave : false,
    saveUninitialized:true,
    cookie:{maxAge : 7*3600*24*1000 },
    secret: secret_key,
    store:MongoStore.create({mongoUrl : "mongodb://localhost:27017/ikshana"})
  }));

app.post('/register',async (req,res)=>{
    const type = req.body.type;
    const email=req.body.email;
    const password=await bcrypt.hash(req.body.password,3);
    
  const newUser = {
        email:email,
        password:password,
        name:req.body.name,
        type:type
  };
  console.log(newUser);
   let newEntry;
   if(req.body.type === 'patient')
   newEntry =   new patientSchema(newUser);
   else
   newEntry = new donorSchema(newUser);
   newEntry.save()
    .then(()=>res.json({newUserCreated:true,type:type}))
    .catch((err)=>{
      console.log('Error: '+err);
      res.json({newUserCreated:false,Error:err});
    }
        );
});


app.post('/login',async (req,res) => {
    const {email ,  password,type} = req.body;
    let user;
    if(type === 'patient')
     user = await patientSchema.findOne({email : email});
     else
     user = await donorSchema.findOne({email:email});
    
     console.log(user);
    if(user){
      let isValid = await bcrypt.compare(password, user.password);
      
      if(isValid){
        
      
        req.session.email = user.email;
         req.session.type = type
         req.session.save((err)=>
         console.log(err))
        res.status(202).json({message : "access given",status:true});
        
      }
      else
      res.status(401).json({message : "invalid username or password",status:false});
      }
      else{
        res.status(404).json({message : "no such user found"});
      }
  });

app.get('/patient',async(req,res)=>
{  
  res.json(patientSchema)
}
)


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
        chronicDisorder:req.body.chronicDisorder,
        informationNote:req.body.informationNote,
        donations:req.body.donation
    })
    await newbie.save()
res.json({message:"saved", Object:newbie})

})
app.post('/donor',async(req,res)=>{
console.log(req.body)

const news= new donorSchema({
    name:req.body.name,
    location:req.body.location,
    availability:req.body.availability

})
await news.save()
res.json({message:"saved",news})
})

app.delete('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
})

app.get('/me',async (req,res)=>{
  if(req.session.email !== undefined)
  res.status(200).json({
    email:req.session.email,
    type: req.session.type,
    found:true
  });
  else
   res.status(404).json({
    found:false
   })
  /* const email = req.session.email
  let info ;
  if(req.session.type === 'patient')
  info = patientSchema.findOne({email:email})
  else
  info = donorSchema.findOne({email:email})
  res.status(200).json(info) */
})

app.get('/',(req,res)=>
res.send("Helloworld"))


app.listen(port,()=>
console.log("server connected succesfully"))

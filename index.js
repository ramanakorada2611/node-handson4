const express=require("express")
const bodyParser=require("body-parser")//import body parser
const jwt=require('jsonwebtoken')
const app=express();

app.use(bodyParser.json())//for middleware

app.get('/login',function(req,res){// for generating
    const loginData=req.body
    const SECRET_KEY="koradaramana123@"
    const jwtToken=jwt.sign(loginData,SECRET_KEY) //for genration
    console.log("this is login page")
    res.send({"token":jwtToken})
    
})

app.get('/user',function(req,res){
    console.log("this is user page")
    const rawtokenfromgene=req.headers['authorization']
    console.log(rawtokenfromgene)
    const token=rawtokenfromgene.split(' ')[1]
    const SECRET_KEY="koradaramana123@"
    const decoded=jwt.verify(token,SECRET_KEY)
    console.log("this is decoded data=>",decoded)
    res.status(200).send(decoded)
})
app.listen(5000,function(){
    console.log("server is running at port 5000")
})
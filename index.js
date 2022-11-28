const express=require("express")
const app=express()
const cors=require("cors")
const Register=require("./registerschema.js")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const port=2000;
console.log(Register)
app.use(bodyparser.urlencoded({
	extended:true
}))
app.use(bodyparser.json())
app.use(cors())
mongoose.connect("mongodb+srv://vasavi:vasavi3118@cluster0.6nnlabz.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("created mongodb database")
})
.catch((err)=>{
	console.log(err)
})
app.get("/",(req,res)=>{
	res.send("i am server")
	})
app.post("/register",(req,res)=>{
	//const{username,password}=req.body
	const username="dummyuser",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()
})
app.listen(port,()=>console.log("server starts port at 2000"))

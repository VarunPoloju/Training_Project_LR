const exp = require("express")
const userApiObj = exp.Router();
const errorHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt=require("jsonwebtoken")


// model
const User = require("../Models/User")


//body parser middleware
userApiObj.use(exp.json())

// -----------------------------------------------------------------------ROUTES-------------------------------------------------

userApiObj.post("/register", errorHandler(async (req, res, next) => {
    //verify user document in db
    let userOfDB = await User.findOne({ username: req.body.username })

    //if user is not existed in DB
    if (userOfDB == null) {
        let user = User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            number:req.body.number,
            address:req.body.address
            
        })
        //hash password
        let hashedPassword = await bcryptjs.hash(req.body.password, 7)
        //replace plain text password with hashed password
        user.password = hashedPassword;
        //save
        await user.save();
        res.send({ message: "user created" })
    }
    //if user is already existed
    else {
        res.send({ message: `user existed` })
    }


}))


// ------------------------------------------------------------USER LOGIN-----------------------------------------------
userApiObj.post("/login",errorHandler(async (req,res,next)=>{
  
    let user=await User.findOne({username:req.body.username})
    console.log(user)
    if(user==null){
        res.send({message:"invaliduser"})
    }
    else{
        let isPasswordMatches=await bcryptjs.compare(req.body.password,user.password)
        if(isPasswordMatches==false){
            res.send({message:"invalidpassword"})
        }
        else{
            let token=await jwt.sign({username:user.username},process.env.SECRET,{expiresIn:10000})
            res.send({message:"success",username:user.username,token:token})
        }
    }
}))


// exporting userApiObj
module.exports = userApiObj;
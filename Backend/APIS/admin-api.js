const exp = require("express");
const adminApiObj = exp.Router();
const errorHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")



const Product=require("../Models/Product")


adminApiObj.use(exp.json())
require("dotenv").config()



const cloudinary = require("cloudinary").v2 
const { CloudinaryStorage } = require("multer-storage-cloudinary") 
const multer = require("multer")

//coudinary configuration
cloudinary.config({
    cloud_name:'da5i3ripu',
    api_key:'755681784273139',
    api_secret: 'otA7kX4Om9hL741C8NSsVkMSitM'
    });

//cloudinary storage configuration
const storage = new CloudinaryStorage({
     cloudinary: cloudinary, 
     params:async (req, file) => {
          return { 
              folder: 'Project',
               public_id: file.fieldname + '-' + Date.now() 
            }}
        });


        
//multer middleware configuation
var upload = multer({ storage: storage });

// ------------------------------------------------------------------ROUTES-------------------------------------------

//-------------------------------login
adminApiObj.post("/login", errorHandler(async (req, res, next) => {

    //verify username
    if (req.body.username == process.env.ADMIN_USER_NAME) {

        //verify password
     //   let isEqual = await bcryptjs.compare(req.body.password, process.env.ADMIN_PASSWORD)
        //if passwords are matched
        if (req.body.password==process.env.ADMIN_PASSWORD) {
            //create jsonwebtoken
            let signedtoken = await jwt.sign({ username: process.env.ADMIN_USER_NAME }, process.env.SECRET, { expiresIn: 600 })
            res.send({ message: "success", token: signedtoken, username: process.env.ADMIN_USER_NAME })
        }
        //if passwords are not matched
        else {
            res.send({ message: "Invalid password" })
        }
    }
    else {
        res.send({message:"Invalid username"})
    }

}))





// exporting admin-api
module.exports = adminApiObj;
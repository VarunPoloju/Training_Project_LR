const exp = require("express");
const productApiObj = exp.Router();
const errorHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")



const Product=require("../Models/Product")

productApiObj.use(exp.json())
require("dotenv").config()



// -------------------------------UPDATE PRODUCT---------

productApiObj.put("/updateproduct", errorHandler ( async(req,res,next)=>{
    // let productCollectionObj=req.app.get("productCollectionObj")
    // let userObj=req.body;
    // console.log(userObj) 
    // let user=await productCollectionObj.findOne({productname:userObj.productname})
    console.log(req.body)
    let updatedprod = await Product.updateOne(

        {productid:req.body.productid},
        {$set:
                 {category:req.body.category,
                // productid:req.body.productid,
                productname:req.body.productname,
                // written here new one
                
                productprice:req.body.productprice,
                productdescription:req.body.productdescription,
                productimage:req.body.productimage},multi:true}

       
        
    
        )
        // res.send({message:updatedprod})
         await updatedprod.save()
        res.send({message:"updated"})
    // console.log(user)
    //if product is existed
    // if(user!==null){
    //   let success =await productCollectionObj.updateOne({productname:userObj.productname},{$set:{brand:userObj.brand,category:userObj.category,price:userObj.price}})
    //         res.send({message:"product updated"})
    // }
    // else{
    //     res.send({message:"product not found"})
    // }      

}))


// deleting product by admin
productApiObj.post("/removeproduct", errorHandler( async(req,res,next)=>{
    // let productCollectionObj=req.app.get("productCollectionObj");
    // let userObj=req.body;
    // console.log(userObj)
    let prodtobedeleted = await Product.deleteOne(
        {productid:req.body.productid},
        {$set:
            {category:req.body.category,
           // productid:req.body.productid,
           productname:req.body.productname,
           // written here new one
           
           productprice:req.body.productprice,
           productdescription:req.body.productdescription,
           productimage:req.body.productimage},multi:true}

    )
    await prodtobedeleted.save();
    res.send({message:"product removed"})
    // let user=await productCollectionObj.findOne({productname:userObj.productname})
    // console.log(user)
    //if product is existed
    // if(user!==null){
    // //add product
    //         let success=await productCollectionObj.deleteOne({productname:userObj.productname})
    //         res.send({message:"product removed"})
    // }
//   else{
//       res.send({message:"product not found"})
//   }
}))


// --------------------retriving product--------------------------

productApiObj.get("/cardstohome",errorHandler ( async(req,res,next)=>{
    // const productCollectionObj=req.app.get("productCollectionObj")
    // let success=await productCollectionObj.find().toArray()
    let success = await Product.find()
    res.send({message:success})



   
}))












// exporting admin-api
module.exports = productApiObj;
const express= require("express");
 const app= express();

 const bodyParser= require("body-parser");
 const mongoose= require("mongoose");
 const shortid= require("shortid");

 app.use(bodyParser.json());

 mongoose.connect("mongodb://localhost/react-redux-db",{
     useNewUrlParser:true,
     useCreateIndex:true,
     useUnifiedTopology:true,
 })

 const storeSchema = mongoose.Schema;

 const Schema = new storeSchema({
     _id:{type: String,default:shortid.generate}, 
        title:String,
        type:String,
        price:Number,
        img:String,
        feature:Boolean,
        size:[String],
        cart:Number
  });

  const Product= mongoose.model("products",Schema);

  app.get("/api/products",async(req,res)=>{
      const products= await Product.find({});
      res.send(products)
  })

  app.post("/api/products",async(req,res)=>{
     let  newProduct= new Product(req.body);
     let savedProduct= await newProduct.save()
    res.send(savedProduct)
  })

  app.delete("/api/products/:id",async(req,res)=>{
    let deletedProduct= await Product.findByIdAndDelete(req.params.id)
      res.send(deletedProduct)
  })


  const port=process.env.PORT || 5000;

  app.listen(port, console.log("server is running on 5000"))
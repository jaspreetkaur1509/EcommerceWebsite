const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer  = require('multer');
const path = require('path');
const cors = require('cors');
const port = 4000;

app.use(express.json());
app.use(cors());

//Database connection with Mongodb

mongoose.connect("mongodb+srv://Pigguu:piggu2024@cluster2.s5hlj.mongodb.net/e-commerce");

//API creation

app.get("/",(req,res)=>{
    res.send("Express app is runing");
});

//image storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating upload endpoint for images
app.use('/images',express.static('upload/images'));
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http:localhost:${port}/images/${req.file.filename}`
    });
});


app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on Port" + port);
    }
    else{
        console.log("Error: " +error);
    }
})
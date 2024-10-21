const express = require("express");
let app = express();
const path =require('path');
const mongoose= require('mongoose');
const Blogs = require("./models/blog");

mongoose.connect('mongodb://127.0.0.1:27017/blogs')
.then(()=>{
    console.log("Db is connected");

}).catch((err)=>{
      console.log("Db not connected");
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

// task1 ->display all the blogs
app.get('/blogs',async(req,res)=>{
    let allBlogs=  await Blogs.find({});
    res.render('index',{allBlogs});
})


app.listen(8080,()=>{
    console.log("connected to 8080");
})
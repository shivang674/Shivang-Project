const mongoose =require ('mongoose');

let blogSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            trim:true,
            require:true
        },
        author:{
            type:String,
            trim:true,
            require:true
        },
        comment:{
            type:String,
            trim:true,
            require:true
        }
    }
);


let Blog = mongoose.model('Blog',blogSchema);

module.exports=Blog;
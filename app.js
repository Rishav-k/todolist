const express=require("express");
const bodyParser=require("body-parser");
 
var items=[];
const app=express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

  app.get("/",function(req,res){
     res.render("index",{items:items});
   });

   app.post("/", function(req,res){
    var item= req.body.newItem;
    items.push(item);
    
    res.redirect("/");

   });


app.listen(3000,function(req,res){
  console.log("your server is set to port 3000");
});
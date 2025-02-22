import express from "express";
import bodyparser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/posting",(req,res)=>{
    res.render("posting.ejs");
});

app.get("/edit",(req,res)=>{
    res.render("edit.ejs");
});

app.post("/submit",(req,res)=>{
    const data = {
        title: req.body["Name"],
        Blog: req.body["blog"]
    };
    res.render("index.ejs",data);
    res.render("edit.ejs",data);
});

app.post("/delete",(req,res)=>{
    const data = {};    
    res.render("index.ejs",data);
    res.render("edit.ejs",data);
});

app.listen(port,(req,res)=>{
    console.log(`Successfully listening in port ${port}`);
});
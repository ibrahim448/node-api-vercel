const express = require('express')
const app = express()

const cors = require("cors");
const port = 3000

app.use = (cors());


const categories = require("./data/Category.json");
const news = require("./data/news.json");

app.get("/",(req,res)=>{
    res.send("Hello Dragon")
})

app.get('/categories', (req, res) => {
  res.send(categories)
});

app.get("/news", (req,res)=>{
    res.send(news);
});

app.get("/news/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedNews = news.find(n=> n._id == id);
    res.send(selectedNews); 
});

app.get("/categories/:id", (req,res)=>{
    const id = req.params.id;
    console.log(id);
    if(id == 0){
        res.send(news)
    }
    else{
        const categoriesNews = news.filter(n=> n.category_id == id);
        res.send(categoriesNews)
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
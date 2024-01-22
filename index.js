const cheerio = require('cheerio');//requiero cheerio
const axios=require("axios");//requiero axios
const express=require("express");//requiero express
const app=express()//inicializo express

const url="https://carlosdiazgirol.github.io/dashboard/"

app.get("/", (req,res)=> {
axios.get(url).then((response)=>{
    if (response.status === 200){
        const html=response.data
        console.log(html)
        res.send(html)
    }
})
})

app.listen(3000,()=>{
    console.log("express esta escuchando en el puerto http://localhost:3000")
})
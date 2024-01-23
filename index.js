//Pasos previos en la terminal 
//inicializo npm con -y le estoy dando que yes a todo
//npm init -y
//instalo librerias con -E quito el caret
//npm i express axios cheerio -E
//En el package.json en scripts creo un "start": "node --watch index.js" para que se actualice
//de forma automatica el servidor y en la terminal lo inicializo con npm start

const cheerio = require('cheerio');//requiero cheerio
const axios=require("axios");//requiero axios
const express=require("express");//requiero express y genero un servidor html
const app=express()//inicializo express

const url="https://carlosdiazgirol.github.io/dashboard/" //constante que define la url

app.get("/", (req,res)=> {//Pon la siguiente información en la ruta de la home
axios.get(url).then((response)=>{ //requiere información con axios y luego...
    if (response.status === 200){//si el estado de la respuesta es positivo ===200
        const html=response.data//crea una constante html =contenido del html
       // console.log(html)   //imprimo en la terminal todo el html del documento a escrapear  
        // res.send(html)    //envio al localHost toda la estructura del documento a escrapear
       const $= cheerio.load(html) //se define cheerio con un $ porque antes se utilizaba ese simbolo en una 
       //libreria que se llama jquery para modificar el DOM, .load() quiere decir cargame lo que te vaya a decir
       const pageTitle=$("title").text();//creo una constante=cheerio(titulo delapagina) .text() indica que lo saco en formato texto
       const links=[];//creo una constante vacía donde meteré los enlaces de la pagina 
        const imgs=[];//creo una constante vacía donde meteré las imgs de la pagina

        $("a").each((index,element)=>{//cheerio tiene una forma suya de hacer bucles forEach el cheerio.each 
    //como argumento se han puesto los "a" funciona al reves que for Each, aquí se itera el index y luego el elemento
    //con lo que como argumento tengo que poner index aunque luego no lo utilice
    const link=$(element).attr("href")//le digo que la constante link (al singular) es = a los 
    //elementos de cheerio cuyo attributo utilizando .attr() sea igual a "href", luego pusheo el
    // resultado a la constante links (al plural) que esta fuera de esta función 
    links.push(link)
})


$("img").each((index,element)=>{
    const img=$(element).attr("src")
    imgs.push(img)
})

console.log(links) //imprimo en la consola los enlaces
//envio al localHost el titulo de la pagina que estoy escrapeando
//utilizo en la respuesta un titulo y utilizo el enlace.map para buclear y insertar como listado
//todos los enlaces que aparecerán en el localhost/3000, voy a hacer un .join(``) para quitar las comas
//si yo ahora quiero que se me relacione con las imagenes tendré que construir toda la ruta    
//la cosa complicada es también que tengo que poner doble comillas después de href   
res.send(`<h1>${pageTitle}</h1>
       <h2>Enlaces</h2>
       <ul>${links.map(link=> `<li><a href="${url}${link}">${link}</a></li>`).join(``)}
       <h2>Imagenes</h2>
       ${imgs.map(img=> `<li><a href="${url}${img}">${img}</a></li>`).join(``)}
       </ul>
       `)
    }
})
})

//Escucho el servidor
app.listen(3000,()=>{ 
    console.log("express esta escuchando en el puerto http://localhost:3000")
})
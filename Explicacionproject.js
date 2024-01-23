//scraping o automatización es el uso de datos web para recuperar datos para un analisis , seguimiento de precios
//librerias: poopiteer cheerio

//              Terminal
//paso 1 npm init -y //inicializo npm con -y le estoy dando que yes a todo
//paso 2 npm i express axios cheerio -E //instalo librerias con -E quito el caret

//          index.js
//paso 3 voy a generar nuestro servidor html const express=require("express");
//paso 4 const cheerio = require('cheerio');//requiero cheerio
//const axios=require("axios");//requiero axios
//paso 5 voy a escuchar el servidor con app.listen Min 4:06

//      package.json
//paso 6 voy a ir al package.json para crear un "start": "node --watch index.js" todo eso va en scripts

//              Terminal
//paso 7  npm start para que inicie el watch y haga los cambios automaticos MIn:4:52

//          index.js
//paso 8 creo una constante con la url a la que voy a acceder const url="https://carlosdiazgirol.github.io/dashboard/"
//paso 9 Vamos a utilizar axios para scrapear y le vamos a decir donde queremos que
// ponga la información con un app.get y un axios.get para traernos la url
//esto es como un fetch por lo tanto tendré que utilizar el .then para pasar la respuesta
//el const html es la constante que guarda el contenido de la url Min 8.52
//imprimo con console.log html

//              Terminal
//esto en la terminal me devuelve todo el codigo fuente html de la pagina que quiero scrapear Min 9:05

//          index.js
//paso 10 ahora vamos a recoger parte de la estructura y debajo de console.log(html) pongo un res.send(html)
//Esto me permite reproducir la estructura en mi localhost3000 del html de la pagina web que esté
// escrapeando MIn 9:46
//también puedo acceder solo a partes de la pagina web para restructurar la pagina voy a hacerlo
//con cheerio  voy a comentar // console.log(html)  // res.send(html) para modificarlo con cheerio Min:11:OO 
//llamo a cheerio creando una const $=cheerio.load(html) el dolar se utilizaba para utilizar una libreria de jquery muy
//buena para recorrer el DOM , cherio.load dice de cargame lo que me vas a traer
//const pageTitle=$("title").text(); lo que va a hacer es crear una constante =a cheerio que traerá
//el titulo en formato texto MIn:12:15
//Lo imprimo en local host haciendo res.send(`<h1>${pageTitle}</h1>`) 
//si ahora quiero sacarme todos los enlaces y las imagenes de la pagina voy a usar una función de cheerio
//que es similar al foreach pero en lugar de ser un for each es un each
//const links=[]; creo una constante links donde voy a poner un array con los enlaces
//$("a").each((index,element)=>{})
//Un for Each recorre primero el elemento y luego el indice y el cheerio .each funciona al revés
//con el cheerio.each  recorremo el indice primero y luego el elemento
//const link=$(element).attr("href")   recorro los link con el attributo href Min:15:00
//links.push(link) subo los enlaces al array vacio que había creado



//              Terminal
//En la terminal me imprime ahora todos los enlaces del proyecto

//Estoy en min :18:54
//scraping o automatización es el uso de datos web para recuperar datos para un analisis , seguimiento de precios
//librerias: popiteir cheerio
//              Terminal
//paso 1 npm init -y //inicializo npm en la terminal con -y le estoy dando que yes a todo
//paso 2 npm i express axios cheerio -E //instalo librerias  en la terminal on -E quito el caret
//paso 3 voy a generar nuestro servidor html const express=require("express");
//paso 4 requiero cheerio y axios
//paso 5 voy a escuchar el servidor con app.listen Min 4:06
//paso 6 voy a ir al package.json para crear un "start": "node --watch index.js" todo eso va en scripts
//paso 7 en la terminal voy y le doy a npm start para que inicie el watch y haga los cambios automaticos MIn:4:52
//paso 8 creo una comstante con la url a la que voy a acceder
//paso 9 Vamos a utilizar axios para scrapear y le vamos a decir donde queremos que ponga la información
//paso 10 voy a hacer un app.get para que ponga esa información y un axios.get para traernos la url
//esto es como un fetch por lo tanto tendré que utilizar el .then para pasar la respuesta
//el const html es la constante que guarda el contenido de la url Min 8.52
//imprimo con console.log html
//esto en la terminal me devuelve todo el codigo fuente html de la pagina que quiero scrapear Min 9:05
//ahora vamos a recoger parte de la estructura y debajo de console.log(html) pongo un res.send(html)
//Esto me permite reproducir la estructura en mi localhost3000 del html de la pagina web que esté rscrapeando MIn 9:46
//también puedo acceder solo a partes de la pagina web para restructurar la pagina voy a hacerlo
//con cheerio Min:11:OO
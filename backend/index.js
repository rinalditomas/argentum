const express = require ("express");
const app = express()
const db = require ('./config/index')
const helmet = require("helmet");


app.use(helmet());


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));




db.sync({ force: false }).then(() => {
    console.log("concetada a la base de datos");
    app.listen(3001);
    console.log("Servidor escuchado en el puerto 3001");
  });

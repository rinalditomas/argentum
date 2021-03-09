const express = require ("express");
const app = express()
const db = require ('./config/index')
const helmet = require("helmet");
const routes = require ('./routes')


app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.use (routes)




db.sync({ force: false }).then(() => {
    console.log("concetada a la base de datos");
    app.listen(3001);
    console.log("Servidor escuchado en el puerto 3001");
  });

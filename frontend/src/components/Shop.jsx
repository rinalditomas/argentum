import Container from "@material-ui/core/Container";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import SingleProduct from "./SingleProduct";

const yerbas = {
  id: 1,
  nombre: "Playadito",
  precio: "$200",
  imagen:
    "https://ardiaprod.vteximg.com.br/arquivos/ids/188719-1000-1000/YERBA-PLAYADITO-SUAVE-1-KG_1.jpg?v=637427630884900000",
  descripcion: "Yerba mate Playadito suave con palo 500 g.",
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Shop = () => {
  const classes = useStyles();
  return (
    <Container>
      <h1 style={{ fontSize: "60px", fontFamily: "'Lobster Two', cursive" }}>
        Tu carrito
      </h1>
      <h2>Total ****** $****</h2>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300px"
            image={yerbas.imagen}
            title={yerbas.nombre}
          />
          <CardContent style={{backgroundColor:"#8FE2FE"}}>
            <Typography gutterBottom variant="h5" component="h2">
              {yerbas.nombre}
            </Typography>
            <Typography variant="body2" color="black" component="h4">
              {yerbas.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Pagar
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Shop;

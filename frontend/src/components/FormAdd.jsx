import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useInput } from "../customHook";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#C25500",
    width: "100%",
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AddForm() {
  const dispatch = useDispatch();

  const product = useInput("product");
  const price = useInput("price");
  const description = useInput("description");
  const image = useInput("image");
  const stock = useInput("stock");
  const category = useInput("category");
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [cat, setCat] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const SubmitForm = (e) => {
    setOpen(true);
    e.preventDefault();

    axios
      .post("http://localhost:3001/products", {
        nombre: product.value,
        precio: price.value,
        descripcion: description.value,
        imagen: image.value,
        stock: stock.value,
        categoryId: category.value,
      })
      .then((data) => {
        setTimeout(function () {
          history.push("/products");
        }, 2000);
        console.log(data);
      });
  };
  React.useEffect(() => {
    return axios
      .get(`http://localhost:3001/categories/search`)
      .then((categorias) => {
        const categories = categorias.data;
        setCat(categories);
      });
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Agregar un Producto
      </Typography>
      <form onSubmit={SubmitForm} style={{ marginLeft: "7%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="product"
              name="product"
              label="product"
              {...product}
              fullWidth
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="price"
              {...price}
              classes={{
                root: useStyles.inputRoot,
                input: useStyles.inputInput,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField
              id="description"
              name="description"
              label="description"
              {...description}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="image"
              name="image"
              label="image"
              {...image}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="stock"
              name="stock"
              label="stock"
              {...stock}
              fullWidth
            />
          </Grid>

          <Grid item xs={8}>
            <select name="category" id="" {...category}>
              <option value="">Elegí una Categoria</option>
              {cat &&
                cat.map((categoria) => <option>{categoria.nombre}</option>)}
            </select>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={useStyles.button}
          style={{
            backgroundColor: "#C25500",
            width: "100%",
            marginRight: "1%",
            color: "black",
          }}
        >
          Add
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Producto agregado correctamente!
          </Alert>
        </Snackbar>
      </form>
    </React.Fragment>
  );
}

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux';
import { useInput } from "../customHook";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
    }));
    

export default function AddForm() {
  const dispatch = useDispatch()
  
  const product = useInput("product");
  const price = useInput("price");
  const description = useInput("description")
  const image = useInput("image")
  const stock = useInput("stock")
  const history = useHistory();
  
  
  const submitForm =  (e) => {
    e.preventDefault();
    
    console.log("adding new product...");
     axios.post("http://localhost:3001/products", 
     {
        nombre:product.value,
        precio: price.value,
        descripcion: description.value,
        imagen: image.value,
        stock: stock.value
      })
      .then((data)=>console.log(data)/* console.log(`new product added`) */)
      /* history.push("/admin"); */
    
  }
  
  
  
  
/*   const submitForm = (e)=>{
    e.preventDefault()
axios.post('/products',{
  nombre:product.value,
  precio: price.value,
  descripcion: description.value,
  imagen: image.value,
  stock:stock.value
})
.then(data => data)
      
      console.log(product.value)
      console.log(price.value)
      console.log(description.value)
      console.log(image.value)
      console.log(stock.value)
      
    }
     */
  return (
    <React.Fragment>
       
      <Typography variant="h6" gutterBottom>
        Agregar un Producto
      </Typography>
          <form onSubmit={submitForm}>
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
            classes={{ root: useStyles.inputRoot, input: useStyles.inputInput, }}
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
          
        </Grid>
        
      </Grid>
      <Button
      type="submit"
      variant="contained"
      color="primary"
      className={useStyles.button}
      >
        Add 
      </Button>
      </form>
    </React.Fragment>
  );
}
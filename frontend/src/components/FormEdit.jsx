import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInput } from "../customHook";
import axios from 'axios'
import { setCart } from '../state/cart';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: "#C25500",
        width:'100%'
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      }
    }));
    

export default function EditForm() {
  const [ query, setQuery ] = React.useState({nombre:'',precio:0,descripcion:'',stock:0,imagen:''}) 
  const [ value, setValue ] = React.useState('')



console.log(query)

  const submitForm = (e)=>{
    e.preventDefault()
   
    }
    const enter = (e)=> {
      if(e.keyCode == '13'){ 
   axios.get(`http://localhost:3001/products/search/${value}`)
   .then(res=>{
    setQuery({...query, 
      nombre:res.data[0].nombre,
      descripcion:res.data[0].descripcion,
      imagen:res.data[0].imagen,
      precio:res.data[0].precio,
      stock:res.data[0].stock,
    }) })
   setValue("")
     } } 


     const handleInputChange = (event) => {
      setQuery({ ...query, [event.target.name]: event.target.value })
      console.log("editProductttttt", query)
  
    }
  
  
  return (
    <React.Fragment>
       
      <Typography variant="h6" gutterBottom>
        Editar un Producto
      </Typography>
      <form style={{marginLeft:'7%'}}> 
      
      <Grid container spacing={3}>
      <Grid item xs={10} >
          <TextField
            required
            id="search"
            name="search"
            label="search"
            fullWidth
            classes={{ root: useStyles.inputRoot, input: useStyles.inputInput, }}
            inputProps={{ 'aria-label': 'search' }}
             onKeyDown= {(e)=>enter(e)} 
             value={value}
             onChange={(e)=>setValue(e.target.value)} 
             />
        </Grid>
        
       
        
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="product"
            name="nombre"
            label="product"
            fullWidth
            value ={query && query.nombre}
            onChange={handleInputChange}
              />
        </Grid>
         <Grid item xs={12} sm={4}>
          <TextField
            required
            id="price"
            name="precio"
            label="price"
            value ={query && query.precio}
            onChange={handleInputChange}
            />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="description"
            name="descripcion"
            label="description"
            fullWidth
            value ={query && query.descripcion}
            onChange={handleInputChange}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="image"
            name="imagen"
            label="image"
            fullWidth
            value ={query && query.imagen}
            onChange={handleInputChange}
            />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="stock"
            name="stock"
            label="stock"
            fullWidth
            value ={query && query.stock}
            onChange={handleInputChange}
            />
        
        </Grid>
        <Grid item xs={10}>
          
        </Grid>
        
        
        
      </Grid>  
      
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={submitForm}
        className={useStyles.button}
        style={{
          backgroundColor: "#C25500",
          width:'100%',
          marginRight:'1%',
          color:'black'
                    }}
        >
          Edit 
          </Button>
            </form>
    </React.Fragment>
  );
}
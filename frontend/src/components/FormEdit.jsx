import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      }
    }));
    

export default function EditForm() {
  const history = useHistory();
  const [ value, setValue ] = React.useState("")
  const dispatch = useDispatch()
  const submitForm = (e)=>{
    e.preventDefault()
      console.log(product.value)
      console.log(price.value)
      console.log(description.value)
      console.log(image.value)
      console.log(stock.value)
      
    }
   /*  const enter = (e)=> {
      if(e.keyCode == '13'){ 
   history.push()
   setValue("")
     } } */
   

  return (
    <React.Fragment>
       
      <Typography variant="h6" gutterBottom>
        Editar un Producto
      </Typography>
      <form>

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
            /* onKeyDown= {(e)=>enter(e)} 
            value={value}
            onChange={(e)=>setValue(e.target.value)} */
            />
        </Grid>
        
        
        <Grid item xs={10} sm={6}>
          <TextField
            required
            id="productName"
            name="productName"
            label="productName"
            fullWidth
            
            />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="price"
            name="price"
            label="price"
            />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="description"
            name="description"
            label="description"
            fullWidth
            
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="image"
            name="image"
            label="image"
            fullWidth
            
            />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="stock"
            name="stock"
            label="stock"
            fullWidth
            
            />
        </Grid>
        
        <Grid item xs={10}>
          
        </Grid>
        
      </Grid>
      <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    className={useStyles.button}
                    >
                    Edit 
                  </Button>
                    </form>
    </React.Fragment>
  );
}
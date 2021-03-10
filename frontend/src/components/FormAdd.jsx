import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
    }));
    

export default function AddForm() {
  const dispatch = useDispatch()
  const [form,setForm]= React.useState({productName:'',price:'',description:'',image:'',stock:''})
    const submitForm = (e)=>{
      console.log(e.target.value)
      console.log(form)
      // dispatch()
    }
    const clickForm =(e)=>{
        setForm({
          productName:'',
          price:'',
          description:'',
          image:'',
          stock:''        
        })
    }
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
            id="productName"
            name="productName"
            label="productName"
            /* value = {productName} */
            fullWidth
            classes={{ root: useStyles.inputRoot, input: useStyles.inputInput, }}
            
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="price"
            /* value={prince} */
            classes={{ root: useStyles.inputRoot, input: useStyles.inputInput, }}
            />
        </Grid>
        <Grid item xs={12} sm={10}>
          <TextField
            id="description"
            name="description"
            label="description"
            /* value ={description} */
            fullWidth
            
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="image"
            name="image"
            label="image"
            /* value={image} */
            fullWidth
            
            />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="stock"
            name="stock"
            label="stock"
            /* value ={stock} */
            fullWidth
            
            />
        </Grid>
        
        <Grid item xs={8}>
          
        </Grid>
        
      </Grid>
      </form>
      <Button
      variant="contained"
      color="primary"
      /* onClick={submitForm} */
      className={useStyles.button}
      >
        Add 
      </Button>
    </React.Fragment>
  );
}
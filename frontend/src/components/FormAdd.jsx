import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
    }));
    

export default function AddressForm() {
    const submitForm = ()=>{

    }
  return (
    <React.Fragment>
       
      <Typography variant="h6" gutterBottom>
        Agregar un Producto
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="productName"
            name="productName"
            label="productName"
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="price"
            name="price"
            label="price"
          />
        </Grid>
        <Grid item xs={12}>
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
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stock"
            name="stock"
            label="stock"
            fullWidth
            
          />
        </Grid>
        
        <Grid item xs={12}>
          
        </Grid>
        
      </Grid>
      <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    className={useStyles.button}
                  >
                    Add 
                  </Button>
    </React.Fragment>
  );
}
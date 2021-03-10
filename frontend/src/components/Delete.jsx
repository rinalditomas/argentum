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
    

export default function AddressForm() {
    const submitForm = ()=>{

    }
  return (
    <React.Fragment>
       
      <Typography variant="h6" gutterBottom>
        Eliminar un Producto
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} >
          <TextField
            required
            id="search"
            name="search"
            label="search"
            fullWidth
            classes={{ root: useStyles.inputRoot, input: useStyles.inputInput, }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Grid>
        
        
        
      </Grid>
      <Button
                    variant="contained"
                    color="primary"
                    onClick={submitForm}
                    className={useStyles.button}
                  >
                    Delete 
                  </Button>
    </React.Fragment>
  );
}
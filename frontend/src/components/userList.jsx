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
  
 const[users,setUsers] = React.useState("")



  React.useEffect(() => {
    axios.get("http://localhost:3001/users")
    .then(res => setUsers(res.data))
    
  }, []);


   console.log(users)
  
  
  return (
    <React.Fragment>
       
      <Typography variant="h6" gutterBottom>
        Lista de usuarios
      </Typography>
      <form style={{marginLeft:'7%'}}> 
      
      <Grid container spacing={3}>
      
      <ul>
      {users && users.map(usuarios => 
        <li id={usuarios.id}>
          <Typography variant="h6" gutterBottom>
         { `nombre: ${usuarios.name},    isAdmin?: ${usuarios.isAdmin} `}
          </Typography>
        </li>
        )}   
      </ul> 
        
       
        
        <Grid item xs={10}>
          
        </Grid>
        
        
        
      </Grid>  
      
      
            </form>
    </React.Fragment>
  );
}
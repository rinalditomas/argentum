
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    display:'flex',
    justifyContent:'space-between'
  },
  paper: {
    marginTop: theme.spacing(3),
    height:'300px',
    width:'150%',
    margin:'0 auto',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    
  },
  
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "#C25500",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: "#C25500",

  },
}));



export default function Checkout() {
  const classes = useStyles();
  const [add ,showAdd] = React.useState("create")
  
  
  
  const createClick = ()=>{
    showAdd("create") 
  }
  const editClick = ()=>{
   showAdd("edit")
  }
  const deleteClick = ()=>{
  showAdd("delete")
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            ADMIN 
          </Typography>
          <Link to='/admin/products' style={{textDecoration:'none',color:'black'}} >
          <Button
                    variant="contained"
                    color="inherit"
                    onClick={createClick}
                    className={classes.button}
                    fullWidth
                  >
                    Products 
                  </Button>
                  </Link>
                  <Link to='/admin/users' style={{textDecoration:'none',color:'black'}}>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={editClick}
                    className={classes.button}
                    fullWidth
                  >
                    Users 
                  </Button>
                  </Link>
                  <Box mt={4} />
                 
                 
          
        </Paper>
        
      </main>
    </React.Fragment>
  );
}





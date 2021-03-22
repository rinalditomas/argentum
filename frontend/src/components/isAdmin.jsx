import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
      },
      prod:{
        marginBottom:'20px'
      }
    }));
    

export default function Delete() {
    
    const [ value, setValue ] = React.useState('') 
    const [ query, setQuery ] = React.useState({isAdmin:'',id:0,name:''})
    const history= useHistory()
   
   
    const deleteForm = ()=>{
        // dispatch()
    }
      const enter = (e)=> {
      if(e.keyCode == '13'){ 
   axios.get(`http://localhost:3001/users/search/${value}`)
   .then(res=>{
      setQuery({
      ...query, 
      isAdmin:res.data.isAdmin,
      id:res.data.id,
      name: res.data.name
    })})
   setValue("")
     } } 
 


  const handleInputChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value })
    }

  const onClick = ()=>{
    axios.put(`http://localhost:3001/users/${query.id}`,{isAdmin:query.isAdmin})
     history.push("/admin/users")
  }



  return (
    <React.Fragment>
       
      <Typography variant="h6" gutterBottom>
        convertir en admin
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
             onKeyDown= {(e)=>enter(e)} 
            value={value}
            onChange={(e)=>setValue(e.target.value)} 
          />
        </Grid>
       
      
        <Grid item xs={10} sm={6} style={{marginBottom:'15%'}} >
        <Typography variant="h6" gutterBottom style={{marginBottom:'5%'}} >
        {query && query.name}
      </Typography>
      
          <TextField
          classes={{ root: useStyles.inputRoot, input: useStyles.inputInput, }}
            required
            id="nombre"
            name="isAdmin"
             fullWidth
            value ={query && query.isAdmin}
             onChange={handleInputChange} 
              />
              </Grid>
       
        
        
      </Grid>
      
      
      <Grid item xs={8}>
        </Grid>
      <Button
                    variant="contained"
                    color="primary"
                    onClick={deleteForm}
                    className={useStyles.button}
                    style={{
                      backgroundColor: "#C25500",
                      width:'100%',
                      marginLeft:'1%',
                      color:'black'
                                }}
                    onClick={onClick}
                  >
                    Enviar 
                  </Button>
    </React.Fragment>
  );
}
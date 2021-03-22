import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import {getSearchProduct} from '../state/searchProduct'
import {useDispatch,useSelector} from 'react-redux'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  list:{
      backgroundColor:'#FFDEB8'
  }
}));

export default function InsetDividers({match}) {
  const classes = useStyles();

let queryProduct = useSelector((state)=> state.searchProduct)
  const queryProd = match.params.id
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch(getSearchProduct(queryProd))
  },[])
  

 
  return (
    <List className={classes.root}>
      <ListItem className={classes.list}>
        <ListItemAvatar>
        <Avatar src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing.png" >
         
         </Avatar>
          
        </ListItemAvatar>
        <ListItemText primary="Producto" />
        <ListItemText primary="Precio" />
        <ListItemText primary="Descripcion" />
        <ListItemText primary="Stock" />
       
      </ListItem> 
      <Divider variant="middle" component="li" />
      
        {queryProduct.map(prod => 
      <ListItem key ={prod.id}>
        <ListItemAvatar>
          <Avatar  alt="" src={prod.imagen} />
           
        </ListItemAvatar>
        <ListItemText primary={prod.nombre} />
        <ListItemText primary={`$${prod.precio}`} />
        <ListItemText primary={prod.descripcion}/>
        <ListItemText primary={prod.stock} />
        
      </ListItem>
      )}
      <Divider variant="inset" component="li" />
     
     
    </List>
  );
}
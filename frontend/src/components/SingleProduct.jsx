import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import {getSingleProduct} from '../state/singleProduct'
import { useSelector,useDispatch } from 'react-redux';


const yerbas = 
  {
    id:1,
    nombre: 'Playadito',
    precio: '$200',
    imagen: 'https://ardiaprod.vteximg.com.br/arquivos/ids/188719-1000-1000/YERBA-PLAYADITO-SUAVE-1-KG_1.jpg?v=637427630884900000',
    descripcion: 'Yerba mate Playadito suave con palo 500 g.',
}


const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
      width:'21%',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: '#D3D3D3',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundImage: "url('https://ak.picdn.net/shutterstock/videos/1038323930/thumb/1.jpg?ip=x480')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "50%",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  card: {
    paddingTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    width:800,
    height:700,
    
  },
  lilCard: {
    paddingLeft:'15px',
    paddingRight:'15px',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingTop: '10%',
    border:'2px solid #D3D3D3',
    width:300,
    height:600,
    borderRadius:'5px',
    lineHeight:'40px',
    backgroundColor: '#00aae4',
    color:'white'
   },
  cardMedia: {
    paddingTop: '15%', // 16:9
    width: 450,
    height: 450,
    backgroundSize:'contain',
    
    
  },
  cardContent: {
    flexGrow: 1,
    display:'flex',
    justifyContent:'space-between'
  },
  letters: {
    fontWeight:'bold'
  },
  cartbutton:{
    fontSize:'medium',
    
  }

}));


export default function SingleProduct({match}) {
  const classes = useStyles();
  console.log(match.params.id)
  const dispatch = useDispatch()
 const singleProduct = useSelector(state => state.singleProduct)
 
 console.log(singleProduct)
 
 React.useEffect(()=>{
 dispatch(getSingleProduct(match.params.id))
 },[])

  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
   
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item key={yerbas.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <div>
                    <img src={singleProduct.imagen} alt="" className={classes.cardMedia} />
                    
                    <Typography  variant="h5" component="h2" className={classes.lilCard}>
                    Producto: {singleProduct.nombre}
                    <hr />
                     {singleProduct.precio}
                     <hr />
                     <Box component="fieldset" mb={1} borderColor="transparent">
                        
                        <Rating name="read-only" value={2} readOnly />
                    </Box>
                     
                     {singleProduct.descripcion}
                     {singleProduct.stock}
                     <Box mt={4} />
                     <Button aria-controls="customized-menu"  variant="contained"  fullWidth='true'>
                      AGREGAR AL CARRITO 
                    </Button>
                    <Box mt={4} />
                    <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained"  onClick={handleClick} fullWidth='true'>
                    Cantidad: 1 UNIDAD
                    </Button>
                    <StyledMenu id="customized-menu" anchorEl={anchorEl}keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                        <StyledMenuItem >
                        
                        1 UNIDAD
                        </StyledMenuItem>
                        <StyledMenuItem>
                        2 UNIDADES
                        </StyledMenuItem>
                        
                    </StyledMenu>
                    
                    
                    

                    </Typography>
                    </div>
                   
                    
                  </Card>
              </Grid>
            
             </Grid>
        </Container>
      
     
    </React.Fragment>
  );
}












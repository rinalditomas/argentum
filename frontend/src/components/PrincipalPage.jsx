import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const yerbas = [
  {
    id:1,
    nombre: 'Playadito',
    precio: '$200',
    imagen: 'https://ardiaprod.vteximg.com.br/arquivos/ids/188719-1000-1000/YERBA-PLAYADITO-SUAVE-1-KG_1.jpg?v=637427630884900000'
},
{
  id:2,
  nombre: 'Union',
  precio: '$180',
  imagen: 'https://supermercado.carrefour.com.ar/media/catalog/product/7/7/7790387014334_02.jpg'
},
{
  id:3,
  nombre: 'Amanda',
  precio: '$165',
  imagen: 'http://ardiaprod.vteximg.com.br/arquivos/ids/186878-500-500/Yerba-Mate-Amanda-de-Campo-1-Kg-_1.jpg?v=637427594485800000'
},
]
const alfajores = [
  {
    id:4,
    nombre: 'Havanna',
    precio: '$50',
    imagen: 'https://3.bp.blogspot.com/-uojsjWQI6Z8/WI-H29pN2rI/AAAAAAAAA4U/EAXFIV_B6qkgcl0P_0jTqSX3QShER9uaQCEw/s1600/20170130_094939.jpg'
},
{
  id:5,
  nombre: 'Cachafaz',
  precio: '$55',
  imagen: 'https://supermercado.carrefour.com.ar/media/catalog/product/7/7/77934499_02.jpg'
},
{
  id:6,
  nombre: 'Guaymallen',
  precio: '$45',
  imagen: 'https://dulcilandia.com.ar/sfe/wp-content/uploads/sites/3/2020/04/09801003-510x510.png'
},
]
const dulceDeLeche = [
  {
    id:7,
    nombre: 'La serenisima',
    precio: '$100',
    imagen: 'https://supermercado.carrefour.com.ar/media/catalog/product/7/7/7790742140609_02_nuevopack.jpg'
},
{
  id:8,
  nombre: 'Sancor',
  precio: '$90',
  imagen: 'https://walmartar.vteximg.com.br/arquivos/ids/835520-1000-1000/Dulce-De-Leche-Clasico-Sancor-400-Gr-1-11130.jpg?v=636687337497300000'
},
{
  id:9,
  nombre: 'Milkaut',
  precio: '$95',
  imagen: 'https://storage.googleapis.com/cdn.minimercadochacabuco.com/cdn/2020/05/05c28b7d-dulce-de-leche-milkaut-400-gr.jpg'
},
]   




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundImage: "url('Argentum2.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: 600,
    height: 200,
    margin: '0 auto'


  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
    
    
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    width: 300,
    height: 300,
    backgroundSize:'cover',
    
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


export default function Album() {
  const classes = useStyles();
  
  // const products = useSelector(state => state.products);
  // const [mainProducts,setMainProducts] = React.useState([])

  // React.useEffect(()=>{
  //   let selection = products;
  //   setMainProducts(selection)
  // },[products])

  return (
    <React.Fragment >
      <CssBaseline />
      
     
        <div className={classes.heroContent}>
          
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
            {yerbas.map((yerba) => (
              <Grid item key={yerba.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Link to={`/productos`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={yerba.imagen}
                    title={yerba.nombre}
                    />
                    </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {yerba.precio}
                      </Typography>
                      <Button size="small" color="primary" >
                      <ShoppingCartIcon className={classes.cartbutton}/>
                    </Button>
                    </CardContent>
                  </Card>
              </Grid>
            ))}

        {alfajores.map((alfajor) => (
              <Grid item key={alfajor.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <Link to={`/products/${alfajor.id}`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={alfajor.imagen}
                    title={alfajor.nombre}
                  />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {alfajor.precio}
                      </Typography>
                      <Button size="small" color="primary" >
                      <ShoppingCartIcon className={classes.cartbutton}/>
                    </Button>
                    </CardContent>
                  </Card>
              </Grid>
            ))}

          {dulceDeLeche.map((dulce) => (
              <Grid item key={dulce.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <Link to={`/products/${dulce.id}`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={dulce.imagen}
                    title={dulce.nombre}
                  />
                  </Link>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {dulce.precio}
                      </Typography>
                      <Button size="small" color="primary" >
                      <ShoppingCartIcon className={classes.cartbutton}/>
                    </Button>
                    </CardContent>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      
     
    </React.Fragment>
  );
}
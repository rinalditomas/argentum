import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { getAllProducts } from "../state/allProducts";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Slider from "infinite-react-carousel";
import { searchAllCategories, getSearchCategory } from "../state/category";
import { useHistory } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="img1.jpg" onDragStart={handleDragStart} />,
  <img src="img2.jpg" onDragStart={handleDragStart} />,
  <img src="img3.jpg" onDragStart={handleDragStart} />,
];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#00aae4",
    padding: theme.spacing(8, 0, 6),
    backgroundImage:
      "url('https://thumbs.gfycat.com/SelfassuredRecentBull-size_restricted.gif')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "content",
    height: 200,
    margin: "0 auto",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    marginTop: "10px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    width: 300,
    height: 300,
    backgroundSize: "cover",
  },
  cardContent: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "space-between",
  },
  letters: {
    fontWeight: "bold",
  },
  cartbutton: {
    fontSize: "medium",
  },
  letters: {
    color: "#C25500",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    fontWeight: "bold",
    fontFamily: "'Lobster Two', cursive",
    fontSize: "35px",
  },
  blue: {
    backgroundColor: "#00aae4",
    color: "#00aae4",
  },
  margin: {
    margin: theme.spacing(1),
    color: "black",
    fontSize: "130%",
    fontWeight: "bold",
    marginTop: "5%",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,

    width: "600px",
  },
  ima: {
    height: "300px",
  },
}));

export default function Album() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.allProducts);
  const searchCategories = useSelector((state) => state.categoryReducer);
  const [cat, setCat] = React.useState(false);
  const history = useHistory();
  React.useEffect(() => {
    dispatch(getAllProducts());
    dispatch(searchAllCategories());
  }, []);

  const handleChange = (e) => {
    setCat(e.target.value);
  };
  const handleClick = () => {
    dispatch(getSearchCategory(cat));
    history.push("/searchCategory");
  };
console.log("ESTE ES EL SEARCHCATEGORYYY", searchCategories)

  const settings = {
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    duration: 50,
    gutter: 40,
    dots: true,
    dotsScroll: 2,
    initialSlide: true,
    slidesToShow: 4,
  };

  return (
    <Container style={{ backgroundColor: "#FFDEB8" }}>
      <React.Fragment>
        <CssBaseline />
        <AliceCarousel
          autoPlay="true"
          autoWidth="true"
          autoHeight="true"
          disableButtonsControls
          infinite="true"
          autoPlayInterval={1000}
          disableDotsControls
          items={productos.map((prod) => (
            <GridListTile className={classes.root}>
              <img src={prod.imagen} className={classes.ima} />
            </GridListTile>
          ))}
        />
        <div>
          
        <select onChange ={handleChange}>
        <option>Categorias</option>
                  <option>vinos</option>
                  <option>alfajores</option>
                  <option>yerbas</option>
                  <option>dulce de leche</option>
                  <option>mates</option>
                </select>
          <button onClick={handleClick}>Ir</button>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
         

          <Grid container spacing={4}>
            {productos
              .slice(0, 12)
              .map((prod) => (
                <Grid item key={prod.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <Link to={`/product/${prod.id}`}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={prod.imagen}
                        title={prod.nombre}
                      />
                    </Link>

                    <CardContent className={classes.cardContent}>
                      <Button
                        size="small"
                        color="inherit"
                        variant="text"
                        className={classes.margin}
                      >
                        {prod.nombre}
                      </Button>
                      <hr />
                      <Button
                        size="small"
                        color="inherit"
                        variant="text"
                        className={classes.margin}
                      >
                        ${prod.precio}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </React.Fragment>
    </Container>
  );
}

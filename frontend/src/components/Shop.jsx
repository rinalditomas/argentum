import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import PaymentIcon from "@material-ui/icons/Payment";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import {useSelector} from "react-redux";

const TAX_RATE = 0.21;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    float: "right",
    margin: "5%",
    backgroundColor: "#C25500",
  },
  stock: {
    width: "60px",
  },
});



export default function SpanningTable() {
  const classes = useStyles();
  let carts = useSelector((state)=> state.cart)
  const [cart,setCart] = React.useState([])
  
  localStorage.setItem('cart', JSON.stringify(carts))

  const ccyFormat=(num)=> {
    return `${num.toFixed(2)}`;
  }
  const subtotal= (item)=> {
    return item.map((obj) => obj.precio).reduce((sum, i) => sum + i, 0);
  }
  
  
  const invoiceSubtotal = subtotal(cart);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  

   
  console.log(cart)
  
  React.useEffect(()=>{
     setCart(carts) 

  },[])
  


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              colSpan={3}
              style={{ fontFamily: "'Lobster Two', cursive", fontSize: "50px" }}
            >
              Mi carrito
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Mis Productos
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Nombre
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Unidad
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Precio
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((yerba) => (
            <TableRow key={yerba.nombre}>
              
              <TableCell>{<Checkbox color="primary" />}</TableCell>*/}
              <TableCell>
                <Avatar alt="" src={yerba.imagen} al />
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                {yerba.nombre}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                <TextField
                  id="outlined-number"
                  /* label="stock" */
                  defaultValue={yerba.stock}
                  type="number"
                  className={classes.stock}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                {yerba.precio}{" "}
              </TableCell>
            </TableRow>
          ))} 
        <TableRow>
            <TableCell rowSpan={3} />
            <TableCell
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                fontSize: "18px",
                color: "black",
                textDecoration: "underline",
              }}
            >
              IVA
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                fontSize: "18px",
                color: "black",
              }}
            >{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell
              align="right"
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                fontSize: "18px",
                color: "black",
              }}
            >
              {ccyFormat(invoiceTaxes)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={2}
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                fontSize: "18px",
                color: "black",
                textDecoration: "underline",
              }}
            >
              Subtotal
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                fontSize: "18px",
                color: "black",
              }}
            >
              {ccyFormat(invoiceSubtotal)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={2}
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                fontSize: "22px",
                color: "black",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Total
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontFamily: "'Shippori Mincho B1', serif",
                fontSize: "22px",
                color: "black",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >{`$ ${ccyFormat(invoiceTotal)}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <IconButton aria-label="delete">
        <DeleteIcon
          style={{
            display: "flex",
            justifyContent: "flex-end",
            float: "right",
            margin: "5%",
            color: "red",
            align: "right"
          }}
        />
      </IconButton>
      <Button
        align="right"
        variant="contained"
        color="inherit"
        size="large"
        className={classes.button}
        startIcon={<PaymentIcon />}
      >
        Pagar
      </Button>
    </TableContainer>
  );
}

let array = [
  {
    nombre: "cuchara",
    cantidad: 10,
  },
  {
    nombre: "tenedor",
    cantidad: 6,
  },
];

function otromas(arreglo, item) {
  arreglo.map((algo) => {
    if (algo.nombre == item) {
      console.log(algo.cantidad);
    }
  });
}

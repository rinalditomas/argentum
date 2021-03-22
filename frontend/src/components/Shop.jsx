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
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { getcartRequest } from "../state/cart";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
  const dispatch = useDispatch();
  const classes = useStyles();
  let carts = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  };
  const subtotal = (item) => {
    return item.map((obj) => obj.product.precio).reduce((sum, i) => sum + i, 0);
  };

  const invoiceSubtotal = subtotal(carts);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;


  React.useEffect(() => {
    dispatch(getcartRequest());
  }, []);

  const onClick = () => {
    const token = localStorage.getItem("token");
    return user.id
      ? axios
          .post(
            "http://localhost:3001/cart/checkOut",
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then(() => {
            alert("Gracias por tu compra");
            history.push("/");
          })
      : alert("No estas logueado");
  };

  React.useEffect(() => {
    return (
      user
        ? carts.map((item) => {
            axios
              .post(
                `http://localhost:3001/cart/add/${item.product.id}`,
                { quantity: item.quantity },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              )
              .then((res) => {
                return res.data;
              });
          })
        : null,
      []
    );
  });

  const handleClick = (e) => {
    axios.post(`http://localhost:3001/cart/remove/${e}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
    return false;
  };

  const cleanCart = () => {
    axios.delete(`http://localhost:3001/cart/clear`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              colSpan={4}
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
            <TableCell
              align="right"
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              eliminar
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts.map((yerba) => (
            <TableRow key={yerba.product.id}>
              <TableCell>
                <Avatar alt="" src={yerba.product.imagen} al />
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                {yerba.product.nombre}
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
                  defaultValue={yerba.quantity}
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
                {yerba.product.precio}{" "}
              </TableCell>
              <TableCell
                align="right"
                style={{
                  fontFamily: "'Shippori Mincho B1', serif",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                <IconButton aria-label="delete">
                  <DeleteIcon
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      float: "right",
                      margin: "5%",
                      color: "red",
                      align: "right",
                    }}
                    onClick={() => handleClick(yerba.product.id)}
                  />
                </IconButton>
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

      <Button
        align="right"
        variant="contained"
        color="inherit"
        size="large"
        className={classes.button}
        startIcon={<PaymentIcon />}
        onClick={onClick}
      >
        Pagar
      </Button>

      <Button
        align="right"
        variant="contained"
        color="inherit"
        size="large"
        className={classes.button}
        style={{ marginRight: "500px" }}
        startIcon={<DeleteIcon />}
        onClick={cleanCart}
      >
        limpiar carrito
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

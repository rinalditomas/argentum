const express = require("express");
const router = express.Router();
const { Cart, Item, Product } = require("../models");
const jwt = require("jsonwebtoken");
const checkJWT = require("./middlewares/jwt");
const isAdmin = require("./middlewares/isAdmin");

router.post("/add/:id", checkJWT, (req, res, next) => {
  
    Item.findOrCreate({
    where: {
      productId: req.params.id,
    },
    defaults: req.body,
  })
    .then((item) => {
      if (item.productId) {
        item.quantity = req.body.quantity
        item.save()
        .then(()=>{
            Cart.findOne({
                where: {
                  userId: req.user.id,
                  estado: "active",
                },
                include:Item
              }).then((cart) => {
                 return res.send(cart);
                });
              }); 
      } else {
        item.setProduct(req.params.id).then((productItem) => {
          Cart.findOne({
            where: {
              userId: req.user.id,
              estado: "active",
            },
          }).then((cart) => {
            cart.addItem(productItem).then((carritoLleno) => {
              return res.send(carritoLleno);
            });
          });
        });
      }
    })
    .catch(next);
});
router.post("/remove/:id", checkJWT, (req, res, next) => {
  Item.findOne({
    where: {
      productId: req.params.id,
    },
  })
    .then((item) => {
      item.destroy().then(() => {
        console.log("producto eliminado");
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create/:id", checkJWT, (req, res, next) => {
  Cart.findOrCreate({
    where: {
      userId: req.params.id,
      estado: "active",
    },
  })
    .then((cart) => {
      res.send(cart);
    })
    .catch((err) => {
      console.log(err);
    });
}); //chequeo si hay carro, sino lo creo. Si existe agrego lo nuevo, si no existe guardo lo del front
router.delete("/clear", checkJWT, (req, res, next) => {
  Cart.findOne({
    where: {
      userId: req.user.id,
      estado: "active",
    },
  })
    .then((carrito) => {
      Item.destroy({
        where: {
          cartId: carrito.id,
        },
      }).then(() => {
        console.log("carrito vacio");
      });
    })
    .catch((err) => {
      console.log(err);
    });
}); //borra carro (productos con items)
router.post("/checkOut", checkJWT, (req, res, next) => {
  Cart.findOne({
    where: {
      userId: req.user.id,
      estado: "active",
    },
  }).then((cart) => {
    cart.update({ estado: "pending" }).then(() => {
      console.log(cart);
      Item.findAll({
        where: {
          cartId: cart.id,
        },
        include: Product,
      }).then((response) => {
        console.log(response, "ietms con productos");
        res.send(response.quantity);
      });
    });
  });
}); // cambia el estado del carrito y los pasa a pending, admin tiene que aceptar y pasa a accepted. Modificar stock.

//en checkout updatear producto con nuevo stock
// crear carrito active, eliminar, checkout, agregar, combinar carritos (cuando loguea)

module.exports = router;

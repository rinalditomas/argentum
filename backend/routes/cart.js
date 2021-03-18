const express = require("express");
const router = express.Router();
const { Cart, Item, Product } = require("../models");
const jwt = require("jsonwebtoken");
const checkJWT = require("./middlewares/jwt");
const isAdmin = require("./middlewares/isAdmin");

router.post("/add/:id",  checkJWT, (req, res, next) => {
  console.log(req.params.id)
  console.log(req.body)
  console.log(req.user)
  Cart.findOne({
    where: {
      userId: req.user.id,
      estado: "active",
    },
  })
    .then((cart) => {
      Item.findOrCreate({
        where: {
          productId: req.params.id,
          cartId: cart.id,
        },
        defaults: req.body,
      }).then((item) => {
        console.log(item, "ESTE ES EL ITEM");
        const items = item[0];
        console.log("ENTRE EN EL IF*****************");
        items.quantity = req.body.quantity;
        items.save();
        return res.send(items);
      });
    })
    .catch(next);
});

router.get("/getCart",  checkJWT, (req, res, next) => {
  Cart.findOne({
    where: {
      userId: req.user.id,
      estado: "active",
    }
  })
  .then((cart) => {
    Item.findAll({
      where: {
       cartId: cart.id,
      },include:Product
    })
    .then(data => res.send(data))
    
})


});

router.post("/remove/:id",   /* checkJWT,  */  (req, res, next) => {
  console.log(req.params.id)
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

router.post("/create/:id" , checkJWT , (req, res, next) => {
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

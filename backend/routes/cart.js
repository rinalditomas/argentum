const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { Cart, Item, Product, User } = require("../models");
const jwt = require("jsonwebtoken");
const checkJWT = require("./middlewares/jwt");
const isAdmin = require("./middlewares/isAdmin");
const { Op } = require("sequelize");

//configuracion envio de mail
let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0015b98869380e",
    pass: "b40ccaa1a10089",
  },
});

router.post("/add/:id", checkJWT, (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  console.log(req.user);

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

router.get("/getCart", checkJWT, (req, res, next) => {
  Cart.findOne({
    where: {
      userId: req.user.id,
      estado: "active",
    },
  }).then((cart) => {
    Item.findAll({
      where: {
        cartId: cart.id,
      },
      include: Product,
    }).then((data) => res.send(data));
  });
});

router.post(
  "/remove/:id",
  /* checkJWT,  */ (req, res, next) => {
    console.log(req.params.id);

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
  }
);

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
});

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
});

router.post("/checkOut", checkJWT, (req, res, next) => {
  Cart.findOne({
    where: {
      userId: req.user.id,
      estado: "active",
    },
  }).then((cart) => {
    cart.update({ estado: "active" }).then(() => {
      //cambiar a pending
      User.findByPk(req.user.id).then((persona) => {
        const message = {
          from: "smtp.mailtrap.io",
          to: persona.email,
          subject: "Confirmación de compra Argentum",
          text: "Gracias por haber elegido Argentum",
        };
        transport.sendMail(message, function (err, info) {
          if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        });
        console.log(cart);
        Item.findAll({
          where: {
            cartId: cart.id,
          },
          include: Product,
        }).then((response) => {
          response.map((item) => {
            if (item.product.stock > item.quantity) {
              item.product.stock = item.product.stock - item.quantity;
            } else {
              console.log("No hay stock de este producto");
            }
          });
        });

        Cart.create({ userId: req.user.id, estado: "active" })
          .then((response) => {
            res.send(response.quantity);
          })
          .catch((error) => {
            next(error);
          });
      });
    });
  });
});

router.get("/", checkJWT, (req, res, next) => {
  Cart.findAll({
    where: {
      [Op.or]: [
        { estado: "pending" },
        { estado: "accepted" },
        { estado: "rejected" },
      ],
    },
  })
    .then((carts) => {
      res.send(carts);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/pendings", checkJWT, isAdmin, (req, res, next) => {
  Cart.findAll({
    where: {
      estado: "pending",
    },
  })
    .then((carritos) => {
      res.send(carritos);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/accepted/:id", checkJWT, (req, res, next) => {
  console.log("ESTE ES EL REQ PARAMS ID", req.params.id);
  Cart.findByPk(req.params.id)
    .then((carrito) => {
      carrito.estado = "accepted";
      res.send(carrito);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/rejected/:id", checkJWT, (req, res, next) => {
  Cart.findByPk(req.params.id)
    .then((carrito) => {
      carrito.estado = "rejected";
      res.send(carrito);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;

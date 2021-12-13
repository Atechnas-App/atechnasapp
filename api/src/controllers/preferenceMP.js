const express = require("express");
const router = express.Router();
const mercadopago = require("mercadopago");
const { User } = require("../db");
const axios = require("axios");

router.post("/create_preference", async (req, res) => {

  
  try {
    console.log("id ususario", req.query.id);

    const prestador = await User.findByPk(req.query.id, { raw: true });
    mercadopago.configure({
      access_token: prestador.access_token,
    });
  } catch (error) {
    console.log(error.message);
  }
  const { quantity, price, description } = req.body;

  let preference = {
    items: [
      {
        title: description,
        unit_price: Number(price),
        quantity: Number(quantity),
        marketplace_fee: 5
      },
    ], 
    back_urls: {
      success: `http://localhost:3000/${req.query.id}`,
      failure: `http://localhost:3000/${req.query.id}`,
      pending: `http://localhost:3000/${req.query.id}`,
    //   success: "http://localhost:3001/api/feedback",
    //   failure: "http://localhost:3001/api/feedback",
    //   pending: "http://localhost:3001/api/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log(preference)
      console.log("INIT POINT",response.body.init_point)
    //   res.redirect(response.body.init_point)
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/feedback", function (req, res) {
  console.log({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

module.exports = router;

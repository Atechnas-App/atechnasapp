const express = require('express')
const router = express.Router();
const mercadopago = require('mercadopago')
const { User } = require('../db')
const axios = require('axios')




router.post("/create_preference", async (req, res) => {
    const prestador = await User.findByPk('ee6f647e-868d-4293-b705-8f51d9c63714', { raw: true})
    mercadopago.configure({
        access_token: prestador.access_token,
    });
    const {quantity, price, description} = req.body

	let preference = {
		items: [
			{
				title: description,
				unit_price: Number(price),
				quantity: Number(quantity),
			}
		],
		back_urls: {
			"success": "/feedback",
			"failure": "/feedback",
			"pending": "/feedback"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.redirect(response.body.init_point)
		}).catch(function (error) {
			console.log(error);
		});
});

router.get('/feedback', function(req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

module.exports = router
const express = require('express')
const router = express.Router();
const mercadopago = require('mercadopago')
const { User } = require('../db')
const axios = require('axios')




router.post("/create_preference", async (req, res) => {
    const prestador = await User.findByPk('ffe41a85-adcd-4474-8c9d-3a1968d052b1', { raw: true})
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
			"success": "http://localhost:3000",
			"failure": "http://localhost:3000",
			"pending": "http://localhost:3000"
		},
		auto_return: "approved",
		marketplace_fee : 5
	};
	await mercadopago.preferences.create(preference)
		.then(function (response) {
			res.send(response.body.init_point)
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
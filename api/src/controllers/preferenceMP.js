require("dotenv").config();
const express = require('express')
const router = express.Router();
const mercadopago = require('mercadopago')
const { User, Payments } = require('../db')
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
};



router.post("/create_preference", async (req, res) => {
	const prestador = await User.findByPk(req.query.id, { raw: true })
	
	mercadopago.configure({
		access_token: prestador.access_token,
	});
	const { quantity, price, description } = req.body

	let preference = {
		items: [
			{
				title: description,
				unit_price: Number(price),
				quantity: Number(quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3001/api/feedback",
			"failure": "http://localhost:3001/api/feedback",
			"pending": "http://localhost:3001/api/feedback"
		},
		auto_return: "approved",
		marketplace_fee: 5
	};
	await mercadopago.preferences.create(preference)
		.then(function (response) {
			res.send(response.body.init_point)
		}).catch(function (error) {
			console.log(error);
		});
});

router.get('/feedback', async function (req, res) {
	const { payment_id, status, payment_type, merchant_order_id, preference_id, site_id, processing_mode, merchant_account_id } = req.query
	try {
		await Payments.findOrCreate({
			where: {
				payment_id: payment_id,
				status: status,
				payment_type: payment_type,
				merchant_order_id: merchant_order_id,
				preference_id: preference_id,
				site_id: site_id,
				processing_mode: processing_mode,
				merchant_account_id: merchant_account_id
			}
		})
	}
	catch (err) {
		console.log(err)
	}

	res.redirect(process.env.URL_FRONT)
});

module.exports = router
const express = require('express')
const router = express.Router();
const mercadopago = require('mercadopago')
const { User, Payments } = require('../db')
const axios = require('axios')




router.post("/create_preference", async (req, res) => {
	const prestador = await User.findByPk('ca1e5b8a-8502-4794-8936-64a545524dfb', { raw: true })
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
	catch(err){
		console.log(err)
	}

	res.redirect('http://localhost:3000')
});

module.exports = router

// query: {
//     payment_id: '18819619701',
//     status: 'approved',
//     payment_type: 'credit_card',
//     merchant_order_id: '3773850169',
//     preference_id: '1034206289-0b769ba1-4d96-41a4-b82b-8ab5942cb754',
//     site_id: 'MLA',
//     processing_mode: 'aggregator',
//     merchant_account_id: 'null'
//   },
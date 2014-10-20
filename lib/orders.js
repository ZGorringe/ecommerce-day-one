"use strict";

var Mongoose = require('mongoose')
	, Schema = Mongoose.Schema;

var schema = new Schema({
	customer: { type: String, required: true },
	billingAddress: { type: String, required: true },
	shippingAddress: { type: String, required: true },
	payment: { type: String, required: true },
	subtotal: { type: String, required: true },
	salesTax: { type: String, required: true },
	total: { type: String, required: true },
	products: { type: String, required: true }
});

module.exports = Mongoose.model('Order', schema);
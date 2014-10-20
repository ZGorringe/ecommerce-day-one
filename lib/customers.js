"use strict";

var Mongoose = require('mongoose')
	, Schema = Mongoose.Schema;

var schema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	shippingAddress: { type: String, required: true },
	billingAddress: { type: String, required: true },
	primaryPhone: { type: String, required: true },
	secondaryPhone: { type: String },
	password: { type: String, required: true },
	active: {type: Boolean}
});

module.exports = Mongoose.model('Customer', schema);
"use strict";

var Mongoose = require('mongoose')
	, Schema = Mongoose.Schema;

var schema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: String, required: true },
	active: { type: Boolean }
});

module.exports = Mongoose.model('Product', schema);
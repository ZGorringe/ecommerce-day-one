"use strict";

var Mongoose = require('mongoose')
	, Schema = Mongoose.Schema;

var schema = new Schema({
	customer: { type: String, required: true },
	date: { type: String, required: true },
});

module.exports = Mongoose.model('Order', schema);
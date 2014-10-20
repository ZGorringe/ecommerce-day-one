"use strict";

var Mongoose = require('mongoose')
	, Schema = Mongoose.Schema;

var schema = new Schema({
	name: { type: String, required: true },
	kind: { type: String, required: true },
	purpose: { type: String }
});

module.exports = Mongoose.model('Product', schema);
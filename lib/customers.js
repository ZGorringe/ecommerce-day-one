"use strict";

var Mongoose = require('mongoose')
	, Schema = Mongoose.Schema;

var schema = new Schema({
	name: { type: String, required: true },
	age: { type: String, required: true },
	location: { type: String }
});

module.exports = Mongoose.model('Customer', schema);
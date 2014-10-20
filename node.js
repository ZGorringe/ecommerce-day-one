"use strict";

var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/ecommerce');

var Customer = require('./lib/customers');
var Product = require('./lib/products');
var Order = require('./lib/orders');

var customerOne = new Customer({
	name: "Susie",
	age: "26",
	location: "Salt Lake"
});

var productOne = new Product({
	name: "Cup Supreme",
	kind: "Kitchenware",
	purpose: "To Drink Fluids"
});

var orderOne = new Order({
	customer: "Susie",
	date: "October 20, 2014"
});

customerOne.save(function (err, customerOne) {
	if (err) throw err;
	console.log("Customer Saved Successfully");
});

productOne.save(function (err, productOne) {
	if (err) throw err;
	console.log("Product Saved Successfully");
});

orderOne.save(function (err, orderOne) {
	if (err) throw err;
	console.log("Order Saved Successfully");
});

console.log("Mongoose connect successfully")

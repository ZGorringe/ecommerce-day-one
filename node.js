"use strict";

var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/ecommerce');

var Customer = require('./lib/customers');
var Product = require('./lib/products');
var Order = require('./lib/orders');

var customerOne = new Customer({
	name: 'Susie',
	email: 'SusieG@gmail.com',
	shippingAddress: '123 Utah Way, Draper, UT 84020',
	billingAddress: '123 Utah Way, Draper, UT 84020',
	primaryPhone: '801-123-4555',
	secondaryPhone: 'none',
	password: 'password',
	active: true
});

var productOne = new Product({
	name: 'Super Cup',
	description: 'Drink Water From It!',
	price: '$100',
	active: true
});

var orderOne = new Order({
	customer: 'Susie',
	billingAddress: '123 Utah Way, Draper, UT 84020',
	shippingAddress: '123 Utah Way, Draper, UT 84020',
	payment: 'Credit Card',
	subtotal: '$100',
	salesTax: '7%',
	total: '$107',
	products: 'Super Cup'
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

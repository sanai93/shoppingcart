import React, { Component } from 'react';

class Checkout extends Component {
	
	total = 0;
	apples = 0;
	oranges = 0;
	discount = 0;

	scanCart(cart) {
		for(var i = 0; i < cart.length; i++) {
			if(cart[i] === "apple") {
				this.apples = this.apples + 1;
			} else if(cart[i] === "orange") {
				this.oranges = this.oranges + 1;
			}
		}
	}

	checkForAppleDiscounts() {
		var appleDiscount = Math.floor(this.apples / 2);
		this.discount = this.discount + (appleDiscount * .6);
		console.log("apple discount: " + appleDiscount);
	}

	checkForOrangeDiscounts() {
		var orangeDiscount = Math.floor(this.oranges / 3);
		this.discount = this.discount + (orangeDiscount * .25);
		console.log("orange discount: " + orangeDiscount);
	}

	checkout(cart) {
		this.scanCart(cart);
		this.checkForAppleDiscounts();
		this.checkForOrangeDiscounts();
		console.log("apples: " + this.apples);
		console.log("oranges: " + this.oranges);
		var totalApples = this.apples * .6;
		var totalOranges = this.oranges * .25;
		this.total = (totalApples + totalOranges) - this.discount;
		console.log("total: " + this.total);
		return this.total;
	}
	
}

export default Checkout;
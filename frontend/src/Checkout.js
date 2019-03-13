import React, { Component } from 'react';

class Checkout extends Component {
	
	constructor() {
    	super();
    	this.state = {total : 0}
	}

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
		
		var request = {fruits: []};
		var t = 0;
		for(var i = 0; i < cart.length; i++) {
			request.fruits.push(cart[i]);
		}
		
		fetch("http://localhost:8080/buy", {
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify(request)
			})
			  .then(res => res.json())
			  .then(
				(result) => {
				console.log(result);
				  total = result;
				},
				(error) => {
				  this.setState({
					isLoaded: true,
					error
				  });
				}
			  )

/*		this.scanCart(cart);
		this.checkForAppleDiscounts();
		this.checkForOrangeDiscounts();
		var totalApples = this.apples * .6;
		var totalOranges = this.oranges * .25;
		this.total = (totalApples + totalOranges) - this.discount;*/
		return this.state.total;
	}
	
}

export default Checkout;
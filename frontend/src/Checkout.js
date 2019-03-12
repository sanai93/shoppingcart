import React, { Component } from 'react';

class Checkout extends Component {
	
	total = 0;

	checkout(cart) {
		for(var i = 0; i < cart.length; i++) {
			if(cart[i] == "apple") {
				this.total = this.total + .60;
			} else if(cart[i] == "orange") {
				this.total = this.total + .25;
			} else {
				this.total = this.total;
			}
		}
		
		return this.total;
	}
	
}

export default Checkout;
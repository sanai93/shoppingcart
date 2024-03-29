import React, {Component} from 'react';
import './App.css';
import Checkout from './Checkout.js'

class App extends Component {
	
	constructor() {
    	super();
    	this.state = {total : 0}
	}

	Checkout = new Checkout();
	cart = [];
	total = 0;

	addAppleToCart(cart) {
		this.cart.push("apple");
	}

	addOrangeToCart(cart) {
		this.cart.push("orange");
	}

	getCheckout(cart) {
		var totalReturned = this.Checkout.checkout(cart);
		this.setState({total: totalReturned});
	}

	render() {
		const listCart = this.cart.map((x) => <li> {x} </li>);
		
		return ( 
			
			< div className = "App" >
			< header className = "App-header" >
			< h1 > Shopping Cart < /h1> < /header>

			< div className = "main" >
				
				< button className = "button" onClick={() => this.addAppleToCart(this.cart) }> Apple < /button> 

				< button className = "button" onClick={() => this.addOrangeToCart(this.cart) }> Orange < /button>
			< /div>
			
			<div>
				< button className = "button" onClick={() => this.getCheckout(this.cart) }> Check Out </button>
			< /div> 
				
			<div className = "main"> 
				Total = ${ (this.state.total).toFixed(2) } 
				<p>Cart:</p>
				<ul>{ listCart }</ul>
			</div>

			< /div>

			
		);
	}
	
}

export default App;
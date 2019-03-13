import React, {Component} from 'react';
import './App.css';
import Checkout from './Checkout.js'

class App extends Component {
	
	constructor() {
    	super();
    	this.state = {products: [], total : 0}
	}
	
	componentDidMount() {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(
        (result) => {
		console.log(result);
          this.setState({
            isLoaded: true,
            products: result,
			total: 0
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

	Checkout = new Checkout();
	cart = [];

	addToCart(cart, name) {
		this.cart.push(name);
	}

	getCheckout(cart) {
		var totalReturned = this.Checkout.checkout(cart);
		this.setState({total: totalReturned});
	}

	render() {
		const listCart = this.cart.map((x) => <li> {x} </li>);
		const listFruits = this.state.products.map((p) => <li><button className = "button" onClick={() => this.addToCart(this.cart, p.name) }> {p.name} </button></li>);
		
		return ( 
			
			< div className = "App" >
			< header className = "App-header" >
			< h1 > Shopping Cart < /h1> < /header>

			< div className = "main" >
			
				<ul> { listFruits } </ul>
			
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
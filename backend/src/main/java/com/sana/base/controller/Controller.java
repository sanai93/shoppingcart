package com.sana.base.controller;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sana.base.domain.Cart;
import com.sana.base.domain.CartCalculationRequest;
import com.sana.base.domain.Fruit;

@RestController
public class Controller {

	@RequestMapping(value = "/products", produces = { "application/json" }, method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public ResponseEntity<ArrayList<Fruit>> getProducts() {
		ArrayList<Fruit> fruits = new ArrayList<Fruit>();
		Fruit apple = new Fruit("apple");
		Fruit orange = new Fruit("orange");
		fruits.add(apple);
		fruits.add(orange);
		
		System.out.println("test GET");
		ResponseEntity<ArrayList<Fruit>> response = new ResponseEntity<ArrayList<Fruit>>(fruits, HttpStatus.OK);
		return response;	
	}
	
	@RequestMapping(value = "/buy", method = RequestMethod.POST )
	@CrossOrigin(origins = "http://localhost:3000")
	@ResponseBody
	public double buy(@RequestBody CartCalculationRequest fruits) {
		Cart cart = new Cart();
		for(String f : fruits.getFruits()) {
			Fruit fruitBought = new Fruit(f);
			cart.getFruits().add(fruitBought);
		}
		
		int apples = 0, oranges = 0;
		double total = 0;
		for(Fruit f : cart.getFruits()) {
			if(f.getName().equalsIgnoreCase("apple")) {
				apples+=1;
				total = total + f.getPrice();
			} else if(f.getName().equalsIgnoreCase("orange")) {
				oranges+=1;
				total = total + f.getPrice();
			}
		}
		System.out.println("test POST");
		return total;
	}
	
}

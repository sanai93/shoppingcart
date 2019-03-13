package com.sana.base.domain;

import java.util.ArrayList;

public class Cart {

	private ArrayList<Fruit> fruits;
	private double total;
	
	public Cart() {
		fruits = new ArrayList<Fruit>();
	}

	public ArrayList<Fruit> getFruits() {
		return fruits;
	}

	public void setFruits(ArrayList<Fruit> fruits) {
		this.fruits = fruits;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}
	
}

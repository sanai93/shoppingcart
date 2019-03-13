package com.sana.base.domain;

public class Fruit {

	private String name;
	private double price;
	
	public Fruit(String name) {
		this.name = name;
		if(name.equalsIgnoreCase("apple")) {
			this.price = 0.6;
		}
		if(name.equalsIgnoreCase("orange")) {
			this.price = 0.25;
		}
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
}

import { Injectable } from 'angular2/core';

@Injectable()
export class CartService {
	private items: CartItem[] = [];

	add(newItem: CartItem) {
		let existing = this.items.filter(item => item.id == newItem.id);
		if (existing.length > 0) {
			existing[0].amount += newItem.amount;
		} else {
			this.items.push(newItem);
		}
	}
	remove(id: number) {
		this.items = this.items.filter(item => item.id != id);
	}
	numItems() {
		return this.items.reduce((prev, curr) => prev + curr.amount, 0);
	}
	list() {
		return this.items;
	}
	total() {
		return this.items.reduce((prev, curr) => prev + curr.price * curr.amount, 0);
	}
}

export interface CartItem {
	id: number;
	amount: number;
	price: number;
}
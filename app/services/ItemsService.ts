import { Injectable } from 'angular2/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { ShopItem } from '../models/ShopItem';

@Injectable()
export class ItemsService {
	list (): Observable<ShopItem[]> {
		 return Observable.create((observer: Observer<ShopItem[]>) => {
		 	observer.next(this.demoItems);
		 	observer.complete();
		 });
	}

	get (id: number): Observable<ShopItem> {
		return Observable.create((observer: Observer<ShopItem) => {
			let items = this.demoItems.filter(item => item.id == id);
			if (items.length > 0) {
				observer.next(items[0]);
				observer.complete();
			} else {
				observer.error("No item with id " + id + " found!");
				observer.complete();
			}
		})
	}

	demoItems: ShopItem[] = [
		{
			id: 1,
			name: "Brown Leather Saddle",
			description: "This <strong>beautiful</strong> saddle made out of brown leather is the perfect accessoir for your horse!",
			images: [ "https://s-media-cache-ak0.pinimg.com/236x/f2/06/e0/f206e0e54f5fef6bca9a52d582c8528b.jpg" ],
			price: 199.99
		},
		{
			id: 2,
			name: "Black Leather Saddle",
			description: "This <strong>beautiful</strong> saddle made out of black leather is the perfect accessoir for your horse!",
			images: [ "http://wac.2a32.edgecastcdn.net/802A32/images/images/5817A.jpg" ],
			price: 199.99
		},
		{
			id: 3,
			name: "Brown Horse"
			description: "This is just a brown horse.",
			images: [ "http://lorempixel.com/512/512/animals/10" ],
			price: 1199.99
		},
		{
			id: 4,
			name: "Black and white Horse"
			description: "This is an extreme rare breed of a black and white horse.",
			images: [ "http://lorempixel.com/512/512/animals/9" ],
			price: 2599.99
		}
	]
}
import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { ItemsService } from '../../../services/ItemsService';
import { CartService } from '../../../services/CartService';
import { ShopItem } from '../../../models/ShopItem';


@Component({
	templateUrl: 'app/components/pages/PageCart/PageCart.html',
	directives: [ RouterLink ]
})
export class PageCart {
	itemsService: ItemsService;
	cartService: CartService;

	loading: boolean = true;
	descriptions: { [id: string]: ShopItem }

	constructor (itemsService: ItemsService, cartService: CartService) {
		this.itemsService = itemsService;
		this.cartService = cartService;
	}

	ngOnInit() {
		let descriptionObservables = this.cartService.list()
				.map(item => item.id)
				.map(id => this.itemsService.get(id));

		this.descriptions = {};
		if (descriptionObservables.length > 0) {
			Observable.forkJoin(descriptionObservables).subscribe(descriptions => {
				descriptions.forEach(desc => {
					this.descriptions[desc.id] = desc;
				});
				this.loading = false;
			});
		} else {
			this.loading = false;
		}
	}
}
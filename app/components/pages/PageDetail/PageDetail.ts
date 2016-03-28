import { Component } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';

import { ItemsService } from '../../../services/ItemsService';
import { CartService } from '../../../services/CartService';
import { ShopItem } from '../../../models/ShopItem';

@Component({
	templateUrl: 'app/components/pages/PageDetail/PageDetail.html',
	directives: [ RouterLink ]
})
export class PageDetail {
	routeParams: RouteParams;
	itemsService: ItemsService;
	cartServcie: CartService;

	loading: boolean = true;
	id: number;
	item: ShopItem;

	constructor (routeParams: RouteParams, itemsService: ItemsService, cartService: CartService) {
		this.routeParams = routeParams;
		this.itemsService = itemsService;
		this.cartService = cartService;
	}

	ngOnInit () {
		this.id = this.routeParams.get('id');

		this.itemsService.get(this.id).subscribe(result => {
			this.item = result;
			this.loading = false;
		});
	}

	addToCart () {
		this.cartService.add({
			id: this.id,
			amount: 1,
			price: this.item.price
		});
	}
}
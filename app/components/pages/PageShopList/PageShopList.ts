import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';

import { ShopItem } from '../../../models/ShopItem';
import { ItemsService } from '../../../services/ItemsService';

@Component({
	templateUrl: 'app/components/pages/PageShopList/PageShopList.html',
	directives: [ RouterLink ]
})
export class PageShopList {
	itemsService: ItemsService;

	loading: boolean = true;
	items: ShopItem[] = [];

	constructor (itemsService: ItemsService) {
		this.itemsService = itemsService;
	}

	ngOnInit() {
		this.itemsService.list().subscribe(result => {
			this.items = result;
			this.loading = false;
		});
	}
}

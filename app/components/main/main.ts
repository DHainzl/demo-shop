import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { PageShopList } from '../pages/PageShopList/PageShopList';
import { PageDetail } from '../pages/PageDetail/PageDetail';
import { PageCart } from '../pages/PageCart/PageCart';

import { CartService } from '../../services/CartService';

@Component({
	selector: 'outlet',
	templateUrl: 'app/components/main/main.html',
	directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
	{ path: '/', component: PageShopList, as: 'List' },
	{ path: '/item/:id', component: PageDetail, as: 'Detail' },
	{ path: '/cart', component: PageCart, as: 'Cart' }
])
export class Outlet {
	cartService: CartService;

	constructor(cartService: CartService) {
		this.cartService = cartService;
	}
}
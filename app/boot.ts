import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';

import { Outlet } from './components/main/main';
import { ItemsService } from './services/ItemsService';
import { CartService } from './services/CartService';

bootstrap (Outlet, [
	ItemsService,
	CartService,

	ROUTER_PROVIDERS
]);
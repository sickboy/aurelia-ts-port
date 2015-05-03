declare module 'aurelia-templating-router/route-loader' {
	import { RouteLoader } from 'aurelia-router';
	export class TemplatingRouteLoader extends RouteLoader {
	    compositionEngine: any;
	    constructor(compositionEngine: any);
	    loadRoute(router: any, config: any): any;
	}

}
declare module 'aurelia-templating-router/router-view' {
	export class RouterView {
	    element: any;
	    container: any;
	    viewSlot: any;
	    router: any;
	    view: any;
	    constructor(element: any, container: any, viewSlot: any, router: any);
	    bind(executionContext: any): void;
	    process(viewPortInstruction: any, waitToSwap: any): any;
	    swap(viewPortInstruction: any): void;
	}

}
declare module 'aurelia-templating-router/route-href' {
	export class RouteHref {
	    router: any;
	    element: any;
	    route: any;
	    params: any;
	    attribute: any;
	    constructor(router: any, element: any);
	    bind(): void;
	    attributeChanged(value: any, previous: any): void;
	    processChange(): void;
	}

}
declare module 'aurelia-templating-router/index' {
	 function configure(aurelia: any): void;
	export { TemplatingRouteLoader, RouterView, RouteHref, configure };

}
declare module 'aurelia-templating-router' {
	export * from 'aurelia-templating-router/index';
}

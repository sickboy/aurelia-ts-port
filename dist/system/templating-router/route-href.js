var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function(exports_1) {
    var aurelia_templating_1, aurelia_dependency_injection_1, aurelia_router_1;
    var RouteHref;
    return {
        setters:[
            function (_aurelia_templating_1) {
                aurelia_templating_1 = _aurelia_templating_1;
            },
            function (_aurelia_dependency_injection_1) {
                aurelia_dependency_injection_1 = _aurelia_dependency_injection_1;
            },
            function (_aurelia_router_1) {
                aurelia_router_1 = _aurelia_router_1;
            }],
        execute: function() {
            RouteHref = (function () {
                function RouteHref(router, element) {
                    this.router = router;
                    this.element = element;
                }
                RouteHref.prototype.bind = function () {
                    this.processChange();
                };
                RouteHref.prototype.attributeChanged = function (value, previous) {
                    if (previous) {
                        this.element.removeAttribute(previous);
                    }
                    this.processChange();
                };
                RouteHref.prototype.processChange = function () {
                    var href = this.router.generate(this.route, this.params);
                    this.element.setAttribute(this.attribute, href);
                };
                RouteHref = __decorate([
                    aurelia_templating_1.customAttribute('route-href'),
                    aurelia_templating_1.bindable({ name: 'route', changeHandler: 'processChange' }),
                    aurelia_templating_1.bindable({ name: 'params', changeHandler: 'processChange' }),
                    aurelia_templating_1.bindable({ name: 'attribute', defaultValue: 'href' }),
                    aurelia_dependency_injection_1.inject(aurelia_router_1.Router, Element), 
                    __metadata('design:paramtypes', [Object, Object])
                ], RouteHref);
                return RouteHref;
            })();
            exports_1("RouteHref", RouteHref);
        }
    }
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
};
var aurelia_dependency_injection_1 = require('aurelia-dependency-injection');
var aurelia_templating_1 = require('aurelia-templating');
var aurelia_router_1 = require('aurelia-router');
var aurelia_path_1 = require('aurelia-path');
var aurelia_metadata_1 = require('aurelia-metadata');
var TemplatingRouteLoader = (function (_super) {
    __extends(TemplatingRouteLoader, _super);
    function TemplatingRouteLoader(compositionEngine) {
        _super.call(this);
        this.compositionEngine = compositionEngine;
    }
    TemplatingRouteLoader.prototype.loadRoute = function (router, config) {
        var childContainer = router.container.createChild(), instruction = {
            viewModel: aurelia_path_1.relativeToFile(config.moduleId, (aurelia_metadata_1.Origin.get(router.container.viewModel.constructor)).moduleId),
            childContainer: childContainer,
            view: config.view || config.viewStrategy
        };
        childContainer.getChildRouter = function () {
            var childRouter;
            childContainer.registerHandler(aurelia_router_1.Router, function (c) {
                return childRouter || (childRouter = router.createChild(childContainer));
            });
            return childContainer.get(aurelia_router_1.Router);
        };
        return this.compositionEngine.createViewModel(instruction).then(function (instruction) {
            instruction.executionContext = instruction.viewModel;
            instruction.router = router;
            return instruction;
        });
    };
    TemplatingRouteLoader = __decorate([
        aurelia_dependency_injection_1.inject(aurelia_templating_1.CompositionEngine), 
        __metadata('design:paramtypes', [Object])
    ], TemplatingRouteLoader);
    return TemplatingRouteLoader;
})(aurelia_router_1.RouteLoader);
exports.TemplatingRouteLoader = TemplatingRouteLoader;

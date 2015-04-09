var __decorate = this.__decorate || (typeof Reflect === "object" && Reflect.decorate) || function (decorators, target, key, desc) {
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", '../framework/index'], function (require, exports, index_1) {
    var NavBar = (function () {
        function NavBar() {
            this.router = null;
        }
        __decorate([
            index_1.bindable
        ], NavBar.prototype, "router");
        return NavBar;
    })();
    exports.NavBar = NavBar;
});

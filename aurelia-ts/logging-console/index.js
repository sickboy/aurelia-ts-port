define(["require", "exports"], function (require, exports) {
    // Console-polyfill. MIT license.
    // https://github.com/paulmillr/console-polyfill
    // Make it safe to do console.log() always.
    (function (global) {
        'use strict';
        global.console = global.console || {};
        var con = global.console;
        var prop, method;
        var empty = {};
        var dummy = function () { };
        var properties = 'memory'.split(',');
        var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
            'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
            'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
        while (prop = properties.pop())
            if (!con[prop])
                con[prop] = empty;
        while (method = methods.pop())
            if (!con[method])
                con[method] = dummy;
    })(typeof window === 'undefined' ? this : window);
    // Using `this` for web workers while maintaining compatibility with browser
    // targeted script loaders such as Browserify or Webpack where the only way to
    // get to the global object is via `window`.
    if (Function.prototype.bind && window.console && typeof console.log == "object") {
        ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function (method) {
            console[method] = this.bind(console[method], console);
        }, Function.prototype.call);
    }
    var ConsoleAppender = (function () {
        function ConsoleAppender() {
        }
        ConsoleAppender.prototype.debug = function (logger, message) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(rest));
        };
        ConsoleAppender.prototype.info = function (logger, message) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(rest));
        };
        ConsoleAppender.prototype.warn = function (logger, message) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(rest));
        };
        ConsoleAppender.prototype.error = function (logger, message) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(rest));
        };
        return ConsoleAppender;
    })();
    exports.ConsoleAppender = ConsoleAppender;
});

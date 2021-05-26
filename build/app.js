"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const htmx_org_1 = __importDefault(require("htmx.org"));
let headerElement = document.getElementById('header');
htmx_org_1.default.addClass(htmx_org_1.default.find('#demo'), 'myClass');
htmx_org_1.default.ajax('GET', '/example', '#myDiv');
htmx_org_1.default.closest(headerElement, 'div');
htmx_org_1.default.createEventSource = function (url) {
    return new EventSource(url, { withCredentials: false });
};
htmx_org_1.default.createWebSocket = function (url) {
    return new WebSocket(url, ['wss']);
};
htmx_org_1.default.createWebSocket = function (url) {
    return new WebSocket(url, ['wss']);
};
htmx_org_1.default.defineExtension("silly", {
    onEvent: function (name, evt) {
        console.log("Event " + name + " was triggered!", evt);
    }
});
let div = htmx_org_1.default.find("#my-div");
htmx_org_1.default.find(div, "#another-div");
htmx_org_1.default.logAll();
htmx_org_1.default.logger = function (elt, event, data) {
    if (console) {
        console.log("INFO:", event, elt, data);
    }
};
// add a click listener to the body
let myEventListener1 = htmx_org_1.default.on("click", function (evt) {
    console.log(evt);
});
// add a click listener to the given div
let myEventListener2 = htmx_org_1.default.on("#my-div", "click", function (evt) {
    console.log(evt);
});
// remove this click listener from the body
htmx_org_1.default.off("click", myEventListener1);
// remove this click listener from the given div
htmx_org_1.default.off("#my-div", "click", myEventListener2);
htmx_org_1.default.onLoad(function (elt) {
    console.log(elt);
});
let milliseconds = htmx_org_1.default.parseInterval("3s");
console.log(milliseconds);
htmx_org_1.default.process(headerElement);
htmx_org_1.default.removeClass(headerElement, "myClass");
htmx_org_1.default.removeExtension("my-extension");
htmx_org_1.default.takeClass(headerElement, "selected");
htmx_org_1.default.trigger(headerElement, "myEvent", { answer: 42 });

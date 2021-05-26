import htmx from 'htmx.org';

htmx.config.historyEnabled = true;
htmx.config.historyCacheSize = 10;
htmx.config.refreshOnHistoryMiss = false;
htmx.config.defaultSwapStyle = 'innerHTML';
htmx.config.defaultSwapDelay = 0;
htmx.config.defaultSettleDelay = 20;
htmx.config.includeIndicatorStyles = true;
htmx.config.indicatorClass = 'htmx-indicator';
htmx.config.requestClass = 'htmx-request';
htmx.config.settlingClass = 'htmx-settling';
htmx.config.swappingClass = 'htmx-swapping';
htmx.config.allowEval = true;
htmx.config.attributesToSettle = ["class", "style", "width", "height"];
htmx.config.withCredentials = false;
htmx.config.wsReconnectDelay = 'full-jitter';
htmx.config.disableSelector = "[hx-disable], [data-hx-disable]";

let headerElement = document.getElementById('header')!;

htmx.addClass(headerElement, 'myClass');

htmx.ajax('GET', '/example', '#myDiv');

htmx.closest(headerElement, 'div');

htmx.createEventSource = function (url) {
    return new EventSource(url, {withCredentials: false});
}

htmx.createWebSocket = function (url) {
    return new WebSocket(url, ['wss']);
};

htmx.defineExtension("silly", {
    onEvent: function (name: string, evt: Event) {
        console.log("Event " + name + " was triggered!", evt)
    }
});

htmx.find("#my-div")
htmx.find(headerElement, "#another-div")

htmx.logAll();

htmx.logger = function (elt, event, data) {
    if (console) {
        console.log("INFO:", event, elt, data);
    }
}

// add a click listener to the body
let myEventListener1 = htmx.on("click", function (evt) {
    console.log(evt);
});

// add a click listener to the given div
let myEventListener2 = htmx.on("#my-div", "click", function (evt) {
    console.log(evt);
});

// remove this click listener from the body
htmx.off("click", myEventListener1);

// remove this click listener from the given div
htmx.off("#my-div", "click", myEventListener2)

htmx.onLoad(function (elt) {
    console.log(elt);
})

htmx.parseInterval("3s");

htmx.process(headerElement);

htmx.removeClass(headerElement, "myClass");

htmx.removeExtension("my-extension");

htmx.takeClass(headerElement, "selected");

htmx.toggleClass(headerElement, "selected");

htmx.trigger(headerElement, "myEvent", {answer: 42});
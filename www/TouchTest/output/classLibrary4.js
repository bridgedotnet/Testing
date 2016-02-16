(function (globals) {
    "use strict";

    Bridge.define('ClassLibrary4.Class1', {
        statics: {
            config: {
                init: function () {
                    Bridge.ready(this.start);
                }
            },
            start: function () {
                new ClassLibrary4.Class1().initialize();
            }
        },
        config: {
            properties: {
                Canvas: null,
                Log: null
            }
        },
        logMessage: function (message, newLine) {
            if (newLine === void 0) { newLine = true; }
            this.getLog().innerHTML += message + (newLine ? "\n" : "");
        },
        initialize: function () {
            this.setCanvas(document.getElementById("canvas"));
    
            this.setLog(document.getElementById("log"));
    
            this.getCanvas().onclick = Bridge.fn.bind(this, this.clickHandler);
            this.getCanvas().onTouchStart = Bridge.fn.bind(this, this.touchStartHandler);
            this.getCanvas().onTouchEnd = Bridge.fn.bind(this, this.touchEndHandler);
            //el.addEventListener("touchend", handleEnd, false);
            //el.addEventListener("touchcancel", handleCancel, false);
            //el.addEventListener("touchmove", handleMove, false);
    
    
            this.logMessage("Initialized.");
        },
        clickHandler: function (e) {
            this.logMessage("ClickHandler.");
        },
        touchStartHandler: function (e) {
            this.logMessage("TouchStart.");
        },
        touchEndHandler: function (e) {
            this.logMessage("TouchEnd.");
        }
    });
    
    Bridge.init();
})(this);

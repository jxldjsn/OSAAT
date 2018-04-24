var CRENDER_DEBUG = false;
if (typeof window.console == "undefined") window.console = {
    log: function() {}
};
if (!window.Utils) window.Utils = {};
var Utils = Utils;
Utils.detectMobileBrowser = function() {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
};
Utils.getTouchStartEvent = function() {
    return Utils.isWindowsPhone() ? "mspointerdown": "touchstart"
};
Utils.getTouchMoveEvent = function() {
    return Utils.isWindowsPhone() ? "mspointermove": "touchmove"
};
Utils.getTouchEndEvent = function() {
    return Utils.isWindowsPhone() ? "mspointerup": "touchend"
};
Utils.touchScreen = Utils.detectMobileBrowser();
Utils.globalScale = 1;
Utils.globalPixelScale = 1;
Utils.isWindowHidden = false;
Utils.DOMMainContainerId = "main_container";
Utils.DOMProgressContainerId = "progress_container";
Utils.DOMProgressId = "progress";
Utils.DOMScreenBackgroundContainerId = "screen_background_container";
Utils.DOMScreenBackgroundWrapperId = "screen_background_wrapper";
Utils.DOMScreenBackgroundId = "screen_background";
Utils.DOMScreenContainerId = "screen_container";
Utils.DOMScreenWrapperId = "screen_wrapper";
Utils.DOMScreenId = "screen";
Utils.DOMP2lContainerId = "p2l_container";
Utils.DOMP2lId = "p2l";
Utils.DOMMarkId = "mark";
Utils.setCookie = function(name, value) {
    try {
        window.localStorage.setItem(name, value)
    } catch(e) {
        var exp = new Date;
        exp.setDate(exp.getDate() + 365 * 10);
        document.cookie = name + "=" + value + "; expires=" + exp.toUTCString()
    }
};
Utils.getCookie = function(name) {
    var ret;
    try {
        ret = window.localStorage.getItem(name)
    } catch(e) {
        var prefix = name + "=";
        var cookieStartIndex = document.cookie.indexOf(prefix);
        if (cookieStartIndex == -1) return null;
        var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
        if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;
        ret = unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
    }
    return ret
};
Utils.bindEvent = function(el, eventName, eventHandler) {
    if (el.addEventListener) el.addEventListener(eventName, eventHandler, false);
    else if (el.attachEvent) el.attachEvent("on" + eventName, eventHandler)
};
Utils.unbindEvent = function(el, eventName, eventHandler) {
    if (el.removeEventListener) el.removeEventListener(eventName, eventHandler, false);
    else if (el.detachEvent) el.detachEvent("on" + eventName, eventHandler)
};
Utils.getObjectLeft = function(element) {
    var result = element.offsetLeft;
    if (element.offsetParent) result += Utils.getObjectLeft(element.offsetParent);
    return result
};
Utils.getObjectTop = function(element) {
    var result = element.offsetTop;
    if (element.offsetParent) result += Utils.getObjectTop(element.offsetParent);
    return result
};
Utils.parseGet = function() {
    var get = {};
    var s = window.location.toString();
    var p = window.location.toString().indexOf("?");
    var tmp, params;
    if (p >= 0) {
        s = s.substr(p + 1, s.length);
        params = s.split("&");
        for (var i = 0; i < params.length; i++) {
            tmp = params[i].split("=");
            get[tmp[0]] = tmp[1]
        }
    }
    return get
};
Utils.getMouseCoord = function(event, object) {
    var e = event || window.event;
    if (e.touches) e = e.touches[0];
    if (!e) return {
        x: 0,
        y: 0
    };
    var x = 0;
    var y = 0;
    var mouseX = 0;
    var mouseY = 0;
    if (object) {
        x = Utils.getObjectLeft(object);
        y = Utils.getObjectTop(object)
    }
    if (e.pageX || e.pageY) {
        mouseX = e.pageX;
        mouseY = e.pageY
    } else if (e.clientX || e.clientY) {
        mouseX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
        mouseY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop
    }
    var retX = mouseX - x;
    var retY = mouseY - y;
    return {
        x: retX,
        y: retY
    }
};
Utils.removeFromArray = function(arr, item) {
    var tmp = [];
    for (var i = 0; i < arr.length; i++) if (arr[i] != item) tmp.push(arr[i]);
    return tmp
};
Utils.showLoadProgress = function(val) {
    var scl = Utils.globalScale;
    var s = "Loading: " + val + "%";
    s += "<br><br>";
    s += '<div style="display: block; background: #000; width: ' + val * scl * 2 + "px; height: " + 10 * scl + 'px;">&nbsp;</div>';
    document.getElementById(Utils.DOMProgressId).innerHTML = s
};
Utils.hideAddressBarLock = false;
Utils.mobileHideAddressBar = function() {
    if (Utils.hideAddressBarLock) return;
    window.scrollTo(0, 1)
};
Utils.mobileCheckIphone4 = function() {
    return Utils.touchScreen && navigator.userAgent.indexOf("iPhone") >= 0 && window.devicePixelRatio == 2
};
Utils.mobileCheckBrokenAndroid = function() {
    return Utils.touchScreen && Utils.isAndroid() && !Utils.isChrome() && !Utils.isFirefox()
};
Utils.mobileCheckSlowDevice = function() {
    return Utils.mobileCheckBrokenAndroid() && navigator.userAgent.toLowerCase().indexOf("sm-t310") >= 0 || Utils.touchScreen && Utils.isAndroid() && Utils.isFirefox() && navigator.userAgent.toLowerCase().indexOf("sm-t310") >= 0
};
Utils.isChrome = function() {
    var ret = false;
    if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
        ret = true;
        if (Utils.isAndroid()) {
            var version = parseInt((/Chrome\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || 0;
            if (version < 22) ret = false
        }
    }
    return ret
};
Utils.isAndroid = function() {
    return navigator.userAgent.toLowerCase().indexOf("android") >= 0
};
Utils.isIOS = function() {
    return navigator.userAgent.toLowerCase().match(/(ipad|iphone|ipod)/g) ? true: false
};
Utils.isPlayFreeBrowser = function() {
    return navigator.userAgent.toLowerCase().indexOf("playfreebrowser") >= 0
};
Utils.isFirefox = function() {
    return navigator.userAgent.toLowerCase().indexOf("firefox") >= 0
};
Utils.isIE = function() {
    return navigator.userAgent.toLowerCase().indexOf("MSIE") >= 0 || navigator.appName == "Microsoft Internet Explorer"
};
Utils.isWindowsPhone = function() {
    return navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0
};
Utils.disableCorrectPixelRatio = false;
Utils.mobileCorrectPixelRatio = function() {
    if (Utils.isWindowsPhone()) return;
    var head = document.getElementsByTagName("head")[0];
    var list = head.getElementsByTagName("meta");
    var newTag = true,
    meta = null,
    content = "";
    for (var i = 0; i < list.length; i++) if (list[i].name == "viewport") {
        meta = list[i];
        newTag = false;
        break
    }
    if (newTag) {
        meta = document.createElement("meta");
        meta.name = "viewport"
    }
    content += "width=device-width, user-scalable=no";
    var scale = 1 / (window.devicePixelRatio ? window.devicePixelRatio: 1);
    scale = scale.toFixed(2);
    if (Utils.disableCorrectPixelRatio) scale = 1;
    content += ", initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale;
    meta.content = content;
    if (newTag) document.getElementsByTagName("head")[0].appendChild(meta)
};
Utils.getMobileScreenResolution = function(landscape) {
    var scale = 1;
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (!w || !h) {
        w = screen.width;
        h = screen.height
    }
    var scale = 1;
    if (Utils.disableCorrectPixelRatio) scale = window.devicePixelRatio ? window.devicePixelRatio: 1;
    w *= scale;
    h *= scale;
    var scales = [{
        scale: 1,
        width: 320,
        height: 480
    },
    {
        scale: 1.5,
        width: 480,
        height: 720
    },
    {
        scale: 2,
        width: 640,
        height: 960
    }];
    var container = {
        width: 0,
        height: 0
    };
    var prop = "";
    if (Utils.touchScreen) {
        container.width = Math.min(w, h);
        container.height = Math.max(w, h);
        prop = "height"
    } else {
        if (landscape) var scales = [{
            scale: 1,
            width: 480,
            height: 320
        },
        {
            scale: 1.5,
            width: 720,
            height: 480
        },
        {
            scale: 2,
            width: 960,
            height: 640
        }];
        container.width = w;
        container.height = h;
        prop = "height"
    }
    var min = Number.MAX_VALUE;
    for (var i = 0; i < scales.length; i++) {
        var diff = Math.abs(container[prop] - scales[i][prop]);
        if (min > diff) {
            min = diff;
            scale = scales[i].scale
        }
    }
    return Utils.getScaleScreenResolution(scale, landscape)
};
Utils.getScaleScreenResolution = function(scale, landscape) {
    var w = Math.round(320 * scale);
    var h = Math.round(480 * scale);
    return {
        width: landscape ? h: w,
        height: landscape ? w: h,
        scale: scale
    }
};
Utils.imagesRoot = "images";
Utils.initialResolution = {
    width: 320,
    height: 480,
    scale: 1
};
Utils.ignoreMobileHeightCorrection = false;
Utils.createLayout = function(container, resolution, debug, ignoreCanvas) {
    var scl = Utils.globalScale;
    Utils.initialResolution = resolution;
    var height = window.innerHeight;
    document.body.style.overflow = "hidden";
    var s = "";
    s += '<div id="' + Utils.DOMProgressContainerId + '" align="center" style="width: 100%; height: ' + height + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">';
    s += '<table cellspacing="0" cellpadding="0" border="0"><tr><td id="' + Utils.DOMProgressId + '" align="center" valign="middle" style="width: ' + resolution.width + "px; height: " + resolution.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " + 12 * scl + 'px; vertical-align: middle; box-sizing: border-box"></td></tr></table>';
    s += "</div>";
    s += '<div id="' + Utils.DOMScreenBackgroundContainerId + '" style="width: 100%; height: ' + height + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">';
    s += '<div id="' + Utils.DOMScreenBackgroundWrapperId + '" style="width: ' + resolution.width + "px; height: " + resolution.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    if (!ignoreCanvas) s += '<canvas id="' + Utils.DOMScreenBackgroundId + '" width="' + resolution.width + '" height="' + resolution.height + '" style="transform: translateZ(0)"></canvas>';
    s += "</div>";
    s += "</div>";
    s += '<div id="' + Utils.DOMScreenContainerId + '" style="width: 100%; height: ' + height + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
    s += '<div id="' + Utils.DOMScreenWrapperId + '" width="' + resolution.width + '" height="' + resolution.height + '" style="width: ' + resolution.width + "px; height: " + resolution.height + 'px; position: relative; left: 0px; overflow: hidden;">';
    if (!ignoreCanvas) s += '<canvas id="' + Utils.DOMScreenId + '" style="position: absolute; left: 0px; top: 0px;" width="' + resolution.width + '" height="' + resolution.height + '">You browser does not support this application :(</canvas>';
    s += "</div>";
    s += "</div>";
    container.innerHTML = s;
    var p = document.createElement("div");
    p.setAttribute("id", Utils.DOMP2lContainerId);
    p.setAttribute("align", "center");
    var w = resolution.width;
    p.setAttribute("style", "width: 100%; height: " + height + "px; position: absolute; left: 0px; top: 0px; visibility: hidden; z-index: 1000; background-color: #fff; background-image: url(" + Utils.imagesRoot + "/p2l.jpg); background-repeat: no-repeat; background-position: center center");
    var img = document.createElement("img");
    img.setAttribute("id", Utils.DOMP2lId);
    img.width = 1;
    img.height = 1;
    img.style.display = "none";
    p.appendChild(img);
    document.body.appendChild(p);
    var m = document.createElement("div");
    m.setAttribute("id", Utils.DOMMarkId);
    m.style.position = "fixed";
    m.style.right = "0px";
    m.style.bottom = "0px";
    m.style.width = "1px";
    m.style.height = "1px";
    m.style.background = "";
    m.style.zIndex = "100000";
    document.body.appendChild(m);
    Utils.fitLayoutToScreen()
};
Utils.showMainLayoutContent = function() {
    document.getElementById(Utils.DOMProgressContainerId).style.display = "none";
    document.getElementById(Utils.DOMScreenContainerId).style.display = "block";
    document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block"
};
Utils.preventEvent = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.cancelBubble = true;
    e.returnValue = false;
    return false
};
Utils.touchStartEventDisabled = false;
Utils.preventTouchStart = function() {
    if (!Utils.touchStartEventDisabled) return;
    Utils.bindEvent(document.body, Utils.getTouchStartEvent(), Utils.preventEvent)
};
Utils.removePreventTouchStart = function() {
    if (!Utils.touchStartEventDisabled) return;
    Utils.unbindEvent(document.body, Utils.getTouchStartEvent(), Utils.preventEvent)
};
Utils.addMobileListeners = function(landscape, ignoreIOS7) {
    if (ignoreIOS7 || !navigator.userAgent.match(/(iPad|iPhone|iPod).*CPU.*OS 7_\d/i)) {
        Utils.touchStartEventDisabled = true;
        Utils.preventTouchStart()
    }
    if (!Utils.isPlayFreeBrowser()) Utils.bindEvent(window, "scroll",
    function(e) {
        setTimeout(Utils.mobileHideAddressBar, 300)
    });
    document.addEventListener(Utils.getVisibiltyProps().visibilityChange, Utils.handleVisibilityChange, false);
    setInterval("Utils.checkOrientation(" + (landscape ? "true": "false") + ")", 500);
    setTimeout(Utils.mobileHideAddressBar, 500)
};
Utils.handleVisibilityChange = function() {
    Utils.isWindowHidden = document[Utils.getVisibiltyProps().hidden];
    Utils.dispatchEvent(Utils.isWindowHidden ? "hidewindow": "showwindow")
};
Utils.getVisibiltyProps = function() {
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange"
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange"
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange"
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange"
    }
    return {
        hidden: hidden,
        visibilityChange: visibilityChange
    }
};
Utils.staticWindowRect = null;
Utils.setWindowRect = function(width, height) {
    Utils.staticWindowRect = {
        width: width,
        height: height
    }
};
Utils.getWindowRect = function() {
    var d = document.getElementById(Utils.DOMMarkId);
    if (Utils.isAndroid() && d) return {
        width: window.innerWidth,
        height: d.offsetTop + 1
    };
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
};
Utils.storeOrient = null;
Utils.noCheckOrient = false;
Utils.checkOrientation = function(landscape) {
    if (!Utils.touchScreen) return;
    if (!document.getElementById(Utils.DOMScreenContainerId)) return;
    if (Utils.noCheckOrient || Utils.parseGet().nocheckorient == 1) return;
    var rect = Utils.getWindowRect();
    var orient = rect.width > rect.height;
    if (Utils.storeOrient === orient) return;
    Utils.storeOrient = orient;
    var ok = orient == landscape;
    if (!ok) {
        Utils.dispatchEvent("lockscreen");
        document.getElementById(Utils.DOMP2lContainerId).style.visibility = "visible";
        document.getElementById(Utils.DOMProgressContainerId).style.visibility = "hidden";
        document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "none";
        document.getElementById(Utils.DOMScreenContainerId).style.display = "none"
    } else {
        Utils.dispatchEvent("unlockscreen");
        document.getElementById(Utils.DOMP2lContainerId).style.visibility = "hidden";
        document.getElementById(Utils.DOMProgressContainerId).style.visibility = "visible";
        document.getElementById(Utils.DOMScreenBackgroundContainerId).style.display = "block";
        document.getElementById(Utils.DOMScreenContainerId).style.display = "block"
    }
    setTimeout(Utils.mobileHideAddressBar, 900);
    setTimeout(Utils.fitLayoutToScreen, 1E3)
};
Utils.fitLayoutTimer = null;
Utils.addFitLayoutListeners = function() {
    Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500)
};
Utils.removeFitLayoutListeners = function() {
    clearInterval(Utils.fitLayoutTimer)
};
Utils.fitLayoutLock = false;
Utils.fitLayoutCorrectHeight = 0;
Utils.fitLayoutAlign = "center";
Utils.fitLayoutVerticalAlign = "top";
Utils.layoutMargin = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};
Utils.fitLayoutToScreen = function(container) {
    if (Utils.fitLayoutLock) return;
    var p, s, width, height, windowRect, realWindowRect;
    realWindowRect = Utils.getWindowRect();
    if (typeof container != "object" || !container.width) {
        windowRect = Utils.staticWindowRect ? Utils.staticWindowRect: realWindowRect;
        width = windowRect.width;
        height = windowRect.height;
        height += Utils.fitLayoutCorrectHeight;
        height -= Utils.layoutMargin.top;
        height -= Utils.layoutMargin.bottom;
        width -= Utils.layoutMargin.left;
        width -= Utils.layoutMargin.right;
        container = {
            width: width,
            height: height
        }
    }
    if (!container.width || !container.height) return;
    s = document.getElementById(Utils.DOMScreenWrapperId);
    if (!s) return;
    if (!s.initWidth) {
        s.initWidth = Utils.initialResolution.width;
        s.initHeight = Utils.initialResolution.height
    }
    width = s.initWidth;
    height = s.initHeight;
    var scale = 1;
    var scaleX = container.width / width;
    var scaleY = container.height / height;
    scale = scaleX < scaleY ? scaleX: scaleY;
    Utils.globalPixelScale = scale;
    width = Math.floor(width * scale);
    height = Math.floor(height * scale);
    if (s.lastWidth == container.width && s.lastHeight == container.height && s.lastRealWidth == realWindowRect.width && s.lastRealHeight == realWindowRect.height) return;
    s.lastWidth = container.width;
    s.lastHeight = container.height;
    s.lastRealWidth = realWindowRect.width;
    s.lastRealHeight = realWindowRect.height;
    Utils.resizeElement(Utils.DOMScreenId, width, height);
    Utils.resizeElement(Utils.DOMScreenBackgroundId, width, height);
    Utils.resizeElement(Utils.DOMProgressContainerId, windowRect.width, windowRect.height);
    Utils.resizeElement(Utils.DOMProgressId, width, height);
    s = Utils.resizeElement(Utils.DOMScreenWrapperId, width, height);
    Utils.alignElement(s, realWindowRect, width, height);
    s = Utils.resizeElement(Utils.DOMScreenBackgroundWrapperId, width, height);
    Utils.alignElement(s, realWindowRect, width, height);
    Utils.resizeElement(Utils.DOMP2lContainerId, windowRect.width, windowRect.height);
    Utils.resizeElement(Utils.DOMScreenContainerId, windowRect.width, windowRect.height);
    Utils.resizeElement(Utils.DOMScreenBackgroundContainerId, windowRect.width, windowRect.height);
    var sz = Math.floor(Math.min(realWindowRect.width, realWindowRect.height) / 2);
    s = document.getElementById(Utils.DOMP2lContainerId);
    if (s) s.style.backgroundSize = sz + "px " + sz + "px";
    Utils.dispatchEvent("fitlayout");
    if (Utils.isPlayFreeBrowser()) window.scrollTo(1, 2);
    setTimeout(Utils.mobileHideAddressBar, 10)
};
Utils.alignElement = function(s, windowRect, width, height) {
    if (!s) return;
    if (Utils.fitLayoutAlign == "left") s.style.left = Utils.layoutMargin.left + "px";
    else if (Utils.fitLayoutAlign == "right") s.style.left = Math.floor(windowRect.width - width - Utils.layoutMargin.right) + "px";
    else s.style.left = Math.floor((windowRect.width - width - Utils.layoutMargin.left - Utils.layoutMargin.right) / 2) + "px";
    if (Utils.fitLayoutVerticalAlign == "top") s.style.top = Utils.layoutMargin.top + "px";
    else if (Utils.fitLayoutVerticalAlign == "bottom") s.style.top = Math.floor(windowRect.height - height - Utils.layoutMargin.bottom) + "px";
    else s.style.top = Math.floor((windowRect.height - height - Utils.layoutMargin.top - Utils.layoutMargin.bottom) / 2) + "px"
};
Utils.resizeElement = function(id, width, height) {
    var s = document.getElementById(id);
    if (!s) return null;
    s.style.width = Math.floor(width) + "px";
    s.style.height = Math.floor(height) + "px";
    return s
};
Utils.drawIphoneLimiter = function(stage, landscape) {
    if (landscape) stage.drawRectangle(240, 295, 480, 54, "#f00", true, .5, true);
    else stage.drawRectangle(160, 448, 320, 64, "#f00", true, .5, true)
};
Utils.drawGrid = function(stage, landscape, col) {
    if (typeof landscape == "undefined") landscape = false;
    var dx = 10;
    var dy = 10;
    if (typeof col == "undefined") col = "#FFF";
    var w = 1;
    var s = {
        w: landscape ? 480 : 320,
        h: landscape ? 320 : 480
    };
    for (var x = dx; x < s.w; x += dx) {
        var o = .1 + .1 * ((x - dx) / dx % 10);
        stage.drawLine(x, 0, x, s.h, w, col, o)
    }
    for (var y = dy; y < s.h; y += dy) {
        var o = .1 + .1 * ((y - dy) / dy % 10);
        stage.drawLine(0, y, s.w, y, w, col, o)
    }
};
Utils.drawScaleFix = function(stage, landscape) {
    if (Utils.globalScale == .75) if (landscape) stage.drawRectangle(507, 160, 54, 320, "#000", true, 1, true);
    else stage.drawRectangle(160, 507, 320, 54, "#000", true, 1, true);
    if (Utils.globalScale == 1.5) if (landscape) stage.drawRectangle(510, 160, 60, 320, "#000", true, 1, true);
    else stage.drawRectangle(160, 510, 320, 60, "#000", true, 1, true)
};
Utils.grad2radian = function(val) {
    return val / (180 / Math.PI)
};
Utils.radian2grad = function(val) {
    return val * (180 / Math.PI)
};
Utils.eventsListeners = [];
Utils.onlockscreen = null;
Utils.onunlockscreen = null;
Utils.onhidewindow = null;
Utils.onshowwindow = null;
Utils.onfitlayout = null;
Utils.addEventListener = function(type, callback) {
    EventsManager.addEvent(Utils, type, callback)
};
Utils.removeEventListener = function(type, callback) {
    EventsManager.removeEvent(Utils, type, callback)
};
Utils.dispatchEvent = function(type, params) {
    return EventsManager.dispatchEvent(Utils, type, params)
};
Utils.isArray = function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]"
};
Utils.isPlainObject = function(obj) {
    if (!obj || !obj.constructor) return false;
    return obj.constructor === Object
};
Utils.getFunctionArguments = function(arg, from) {
    if (typeof from == "undefined") from = 0;
    return [].slice.call(arg, from)
};
Utils.proxy = function(fn, context) {
    var p = function() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
        return fn.apply(context || this, args)
    };
    return p
};
Utils.extend = function(Child, Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F;
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype
};
Utils.callSuperConstructor = function(fn, context) {
    var args = [];
    for (var i = 2; i < arguments.length; i++) args.push(arguments[i]);
    fn.superclass.constructor.apply(context, args)
};
Utils.callSuperMethod = function(fn, context, method) {
    var args = [];
    for (var i = 3; i < arguments.length; i++) args.push(arguments[i]);
    return fn.superclass[method].apply(context, args)
};
Utils.copyObjectProps = function(objFrom, objTo) {
    for (var i in objFrom) {
        if (!objFrom.hasOwnProperty(i)) continue;
        if (Utils.isArray(objFrom[i])) {
            objTo[i] = [];
            for (var n = 0; n < objFrom[i].length; n++) {
                if (typeof objFrom[i][n] == "object") objTo[i][n] = Utils.cloneEmptyObject(objFrom[i][n]);
                Utils.copyObjectProps(objFrom[i][n], objTo[i][n])
            }
            continue
        }
        if (Utils.isPlainObject(objFrom[i])) {
            objTo[i] = {};
            Utils.copyObjectProps(objFrom[i], objTo[i]);
            continue
        }
        objTo[i] = objFrom[i]
    }
};
Utils.cloneEmptyObject = function(obj) {
    if (obj.constructor) return new obj.constructor;
    return {}
};
Utils.clone = function(obj) {
    if (!obj || typeof obj != "object") return obj;
    var clone = Utils.cloneEmptyObject(obj);
    Utils.copyObjectProps(obj, clone);
    return clone
};
Utils.switchToTimeMode = function(delta) {
    Tween.STEP_TYPE = Tween.STEP_BY_TIME;
    StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_TIME;
    Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_TIME;
    Sprite.CHANGE_FRAME_DELAY = delta
};
Utils.getGameID = function() {
    if (window.GAME_ID && window.GAME_ID != "my_game") return window.GAME_ID;
    var s = window.location.toString(),
    tmp = s.split("/"),
    id = "",
    name;
    while (!id) {
        id = tmp.pop();
        if (id.split(".").length > 1) id = "";
        if (tmp.length == 0) id = "my_game"
    }
    return id
};
Utils.ajax = function(url, method, params, dataType, successCallback, failCallback) {
    var xmlhttp, isXDomainRequest = false;
    function finalizeResponse(ret) {
        if (dataType == "json") ret = JSON.parse(ret);
        if (dataType == "xml") ret = Utils.parseXMLString(ret);
        if (successCallback) successCallback(ret, xmlhttp)
    }
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest;
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    if (Utils.isIE() && window.XDomainRequest) {
        var a = document.createElement("a");
        a.href = url;
        if (window.location.hostname && a.hostname && window.location.hostname != a.hostname) {
            xmlhttp = new XDomainRequest;
            isXDomainRequest = true
        }
    }
    if (isXDomainRequest) {
        xmlhttp.onload = function() {
            finalizeResponse(xmlhttp.responseText)
        };
        xmlhttp.onerror = function() {
            if (failCallback) failCallback(1, xmlhttp)
        };
        xmlhttp.ontimeout = function() {
            if (failCallback) failCallback(0, xmlhttp)
        }
    } else xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            var ret = xmlhttp.responseText;
            if ((xmlhttp.status == 200 || xmlhttp.status == 0) && ret) finalizeResponse(ret);
            else if (failCallback) failCallback(xmlhttp.status, xmlhttp)
        }
    };
    if (params) {
        if (typeof params != "string") {
            var p = [];
            for (var i in params) p.push(encodeURIComponent(i) + "=" + encodeURIComponent(params[i]));
            params = p.join("&")
        }
    } else params = "";
    if (!method) method = "GET";
    xmlhttp.open(method, url + (method == "GET" ? "?" + params: ""), true);
    if (method == "POST" && !isXDomainRequest) xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(method != "GET" ? params: null)
};
Utils.get = function(url, params, dataType, successCallback, failCallback) {
    Utils.ajax(url, "GET", params, dataType, successCallback, failCallback)
};
Utils.post = function(url, params, dataType, successCallback, failCallback) {
    Utils.ajax(url, "POST", params, dataType, successCallback, failCallback)
};
Utils.getBezierBasis = function(i, n, t) {
    function f(n) {
        return n <= 1 ? 1 : n * f(n - 1)
    }
    return f(n) / (f(i) * f(n - i)) * Math.pow(t, i) * Math.pow(1 - t, n - i)
};
Utils.getBezierCurve = function(points, step) {
    if (typeof step == "undefined") step = .1;
    var res = [];
    step = step / points.length;
    for (var t = 0; t < 1 + step; t += step) {
        if (t > 1) t = 1;
        var ind = res.length;
        res[ind] = {
            x: 0,
            y: 0
        };
        for (var i = 0; i < points.length; i++) {
            var b = Utils.getBezierBasis(i, points.length - 1, t);
            res[ind].x += points[i].x * b;
            res[ind].y += points[i].y * b
        }
    }
    return res
};
Utils.parseXMLString = function(data) {
    var xml = null;
    if (typeof window.DOMParser != "undefined") xml = (new window.DOMParser).parseFromString(data, "text/xml");
    else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
        xml = new window.ActiveXObject("Microsoft.XMLDOM");
        xml.async = "false";
        xml.loadXML(data)
    } else throw new Error("No XML parser found");
    return xml
};
Utils.gotoFullScreen = function() {
    var element = document.documentElement;
    if (element.requestFullscreen) element.requestFullscreen();
    if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    if (element.mozRequestFullScreen) element.mozRequestFullScreen();
    if (element.msRequestFullscreen) element.msRequestFullscreen()
};
Utils.cancelFullScreen = function() {
    if (document.cancelFullScreen) document.cancelFullScreen();
    if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    if (document.msExitFullscreen) document.msExitFullscreen();
    if (document.exitFullscreen) document.exitFullscreen()
};
Utils.isFullScreen = function() {
    return !! (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
};
Utils.isFullScreenEnabled = function() {
    return !! (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
};
Utils.toggleFullScreen = function() {
    if (Utils.isFullScreen()) Utils.cancelFullScreen();
    else Utils.gotoFullScreen()
};
Utils.sign = function(val) {
    if (val == 0) return 0;
    return val > 0 ? 1 : -1
};
function ImagesPreloader() {
    this.curItem = -1;
    this.loadedImages = {};
    this.data = null;
    this.endCallback = null;
    this.processCallback = null;
    this.minProgressVal = 0;
    this.maxProgressVal = 100;
    this.wait = Utils.proxy(this.wait, this)
}
ImagesPreloader.prototype.load = function(data, endCallback, processCallback) {
    this.data = data;
    this.endCallback = endCallback;
    this.processCallback = processCallback;
    for (var i = 0; i < this.data.length; i++) {
        var item = this.data[i];
        var img = new Image;
        img.src = item.src;
        this.loadedImages[item.name] = img
    }
    this.wait()
};
ImagesPreloader.prototype.wait = function() {
    var itemsLoaded = 0;
    var itemsTotal = 0;
    for (var key in this.loadedImages) {
        if (this.loadedImages[key].complete) itemsLoaded++;
        itemsTotal++
    }
    if (itemsLoaded >= itemsTotal) {
        if (this.endCallback) this.endCallback(this.loadedImages);
        return
    } else {
        if (this.processCallback) this.processCallback(Math.floor(itemsLoaded / itemsTotal * this.maxProgressVal + this.minProgressVal));
        setTimeout(this.wait, 50)
    }
};
function SoundsPreloader(sounds, endCallback, progressCallback) {
    this.sounds = sounds;
    this.endCallback = endCallback;
    this.progressCallback = progressCallback;
    this.loadedCount = 0;
    this.minProgressVal = 0;
    this.maxProgressVal = 100
}
SoundsPreloader.prototype.isMp3Support = function() {
    return document.createElement("audio").canPlayType("audio/mpeg") != ""
};
SoundsPreloader.prototype.isWebAudio = function() {
    return Boolean(window.AudioMixer) && AudioMixer.isWebAudioSupport()
};
SoundsPreloader.prototype.load = function(sounds, endCallback, progressCallback) {
    if (sounds) this.sounds = sounds;
    if (endCallback) this.endCallback = endCallback;
    if (progressCallback) this.progressCallback = progressCallback;
    if (!this.sounds || this.sounds.length < 1 || !this.isWebAudio()) {
        if (this.endCallback) this.endCallback();
        return
    }
    var ext = this.isMp3Support() ? "mp3": "ogg";
    var xmlhttp, src, wrapper;
    this.loadedCount = 0;
    var self = this;
    for (var i = 0; i < this.sounds.length; i++) {
        src = this.sounds[i] + "." + ext;
        if (this.isWebAudio()) {
            if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest;
            else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            xmlhttp.open("GET", src, true);
            xmlhttp.responseType = "arraybuffer";
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && (this.status == 200 || this.status == 0)) {
                    var url = this.soundSrc;
                    if (!AudioMixer.waContext) AudioMixer.waContext = new AudioContext;
                    AudioMixer.waContext.decodeAudioData(this.response,
                    function(buffer) {
                        AudioMixer.buffer[url] = buffer;
                        self.soundIsLoaded(null, self)
                    },
                    function(err) {
                        self.soundIsLoaded(null, self)
                    })
                }
                if (this.readyState == 4 && this.status == 404) self.soundIsLoaded(null, self)
            };
            xmlhttp.soundSrc = src;
            xmlhttp.send()
        } else {
            wrapper = document.createElement("audio");
            wrapper.src = src;
            wrapper.type = ext == "mp3" ? "audio/mpeg": "audio/ogg";
            wrapper.preload = "auto";
            wrapper.load();
            wrapper.addEventListener("canplay", Utils.proxy(this.soundIsLoaded, wrapper, this));
            wrapper.addEventListener("canplaythrough", Utils.proxy(this.soundIsLoaded, wrapper, this))
        }
    }
};
SoundsPreloader.prototype.soundIsLoaded = function(e, self) {
    if (this.nodeName && this.nodeName.toLowerCase() == "audio") {
        if (this.alreadyLoaded) return;
        this.alreadyLoaded = true
    }
    self.loadedCount++;
    if (self.progressCallback) self.progressCallback(Math.floor(self.loadedCount / self.sounds.length * self.maxProgressVal + self.minProgressVal));
    if (self.loadedCount >= self.sounds.length) if (self.endCallback) self.endCallback()
};
function Asset(name, src, w, h, f, l) {
    this.name = name + "";
    this.src = src + "";
    this.width = w;
    this.height = h;
    this.frames = f;
    this.layers = l;
    this.bitmap = null;
    this.object = null;
    this.ready = !!(this.width && this.height);
    this.spriteClass = null
}
Asset.prototype.detectSize = function() {
    if (!this.bitmap) return false;
    try {
        if (isNaN(this.width)) this.width = this.bitmap.width ? parseInt(this.bitmap.width) : 0;
        if (isNaN(this.height)) this.height = this.bitmap.height ? parseInt(this.bitmap.height) : 0
    } catch(e) {
        if (CRENDER_DEBUG) console.log(e)
    }
    return ! isNaN(this.width) && !isNaN(this.height)
};
Asset.prototype.normalize = function(scale) {
    if (this.ready) return;
    if (!this.detectSize()) return;
    if (isNaN(this.frames) || this.frames < 1) this.frames = 1;
    if (isNaN(this.layers) || this.layers < 1) this.layers = 1;
    this.width = Math.ceil(this.width / this.layers / scale);
    this.height = Math.ceil(this.height / this.frames / scale);
    this.ready = true
};
function AssetsLibrary(path, scale, assets) {
    this.path = "images";
    this.scale = 1;
    this.items = {};
    this.bitmaps = {};
    this.loaded = false;
    this.onload = null;
    this.onloadprogress = null;
    this.spriteClass = Sprite;
    this.onLoadHandler = Utils.proxy(this.onLoadHandler, this);
    this.onLoadProgressHandler = Utils.proxy(this.onLoadProgressHandler, this);
    this.init(path, scale);
    this.addAssets(assets)
}
AssetsLibrary.prototype.init = function(path, scale) {
    if (typeof path != "undefined") this.path = path + "";
    if (typeof scale != "undefined") {
        this.scale = parseFloat(scale);
        if (isNaN(this.scale)) this.scale = 1
    }
};
AssetsLibrary.prototype.load = function(onload, onloadprogress, minProgressVal, maxProgressVal) {
    this.onload = onload;
    this.onloadprogress = onloadprogress;
    var preloader = new ImagesPreloader;
    var data = [];
    for (var n in this.items) data.push(this.items[n]);
    if (typeof minProgressVal != "undefined") preloader.minProgressVal = minProgressVal;
    if (typeof maxProgressVal != "undefined") preloader.maxProgressVal = maxProgressVal;
    preloader.load(data, this.onLoadHandler, this.onLoadProgressHandler)
};
AssetsLibrary.prototype.onLoadProgressHandler = function(val) {
    if (typeof this.onloadprogress == "function") this.onloadprogress(val)
};
AssetsLibrary.prototype.onLoadHandler = function(data) {
    this.loaded = true;
    for (var n in data) {
        var bmp = data[n];
        var asset = this.items[n];
        asset.bitmap = bmp;
        asset.normalize(this.scale)
    }
    if (typeof this.onload == "function") this.onload(this.items)
};
AssetsLibrary.prototype.addAssets = function(data) {
    if (typeof data == "undefined") return;
    if (typeof data != "object") return;
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        item.noscale = typeof item.noscale == "undefined" ? false: item.noscale;
        if (!item.noscale) item.src = "%SCALE%/" + item.src;
        this.addAsset(item)
    }
};
AssetsLibrary.prototype.addAsset = function(src, name, w, h, f, l) {
    function src2name(src) {
        var name = src.split("/");
        name = name.pop();
        name = name.split(".");
        name = name.shift() + "";
        return name
    }
    var spriteClass = null,
    properties = null;
    if (typeof src == "object" && arguments.length == 1) {
        name = src.name;
        w = src.width || NaN;
        h = src.height || NaN;
        f = src.frames || 1;
        l = src.layers || 1;
        spriteClass = src.spriteClass || null;
        properties = src.properties || null;
        src = src.src
    }
    src = src.replace("%SCALE%", "%PATH%/" + this.scale);
    src = src.replace("%PATH%", this.path);
    if (typeof name == "undefined") name = src2name(src);
    var asset = new Asset(name, src, w, h, f, l);
    asset.spriteClass = spriteClass;
    if (properties) for (var prop in properties) if (typeof asset[prop] == "undefined") asset[prop] = properties[prop];
    this.items[name] = asset;
    return asset
};
AssetsLibrary.prototype.addObject = function(obj) {
    var asset = this.addAsset("%SCALE%/" + obj.image, obj.name, obj.width * this.scale, obj.height * this.scale, obj.frames, obj.layers);
    if (asset) asset.object = obj;
    return asset
};
AssetsLibrary.prototype.getAsset = function(name, checkLoad) {
    var asset = null;
    if (typeof this.items[name] != "undefined" && this.items[name].bitmap) {
        checkLoad = typeof checkLoad == "undefined" ? true: checkLoad;
        asset = !checkLoad || this.items[name].ready ? this.items[name] : null
    }
    if (!asset) throw new Error('Trying to get undefined asset "' + name + '"');
    return asset
};
AssetsLibrary.prototype.getSprite = function(name, params, spriteClass) {
    var mc = null,
    asset = null;
    try {
        asset = this.getAsset(name, true)
    } catch(e) {
        asset = new Asset
    }
    spriteClass = spriteClass || asset.spriteClass || this.spriteClass || window.Sprite;
    if (spriteClass && typeof spriteClass == "function" || typeof window[spriteClass] == "function") spriteClass = typeof spriteClass == "function" ? spriteClass: window[spriteClass];
    if (spriteClass.create && typeof spriteClass.create == "function") mc = spriteClass.create(asset, this);
    else mc = new spriteClass(asset.bitmap, asset.width, asset.height, asset.frames, asset.layers);
    if (params && typeof params == "object") for (var prop in params) mc[prop] = params[prop];
    return mc
};
AssetsLibrary.prototype.getBitmap = function(name) {
    try {
        var asset = this.getAsset(name, true);
        return asset.bitmap
    } catch(e) {
        return null
    }
};
function Vector(x, y) {
    if (typeof x == "undefined") x = 0;
    this.x = x;
    if (typeof y == "undefined") y = 0;
    this.y = y
}
Vector.prototype.isZero = function() {
    return this.x == 0 && this.y == 0
};
Vector.prototype.clone = function() {
    return new Vector(this.x, this.y)
};
Vector.prototype.add = function(p) {
    this.x += p.x;
    this.y += p.y;
    return this
};
Vector.prototype.subtract = function(p) {
    this.x -= p.x;
    this.y -= p.y;
    return this
};
Vector.prototype.mult = function(n) {
    this.x *= n;
    this.y *= n;
    return this
};
Vector.prototype.invert = function() {
    this.mult( - 1);
    return this
};
Vector.prototype.rotate = function(angle, offset) {
    if (typeof offset == "undefined") offset = new Vector(0, 0);
    var r = this.clone();
    r.subtract(offset);
    r.x = this.x * Math.cos(angle) + this.y * Math.sin(angle);
    r.y = this.x * -Math.sin(angle) + this.y * Math.cos(angle);
    r.add(offset);
    this.x = r.x;
    this.y = r.y;
    return this
};
Vector.prototype.normalize = function(angle, offset) {
    if (typeof offset == "undefined") offset = new Vector(0, 0);
    this.subtract(offset);
    this.rotate( - angle);
    return this
};
Vector.prototype.getLength = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};
Vector.prototype.distanceTo = function(p) {
    p2 = this.clone();
    p2.subtract(p);
    return p2.getLength()
};
function Rectangle(x, y, w, h, angle) {
    this.center = new Vector(x, y);
    this.width = w;
    this.height = h;
    this.angle = angle;
    this.vertices = [];
    this.AABB = [];
    this.refreshVertices()
}
Rectangle.prototype.clone = function() {
    return new Rectangle(this.center.x, this.center.y, this.width, this.height, this.angle)
};
Rectangle.prototype.refreshVertices = function() {
    var w = this.width / 2;
    var h = this.height / 2;
    this.vertices = [];
    this.vertices.push(new Vector( - w, h));
    this.vertices.push(new Vector(w, h));
    this.vertices.push(new Vector(w, -h));
    this.vertices.push(new Vector( - w, -h));
    this.AABB = [this.center.clone(), this.center.clone()];
    for (var i = 0; i < 4; i++) {
        this.vertices[i].rotate( - this.angle, this.center);
        if (this.vertices[i].x < this.AABB[0].x) this.AABB[0].x = this.vertices[i].x;
        if (this.vertices[i].x > this.AABB[1].x) this.AABB[1].x = this.vertices[i].x;
        if (this.vertices[i].y < this.AABB[0].y) this.AABB[0].y = this.vertices[i].y;
        if (this.vertices[i].y > this.AABB[1].y) this.AABB[1].y = this.vertices[i].y
    }
};
Rectangle.prototype.move = function(x, y) {
    this.center.add(new Vector(x, y));
    this.refreshVertices()
};
Rectangle.prototype.rotate = function(angle) {
    this.angle += angle;
    this.refreshVertices()
};
Rectangle.prototype.hitTestPoint = function(point) {
    var p = point.clone();
    p.normalize( - this.angle, this.center);
    return Math.abs(p.x) <= this.width / 2 && Math.abs(p.y) <= this.height / 2
};
Rectangle.prototype.hitTestRectangle = function(rect) {
    var r1 = this.clone();
    var r2 = rect.clone();
    var len, len1, len2;
    r1.move( - this.center.x, -this.center.y);
    r2.move( - this.center.x, -this.center.y);
    r2.center.rotate(this.angle);
    r1.rotate( - this.angle);
    r2.rotate( - this.angle);
    len = Math.max(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x) - Math.min(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x);
    len1 = r1.AABB[1].x - r1.AABB[0].x;
    len2 = r2.AABB[1].x - r2.AABB[0].x;
    if (len > len1 + len2) return false;
    len = Math.max(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y) - Math.min(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y);
    len1 = r1.AABB[1].y - r1.AABB[0].y;
    len2 = r2.AABB[1].y - r2.AABB[0].y;
    if (len > len1 + len2) return false;
    r1.move( - r2.center.x, -r2.center.y);
    r2.move( - r2.center.x, -r2.center.y);
    r1.center.rotate(r2.angle);
    r1.refreshVertices();
    r1.rotate( - r2.angle);
    r2.rotate( - r2.angle);
    len = Math.max(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x) - Math.min(r1.AABB[0].x, r1.AABB[1].x, r2.AABB[0].x, r2.AABB[1].x);
    len1 = r1.AABB[1].x - r1.AABB[0].x;
    len2 = r2.AABB[1].x - r2.AABB[0].x;
    if (len > len1 + len2) return false;
    len = Math.max(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y) - Math.min(r1.AABB[0].y, r1.AABB[1].y, r2.AABB[0].y, r2.AABB[1].y);
    len1 = r1.AABB[1].y - r1.AABB[0].y;
    len2 = r2.AABB[1].y - r2.AABB[0].y;
    if (len > len1 + len2) return false;
    return true
};
var EventsManager = {};
EventsManager.addEvent = function(obj, type, callback) {
    if (!obj.eventsListeners) return;
    for (var i = 0; i < obj.eventsListeners.length; i++) if (obj.eventsListeners[i].type === type && obj.eventsListeners[i].callback === callback) return;
    obj.eventsListeners.push({
        type: type,
        callback: callback
    })
};
EventsManager.removeEvent = function(obj, type, callback) {
    if (!obj.eventsListeners) return;
    if (obj["on" + type] == callback) obj["on" + type] = null;
    for (var i = 0; i < obj.eventsListeners.length; i++) if (obj.eventsListeners[i].type === type && obj.eventsListeners[i].callback === callback) {
        obj.eventsListeners = Utils.removeFromArray(obj.eventsListeners, obj.eventsListeners[i]);
        return
    }
};
EventsManager.dispatchEvent = function(obj, type, params) {
    if (!obj.eventsListeners) return;
    var ret;
    if (typeof obj["on" + type] == "function") {
        ret = obj["on" + type](params);
        if (ret === false) return false
    }
    for (var i = 0; i < obj.eventsListeners.length; i++) if (obj.eventsListeners[i].type === type) {
        ret = obj.eventsListeners[i].callback(params);
        if (ret === false) return false
    }
};
EventsManager.hasEventListener = function(obj, type) {
    if (!obj.eventsListeners) return false;
    if (obj["on" + type]) return true;
    for (var i = 0; i < obj.eventsListeners.length; i++) if (obj.eventsListeners[i].type === type) return true;
    return false
};
EventsManager.removeAllEventListeners = function(obj, type) {
    if (!obj.eventsListeners) return;
    if (typeof type == "undefined") obj.eventsListeners = [];
    else if (obj["on" + type]) obj["on" + type] = null;
    var result = [];
    for (var i = 0; i < obj.eventsListeners.length; i++) if (obj.eventsListeners[i].type !== type) result.push(obj.eventsListeners[i]);
    obj.eventsListeners = result
};
function EventsProxy() {
    this.eventsListeners = []
}
EventsProxy.prototype.addEventListener = function(type, callback) {
    EventsManager.addEvent(this, type, callback)
};
EventsProxy.prototype.removeEventListener = function(type, callback) {
    EventsManager.removeEvent(this, type, callback)
};
EventsProxy.prototype.dispatchEvent = function(type, params) {
    return EventsManager.dispatchEvent(this, type, params)
};
EventsProxy.prototype.hasEventListener = function(type) {
    return EventsManager.hasEventListener(this, type)
};
EventsProxy.prototype.removeAllEventListeners = function(type) {
    EventsManager.removeAllEventListeners(this, type)
};
var Easing = {};
Easing.back = {
    easeIn: function(t, b, c, d) {
        var s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOut: function(t, b, c, d) {
        var s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOut: function(t, b, c, d) {
        var s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    }
};
Easing.bounce = {
    easeIn: function(t, b, c, d) {
        return c - Easing.bounce.easeOut(d - t, 0, c, d) + b
    },
    easeOut: function(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;
        else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
    },
    easeInOut: function(t, b, c, d) {
        if (t < d / 2) return Easing.bounce.easeIn(t * 2, 0, c, d) * .5 + b;
        else return Easing.bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
};
Easing.circular = {
    easeIn: function(t, b, c, d) {
        return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOut: function(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    }
};
Easing.cubic = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    }
};
Easing.elastic = {
    easeIn: function(t, b, c, d) {
        if (c == 0) return b;
        var s = 1.70158,
        p = 0,
        a = c * 1;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c * 1;
            s = p / 4
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOut: function(t, b, c, d) {
        if (c == 0) return b;
        var s = 1.70158,
        p = 0,
        a = c * 1;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c * 1;
            s = p / 4
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOut: function(t, b, c, d) {
        if (c == 0) return b;
        var s = 1.70158,
        p = 0,
        a = c * 1;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c * 1;
            s = p / 4
        } else s = p / (2 * Math.PI) * Math.asin(c / a);
        return t < 1 ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b: a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    }
};
Easing.exponential = {
    easeIn: function(t, b, c, d) {
        return t == 0 ? b: c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOut: function(t, b, c, d) {
        return t == d ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOut: function(t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b
    }
};
Easing.linear = {
    easeIn: function(t, b, c, d) {
        return c * t / d + b
    },
    easeOut: function(t, b, c, d) {
        return c * t / d + b
    },
    easeInOut: function(t, b, c, d) {
        return c * t / d + b
    }
};
Easing.quadratic = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOut: function(t, b, c, d) {
        return - c * (t /= d) * (t - 2) + b
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return - c / 2 * (--t * (t - 2) - 1) + b
    }
};
Easing.quartic = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOut: function(t, b, c, d) {
        return - c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return - c / 2 * ((t -= 2) * t * t * t - 2) + b
    }
};
Easing.quintic = {
    easeIn: function(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOut: function(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOut: function(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    }
};
Easing.sine = {
    easeIn: function(t, b, c, d) {
        return - c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOut: function(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOut: function(t, b, c, d) {
        return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    }
};
Easing.smoothstep = {
    easeIn: function(t, b, c, d) {
        var mt = t / d / 2;
        return 2 * (mt * mt * (3 - 2 * mt)) * c + b
    },
    easeOut: function(t, b, c, d) {
        var mt = (t / d + 1) / 2;
        return (2 * (mt * mt * (3 - 2 * mt)) - 1) * c + b
    },
    easeInOut: function(t, b, c, d) {
        var mt = t / d;
        return mt * mt * (3 - 2 * mt) * c + b
    }
};
function Tween(obj, prop, start, end, duration, callback) {
    Utils.callSuperConstructor(Tween, this);
    if (typeof obj != "object") obj = null;
    if (obj) {
        if (typeof obj[prop] == "undefined") throw new Error('Trying to tween undefined property "' + prop + '"');
        if (isNaN(obj[prop])) throw new Error("Tweened value can not be " + typeof obj[prop]);
    } else if (isNaN(prop)) throw new Error("Tweened value can not be " + typeof prop);
    if (typeof callback != "function") callback = Easing.linear.easeIn;
    this.obj = obj;
    this.prop = prop;
    this.onchange = null;
    this.onfinish = null;
    this.start = start;
    this.end = end;
    this.duration = ~~duration;
    this.callback = callback;
    this.playing = false;
    this._pos = -1;
    this.newly = true;
    this.eventsListeners = []
}
Utils.extend(Tween, EventsProxy);
Tween.prototype.play = function() {
    this.playing = true;
    this.tick(0)
};
Tween.prototype.pause = function() {
    this.playing = false
};
Tween.prototype.rewind = function() {
    this._pos = -1
};
Tween.prototype.forward = function() {
    this._pos = this.duration
};
Tween.prototype.stop = function() {
    this.pause();
    this.rewind()
};
Tween.prototype.updateValue = function(val) {
    if (this.obj) this.obj[this.prop] = val;
    else this.prop = val
};
Tween.prototype.tick = function(delta) {
    if (!this.playing) return false;
    if (!delta) delta = 0;
    if (Tween.STEP_TYPE == Tween.STEP_BY_FRAME) this._pos++;
    else this._pos += delta;
    if (this._pos < 0) return false;
    if (this._pos > this.duration) return this.finish();
    var val = this.start == this.end ? this.start * 1 : this.callback(this._pos, this.start, this.end - this.start, this.duration);
    this.updateValue(val);
    if (this.hasEventListener("change")) this.dispatchEvent("change", {
        target: this,
        value: val
    });
    return false
};
Tween.prototype.finish = function() {
    this.stop();
    this.updateValue(this.end);
    if (this.hasEventListener("finish") && this.dispatchEvent("finish", {
        target: this,
        value: this.end
    }) === false) return false;
    return true
};
Tween.STEP_BY_FRAME = 0;
Tween.STEP_BY_TIME = 1;
Tween.STEP_TYPE = Tween.STEP_BY_FRAME;
function DisplayObjectContainer() {
    Utils.callSuperConstructor(DisplayObjectContainer, this);
    this.objects = [];
    this.anchor = {
        x: 0,
        y: 0
    }
}
Utils.extend(DisplayObjectContainer, EventsProxy);
DisplayObjectContainer.prototype.objectsCounter = 0;
DisplayObjectContainer.prototype.scaleX = 1;
DisplayObjectContainer.prototype.scaleY = 1;
DisplayObjectContainer.prototype.opacity = 1;
DisplayObjectContainer.prototype.x = 0;
DisplayObjectContainer.prototype.y = 0;
DisplayObjectContainer.prototype.width = 0;
DisplayObjectContainer.prototype.height = 0;
DisplayObjectContainer.prototype.skewX = 0;
DisplayObjectContainer.prototype.skewY = 0;
DisplayObjectContainer.prototype.rotation = 0;
DisplayObjectContainer.prototype.parent = null;
DisplayObjectContainer.prototype.hitArea = null;
DisplayObjectContainer.prototype.fillColor = null;
DisplayObjectContainer.prototype.fillLinearGradient = null;
DisplayObjectContainer.prototype.fillRadialGradient = null;
DisplayObjectContainer.prototype.fillPattern = null;
DisplayObjectContainer.prototype.getAbsoluteRotation = function() {
    return this.rotation + (this.parent ? this.parent.getAbsoluteRotation() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteOpacity = function() {
    return this.opacity * (this.parent ? this.parent.getAbsoluteOpacity() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleX = function() {
    return this.scaleX * (this.parent ? this.parent.getAbsoluteScaleX() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteScaleY = function() {
    return this.scaleY * (this.parent ? this.parent.getAbsoluteScaleY() : 1)
};
DisplayObjectContainer.prototype.getAbsoluteSkewX = function() {
    return this.skewX + (this.parent ? this.parent.getAbsoluteSkewX() : 0)
};
DisplayObjectContainer.prototype.getAbsoluteSkewY = function() {
    return this.skewY + (this.parent ? this.parent.getAbsoluteSkewY() : 0)
};
DisplayObjectContainer.prototype.getTransformProps = function() {
    return {
        x: this.x,
        y: this.y,
        scaleX: this.scaleX,
        scaleY: this.scaleY,
        skewX: this.skewX,
        skewY: this.skewY,
        rotation: this.rotation
    }
};
DisplayObjectContainer.prototype.setTransformProps = function(props) {
    for (var i in props) this[i] = props[i]
};
DisplayObjectContainer.prototype.getCanvasAngle = function(a) {
    if (this.scaleX >= 0 && this.scaleY >= 0) return this.rotation;
    if (this.scaleX < 0 && this.scaleY < 0) return this.rotation;
    return Math.PI * 2 - this.rotation
};
DisplayObjectContainer.prototype.prepareCanvas = function(cns) {
    cns.ctx.save();
    var ox = this.x,
    oy = this.y;
    if (!this.ignoreViewport && this.parent == this.stage) {
        ox -= this.stage.viewport.x;
        oy -= this.stage.viewport.y
    }
    ox *= Utils.globalScale;
    oy *= Utils.globalScale;
    cns.ctx.transform(1, this.skewX, this.skewY, 1, ox, oy);
    if (this.rotation != 0) cns.ctx.rotate(this.getCanvasAngle());
    cns.ctx.scale(this.scaleX, this.scaleY);
    cns.ctx.globalAlpha = this.getAbsoluteOpacity()
};
DisplayObjectContainer.prototype.moveCanvasAnchor = function(cns, back) {
    var f = back ? 1 : -1;
    if (this.anchor.x != 0 || this.anchor.y != 0) cns.ctx.translate(this.anchor.x * Utils.globalScale * f, this.anchor.y * Utils.globalScale * f)
};
DisplayObjectContainer.prototype.restoreCanvas = function(cns) {
    cns.ctx.restore()
};
DisplayObjectContainer.prototype.prepareCanvasShadow = function(cns) {
    if (this.shadowColor) {
        cns.ctx.save();
        if (this.rotation != 0) {
            var l = Math.sqrt(this.shadowOffsetX * this.shadowOffsetX + this.shadowOffsetY + this.shadowOffsetY) * Utils.globalScale;
            var a = Math.atan2(this.shadowOffsetY, this.shadowOffsetX) + this.rotation;
            cns.ctx.shadowOffsetX = Math.cos(a) * l;
            cns.ctx.shadowOffsetY = Math.sin(a) * l
        } else {
            cns.ctx.shadowOffsetX = this.shadowOffsetX * Utils.globalScale;
            cns.ctx.shadowOffsetY = this.shadowOffsetY * Utils.globalScale
        }
        cns.ctx.shadowColor = this.shadowColor;
        cns.ctx.shadowBlur = this.shadowBlur * Utils.globalScale
    }
};
DisplayObjectContainer.prototype.restoreCanvasShadow = function(cns) {
    if (this.shadowColor) this.restoreCanvas(cns)
};
DisplayObjectContainer.prototype.render = function(cns, drawStatic, delta) {
    for (var i = 0; i < this.objects.length; i++) {
        obj = this.objects[i];
        if (obj.destroy) {
            this.removeChild(obj);
            i--
        } else if (obj.visible) obj.render(cns, drawStatic, delta)
    }
};
DisplayObjectContainer.prototype.getX = function() {
    return Math.round(this.x * Utils.globalScale)
};
DisplayObjectContainer.prototype.getY = function() {
    return Math.round(this.y * Utils.globalScale)
};
DisplayObjectContainer.prototype.getWidth = function() {
    return this.width * Math.abs(this.getAbsoluteScaleX()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getHeight = function() {
    return this.height * Math.abs(this.getAbsoluteScaleY()) * Utils.globalScale
};
DisplayObjectContainer.prototype.getPosition = function() {
    return {
        x: this.x,
        y: this.y
    }
};
DisplayObjectContainer.prototype.setPosition = function(x, y) {
    if (typeof y == "undefined" && typeof x["x"] != "undefined" && typeof x["y"] != "undefined") return this.setPosition(x.x, x.y);
    this.x = parseFloat(x);
    this.y = parseFloat(y)
};
DisplayObjectContainer.prototype.setPropScale = function(scale) {
    this.scaleX = this.scaleY = scale * 1
};
DisplayObjectContainer.prototype.getAnchor = function() {
    return this.anchor
};
DisplayObjectContainer.prototype.setAnchor = function(x, y) {
    if (typeof y == "undefined" && typeof x["x"] != "undefined" && typeof x["y"] != "undefined") return this.setAnchor(x.x, x.y);
    this.anchor.x = parseFloat(x);
    this.anchor.y = parseFloat(y)
};
DisplayObjectContainer.prototype.alignAnchor = function(h, v) {
    h = parseInt(h);
    if (isNaN(h)) h = DisplayObjectContainer.ANCHOR_ALIGN_CENTER;
    if (h < 0) h = DisplayObjectContainer.ANCHOR_ALIGN_LEFT;
    if (h > 0) h = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT;
    v = parseInt(v);
    if (isNaN(v)) v = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE;
    if (v < 0) v = DisplayObjectContainer.ANCHOR_VALIGN_TOP;
    if (v > 0) v = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM;
    this.anchor.x = this.width * h / 2;
    this.anchor.y = this.height * v / 2;
    return this.getAnchor()
};
DisplayObjectContainer.prototype.getAbsoluteAnchor = function() {
    return this.getPosition()
};
DisplayObjectContainer.prototype.getRelativeCenter = function() {
    var anchor = this.getAnchor(),
    r = this.getAbsoluteRotation();
    var a = {
        x: anchor.x,
        y: anchor.y
    };
    if (r != 0 && (a.x != 0 || a.y != 0)) {
        a = new Vector( - a.x * this.getAbsoluteScaleX(), -a.y * this.getAbsoluteScaleY());
        a.rotate( - r)
    } else {
        a.x = -(a.x * this.getAbsoluteScaleX());
        a.y = -(a.y * this.getAbsoluteScaleY())
    }
    return a
};
DisplayObjectContainer.prototype.getAbsolutePosition = function() {
    var v = {
        x: this.x,
        y: this.y
    };
    if (this.parent) {
        var p = this.parent.getAbsolutePosition();
        var r = this.parent.getAbsoluteRotation();
        if (r != 0) {
            var a = new Vector(v.x * this.parent.getAbsoluteScaleX(), v.y * this.parent.getAbsoluteScaleY());
            a.rotate( - r);
            v.x = p.x + a.x;
            v.y = p.y + a.y
        } else {
            v.x = p.x + v.x * this.parent.getAbsoluteScaleX();
            v.y = p.y + v.y * this.parent.getAbsoluteScaleY()
        }
    }
    return v
};
DisplayObjectContainer.prototype.getAbsoluteCenter = function() {
    var v = this.getAbsolutePosition();
    var c = this.getRelativeCenter();
    v.x += c.x;
    v.y += c.y;
    return v
};
DisplayObjectContainer.prototype.getCenter = function() {
    return this.getAbsoluteCenter()
};
DisplayObjectContainer.prototype.getIgnoreViewport = function() {
    return this.ignoreViewport || this.parent && this.parent.getIgnoreViewport()
};
DisplayObjectContainer.prototype.getHitAreaRectangle = function() {
    if (!this.hitArea) return this.getDrawRectangle();
    var rotation = this.getAbsoluteRotation(),
    scX = this.getAbsoluteScaleX(),
    scY = this.getAbsoluteScaleY();
    var c = this.getCenter(),
    r = new Rectangle(0, 0, this.hitArea.width * Math.abs(scX), this.hitArea.height * Math.abs(scY), rotation);
    if (rotation != 0) {
        var p = new Vector(this.hitArea.x * scX, this.hitArea.y * scY);
        p.rotate( - rotation);
        r.move(c.x + p.x, c.y + p.y)
    } else r.move(c.x + this.hitArea.x * scX, c.y + this.hitArea.x * scY);
    return r
};
DisplayObjectContainer.prototype.getDrawRectangle = function() {
    var c = this.getCenter(),
    r = new Rectangle(0, 0, this.width * Math.abs(this.getAbsoluteScaleX()), this.height * Math.abs(this.getAbsoluteScaleY()), this.getAbsoluteRotation());
    r.move(c.x, c.y);
    return r
};
DisplayObjectContainer.prototype.getAABBRectangle = function() {
    var r = this.getDrawRectangle(),
    w = r.AABB[1].x - r.AABB[0].x,
    h = r.AABB[1].y - r.AABB[0].y;
    return new Rectangle(r.AABB[0].x + w / 2, r.AABB[0].y + h / 2, w, h, 0)
};
DisplayObjectContainer.prototype.getFullAABBRectangle = function() {
    var list = [this.getAABBRectangle()];
    for (var i = 0; i < this.objects.length; i++) list.push(this.objects[i].getFullAABBRectangle());
    var AABB = [{
        x: Number.MAX_VALUE,
        y: Number.MAX_VALUE
    },
    {
        x: Number.MIN_VALUE,
        y: Number.MIN_VALUE
    }];
    for (i = 0; i < list.length; i++) {
        r = list[i];
        AABB[0].x = Math.min(AABB[0].x, r.AABB[0].x);
        AABB[0].y = Math.min(AABB[0].y, r.AABB[0].y);
        AABB[1].x = Math.max(AABB[1].x, r.AABB[1].x);
        AABB[1].y = Math.max(AABB[1].y, r.AABB[1].y)
    }
    var w = AABB[1].x - AABB[0].x;
    var h = AABB[1].y - AABB[0].y;
    return new Rectangle(AABB[0].x + w / 2, AABB[0].y + h / 2, w, h, 0)
};
DisplayObjectContainer.prototype.cacheAsBitmap = function() {
    var x = this.x,
    y = this.y,
    rotation = this.rotation,
    parent = this.parent;
    this.rotation = 0;
    this.parent = null;
    var rect = this.getAABBRectangle();
    var rectFull = this.getFullAABBRectangle();
    var center = this.getCenter();
    this.x = rect.AABB[0].x - rectFull.AABB[0].x + (this.width / 2 + this.anchor.x) * this.scaleX;
    this.y = rect.AABB[0].y - rectFull.AABB[0].y + (this.height / 2 + this.anchor.y) * this.scaleY;
    var cache = document.createElement("canvas");
    cache.width = rectFull.width * Utils.globalScale;
    cache.height = rectFull.height * Utils.globalScale;
    cache.ctx = cache.getContext("2d");
    this.render(cache, true, 0);
    this.render(cache, false, 0);
    this.parent = parent;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    return cache
};
DisplayObjectContainer.prototype.localToGlobal = function(x, y) {
    var p = typeof x == "object" && typeof x["x"] != "undefined" && typeof x["y"] != "undefined" ? new Vector(x.x + 0, x.y + 0) : new Vector(x, y);
    p.rotate(this.getAbsoluteRotation()).add(this.getAbsolutePosition());
    return p
};
DisplayObjectContainer.prototype.globalToLocal = function(x, y) {
    var p = typeof x == "object" && typeof x["x"] != "undefined" && typeof x["y"] != "undefined" ? new Vector(x.x + 0, x.y + 0) : new Vector(x, y);
    p.subtract(this.getAbsolutePosition()).rotate(this.getAbsoluteRotation());
    return p
};
DisplayObjectContainer.prototype.findMaxZIndex = function() {
    var max = -1;
    var ix = false;
    for (var i = 0; i < this.objects.length; i++) if (this.objects[i].zIndex > max) {
        max = this.objects[i].zIndex;
        ix = i
    }
    return {
        index: ix,
        zIndex: max
    }
};
DisplayObjectContainer.prototype.findMinZIndex = function() {
    var min = -1;
    var ix = false;
    for (var i = 0; i < this.objects.length; i++) {
        if (i == 0) {
            min = this.objects[i].zIndex;
            ix = 0
        }
        if (this.objects[i].zIndex < min) {
            min = this.objects[i].zIndex;
            ix = i
        }
    }
    return {
        index: ix,
        zIndex: min
    }
};
DisplayObjectContainer.prototype.addChild = function(item) {
    var f = this.findMaxZIndex();
    var z = item.zIndex;
    if (f.index !== false) item.zIndex = f.zIndex + 1;
    else item.zIndex = 0;
    this.objectsCounter++;
    item.uid = this.objectsCounter;
    item.parent = this;
    item.setStage(this.stage);
    this.objects.push(item);
    if (z != 0) this.setChildZIndex(item, ~~z);
    if (item.hasEventListener("add")) item.dispatchEvent("add", {
        target: item
    });
    return item
};
DisplayObjectContainer.prototype.setStage = function(stage) {
    this.stage = stage;
    for (var i = 0; i < this.objects.length; i++) this.objects[i].setStage(stage)
};
DisplayObjectContainer.prototype.removeChild = function(item) {
    if (item && this.objects.indexOf(item) >= 0) {
        if (item.stage) item.stage.clearObjectTweens(item);
        item.clear();
        if (item.hasEventListener("remove")) item.dispatchEvent("remove", {
            target: item
        });
        item.removeAllEventListeners();
        item.parent = null;
        item.stage = null;
        this.objects = Utils.removeFromArray(this.objects, item)
    }
};
DisplayObjectContainer.prototype.setChildZIndex = function(item, index) {
    item.zIndex = index;
    this.objects = this.objects.sort(function(obj1, obj2) {
        if (obj1.zIndex == obj2.zIndex) return obj1.uid > obj2.uid ? 1 : -1;
        else return obj1.zIndex > obj2.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.getHitArea = function() {
    return this.hitArea ? this.hitArea: {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
    }
};
DisplayObjectContainer.prototype.hitTest = function(obj1, obj2) {
    if (!obj2) obj2 = this;
    if (obj1.getAbsoluteRotation() == 0 && obj2.getAbsoluteRotation() == 0) {
        var c1 = obj1.getCenter();
        var c2 = obj2.getCenter();
        var cW1 = obj1.width * Math.abs(obj1.getAbsoluteScaleX());
        var cH1 = obj1.height * Math.abs(obj1.getAbsoluteScaleY());
        var cW2 = obj2.width * Math.abs(obj2.getAbsoluteScaleX());
        var cH2 = obj2.height * Math.abs(obj2.getAbsoluteScaleY());
        var cX1 = c1.x - cW1 / 2;
        var cY1 = c1.y - cH1 / 2;
        var cX2 = c2.x - cW2 / 2;
        var cY2 = c2.y - cH2 / 2;
        var top = Math.max(cY1, cY2);
        var left = Math.max(cX1, cX2);
        var right = Math.min(cX1 + cW1, cX2 + cW2);
        var bottom = Math.min(cY1 + cH1, cY2 + cH2);
        var width = right - left;
        var height = bottom - top;
        return width > 0 && height > 0
    } else {
        var r1 = obj1.getDrawRectangle(),
        r2 = obj2.getDrawRectangle();
        return r1.hitTestRectangle(r2)
    }
};
DisplayObjectContainer.prototype.hitTestPointObject = function(obj, x, y, pixelCheck, includeDragged) {
    var cX, cY, cW, cH, mX, mY, r, present, imageData;
    if (typeof obj.pixelCheck == "boolean") pixelCheck = obj.pixelCheck;
    var hitArea = obj.getHitArea();
    cW = hitArea.width * Math.abs(obj.getAbsoluteScaleX());
    cH = hitArea.height * Math.abs(obj.getAbsoluteScaleY());
    var c = obj.getAbsoluteCenter();
    cX = c.x + hitArea.x - cW / 2;
    cY = c.y + hitArea.y - cH / 2;
    mX = x;
    mY = y;
    if (!obj.ignoreViewport) {
        mX += this.stage.viewport.x;
        mY += this.stage.viewport.y
    }
    present = false;
    if (obj.getAbsoluteRotation() == 0) {
        if (cX <= mX && cY <= mY && cX + cW >= mX && cY + cH >= mY) present = true
    } else {
        r = obj.getHitAreaRectangle();
        if (r.hitTestPoint(new Vector(mX, mY))) present = true
    }
    if (present && pixelCheck) {
        this.stage.buffer.width = this.stage.canvas.width;
        this.stage.buffer.height = this.stage.canvas.height;
        this.stage.clearScreen(this.stage.buffer);
        var props = obj.getTransformProps();
        var parent = obj.parent;
        var pos = obj.getAbsolutePosition();
        obj.x = pos.x;
        obj.y = pos.y;
        obj.scaleX = obj.getAbsoluteScaleX();
        obj.scaleY = obj.getAbsoluteScaleY();
        obj.skewX = obj.getAbsoluteSkewX();
        obj.skewY = obj.getAbsoluteSkewY();
        obj.rotation = obj.getAbsoluteRotation();
        obj.parent = null;
        obj.render(this.stage.buffer, obj.static, 0);
        var pX = Math.floor(x * Utils.globalScale);
        var pY = Math.floor(y * Utils.globalScale);
        imageData = this.stage.buffer.ctx.getImageData(pX, pY, 1, 1);
        if (imageData.data[3] == 0) present = false;
        obj.setTransformProps(props);
        obj.parent = parent
    }
    if (!present && includeDragged && obj.dragged) present = true;
    return present
};
DisplayObjectContainer.prototype.getObjectsStackByCoord = function(x, y, pixelCheck, includeDragged) {
    var obj;
    var tmp = [];
    for (var i = this.objects.length - 1; i >= 0; i--) if (this.objects[i].visible) {
        obj = this.objects[i];
        if (obj.objects && obj.objects.length) tmp = tmp.concat(obj.getObjectsStackByCoord(x, y, pixelCheck, includeDragged));
        if (this.hitTestPointObject(obj, x, y, pixelCheck, includeDragged)) tmp.push(obj)
    }
    return tmp
};
DisplayObjectContainer.prototype.doDrag = function(dX, dY) {
    for (var i = 0; i < this.objects.length; i++) this.objects[i].doDrag(dX, dY);
    if (this.dragged) {
        var eX = dX;
        var eY = dY;
        if (!this.ignoreViewport) {
            eX += this.stage.viewport.x;
            eY += this.stage.viewport.y
        }
        eX -= this.dragX;
        eY -= this.dragY;
        var p = this.parent.globalToLocal(eX, eY);
        this.x = p.x;
        this.y = p.y
    }
};
DisplayObjectContainer.prototype.checkMouseOut = function(overStack, mouseCoords) {
    for (var i = this.objects.length - 1; i >= 0; i--) if (this.objects[i].checkMouseOut(overStack, mouseCoords) === false) return;
    if (this.mouseOn && overStack.indexOf(this) < 0) {
        this.mouseOn = false;
        var f = this.stage.finalizeMouseCoords(this, mouseCoords);
        return this.dispatchEvent("mouseout", {
            target: this,
            x: f.x,
            y: f.y
        })
    }
};
DisplayObjectContainer.prototype.getMaxZIndexInStack = function(stack) {
    var max = -1;
    var ix = 0;
    for (var i = 0; i < stack.length; i++) if (stack[i].zIndex > max) {
        max = stack[i].zIndex;
        ix = i
    }
    return ix
};
DisplayObjectContainer.prototype.sortStack = function(stack, revert) {
    return stack.sort(function(obj1, obj2) {
        if (obj1.zIndex == obj2.zIndex) if (revert) obj1.uid < obj2.uid ? 1 : -1;
        else obj1.uid > obj2.uid ? 1 : -1;
        else if (revert) obj1.zIndex < obj2.zIndex ? 1 : -1;
        else obj1.zIndex > obj2.zIndex ? 1 : -1
    })
};
DisplayObjectContainer.prototype.clear = function() {
    while (this.objects.length) this.removeChild(this.objects[0])
};
DisplayObjectContainer.prototype.getFillStyle = function(cns) {
    var fill = null;
    if (this.fillLinearGradient) {
        var gradient = cns.ctx.createLinearGradient(this.fillLinearGradient.x0 * Utils.globalScale, this.fillLinearGradient.y0 * Utils.globalScale, this.fillLinearGradient.x1 * Utils.globalScale, this.fillLinearGradient.y1 * Utils.globalScale);
        for (var i = 0; i < this.fillLinearGradient.points.length; i++) gradient.addColorStop(this.fillLinearGradient.points[i].point, this.fillLinearGradient.points[i].color);
        fill = gradient
    } else if (this.fillRadialGradient) {
        var gradient = cns.ctx.createRadialGradient(this.fillRadialGradient.x0 * Utils.globalScale, this.fillRadialGradient.y0 * Utils.globalScale, this.fillRadialGradient.r0 * Utils.globalScale, this.fillRadialGradient.x1 * Utils.globalScale, this.fillRadialGradient.y1 * Utils.globalScale, this.fillRadialGradient.r1 * Utils.globalScale);
        for (var i = 0; i < this.fillRadialGradient.points.length; i++) gradient.addColorStop(this.fillRadialGradient.points[i].point, this.fillRadialGradient.points[i].color);
        fill = gradient
    } else if (this.fillPattern) {
        var pattern = cns.ctx.createPattern(this.fillPattern.img, this.fillPattern.repeat);
        fill = pattern
    } else fill = this.fillColor;
    return fill
};
DisplayObjectContainer.ANCHOR_ALIGN_LEFT = -1;
DisplayObjectContainer.ANCHOR_ALIGN_CENTER = 0;
DisplayObjectContainer.ANCHOR_ALIGN_RIGHT = 1;
DisplayObjectContainer.ANCHOR_VALIGN_TOP = -1;
DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE = 0;
DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM = 1;
var ANCHOR_ALIGN_LEFT = DisplayObjectContainer.ANCHOR_ALIGN_LEFT;
var ANCHOR_ALIGN_CENTER = DisplayObjectContainer.ANCHOR_ALIGN_CENTER;
var ANCHOR_ALIGN_RIGHT = DisplayObjectContainer.ANCHOR_ALIGN_RIGHT;
var ANCHOR_VALIGN_TOP = DisplayObjectContainer.ANCHOR_VALIGN_TOP;
var ANCHOR_VALIGN_MIDDLE = DisplayObjectContainer.ANCHOR_VALIGN_MIDDLE;
var ANCHOR_VALIGN_BOTTOM = DisplayObjectContainer.ANCHOR_VALIGN_BOTTOM;
function DisplayObject() {
    Utils.callSuperConstructor(DisplayObject, this)
}
Utils.extend(DisplayObject, DisplayObjectContainer);
DisplayObject.prototype.uid = 0;
DisplayObject.prototype.stage = null;
DisplayObject.prototype.shadowColor = null;
DisplayObject.prototype.shadowOffsetX = 0;
DisplayObject.prototype.shadowOffsetY = 0;
DisplayObject.prototype.shadowBlur = 0;
DisplayObject.prototype.zIndex = 0;
DisplayObject.prototype.visible = true;
DisplayObject.prototype.static = false;
DisplayObject.prototype.ignoreViewport = false;
DisplayObject.prototype.destroy = false;
DisplayObject.prototype.dragged = false;
DisplayObject.prototype.dragX = 0;
DisplayObject.prototype.dragY = 0;
DisplayObject.prototype.mouseOn = false;
DisplayObject.prototype.allowDebugDrawing = true;
DisplayObject.prototype.pixelCheck = null;
DisplayObject.prototype.onmouseover = null;
DisplayObject.prototype.onmouseout = null;
DisplayObject.prototype.onmousedown = null;
DisplayObject.prototype.onmouseup = null;
DisplayObject.prototype.onclick = null;
DisplayObject.prototype.oncontextmenu = null;
DisplayObject.prototype.onmousemove = null;
DisplayObject.prototype.onprerender = null;
DisplayObject.prototype.onenterframe = null;
DisplayObject.prototype.onrender = null;
DisplayObject.prototype.onadd = null;
DisplayObject.prototype.onremove = null;
DisplayObject.prototype.onbox2dsync = null;
DisplayObject.prototype.setStatic = function(val, skipChildren) {
    val = Boolean(val);
    if (!skipChildren) for (var i = 0; i < this.objects.length; i++) this.objects[i].setStatic(val);
    if (this.static != val) {
        this.static = val;
        if (this.stage) this.stage.refreshBackground();
        return true
    }
    return false
};
DisplayObject.prototype.startDrag = function(x, y) {
    this.dragged = true;
    this.dragX = x;
    this.dragY = y
};
DisplayObject.prototype.stopDrag = function() {
    this.dragged = false;
    this.dragX = 0;
    this.dragY = 0
};
DisplayObject.prototype.removeTweens = function() {
    if (!this.stage) return;
    this.stage.clearObjectTweens(this)
};
DisplayObject.prototype.addTween = function(prop, end, duration, ease, onfinish, onchange) {
    if (!this.stage) return;
    var val = this[prop];
    if (isNaN(val)) return;
    var t = this.stage.createTween(this, prop, val, end, duration, ease);
    t.onchange = onchange;
    t.onfinish = onfinish;
    return t
};
DisplayObject.prototype.moveTo = function(x, y, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    if (duration <= 0) {
        this.setPosition(x, y);
        if (onfinish) onfinish({
            target: new Tween(this, "y", y, y, duration, ease)
        });
        return this
    }
    var t = [];
    if (this.x != x) {
        var tween = this.addTween("x", x, duration, ease);
        if (tween) t.push(tween)
    }
    if (this.y != y) {
        var tween = this.addTween("y", y, duration, ease);
        if (tween) t.push(tween)
    }
    var len = t.length;
    if (len > 0) {
        t[len - 1].onchange = onchange;
        t[len - 1].onfinish = onfinish;
        for (var i = 0; i < len; i++) t[i].play()
    } else if (onfinish) onfinish({
        target: new Tween(this, "y", y, y, duration, ease)
    });
    return this
};
DisplayObject.prototype.moveBy = function(x, y, duration, ease, onfinish, onchange) {
    return this.moveTo(this.x + x, this.y + y, duration, ease, onfinish, onchange)
};
DisplayObject.prototype.fadeTo = function(opacity, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    var t = null;
    if (duration <= 0) this.opacity = opacity;
    else if (this.opacity != opacity) {
        t = this.addTween("opacity", opacity, duration, ease, onfinish, onchange);
        if (t) t.play()
    }
    if (!t && onfinish) onfinish({
        target: new Tween(this, "opacity", opacity, opacity, duration, ease)
    });
    return this
};
DisplayObject.prototype.fadeBy = function(opacity, duration, ease, onfinish, onchange) {
    var val = Math.max(0, Math.min(1, this.opacity + opacity));
    return this.fadeTo(val, duration, ease, onfinish, onchange)
};
DisplayObject.prototype.rotateTo = function(rotation, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    t = null;
    if (duration <= 0) this.rotation = rotation;
    else {
        t = this.addTween("rotation", rotation, duration, ease, onfinish, onchange);
        if (t) t.play()
    }
    if (!t && onfinish) onfinish({
        target: new Tween(this, "rotation", rotation, rotation, duration, ease)
    });
    return this
};
DisplayObject.prototype.rotateBy = function(rotation, duration, ease, onfinish, onchange) {
    return this.rotateTo(this.rotation + rotation, duration, ease, onfinish, onchange)
};
DisplayObject.prototype.skewXTo = function(skew, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    var t = null;
    if (duration <= 0) this.skewX = skew;
    else {
        t = this.addTween("skewX", skew, duration, ease, onfinish, onchange);
        if (t) t.play()
    }
    if (!t && onfinish) onfinish({
        target: new Tween(this, "skewX", skew, skew, duration, ease)
    });
    return this
};
DisplayObject.prototype.skewXBy = function(skew, duration, ease, onfinish, onchange) {
    return this.skewXTo(this.skewX + skew, duration, ease, onfinish, onchange)
};
DisplayObject.prototype.skewYTo = function(skew, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    var t = null;
    if (duration <= 0) this.skewY = skew;
    else {
        t = this.addTween("skewY", skew, duration, ease, onfinish, onchange);
        if (t) t.play()
    }
    if (!t && onfinish) onfinish({
        target: new Tween(this, "skewY", skew, skew, duration, ease)
    });
    return this
};
DisplayObject.prototype.skewYBy = function(skew, duration, ease, onfinish, onchange) {
    return this.skewYTo(this.skewY + skew, duration, ease, onfinish, onchange)
};
DisplayObject.prototype.scaleTo = function(scale, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    if (duration <= 0) {
        this.scaleX = this.scaleY = scale;
        if (onfinish) onfinish({
            target: new Tween(this, "scaleY", scale, scale, duration, ease)
        });
        return this
    }
    var t = [];
    if (this.scaleX != scale) {
        var tween = this.addTween("scaleX", scale, duration, ease);
        if (tween) t.push(tween)
    }
    if (this.scaleY != scale) {
        var tween = this.addTween("scaleY", scale, duration, ease);
        if (tween) t.push(tween)
    }
    var len = t.length;
    if (len > 0) {
        t[len - 1].onchange = onchange;
        t[len - 1].onfinish = onfinish;
        for (var i = 0; i < len; i++) t[i].play()
    } else if (onfinish) onfinish({
        target: new Tween(this, "scaleY", scale, scale, duration, ease)
    });
    return this
};
DisplayObject.prototype.setZIndex = function(z) {
    this.zIndex = ~~z;
    if (!this.parent) return;
    this.parent.setChildZIndex(this, this.zIndex)
};
DisplayObject.prototype.hitTestPoint = function(x, y, checkPixel, checkDragged, debug) {
    if (!this.stage) return false;
    return this.stage.hitTestPointObject(this, x, y, checkPixel, checkDragged, debug)
};
DisplayObject.prototype.setRelativePosition = function(x, y, leftAnchor, topAnchor) {
    x = x || 0;
    y = y || 0;
    switch (leftAnchor) {
    case "right":
        x = this.stage.screenWidth - x;
        break;
    case "left":
        break;
    default:
        x = this.stage.screenWidth / 2 + x;
        break
    }
    switch (topAnchor) {
    case "bottom":
        y = this.stage.screenHeight - y;
        break;
    case "top":
        break;
    default:
        y = this.stage.screenHeight / 2 + y;
        break
    }
    this.setPosition(x, y)
};
DisplayObject.prototype.debugDraw = function() {
    if (!this.visible) return;
    if (!this.allowDebugDrawing) return;
    var a = this.getAbsolutePosition(),
    c = this.getCenter(),
    r = this.getDrawRectangle(),
    aabb = this.getAABBRectangle();
    stage.drawCircle(a.x, a.y, 1, 1, "rgba(255,0,0,0.9)");
    stage.drawCircle(c.x, c.y, 1, 1, "rgba(0,255,0,0.9)");
    stage.drawLine(a.x, a.y, c.x, c.y, 1, "rgba(255,255,255,0.5)");
    stage.drawPolygon(r.vertices, .5, "rgba(255,0,255,0.5)", 1);
    stage.drawLine(aabb.vertices[0].x, aabb.vertices[0].y, aabb.vertices[2].x, aabb.vertices[2].y, 1, "rgba(255,255,255,0.5)");
    stage.drawLine(aabb.vertices[2].x, aabb.vertices[0].y, aabb.vertices[0].x, aabb.vertices[2].y, 1, "rgba(255,255,255,0.5)");
    stage.drawPolygon(aabb.vertices, .5, "rgba(255,255,255,0.5)")
};
DisplayObject.prototype.fixChildrenParent = function(parent) {
    for (var i = 0; i < this.objects.length; i++) {
        this.objects[i].parent = this;
        this.objects[i].fixChildrenParent()
    }
};
DisplayObject.prototype.clone = function() {
    var clone = Utils.clone(this);
    clone.fixChildrenParent();
    return clone
};
function Graphics() {
    Utils.callSuperConstructor(Graphics, this)
}
Utils.extend(Graphics, DisplayObject);
Graphics.prototype.x = 0;
Graphics.prototype.y = 0;
Graphics.prototype.color = "#000";
Graphics.prototype.lineWidth = 1;
Graphics.prototype.render = function(cns, drawStatic, delta) {
    if ( !! this.static == !!drawStatic && this.hasEventListener("render")) this.dispatchEvent("render", {
        target: this,
        canvas: cns,
        delta: delta
    });
    Utils.callSuperMethod(Graphics, this, "render", cns, drawStatic, delta)
};
Graphics.prototype.preparePath = function(cns) {
    this.moveCanvasAnchor(cns);
    this.prepareCanvasShadow(cns);
    cns.ctx.beginPath();
    cns.ctx.strokeStyle = this.lineWidth > 0 ? this.color: "transparent";
    cns.ctx.lineWidth = this.lineWidth * Utils.globalScale;
    cns.ctx.globalAlpha = this.getAbsoluteOpacity();
    cns.ctx.fillStyle = this.getFillStyle(cns)
};
Graphics.prototype.finalizeCanvas = function(cns) {
    if (this.fillColor || this.fillLinearGradient || this.fillRadialGradient || this.fillPattern) cns.ctx.fill();
    cns.ctx.stroke();
    this.restoreCanvasShadow(cns);
    this.moveCanvasAnchor(cns, true)
};
Graphics.prototype.resetView = function() {
    this.color = "transparent";
    this.fillColor = null;
    this.fillLinearGradient = null;
    this.fillRadialGradient = null;
    this.fillPattern = null
};
Graphics.circle = function(x, y, radius) {
    Utils.callSuperConstructor(Graphics.circle, this);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.width = radius * 2;
    this.height = radius * 2
};
Utils.extend(Graphics.circle, Graphics);
Graphics.circle.prototype.render = function(cns, drawStatic, delta) {
    this.prepareCanvas(cns);
    if ( !! this.static == !!drawStatic && this.opacity != 0) {
        this.preparePath(cns);
        cns.ctx.arc(0, 0, this.radius * Utils.globalScale, 0, Math.PI * 2);
        this.finalizeCanvas(cns)
    }
    Utils.callSuperMethod(Graphics.circle, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
Graphics.line = function(x1, y1, x2, y2) {
    Utils.callSuperConstructor(Graphics.line, this);
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2
};
Utils.extend(Graphics.line, Graphics);
Graphics.line.prototype.render = function(cns, drawStatic, delta) {
    this.prepareCanvas(cns);
    if ( !! this.static == !!drawStatic && this.opacity != 0) {
        this.preparePath(cns);
        cns.ctx.moveTo(this.x1 * Utils.globalScale, this.y1 * Utils.globalScale);
        cns.ctx.lineTo(this.x2 * Utils.globalScale, this.y2 * Utils.globalScale);
        this.finalizeCanvas(cns)
    }
    Utils.callSuperMethod(Graphics.line, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
Graphics.rectangle = function(x, y, width, height) {
    Utils.callSuperConstructor(Graphics.rectangle, this);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
};
Utils.extend(Graphics.rectangle, Graphics);
Graphics.rectangle.prototype.render = function(cns, drawStatic, delta) {
    this.prepareCanvas(cns);
    if ( !! this.static == !!drawStatic && this.opacity != 0) {
        this.preparePath(cns);
        cns.ctx.rect( - this.width / 2 * Utils.globalScale, -this.height / 2 * Utils.globalScale, this.width * Utils.globalScale, this.height * Utils.globalScale);
        this.finalizeCanvas(cns)
    }
    Utils.callSuperMethod(Graphics.rectangle, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
Graphics.arc = function(x, y, radius, startAngle, endAngle, antiClockWise) {
    Utils.callSuperConstructor(Graphics.arc, this);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.antiClockWise = antiClockWise;
    this.width = radius * 2;
    this.height = radius * 2
};
Utils.extend(Graphics.arc, Graphics);
Graphics.arc.prototype.render = function(cns, drawStatic, delta) {
    this.prepareCanvas(cns);
    if ( !! this.static == !!drawStatic && this.opacity != 0) {
        this.preparePath(cns);
        cns.ctx.arc(0, 0, this.radius * Utils.globalScale, this.startAngle, this.endAngle, this.antiClockWise);
        this.finalizeCanvas(cns)
    }
    Utils.callSuperMethod(Graphics.arc, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
Graphics.polygon = function(points) {
    if (!points || points.length < 2) throw Error("Invalid parameters");
    Utils.callSuperConstructor(Graphics.polygon, this);
    this.points = points;
    var minX = Number.MAX_VALUE;
    var minY = Number.MAX_VALUE;
    var maxX = Number.MIN_VALUE;
    var maxY = Number.MIN_VALUE;
    for (var i = 0; i < points.length; i++) {
        if (points[i].x < minX) minX = points[i].x;
        if (points[i].y < minY) minY = points[i].y;
        if (points[i].x > maxX) maxX = points[i].x;
        if (points[i].y > maxY) maxY = points[i].y
    }
    this.width = maxX - minX;
    this.height = maxY - minY
};
Utils.extend(Graphics.polygon, Graphics);
Graphics.polygon.prototype.render = function(cns, drawStatic, delta) {
    this.prepareCanvas(cns);
    if ( !! this.static == !!drawStatic && this.opacity != 0) {
        this.preparePath(cns);
        cns.ctx.moveTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        for (var i = 1; i < this.points.length; i++) cns.ctx.lineTo(this.points[i].x * Utils.globalScale, this.points[i].y * Utils.globalScale);
        cns.ctx.lineTo(this.points[0].x * Utils.globalScale, this.points[0].y * Utils.globalScale);
        this.finalizeCanvas(cns)
    }
    Utils.callSuperMethod(Graphics.polygon, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
Graphics.text = function(x, y, text) {
    Utils.callSuperConstructor(Graphics.text, this);
    this.x = x;
    this.y = y;
    this.text = text;
    this.align = Graphics.text.ALIGN_LEFT;
    this.valign = Graphics.text.VALIGN_MIDDLE;
    this.style = "normal";
    this.size = 10;
    this.font = "sans-serif"
};
Utils.extend(Graphics.text, Graphics);
Graphics.text.ALIGN_LEFT = "left";
Graphics.text.ALIGN_CENTER = "center";
Graphics.text.ALIGN_RIGHT = "right";
Graphics.text.VALIGN_TOP = "top";
Graphics.text.VALIGN_MIDDLE = "middle";
Graphics.text.VALIGN_BOTTOM = "bottom";
Graphics.text.prototype.getRect = function(cns) {
    return cns.ctx.measureText(this.text)
};
Graphics.text.prototype.render = function(cns, drawStatic, delta) {
    this.prepareCanvas(cns);
    if ( !! this.static == !!drawStatic && this.opacity != 0) {
        this.preparePath(cns);
        cns.ctx.font = this.style + " " + Math.floor(this.size * Utils.globalScale) + "px " + this.font;
        cns.ctx.textAlign = this.align;
        cns.ctx.textBaseline = this.valign;
        if (this.fillColor) cns.ctx.fillText(this.text, 0, 0);
        cns.ctx.strokeText(this.text, 0, 0);
        this.finalizeCanvas(cns)
    }
    Utils.callSuperMethod(Graphics.text, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
Graphics.free = function() {
    this.commands = [];
    Utils.callSuperConstructor(Graphics.free, this)
};
Utils.extend(Graphics.free, Graphics);
Graphics.free.prototype.clear = function() {
    this.commands = [];
    Utils.callSuperMethod(Graphics.free, this, "clear")
};
Graphics.free.prototype.beginPath = function() {
    this.commands.push({
        command: "beginPath"
    });
    return this
};
Graphics.free.prototype.stroke = function() {
    this.commands.push({
        command: "stroke"
    });
    return this
};
Graphics.free.prototype.setStrokeStyle = function(style) {
    this.commands.push({
        command: "setStrokeStyle",
        style: style
    });
    return this
};
Graphics.free.prototype.setFillStyle = function(style) {
    this.commands.push({
        command: "setFillStyle",
        style: style
    });
    return this
};
Graphics.free.prototype.fill = function() {
    this.commands.push({
        command: "fill"
    });
    return this
};
Graphics.free.prototype.moveTo = function(x, y) {
    this.commands.push({
        command: "moveTo",
        x: x,
        y: y
    });
    return this
};
Graphics.free.prototype.lineTo = function(x, y) {
    this.commands.push({
        command: "lineTo",
        x: x,
        y: y
    });
    return this
};
Graphics.free.prototype.arc = function(x, y, radius, startAngle, endAngle, antiClockWise) {
    this.commands.push({
        command: "arc",
        x: x,
        y: y,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle,
        antiClockWise: antiClockWise
    });
    return this
};
Graphics.free.prototype.circle = function(x, y, radius) {
    this.commands.push({
        command: "circle",
        x: x,
        y: y,
        radius: radius
    });
    return this
};
Graphics.free.prototype.rect = function(x, y, width, height) {
    this.commands.push({
        command: "circle",
        x: x,
        y: y,
        width: width,
        height: height
    });
    return this
};
Graphics.free.prototype.polygon = function(points) {
    this.commands.push({
        command: "polygon",
        points: points
    });
    return this
};
Graphics.free.prototype.executeCommand = function(cns, c) {
    switch (c.command) {
    case "beginPath":
        cns.ctx.beginPath();
        break;
    case "stroke":
        cns.ctx.stroke();
        break;
    case "fill":
        cns.ctx.fill();
        break;
    case "setStrokeStyle":
        cns.ctx.strokeStyle = this.lineWidth > 0 ? c.style: "transparent";
        break;
    case "setFillStyle":
        cns.ctx.fillStyle = c.style;
        break;
    case "moveTo":
        cns.ctx.moveTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
        break;
    case "lineTo":
        cns.ctx.lineTo(c.x * Utils.globalScale, c.y * Utils.globalScale);
        break;
    case "arc":
        cns.ctx.arc(c.x * Utils.globalScale, c.y * Utils.globalScale, c.radius * Utils.globalScale, c.startAngle, c.endAngle, c.antiClockWise);
        break;
    case "circle":
        cns.ctx.arc(c.x * Utils.globalScale, c.y * Utils.globalScale, c.radius * Utils.globalScale, 0, Math.PI * 2);
        break;
    case "rect":
        cns.ctx.rect((c.x - c.width / 2) * Utils.globalScale, (c.y - c.height / 2) * Utils.globalScale, c.width * Utils.globalScale, c.height * Utils.globalScale);
        break;
    case "polygon":
        cns.ctx.moveTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale);
        for (var n = 1; n < c.points.length; n++) cns.ctx.lineTo(c.points[n].x * Utils.globalScale, c.points[n].y * Utils.globalScale);
        cns.ctx.lineTo(c.points[0].x * Utils.globalScale, c.points[0].y * Utils.globalScale);
        break
    }
};
Graphics.free.prototype.executeCommands = function(cns) {
    for (var i = 0; i < this.commands.length; i++) this.executeCommand(cns, this.commands[i])
};
Graphics.free.prototype.render = function(cns, drawStatic, delta) {
    this.prepareCanvas(cns);
    if ( !! this.static == !!drawStatic && this.opacity != 0) {
        this.preparePath(cns);
        this.executeCommands(cns);
        this.finalizeCanvas(cns)
    }
    Utils.callSuperMethod(Graphics.free, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
var BitmapsCache = {};
BitmapsCache.bitmaps = {};
BitmapsCache.cache = function(bitmap) {
    if (!bitmap || !(bitmap instanceof Image)) return bitmap;
    if (BitmapsCache.bitmaps[bitmap.src]) return BitmapsCache.bitmaps[bitmap.src];
    cns = document.createElement("canvas");
    cns.width = bitmap.width;
    cns.height = bitmap.height;
    ctx = cns.getContext("2d");
    ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, bitmap.width, bitmap.height);
    BitmapsCache.bitmaps[bitmap.src] = cns;
    return cns
};
function Sprite(img, w, h, f, l) {
    Utils.callSuperConstructor(Sprite, this);
    this.offset = {
        left: 0,
        top: 0
    };
    this.width = w;
    this.height = h;
    this.totalFrames = Math.max(1, ~~f);
    if (this.totalFrames <= 1) this.animated = false;
    this.totalLayers = Math.max(1, ~~l);
    this.bitmap = img;
    this.changeFrameDelay = Sprite.CHANGE_FRAME_DELAY;
    this.cacheBitmap = Sprite.CACHE_BITMAPS
}
Utils.extend(Sprite, DisplayObject);
Sprite.prototype.animated = true;
Sprite.prototype.animDirection = 1;
Sprite.prototype.currentFrame = 0;
Sprite.prototype.totalFrames = 1;
Sprite.prototype.currentLayer = 0;
Sprite.prototype.totalLayers = 1;
Sprite.prototype.bitmap = null;
Sprite.prototype.mask = null;
Sprite.prototype.isMask = false;
Sprite.prototype.maskParent = null;
Sprite.prototype.maskInvert = false;
Sprite.prototype.animStep = 0;
Sprite.prototype.animDelay = 1;
Sprite.prototype.changeFrameDelay = 1E3 / 24;
Sprite.prototype.changeFrameTime = 0;
Sprite.prototype.onchangeframe = null;
Sprite.prototype.cacheBitmap = false;
Sprite.create = function(asset, library) {
    if (typeof asset == "string") {
        library = library || window["library"];
        if (!library) throw new Error("Could not create sprite from asset '%s'. Library not found.", asset);
        asset = library.getAsset(asset)
    }
    return new Sprite(asset.bitmap, asset.width || 1, asset.height || 1, asset.frames || 1, asset.layers || 1)
};
Sprite.prototype.play = function() {
    this.animated = true
};
Sprite.prototype.stop = function() {
    this.animated = false
};
Sprite.prototype.gotoAndStop = function(frame) {
    this.currentFrame = frame;
    this.stop()
};
Sprite.prototype.gotoAndPlay = function(frame) {
    this.currentFrame = frame;
    this.play()
};
Sprite.prototype.nextFrame = function(delta) {
    if (this.hasEventListener("enterframe")) this.dispatchEvent("enterframe", {
        target: this,
        delta: delta
    });
    var changeFramesCount = 1;
    if (Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
        this.changeFrameTime += delta;
        if (this.changeFrameTime >= this.changeFrameDelay * this.animDelay) {
            changeFramesCount = Math.floor(this.changeFrameTime / (this.changeFrameDelay * this.animDelay));
            this.changeFrameTime -= Math.abs(changeFramesCount) * this.changeFrameDelay * this.animDelay
        } else return
    } else this.animStep++;
    if (this.animStep >= this.animDelay || Sprite.CHANGE_FRAME_TYPE == Sprite.CHANGE_FRAME_BY_TIME) {
        for (var i = 0; i < changeFramesCount; i++) {
            if (this.animated) this.currentFrame += this.animDirection;
            if (this.animDirection > 0 && this.currentFrame >= this.totalFrames) this.currentFrame = 0;
            if (this.animDirection < 0 && this.currentFrame < 0) this.currentFrame = this.totalFrames - 1;
            if (this.hasEventListener("changeframe")) this.dispatchEvent("changeframe", {
                target: this,
                delta: delta
            })
        }
        this.animStep = 0
    }
};
Sprite.prototype.setMask = function(mask) {
    this.mask = mask;
    this.mask.isMask = true;
    this.mask.stage = this.stage;
    this.mask.maskParent = this
};
Sprite.prototype.renderBack = function(cns, fill, w, h) {
    if (fill) {
        cns.ctx.save();
        cns.ctx.translate( - (w / 2), -(h / 2));
        cns.ctx.fillStyle = fill;
        cns.ctx.strokeStyle = fill;
        cns.ctx.fillRect(0, 0, w, h);
        cns.ctx.restore()
    }
};
Sprite.prototype.renderBitmap = function(cns, w, h, getRect) {
    if (this.bitmap) {
        var iw = this.bitmap.width,
        ih = this.bitmap.height;
        var fx = this.currentLayer * w + this.offset.left * Utils.globalScale,
        fy = this.currentFrame * h + this.offset.top * Utils.globalScale;
        if (fx < 0) fx = 0;
        if (fy < 0) fy = 0;
        if (fx < iw && fy < ih) {
            var fw = w,
            fh = h;
            if (fx + fw > iw) fw = iw - fx;
            if (fy + fh > ih) fh = ih - fy;
            if (Sprite.FLOOR_VALUES_ON_RENDER) {
                fx = ~~fx;
                fy = ~~fy;
                fw = ~~fw;
                fh = ~~fh;
                w = ~~w;
                h = ~~h
            }
            if (fw > 0 && fh > 0 && w > 0 && h > 0) cns.ctx.drawImage(this.cacheBitmap ? BitmapsCache.cache(this.bitmap) : this.bitmap, fx, fy, fw, fh, -w / 2, -h / 2, w, h);
            if (getRect) return {
                x: fx,
                y: fy,
                width: fw,
                height: fh
            }
        }
    }
    if (getRect) return {
        x: 0,
        y: 0,
        width: w,
        height: h
    }
};
Sprite.prototype.render = function(cns, drawStatic, delta, drawMask) {
    if (this.isMask && !drawMask) return;
    if (!delta) delta = 0;
    var isRender = !!this.static == !!drawStatic;
    if (isRender) this.nextFrame(delta);
    if (!this.stage) return;
    this.prepareCanvas(cns);
    if (isRender) if (this.visible && this.opacity != 0) if (!this.hasEventListener("prerender") || this.dispatchEvent("prerender", {
        target: this,
        canvas: cns,
        delta: delta
    }) !== false) {
        this.moveCanvasAnchor(cns);
        var ow = this.width * Utils.globalScale,
        oh = this.height * Utils.globalScale,
        fill = this.getFillStyle(cns);
        this.prepareCanvasShadow(cns);
        if (this.ceilSizes) {
            ow = Math.ceil(ow);
            oh = Math.ceil(oh)
        }
        if (this.mask) {
            this.stage.buffer.width = this.stage.buffer.width;
            this.stage.buffer.ctx.save();
            this.stage.buffer.ctx.translate(ow / 2, oh / 2);
            this.renderBack(this.stage.buffer, fill, ow, oh);
            var rect = this.renderBitmap(this.stage.buffer, ow, oh, true);
            this.stage.buffer.ctx.globalCompositeOperation = this.maskInvert ? "destination-out": "destination-in";
            if (this.mask.render) this.mask.render(this.stage.buffer, drawStatic, delta, true);
            else this.stage.buffer.ctx.drawImage(this.mask, this.mask.x ? this.mask.x: 0, this.mask.y ? this.mask.y: 0);
            if (Sprite.FLOOR_VALUES_ON_RENDER) cns.ctx.drawImage(this.stage.buffer, 0, 0, rect.width, rect.height, -Math.floor(ow / 2), -Math.floor(oh / 2), ~~ow, ~~oh);
            else cns.ctx.drawImage(this.stage.buffer, 0, 0, rect.width, rect.height, ox, oy, ow, oh);
            this.stage.buffer.ctx.restore()
        } else {
            this.renderBack(cns, fill, ow, oh);
            this.renderBitmap(cns, ow, oh)
        }
        if (this.stage.allowDebugDrawing && this.allowDebugDrawing) if (this.stage.allowStaticDebugDrawing || !this.static) this.debugDraw();
        if (this.hasEventListener("render")) this.dispatchEvent("render", {
            target: this,
            canvas: cns,
            delta: delta
        });
        this.restoreCanvasShadow(cns);
        this.moveCanvasAnchor(cns, true)
    }
    Utils.callSuperMethod(Sprite, this, "render", cns, drawStatic, delta);
    this.restoreCanvas(cns)
};
Sprite.prototype.resetView = function() {
    this.bitmap = null;
    this.fillColor = null;
    this.fillLinearGradient = null;
    this.fillRadialGradient = null;
    this.fillPattern = null;
    for (var i = 0; i < this.objects.length; i++) if (this.objects[i].resetView) this.objects[i].resetView()
};
Sprite.CHANGE_FRAME_BY_FRAME = 0;
Sprite.CHANGE_FRAME_BY_TIME = 1;
Sprite.CHANGE_FRAME_DELAY = 1E3 / 24;
Sprite.CHANGE_FRAME_TYPE = Sprite.CHANGE_FRAME_BY_FRAME;
Sprite.FLOOR_VALUES_ON_RENDER = true;
Sprite.CACHE_BITMAPS = false;
function StageTimer(onend, timeout, repeat) {
    Utils.callSuperConstructor(StageTimer, this);
    this.repeat = repeat;
    this.initialTimeout = timeout;
    this.timeout = timeout;
    this.onend = onend;
    this.ontick = null;
    this.destroy = false;
    this.newly = true;
    this.paused = false
}
Utils.extend(StageTimer, EventsProxy);
StageTimer.prototype.update = function(delta) {
    if (this.destroy) return true;
    if (this.paused) return false;
    if (StageTimer.TIMEOUT_TYPE == StageTimer.TIMEOUT_BY_FRAME) this.timeout--;
    else this.timeout -= delta;
    if (this.timeout <= 0) {
        if (typeof this.onend == "string") eval(this.onend);
        else if (this.hasEventListener("end")) this.dispatchEvent("end", {
            target: this
        });
        if (this.repeat) this.rewind();
        else return true
    }
    if (this.hasEventListener("tick")) this.dispatchEvent("tick", {
        target: this,
        delta: delta
    });
    return false
};
StageTimer.prototype.rewind = function() {
    this.timeout = this.initialTimeout
};
StageTimer.prototype.resume = function() {
    this.paused = false
};
StageTimer.prototype.pause = function() {
    this.paused = true
};
StageTimer.TIMEOUT_BY_FRAME = 0;
StageTimer.TIMEOUT_BY_TIME = 1;
StageTimer.TIMEOUT_TYPE = StageTimer.TIMEOUT_BY_FRAME;
function Stage(canvas, w, h) {
    Utils.callSuperConstructor(Stage, this);
    this.canvas = null;
    if (canvas) {
        this.canvas = typeof canvas == "string" ? document.getElementById(canvas) : canvas;
        this.canvas.ctx = this.canvas.getContext("2d")
    }
    this.backgroundCanvas = null;
    this.needToRebuildBack = false;
    this.screenWidth = w;
    this.screenHeight = h;
    this.viewport = {
        x: 0,
        y: 0
    };
    this.buffer = null;
    try {
        this.buffer = document.createElement("canvas");
        this.buffer.width = w * Utils.globalScale;
        this.buffer.height = h * Utils.globalScale;
        this.buffer.ctx = this.buffer.getContext("2d")
    } catch(e) {
        this.buffer = this.canvas
    }
    this.delay = 40;
    this.started = false;
    this.fps = 0;
    this.lastFPS = 0;
    this.showFPS = false;
    this.pixelClickEvent = false;
    this.pixelMouseUpEvent = false;
    this.pixelMouseDownEvent = false;
    this.pixelMouseMoveEvent = false;
    this.ceilSizes = false;
    this.tmMain = null;
    this.tmFPS = null;
    this.clearLock = false;
    this.allowDebugDrawing = false;
    this.allowStaticDebugDrawing = false;
    this.drawBackAlways = Utils.mobileCheckBrokenAndroid();
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.lastTick = 0;
    this.inputController = null;
    this.onpretick = null;
    this.prerender = null;
    this.onposttick = null;
    this.onmousedown = null;
    this.onmouseup = null;
    this.onclick = null;
    this.oncontextmenu = null;
    this.onmousemove = null;
    if (this.canvas) this.addInputListeners(this.canvas);
    this.tick = Utils.proxy(this.tick, this);
    this.clearFPS = Utils.proxy(this.clearFPS, this);
    this.stage = this;
    this.drawScene = this.render
}
Utils.extend(Stage, DisplayObjectContainer);
Stage.prototype.refreshBackground = function() {
    this.needToRebuildBack = true
};
Stage.prototype.setBackgroundCanvas = function(canvas) {
    if (canvas) {
        this.backgroundCanvas = typeof canvas == "string" ? document.getElementById(canvas) : canvas;
        this.backgroundCanvas.ctx = this.backgroundCanvas.getContext("2d")
    }
};
Stage.prototype.destroy = function() {
    clearTimeout(this.tmMain);
    clearTimeout(this.tmFPS);
    this.stop();
    this.clear();
    this.clearScreen(this.canvas);
    if (this.backgroundCanvas) this.clearScreen(this.backgroundCanvas);
    this.removeInputListeners(this.stage)
};
Stage.prototype.clearScreen = function(canvas) {
    if (!this.clearLock) canvas.ctx.clearRect(0, 0, Math.floor(canvas.width), Math.floor(canvas.height))
};
Stage.prototype.addChild = function(item) {
    item.stage = this;
    return Utils.callSuperMethod(Stage, this, "addChild", item)
};
Stage.prototype.setZIndex = function(item, index) {
    this.setChildZIndex(item, index)
};
Stage.prototype.finalizeMouseCoords = function(obj, m) {
    if (!obj) return m;
    var eX = this.prepareMouseCoord(m.x);
    var eY = this.prepareMouseCoord(m.y);
    if (!obj.getIgnoreViewport()) {
        eX += this.viewport.x;
        eY += this.viewport.y
    }
    var p = obj.getAbsolutePosition();
    eX = eX - p.x;
    eY = eY - p.y;
    return {
        x: eX,
        y: eY
    }
};
Stage.prototype.prepareMouseCoord = function(val) {
    return val / Utils.globalScale / Utils.globalPixelScale
};
Stage.prototype.processMouseEvent = function(event, type, pixelCheck) {
    var m = Utils.getMouseCoord(event, this.inputController);
    var stack = this.getObjectsStackByCoord(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y), pixelCheck, false);
    var ret, f;
    for (var i = 0; i < stack.length; i++) {
        f = this.finalizeMouseCoords(stack[i], m);
        if (stack[i].hasEventListener(type)) ret = stack[i].dispatchEvent(type, {
            target: stack[i],
            x: f.x,
            y: f.y
        });
        if (ret === false) return
    }
    if (this.hasEventListener(type)) this.dispatchEvent(type, {
        target: this,
        x: Math.floor(this.prepareMouseCoord(m.x)),
        y: Math.floor(this.prepareMouseCoord(m.y))
    })
};
Stage.prototype.checkClick = function(event) {
    this.processMouseEvent(event, "click", this.pixelClickEvent)
};
Stage.prototype.checkContextMenu = function(event) {
    this.processMouseEvent(event, "contextmenu", this.pixelClickEvent)
};
Stage.prototype.checkMouseMove = function(event) {
    var m = Utils.getMouseCoord(event, this.inputController);
    this.doDrag(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y));
    var stack = this.getObjectsStackByCoord(this.prepareMouseCoord(m.x), this.prepareMouseCoord(m.y), this.pixelMouseMoveEvent);
    var i, n, ret, bOk, f, overStack = [];
    if (stack.length > 0) {
        for (i = 0; i < stack.length; i++) {
            overStack.push(stack[i]);
            f = this.finalizeMouseCoords(stack[i], m);
            if (stack[i].hasEventListener("mousemove")) ret = stack[i].dispatchEvent("mousemove", {
                target: stack[i],
                x: f.x,
                y: f.y
            });
            if (ret === false) break
        }
        if (ret !== false && this.hasEventListener("mousemove")) this.dispatchEvent("mousemove", {
            target: this,
            x: Math.floor(this.prepareMouseCoord(m.x)),
            y: Math.floor(this.prepareMouseCoord(m.y))
        });
        ret = true;
        for (i = 0; i < overStack.length; i++) {
            f = this.finalizeMouseCoords(overStack[i], m);
            if (!overStack[i].mouseOn && overStack[i].hasEventListener("mouseover")) ret = overStack[i].dispatchEvent("mouseover", {
                target: overStack[i],
                x: f.x,
                y: f.y
            });
            overStack[i].mouseOn = true;
            if (ret === false) {
                overStack = overStack.slice(0, i + 1);
                break
            }
        }
    }
    this.checkMouseOut(overStack, m)
};
Stage.prototype.checkMouseDown = function(event) {
    this.processMouseEvent(event, "mousedown", this.pixelMouseDownEvent)
};
Stage.prototype.checkMouseUp = function(event) {
    this.processMouseEvent(event, "mouseup", this.pixelMouseUpEvent)
};
Stage.prototype.clear = function() {
    this.tweens = [];
    this.timers = [];
    this.eventsListeners = [];
    this.objectsCounter = 0;
    Utils.callSuperMethod(Stage, this, "clear")
};
Stage.prototype.getCenter = function() {
    return {
        x: this.screenWidth / 2,
        y: this.screenHeight / 2
    }
};
Stage.prototype.prepareCanvasToGraph = function(cns) {
    cns.ctx.save();
    cns.ctx.setTransform(1, 0, 0, 1, 0, 0);
    cns.ctx.globalAlpha = 1
};
Stage.prototype.drawRectangle = function(x, y, width, height, color, fill, opacity, ignoreViewport) {
    var cns = this.canvas;
    this.prepareCanvasToGraph(cns);
    if (typeof opacity != "undefined") cns.ctx.globalAlpha = opacity;
    else cns.ctx.globalAlpha = 1;
    cns.ctx.fillStyle = color;
    cns.ctx.strokeStyle = color;
    if (!ignoreViewport) {
        x -= this.viewport.x;
        y -= this.viewport.y
    }
    x = x * Utils.globalScale;
    y = y * Utils.globalScale;
    width = width * Utils.globalScale;
    height = height * Utils.globalScale;
    if (fill) cns.ctx.fillRect(x - width / 2, y - height / 2, width, height);
    else cns.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
    cns.ctx.restore()
};
Stage.prototype.drawCircle = function(x, y, radius, width, color, opacity, ignoreViewport) {
    this.drawArc(x, y, radius, 0, Math.PI * 2, false, width, color, opacity, ignoreViewport)
};
Stage.prototype.drawArc = function(x, y, radius, startAngle, endAngle, anticlockwise, width, color, opacity, ignoreViewport) {
    var cns = this.canvas;
    this.prepareCanvasToGraph(cns);
    var oldLW = cns.ctx.lineWidth;
    if (typeof color == "undefined") color = "#000";
    cns.ctx.strokeStyle = color;
    if (typeof width == "undefined") width = 1;
    cns.ctx.lineWidth = width * Utils.globalScale;
    if (typeof opacity == "undefined") opacity = 1;
    cns.ctx.globalAlpha = opacity;
    if (!ignoreViewport) {
        x -= this.viewport.x;
        y -= this.viewport.y
    }
    x = x * Utils.globalScale;
    y = y * Utils.globalScale;
    radius = radius * Utils.globalScale;
    cns.ctx.beginPath();
    cns.ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    cns.ctx.stroke();
    cns.ctx.lineWidth = oldLW;
    cns.ctx.restore()
};
Stage.prototype.drawPolygon = function(points, width, color, opacity, ignoreViewport) {
    if (typeof points != "object" || !(points instanceof Array) || points.length < 2) return;
    for (var i = 0; i < points.length - 1; i++) this.drawLine(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y, width, color, opacity, ignoreViewport);
    this.drawLine(points[i].x, points[i].y, points[0].x, points[0].y, width, color, opacity, ignoreViewport)
};
Stage.prototype.drawLine = function(x1, y1, x2, y2, width, color, opacity, ignoreViewport) {
    var cns = this.canvas;
    this.prepareCanvasToGraph(cns);
    var oldLW = cns.ctx.lineWidth;
    if (color) cns.ctx.strokeStyle = color;
    else cns.ctx.strokeStyle = "#000";
    if (width) cns.ctx.lineWidth = width * Utils.globalScale;
    else cns.ctx.lineWidth = 1 * Utils.globalScale;
    if (opacity) cns.ctx.globalAlpha = opacity;
    else cns.ctx.globalAlpha = 1;
    if (!ignoreViewport) {
        x1 -= this.viewport.x;
        y1 -= this.viewport.y;
        x2 -= this.viewport.x;
        y2 -= this.viewport.y
    }
    x1 = x1 * Utils.globalScale;
    y1 = y1 * Utils.globalScale;
    x2 = x2 * Utils.globalScale;
    y2 = y2 * Utils.globalScale;
    cns.ctx.beginPath();
    cns.ctx.moveTo(x1, y1);
    cns.ctx.lineTo(x2, y2);
    cns.ctx.stroke();
    cns.ctx.lineWidth = oldLW;
    cns.ctx.restore()
};
Stage.prototype.start = function() {
    if (this.started) return;
    this.started = true;
    this.clearFPS();
    this.tick()
};
Stage.prototype.forceRender = function() {
    if (this.started) this.tick()
};
Stage.prototype.stop = function() {
    this.started = false
};
Stage.prototype.clearFPS = function() {
    this.lastFPS = this.fps;
    this.fps = 0;
    if (this.started) this.tmFPS = setTimeout(this.clearFPS, 1E3)
};
Stage.prototype.setTextStyle = function(font, size, style, color, borderColor, canvas) {
    var cns = canvas ? canvas: this.canvas;
    cns.ctx.fillStyle = color;
    cns.ctx.strokeStyle = borderColor;
    var s = "";
    if (style) s += style + " ";
    if (size) s += Math.floor(size * Utils.globalScale) + "px ";
    if (font) s += font;
    cns.ctx.font = s
};
Stage.prototype.drawText = function(text, x, y, opacity, ignoreViewport, alignCenter, canvas) {
    var cns = canvas ? canvas: this.canvas;
    if (typeof opacity == "undefined") cns.ctx.globalAlpha = 1;
    else cns.ctx.globalAlpha = opacity;
    if (!ignoreViewport) {
        x -= this.viewport.x;
        y -= this.viewport.y
    }
    x = x * Utils.globalScale;
    y = y * Utils.globalScale;
    if (alignCenter) x = x - this.getTextWidth(text) / 2;
    cns.ctx.fillText(text, x, y)
};
Stage.prototype.strokeText = function(text, x, y, opacity, ignoreViewport, alignCenter, canvas) {
    var cns = canvas ? canvas: this.canvas;
    if (typeof opacity == "undefined") cns.ctx.globalAlpha = 1;
    else cns.ctx.globalAlpha = opacity;
    if (!ignoreViewport) {
        x -= this.viewport.x;
        y -= this.viewport.y
    }
    x = x * Utils.globalScale;
    y = y * Utils.globalScale;
    if (alignCenter) x = x - this.getTextWidth(text) / 2;
    cns.ctx.strokeText(text, x, y)
};
Stage.prototype.getTextWidth = function(str, canvas) {
    var cns = canvas ? canvas: this.canvas;
    return cns.ctx.measureText(str).width
};
Stage.prototype.render = function(cns, drawStatic, noClear, delta) {
    if (!cns) return;
    if (!delta) delta = 0;
    var obj, ok;
    if (cns && !cns.ctx) cns.ctx = cns.getContext("2d");
    if (!noClear) {
        var fill = this.getFillStyle(cns);
        if (!fill) {
            if (!this.clearLock) this.clearScreen(cns)
        } else {
            cns.ctx.fillStyle = fill;
            cns.ctx.fillRect(0, 0, cns.width, cns.height)
        }
    }
    Utils.callSuperMethod(Stage, this, "render", cns, drawStatic, delta)
};
Stage.prototype.createTween = function(obj, prop, start, end, duration, ease) {
    var t = new Tween(obj, prop, start, end, duration, ease);
    this.tweens.push(t);
    return t
};
Stage.prototype.removeTween = function(t) {
    var id = null;
    if (isNaN(t)) for (var i = 0; i < this.tweens.length; i++) {
        if (this.tweens[i] === t) {
            id = i;
            break
        }
    } else id = t;
    if (!isNaN(id)) {
        if (this.tweens[id]) this.tweens[id].pause();
        this.tweens.splice(id, 1)
    }
    return id
};
Stage.prototype.clearObjectTweens = function(obj) {
    for (var i = 0; i < this.tweens.length; i++) if (this.tweens[i].obj === obj) this.tweens[i].destroy = true
};
Stage.prototype.updateTweens = function(delta) {
    var t;
    for (var i = 0; i < this.tweens.length; i++) {
        t = this.tweens[i];
        if (t.destroy) {
            i = this.removeTween(i);
            i--
        }
    }
    for (var i = 0; i < this.tweens.length; i++) {
        t = this.tweens[i];
        if (!t.newly && t.tick(delta)) t.destroy = true;
        t.newly = false
    }
};
Stage.prototype.setTimeout = function(callback, timeout) {
    var t = new StageTimer(callback, timeout);
    this.timers.push(t);
    return t
};
Stage.prototype.clearTimeout = function(t) {
    if (t) t.destroy = true
};
Stage.prototype.setInterval = function(callback, timeout) {
    var t = new StageTimer(callback, timeout, true);
    this.timers.push(t);
    return t
};
Stage.prototype.clearInterval = function(t) {
    this.clearTimeout(t)
};
Stage.prototype.removeTimer = function(t) {
    this.timers = Utils.removeFromArray(this.timers, t)
};
Stage.prototype.updateTimers = function(delta) {
    var t;
    for (var i = 0; i < this.timers.length; i++) {
        t = this.timers[i];
        if (t.destroy) {
            this.removeTimer(t);
            i--
        }
    }
    for (var i = 0; i < this.timers.length; i++) {
        t = this.timers[i];
        if (!t.newly && t.update(delta)) t.destroy = true;
        t.newly = false
    }
};
Stage.prototype.tick = function() {
    clearTimeout(this.tmMain);
    var d;
    if (Utils.isWindowHidden) {
        this.lastTick = 0;
        d = this.delay
    } else {
        var tmStart = (new Date).getTime();
        var delta = Math.min(Stage.MIN_DELTA, tmStart - this.lastTick);
        this.lastTick = tmStart;
        if (this.hasEventListener("pretick")) this.dispatchEvent("pretick", {
            target: this,
            delta: delta
        });
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTweens(delta);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        this.updateTimers(delta);
        if (!this.started) {
            this.lastTick = 0;
            return
        }
        if (this.hasEventListener("prerender")) this.dispatchEvent("prerender", {
            target: this,
            delta: delta
        });
        var noClear = false;
        if (this.drawBackAlways) {
            this.render(this.canvas, true, false, delta);
            noClear = true
        } else if (this.needToRebuildBack) {
            this.needToRebuildBack = false;
            if (this.backgroundCanvas) this.render(this.backgroundCanvas, true)
        }
        this.render(this.canvas, false, noClear, delta);
        if (this.showFPS) {
            this.setTextStyle("sans-serif", 10, "bold", "#fff", "#000");
            this.drawText("FPS: " + this.lastFPS, 2, 10, 1, true)
        }
        if (this.hasEventListener("posttick")) this.dispatchEvent("posttick", {
            target: this,
            delta: delta
        });
        d = (new Date).getTime() - tmStart;
        d = this.delay - d;
        if (d < 1) d = 1;
        this.fps++
    }
    if (this.started) this.tmMain = setTimeout(this.tick, d);
    else this.lastTick = 0
};
Stage.prototype.box2dSync = function(world) {
    var p;
    for (b = world.m_bodyList; b; b = b.m_next) if (b.sprite) {
        b.sprite.rotation = b.GetRotation();
        p = b.GetPosition();
        b.sprite.x = p.x;
        b.sprite.y = p.y;
        if (b.sprite.hasEventListener("box2dsync")) b.sprite.dispatchEvent("box2dsync", {
            target: b.sprite
        })
    }
};
Stage.prototype.processTouchEvent = function(touches, controller) {
    for (var i = 0; i < touches.length; i++) {
        var e = {
            clientX: touches[i].clientX,
            clientY: touches[i].clientY
        };
        this[controller](e)
    }
};
Stage.prototype.prepareEventTouches = function(event, type) {
    if (!event[type]) event[type] = [{
        clientX: event.clientX,
        clientY: event.clientY
    }];
    return event[type]
};
Stage.prototype.addInputListeners = function(obj) {
    this.inputController = obj;
    if (Utils.touchScreen) {
        obj["on" + Utils.getTouchStartEvent()] = Utils.proxy(function(event) {
            this.processTouchEvent(this.prepareEventTouches(event, "changedTouches"), "checkMouseDown");
            this.processTouchEvent(this.prepareEventTouches(event, "changedTouches"), "checkClick");
            event.preventDefault()
        },
        this);
        obj["on" + Utils.getTouchMoveEvent()] = Utils.proxy(function(event) {
            this.processTouchEvent(this.prepareEventTouches(event, "changedTouches"), "checkMouseMove");
            event.preventDefault()
        },
        this);
        obj["on" + Utils.getTouchEndEvent()] = Utils.proxy(function(event) {
            this.processTouchEvent(this.prepareEventTouches(event, "changedTouches"), "checkMouseUp");
            event.preventDefault()
        },
        this)
    } else {
        obj.onclick = Utils.proxy(function(event) {
            this.checkClick(event)
        },
        this);
        obj.onmousemove = Utils.proxy(function(event) {
            this.checkMouseMove(event)
        },
        this);
        obj.onmousedown = Utils.proxy(function(event) {
            if (event.button == 0) this.checkMouseDown(event)
        },
        this);
        obj.onmouseup = Utils.proxy(function(event) {
            if (event.button == 0) this.checkMouseUp(event)
        },
        this);
        obj.oncontextmenu = Utils.proxy(function(event) {
            this.checkContextMenu(event)
        },
        this)
    }
};
Stage.prototype.removeInputListeners = function(obj) {
    obj.ontouchstart = null;
    obj.ontouchmove = null;
    obj.ontouchend = null;
    obj.onmspointerdown = null;
    obj.onmspointermove = null;
    obj.onmspointerup = null;
    obj.onclick = null;
    obj.onmousemove = null;
    obj.onmousedown = null;
    obj.onmouseup = null;
    obj.oncontextmenu = null
};
Stage.MIN_DELTA = 1E3 / 2;
var ExternalAPI = {
    type: "default",
    init: function() {},
    exec: function() {
        var method = arguments[0];
        if (method == "exec" || typeof ExternalAPI[method] != "function") return;
        return ExternalAPI[method].apply(ExternalAPI, Utils.getFunctionArguments(arguments, 1))
    },
    check: function() {
        return false
    },
    openWidget: function() {},
    closeWidget: function() {},
    getMoreGamesURL: function(a, b) {
        return "#"
    },
    getPreloaderURL: function() {
        return "#"
    },
    showCopyright: function() {},
    isPortalEnvironment: function() {
        var href = window.location.href;
        return href.indexOf("http://www.zzfriend.com") == 0 || href.indexOf("http://www.zzfriend.com") == 0
    },
    isPlainPortalEnvironment: function() {
        if (!ExternalAPI.isPortalEnvironment()) return false;
        var GET = Utils.parseGet();
        return GET.external != "whitelabel"
    },
    showAds: function() {
        if (ExternalAPI.isPortalEnvironment()) if (window.Advertizing && window.Advertizing.show) Advertizing.show()
    },
    sendGAEvent: function(category, action, label, value) {
        if (ExternalAPI.isPlainPortalEnvironment() && window.ga) {
            if (!value) value = 0;
            ga("send", "event", category, action, label, value)
        }
    },
    openPlayMarket: function(id, label, campaign) {
        var url = "";
        url += "&referrer=utm_source%3D" + label;
        url += "%26utm_medium%3Dbutton%26utm_campaign%3D" + campaign;
        window.open(url, "_blank")
    },
    shareTwitter: function(text, locale) {
        if (!locale) locale = "en";
        var href = "";
        var w = window.open(href, "_blank");
        if (!w) window.location.href = href;
        else w.focus()
    },
    trackGameEvent: function(type, key) {
        var cnt = window._gameEventCounter || {};
        if (typeof cnt[type] == "undefined") cnt[type] = {};
        if (typeof cnt[type][key] == "undefined") cnt[type][key] = 1;
        ExternalAPI.exec("sendGAEvent", Utils.getGameID() || "Unknown_Game", type, key, cnt[type][key]++);
        window._gameEventCounter = cnt
    }
};
var TTLoader = {
    endCallback: null,
    loadedData: null,
    landscapeMode: false,
    skipPlayButton: false,
    create: function(callback, landscape, skipButton, disableLogoLink) {
        TTLoader.endCallback = callback;
        TTLoader.landscapeMode = landscape;
        TTLoader.skipPlayButton = skipButton;
        document.getElementById("progress_container").style.background = "#fff";
        document.getElementById("progress_container").style.zIndex = "1000";
        var c = document.getElementById("progress");
        c.setAttribute("valign", "top");
        c.style.verticalAlign = "top";
        c.style.background = "#fff";
        var d = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute("id", "tt_load_logo_c");
        var link = window.ExternalAPI ? ExternalAPI.exec("getPreloaderURL") : "#";
        var target = "_blank";
        if (!disableLogoLink && link) {
            var event = "click";
            if (Utils.touchScreen && !Utils.isWindowsPhone()) event = Utils.getTouchStartEvent();
            Utils.bindEvent(a, event,
            function() {
                var w = window.open(link, target);
                if (!w) window.location.href = href;
                else w.focus()
            })
        }
        a.setAttribute("href", "javascript:void(0)");
        a.setAttribute("target", "");
        var logo = new Image;
        logo.setAttribute("id", "tt_load_logo");
        logo.setAttribute("border", "");
        logo.src = TTLoader.logoSrc;
        logo.style.cursor = "pointer";
        a.appendChild(logo);
        d.appendChild(a);
        c.appendChild(d);
        var d = document.createElement("div");
        d.setAttribute("id", "tt_load_progress_cont");
        d.setAttribute("align", "left");
        d.setAttribute("style", "padding: 1px; border: 2px solid #e44d26; background: #fff");
        var d2 = document.createElement("div");
        d2.setAttribute("id", "tt_load_progress");
        d2.setAttribute("style", "width: 0px; background: #e44d26;");
        d2.innerHTML = "&nbsp;";
        d.appendChild(d2);
        c.appendChild(d);
        var d = document.createElement("div");
        d.setAttribute("id", "tt_load_play");
        var button = new Image;
        button.setAttribute("id", "tt_load_button");
        button.src = TTLoader.buttonDisabledSrc;
        button.style.visibility = TTLoader.skipPlayButton ? "hidden": "visible";
        d.appendChild(button);
        c.appendChild(d);
        Utils.addEventListener("fitlayout", TTLoader.setSizes);
        TTLoader.setSizes()
    },
    setSizes: function() {
        var rect = Utils.getWindowRect();
        document.getElementById("progress_container").style.width = rect.width + "px";
        document.getElementById("progress_container").style.height = rect.height + "px";
        var c = Utils.globalScale * Utils.globalPixelScale;
        if (!TTLoader.landscapeMode) document.getElementById("progress").style.paddingTop = Math.floor(c * 80) + "px";
        document.getElementById("tt_load_progress_cont").style.width = Math.floor(c * 200) + "px";
        document.getElementById("tt_load_progress").style.height = Math.floor(c * 12) + "px";
        document.getElementById("tt_load_progress").style.width = c * TTLoader.progressVal * 2 + "px";
        document.getElementById("tt_load_logo").style.marginTop = Math.floor(c * 80) + "px";
        document.getElementById("tt_load_logo").setAttribute("width", Math.floor(c * 496) + "px");
        document.getElementById("tt_load_logo").setAttribute("height", Math.floor(c * 107) + "px");
        document.getElementById("tt_load_button").setAttribute("width", Math.floor(c * 200) + "px");
        document.getElementById("tt_load_button").setAttribute("height", Math.floor(c * 95) + "px");
        document.getElementById("tt_load_button").style.marginTop = Math.floor(c * 30) + "px"
    },
    progressVal: 0,
    showLoadProgress: function(val) {
        if (val < 0) val = 0;
        if (val > 100) val = 100;
        TTLoader.progressVal = val;
        TTLoader.setSizes()
    },
    loadComplete: function(data) {
        TTLoader.showLoadProgress(100);
        TTLoader.loadedData = data;
        var b = document.getElementById("tt_load_button");
        var event = "click";
        if (Utils.touchScreen && !Utils.isWindowsPhone()) event = Utils.getTouchStartEvent();
        Utils.bindEvent(b, event, TTLoader.close);
        b.style.cursor = "pointer";
        b.src = TTLoader.buttonSrc;
        b = document.getElementById("tt_load_progress");
        b.style.background = "transparent";
        b = document.getElementById("tt_load_progress_cont");
        b.style.border = "2px solid transparent";
        b.style.background = "transparent";
        document.getElementById("tt_load_button").style.display = "block";
        if (TTLoader.skipPlayButton) TTLoader.close()
    },
    close: function(e) {
        Utils.removeEventListener("fitlayout", TTLoader.setSizes);
        clearTimeout(TTLoader.animateTimeout);
        TTLoader.endCallback(TTLoader.loadedData)
    },
    logoSrc: "wuyou.png",
	buttonDisabledSrc: "play2.png",
    buttonSrc: "play.png"
};
function TilesSprite(img, width, height, frames, rows, columns) {
    TilesSprite.superclass.constructor.call(this, img, width, height, rows, columns);
    this.framesCount = frames;
    this.animated = frames > 1;
    this.addEventListener("changeframe", TilesSprite.changeStep);
    this.addEventListener("prerender", TilesSprite.sync)
}
Utils.extend(TilesSprite, Sprite);
TilesSprite.prototype.currentFrameX = 0;
TilesSprite.create = function(asset, library) {
    if (typeof asset == "string") {
        library = library || window["library"];
        if (!library) throw new Error("Could not create sprite from asset '%s'. Library not found.", asset);
        asset = library.getAsset(asset)
    }
    return new TilesSprite(asset.bitmap, asset.width || 1, asset.height || 1, asset.framesCount || (asset.frames || 1) * (asset.layers || 1), asset.frames || 1, asset.layers || 1)
};
TilesSprite.prototype.gotoAndStop = function(frame) {
    this.currentFrameX = frame;
    this.stop()
};
TilesSprite.prototype.gotoAndPlay = function(frame) {
    this.currentFrameX = frame;
    this.play()
};
TilesSprite.changeStep = function(e) {
    var self = e.target;
    if (self.animated) {
        self.currentFrameX += self.animDirection;
        if (self.animDirection > 0 && self.currentFrameX >= self.framesCount) self.currentFrameX = 0;
        if (self.animDirection < 0 && self.currentFrameX < 0) self.currentFrameX = self.framesCount - 1
    }
};
TilesSprite.sync = function(e) {
    var self = e.target;
    self.currentLayer = Math.floor(self.currentFrameX / self.totalFrames);
    self.currentFrame = self.currentFrameX - self.currentLayer * self.totalFrames
};
function BitmapText(font, charMap) {
    this.font = Utils.isArray(font) ? font: [font];
    this.charMap = charMap;
    this.sprites = [];
    this.lines = [];
    this.stage = window.stage;
    this.parent = window.stage
}
BitmapText.ALIGN_LEFT = 0;
BitmapText.ALIGN_RIGHT = 1;
BitmapText.ALIGN_CENTER = 2;
BitmapText.VALIGN_TOP = 0;
BitmapText.VALIGN_MIDDLE = 1;
BitmapText.VALIGN_BOTTOM = 2;
BitmapText.spriteClass = "Sprite";
BitmapText.LINES_DELIMITER = "\n";
BitmapText.prototype.x = 0;
BitmapText.prototype.y = 0;
BitmapText.prototype.align = BitmapText.ALIGN_LEFT;
BitmapText.prototype.valign = BitmapText.VALIGN_TOP;
BitmapText.prototype.rotation = 0;
BitmapText.prototype.charSpacing = 0;
BitmapText.prototype.lineSpacing = 0;
BitmapText.prototype.maxWidth = 0;
BitmapText.prototype.scale = 1;
BitmapText.prototype.opacity = 1;
BitmapText.prototype.static = false;
BitmapText.prototype.text = "";
this.ignoreViewport = false;
this.zIndex = undefined;
BitmapText.prototype.manageSprites = function(text) {
    if (!this.parent) return;
    var i, chr;
    var len = text.length;
    var sp_len = this.sprites.length;
    if (sp_len < len) for (i = 0; i < len - sp_len; i++) {
        chr = new window[BitmapText.spriteClass](null, 0, 0);
        this.sprites.push(chr);
        this.parent.addChild(chr)
    }
    if (sp_len > len) {
        for (i = 0; i < sp_len - len; i++) this.parent.removeChild(this.sprites[i]);
        this.sprites.splice(0, sp_len - len)
    }
};
BitmapText.prototype.getChar = function(chr) {
    var id = chr.charCodeAt(0);
    for (var i = 0; i < this.charMap.length; i++) if (this.charMap[i].id == id) return this.charMap[i];
    console.log("Char not found", chr, id, this.text);
    return {
        id: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        xoffset: 0,
        yoffset: 0,
        page: 0,
        xadvance: 0
    }
};
BitmapText.prototype.getWidth = function() {
    var width = 0;
    for (var i = 0; i < this.lines.length; i++) {
        var w = 0,
        chr;
        for (var j = 0; j < this.lines[i].length; j++) {
            chr = this.getChar(this.lines[i].substr(j, 1));
            w += chr.xadvance + this.charSpacing
        }
        if (w > width) width = w
    }
    return width
};
BitmapText.prototype.getRealWidth = function() {
    return this.getWidth() * this.scale
};
BitmapText.prototype.getWidthOfLine = function(line) {
    var w = 0,
    chr;
    for (var i = 0; i < this.lines[line].length; i++) {
        chr = this.getChar(this.lines[line].substr(i, 1));
        w += chr.xadvance + this.charSpacing
    }
    return w
};
BitmapText.prototype.getHeight = function() {
    var h = 0;
    for (var i = 0; i < this.lines.length; i++) h += this.getHeightOfLine(i) + this.lineSpacing;
    return h
};
BitmapText.prototype.getRealHeight = function() {
    return this.getHeight() * this.scale
};
BitmapText.prototype.getHeightOfLine = function(line) {
    var h = 0,
    chr;
    for (var i = 0; i < this.lines[line].length; i++) {
        chr = this.getChar(this.lines[line].substr(i, 1));
        if (chr.height + chr.yoffset > h) h = chr.height + chr.yoffset
    }
    return h
};
BitmapText.prototype.setScaleToFitContainer = function(width, minScale, maxScale) {
    var newScale = width / this.getWidth();
    if (minScale && newScale < minScale) newScale = minScale;
    else if (maxScale && newScale > maxScale) newScale = maxScale;
    this.scale = newScale
};
BitmapText.prototype.write = function(text) {
    var chr, sprt, curX, curY, startY, p, p2, totalHeight, height;
    text = text + "";
    if (this.maxWidth > 0) {
        var originalLines = text.split(BitmapText.LINES_DELIMITER);
        var text, lines = [],
        words;
        for (var n = 0; n < originalLines.length; n++) {
            words = originalLines[n].split(" ");
            text = "";
            for (var i = 0; i < words.length; i++) {
                this.lines = [text + words[i]];
                if (this.getWidthOfLine(0) > this.maxWidth) {
                    lines.push(text);
                    text = words[i] + " "
                } else text += words[i] + " "
            }
            lines.push(text)
        }
        text = lines.join(BitmapText.LINES_DELIMITER)
    }
    this.text = text;
    this.lines = text.split(BitmapText.LINES_DELIMITER);
    this.manageSprites(text);
    curX = this.x;
    curY = this.y;
    startY = this.y;
    totalHeight = this.getHeight();
    if (this.valign == BitmapText.VALIGN_MIDDLE) startY = this.y - totalHeight / 2 * this.scale;
    if (this.valign == BitmapText.VALIGN_BOTTOM) startY = this.y - totalHeight * this.scale;
    var numOfSprite = 0,
    renderedHeight = 0;
    for (var i = 0; i < this.lines.length; i++) {
        height = this.getHeightOfLine(i);
        if (this.align == BitmapText.ALIGN_CENTER) curX = this.x - this.getWidthOfLine(i) / 2 * this.scale;
        if (this.align == BitmapText.ALIGN_RIGHT) curX = this.x - this.getWidthOfLine(i) * this.scale;
        p = new Vector(curX - this.x, startY - this.y + renderedHeight);
        p.rotate( - this.rotation);
        curX = p.x + this.x;
        curY = p.y + this.y;
        renderedHeight += (height + this.lineSpacing) * this.scale;
        p = new Vector(0, 0);
        for (var j = 0; j < this.lines[i].length; j++) {
            sprt = this.sprites[numOfSprite];
            numOfSprite++;
            sprt.visible = true;
            chr = this.getChar(this.lines[i].substr(j, 1));
            if (!chr) sprt.visible = false;
            else {
                sprt.bitmap = this.font[chr.page ? chr.page: 0];
                sprt.width = chr.width;
                sprt.height = chr.height;
                sprt.offset.left = chr.x;
                sprt.offset.top = chr.y;
                sprt.anchor.x = -chr.width / 2;
                sprt.anchor.y = -chr.height / 2;
                p2 = p.clone();
                p2.x += chr.xoffset * this.scale;
                p2.y += (chr.yoffset - height / 2) * this.scale;
                p2.rotate( - this.rotation);
                sprt.x = p2.x + curX;
                sprt.y = p2.y + curY;
                sprt.scaleX = sprt.scaleY = this.scale;
                sprt.rotation = this.rotation;
                sprt.setStatic(this.static);
                sprt.ignoreViewport = this.ignoreViewport;
                sprt.opacity = this.opacity;
                sprt.gx = sprt.x;
                sprt.gy = sprt.y;
                sprt.gscaleX = sprt.scaleX;
                sprt.gscaleY = sprt.scaleY;
                sprt.grotation = sprt.rotation;
                sprt.gopacity = sprt.opacity;
                p.x += (chr.xadvance + this.charSpacing) * this.scale;
                if (typeof this.zIndex == "number" && sprt.zIndex != this.zIndex) sprt.setZIndex(this.zIndex)
            }
        }
    }
};
BitmapText.prototype.setStatic = function(val) {
    val = !!val;
    if (this.static != val) {
        this.static = val;
        this.refresh()
    }
};
BitmapText.prototype.setZIndex = function(ix) {
    this.zIndex = ix;
    for (var i = 0; i < this.sprites.length; i++) this.sprites[i].setZIndex(ix)
};
BitmapText.prototype.addToGroup = function(group) {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].gx = this.sprites[i].x / 2;
        this.sprites[i].gy = this.sprites[i].y;
        group.addChild(this.sprites[i], false)
    }
};
BitmapText.prototype.putToGroup = function(group) {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].gx = this.sprites[i].x;
        this.sprites[i].gy = this.sprites[i].y;
        group.addChild(this.sprites[i], false)
    }
};
BitmapText.prototype.refresh = function() {
    this.write(this.text)
};
BitmapText.prototype.refreshOnTween = function(e) {
    e.target.obj.refresh()
};
BitmapText.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
    this.refresh()
};
BitmapText.prototype.removeTweens = function() {
    if (!this.stage) return;
    this.stage.clearObjectTweens(this)
};
BitmapText.prototype.addTween = function(prop, end, duration, ease, onfinish, onchange) {
    if (!this.stage) return;
    var val = this[prop];
    if (isNaN(val)) return;
    var t = stage.createTween(this, prop, val, end, duration, ease);
    t.onchange = onchange;
    t.onfinish = onfinish;
    return t
};
BitmapText.prototype.moveTo = function(x, y, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    if (duration <= 0) this.setPosition(x, y);
    else {
        var t1 = this.addTween("x", x, duration, ease, onfinish, onchange);
        if (t1) {
            t1.addEventListener("change", this.refreshOnTween);
            t1.addEventListener("finish", this.refreshOnTween);
            t1.play()
        }
        var t2 = this.addTween("y", y, duration, ease, t1 ? null: onfinish, t1 ? null: onchange);
        if (t2) {
            t2.addEventListener("change", this.refreshOnTween);
            t2.addEventListener("finish", this.refreshOnTween);
            t2.play()
        }
    }
    return this
};
BitmapText.prototype.moveBy = function(x, y, duration, ease, onfinish, onchange) {
    return this.moveTo(this.x + x, this.y + y, duration, ease, onfinish, onchange)
};
BitmapText.prototype.fadeTo = function(opacity, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    if (duration <= 0) this.opacity = opacity;
    else {
        var t = this.addTween("opacity", opacity, duration, ease, onfinish, onchange);
        if (t) {
            t.play();
            t.addEventListener("change", this.refreshOnTween);
            t.addEventListener("finish", this.refreshOnTween)
        }
    }
    return this
};
BitmapText.prototype.fadeBy = function(opacity, duration, ease, onfinish, onchange) {
    var val = Math.max(0, Math.min(1, this.opacity + opacity));
    return this.fadeTo(val, duration, ease, onfinish, onchange)
};
BitmapText.prototype.rotateTo = function(rotation, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    if (duration <= 0) this.rotation = rotation;
    else {
        var t = this.addTween("rotation", rotation, duration, ease, onfinish, onchange);
        if (t) {
            t.play();
            t.addEventListener("change", this.refreshOnTween);
            t.addEventListener("finish", this.refreshOnTween)
        }
    }
    return this
};
BitmapText.prototype.rotateBy = function(rotation, duration, ease, onfinish, onchange) {
    return this.rotateTo(this.rotation + rotation, duration, ease, onfinish, onchange)
};
BitmapText.prototype.scaleTo = function(scale, duration, ease, onfinish, onchange) {
    duration = ~~duration;
    if (duration <= 0) this.scale = scale;
    else {
        var t = this.addTween("scale", scale, duration, ease, onfinish, onchange);
        if (t) {
            t.play();
            t.addEventListener("change", this.refreshOnTween);
            t.addEventListener("finish", this.refreshOnTween)
        }
    }
    return this
};
function AudioPlayer() {
    this.disabled = false;
    this.basePath = "";
    this.mp3Support = true;
    this.delayPlay = false;
    this.audioWrapper = null;
    this.locked = false;
    this.busy = false;
    this.startPlayTime = 0;
    this.onend = null;
    this.controlPlay = Utils.proxy(this.controlPlay, this)
}
AudioPlayer.prototype.createNewAudio = function() {
    if (AudioMixer.isWebAudioSupport()) {
        var sound = AudioMixer.waContext.createBufferSource();
        sound.connect(AudioMixer.waContext.destination);
        return sound
    } else return document.createElement("audio")
};
AudioPlayer.prototype.init = function(path) {
    this.basePath = path ? path: "";
    this.delayPlay = "ontouchstart" in window;
    this.audioWrapper = this.createNewAudio();
    var test = document.createElement("audio");
    if (test.canPlayType) this.mp3Support = test.canPlayType("audio/mpeg") != "";
    else this.disabled = true;
    return ! this.disabled
};
AudioPlayer.prototype.play = function(file, loop) {
    if (this.disabled) return false;
    var url = this.basePath + "/" + file + (this.mp3Support ? ".mp3": ".ogg");
    this.stop();
    this.audioWrapper = this.createNewAudio();
    this.audioWrapper.doLoop = loop ? true: false;
    this.audioWrapper.fileName = file;
    if (AudioMixer.isWebAudioSupport()) {
        var self = this;
        this.loadSound(url,
        function(buffer) {
            self.audioWrapper.buffer = buffer;
            self.audioWrapper.noteOn ? self.audioWrapper.noteOn(0) : self.audioWrapper.start(0);
            self.startPlayTime = (new Date).getTime();
            self.audioWrapper.loop = loop;
            if (typeof self.audioWrapper.playbackState != "undefined") self.waCheckInterval = setInterval(function() {
                if (!self.audioWrapper) {
                    clearInterval(self.waCheckInterval);
                    return
                }
                if (self.audioWrapper.playbackState == self.audioWrapper.FINISHED_STATE) self.controlPlay()
            },
            100);
            else self.audioWrapper.onended = self.controlPlay
        })
    } else {
        this.audioWrapper.src = url;
        this.audioWrapper.type = this.mp3Support ? "audio/mpeg": "audio/ogg";
        this.audioWrapper.loop = false;
        this.audioWrapper.preload = "auto";
        this.audioWrapper.load();
        if (this.delayPlay) {
            this.audioWrapper.addEventListener("canplay", this.readyToPlay);
            this.audioWrapper.addEventListener("canplaythrough", this.readyToPlay)
        } else this.audioWrapper.play();
        this.audioWrapper.addEventListener("ended", this.controlPlay, false)
    }
    this.busy = true;
    this.startPlayTime = (new Date).getTime()
};
AudioPlayer.prototype.loadSound = function(url, callback) {
    if (AudioMixer.buffer[url]) {
        if (callback) callback(AudioMixer.buffer[url]);
        return
    }
    var xmlhttp = null;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest;
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open("GET", url, true);
    xmlhttp.responseType = "arraybuffer";
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && (this.status == 200 || this.status == 0)) AudioMixer.waContext.decodeAudioData(this.response,
        function(buffer) {
            AudioMixer.buffer[url] = buffer;
            if (callback) callback(buffer)
        })
    };
    xmlhttp.send()
};
AudioPlayer.prototype.readyToPlay = function(e) {
    if (e.currentTarget.alreadyLoaded) return;
    e.currentTarget.alreadyLoaded = true;
    e.currentTarget.play()
};
AudioPlayer.prototype.stop = function() {
    this.busy = false;
    try {
        if (AudioMixer.isWebAudioSupport()) {
            this.audioWrapper.noteOff ? this.audioWrapper.noteOff(0) : this.audioWrapper.stop(0);
            this.audioWrapper = null
        } else {
            this.audioWrapper.removeEventListener("canplay", this.readyToPlay);
            this.audioWrapper.removeEventListener("canplaythrough", this.readyToPlay);
            this.audioWrapper.pause();
            this.audioWrapper.currentTime = 0;
            this.audioWrapper = null
        }
    } catch(e) {}
};
AudioPlayer.prototype.pause = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (this.audioWrapper) this.audioWrapper.disconnect()
    } else this.audioWrapper.pause()
};
AudioPlayer.prototype.resume = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (this.audioWrapper) try {
            this.audioWrapper.connect(AudioMixer.waContext.destination)
        } catch(e) {}
    } else this.audioWrapper.play()
};
AudioPlayer.prototype.controlPlay = function() {
    if (!this.audioWrapper) return;
    if (this.audioWrapper.doLoop) {
        if (!AudioMixer.isWebAudioSupport()) if (Utils.isFirefox()) this.play(this.audioWrapper.fileName, true);
        else {
            this.audioWrapper.currentTime = 0;
            this.audioWrapper.play()
        }
    } else {
        this.busy = false;
        if (typeof this.onend == "function") this.onend();
        if (this.waCheckInterval) clearInterval(this.waCheckInterval)
    }
};
AudioPlayer.prototype.getPosition = function() {
    if (AudioMixer.isWebAudioSupport()) {
        if (!this.startPlayTime) return 0;
        var duration = this.getDuration();
        if (!duration) return 0;
        var position = ((new Date).getTime() - this.startPlayTime) / 1E3;
        if (position <= duration) return position;
        if (!this.audioWrapper.doLoop) return duration;
        return position - Math.floor(position / duration) * duration
    } else return this.audioWrapper.currentTime ? this.audioWrapper.currentTime: 0
};
AudioPlayer.prototype.getDuration = function() {
    if (AudioMixer.isWebAudioSupport()) return this.audioWrapper.buffer ? this.audioWrapper.buffer.duration: 0;
    else return this.audioWrapper.duration ? this.audioWrapper.duration: 0
};
function AudioMixer(path, channelsCount) {
    this.singleChannelMode = false;
    this.channels = [];
    this.init(path, channelsCount)
}
AudioMixer.prototype.init = function(path, channelsCount) {
    if (AudioMixer.isWebAudioSupport()) {
        AudioMixer.waContext = new window.AudioContext;
        var buffer = AudioMixer.waContext.createBuffer(1, 1, 22050);
        var sound = AudioMixer.waContext.createBufferSource();
        sound.buffer = buffer;
        sound.connect(AudioMixer.waContext.destination);
        sound.noteOn ? sound.noteOn(0) : sound.start(0)
    }
    if (!AudioMixer.isWebAudioSupport() && navigator.userAgent.toLowerCase().indexOf("mac") != -1) {
        this.singleChannelMode = true;
        channelsCount = 1
    }
    this.path = path;
    this.channels = [];
    for (var i = 0; i < channelsCount; i++) {
        this.channels[i] = new AudioPlayer;
        this.channels[i].init(path)
    }
    Utils.addEventListener("hidewindow", Utils.proxy(this.pauseOnHide, this));
    Utils.addEventListener("showwindow", Utils.proxy(this.resumeOnShow, this))
};
AudioMixer.prototype.pauseOnHide = function() {
    for (var i = 0; i < this.channels.length; i++) this.channels[i].pause()
};
AudioMixer.prototype.resumeOnShow = function() {
    for (var i = 0; i < this.channels.length; i++) this.channels[i].resume()
};
AudioMixer.prototype.play = function(file, loop, soft, channelID) {
    var cID = -1;
    if (typeof channelID == "number") cID = channelID;
    else cID = this.getFreeChannel(soft);
    if (cID >= 0 && cID < this.channels.length) {
        this.channels[cID].stop();
        this.channels[cID].play(file, loop)
    }
    return this.channels[cID]
};
AudioMixer.prototype.stop = function(cID) {
    if (cID >= 0 && cID < this.channels.length) this.channels[cID].stop()
};
AudioMixer.prototype.getFreeChannel = function(soft) {
    var cID = -1;
    var freeChannels = [];
    var maxID = -1;
    var max = -1;
    var t = 0;
    for (var i = 0; i < this.channels.length; i++) if (!this.channels[i].locked) if (!this.channels[i].busy) freeChannels.push(i);
    else {
        t = (new Date).getTime();
        t -= this.channels[i].startPlayTime;
        if (t > max) {
            max = t;
            maxID = i
        }
    }
    if (freeChannels.length == 0) {
        if (!soft && maxID >= 0) cID = maxID
    } else cID = freeChannels[0];
    return cID
};
AudioMixer.isWebAudioSupport = function() {
    return Boolean(window.AudioContext)
};
window.AudioContext = window.AudioContext || window.webkitAudioContext;
AudioMixer.buffer = {};
AudioMixer.waContext = null;
var ParticleSystem = {};
ParticleSystem.Utils = {};
ParticleSystem.Utils.isIE = navigator.userAgent.indexOf("MSIE") > -1;
ParticleSystem.Utils.toRad = function(deg) {
    return Math.PI * deg / 180
};
ParticleSystem.Utils.isNumber = function(i) {
    return typeof i === "number"
};
ParticleSystem.Utils.isInteger = function(num) {
    return num === (num | 0)
};
ParticleSystem.Utils.random = function(minOrMax, maxOrUndefined, dontFloor) {
    dontFloor = dontFloor || false;
    var min = this.isNumber(maxOrUndefined) ? minOrMax: 0;
    var max = this.isNumber(maxOrUndefined) ? maxOrUndefined: minOrMax;
    var range = max - min;
    var result = Math.random() * range + min;
    if (this.isInteger(min) && this.isInteger(max) && !dontFloor) return Math.floor(result);
    else return result
};
ParticleSystem.Utils.random11 = function() {
    return this.random( - 1, 1, true)
};
ParticleSystem.Utils.extend = function(obj, config) {
    for (var prop in config) if (config.hasOwnProperty(prop)) obj[prop] = config[prop]
};
ParticleSystem.Utils.recursiveExtend = function(obj, config, exceptions) {
    exceptions = exceptions || [];
    for (var prop in config) if (config.hasOwnProperty(prop)) if (exceptions.indexOf(prop) > -1) obj[prop] = config[prop];
    else if (this.isArray(config[prop])) obj[prop] = this.deepClone(config[prop]);
    else if (typeof config[prop] === "object") this.recursiveExtend(obj[prop], config[prop], exceptions);
    else obj[prop] = config[prop]
};
ParticleSystem.Utils.clone = function(obj) {
    var clone = {};
    this.extend(clone, obj);
    return clone
};
ParticleSystem.Utils.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]"
};
ParticleSystem.Utils.deepClone = function(obj, exceptions) {
    exceptions = exceptions || [];
    if (typeof obj !== "object") return obj;
    if (this.isArray(obj)) {
        var cloneArray = [];
        for (var i = 0; i < obj.length; ++i) cloneArray.push(this.deepClone(obj[i], exceptions));
        return cloneArray
    }
    var clone = {};
    for (var prop in obj) if (exceptions.indexOf(prop) > -1) clone[prop] = obj[prop];
    else clone[prop] = this.deepClone(obj[prop], exceptions);
    return clone
};
ParticleSystem.Utils.colorArrayToString = function(array, overrideAlpha) {
    var r = array[0] | 0;
    var g = array[1] | 0;
    var b = array[2] | 0;
    var a = overrideAlpha || (array.length == 4 ? array[3] : 1);
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")"
};
ParticleSystem.Utils.normalize = function(vector) {
    var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    vector.x /= length;
    vector.y /= length
};
ParticleSystem.Emitter = function(system, position, displayObjects) {
    if (!displayObjects) displayObjects = [];
    else this.displayObjects = Utils.isArray(displayObjects) ? displayObjects: [displayObjects];
    if (!system || typeof system === "string") {
        var predefinedSystem = ParticleSystem.PredefinedSystems.getSystem(system);
        this._predefinedSystemName = predefinedSystem.name;
        system = predefinedSystem.system
    } else this._predefinedSystemName = "";
    this._position = position;
    this._baseSystem = ParticleSystem.Utils.clone(system, ["texture"]);
    this.reconfigure(system)
};
ParticleSystem.Emitter.prototype.overlay = function(config) {
    ParticleSystem.Utils.extend(this, config);
    this.restart()
};
ParticleSystem.Emitter.prototype.resetTexture = function() {};
ParticleSystem.Emitter.prototype.getPathLen = function() {
    var w, h, l = 0;
    for (var i = 0; i < this.path._points.length - 1; i++) {
        w = this.path._points[i].x - this.path._points[i + 1].x;
        h = this.path._points[i].y - this.path._points[i + 1].y;
        l += Math.sqrt(w * w + h * h)
    }
    return l
};
ParticleSystem.Emitter.prototype.getPoint = function(needLen) {
    var w, h, len = 0,
    pathLen = 0,
    ok = true,
    i = 0,
    cx = this.path._points[0].x,
    cy = this.path._points[0].y;
    while (ok) {
        i++;
        if (i >= this.path._points.length) return {
            x: this.path._points[this.path._points.length - 1].x,
            y: this.path._points[this.path._points.length - 1].y
        };
        else {
            w = cx - this.path._points[i].x;
            h = cy - this.path._points[i].y;
            len = Math.sqrt(w * w + h * h);
            if (pathLen + len >= needLen) {
                var angle = Math.atan2(this.path._points[i].y - cy, this.path._points[i].x - cx);
                len = needLen - pathLen;
                cx += Math.cos(angle) * len;
                cy += Math.sin(angle) * len;
                return {
                    x: cx,
                    y: cy
                }
            } else {
                pathLen += len;
                cx = this.path._points[i].x;
                cy = this.path._points[i].y
            }
        }
    }
};
ParticleSystem.Emitter.prototype.reconfigure = function(config) {
    this.delay = 0;
    this._startDelay = 0;
    this._totalParticles = 0;
    this.emissionRate = 0;
    this.paused = false;
    this.active = false;
    this.duration = 0;
    this.emissionDuration = 0;
    this.pos = this.pos || {};
    this.pos.x = 0;
    this.pos.y = 0;
    this.posVar = this.posVar || {};
    this.posVar.x = 0;
    this.posVar.y = 0;
    this.speed = 0;
    this.speedVar = 0;
    this.angle = 0;
    this.angleVar = 0;
    this.life = 1;
    this.lifeVar = 0;
    this.radius = 1;
    this.radiusVar = 0;
    this.texture = null;
    this.textureEnabled = false;
    this.textureAdditive = false;
    this.startScale = 1;
    this.startScaleVar = 0;
    this.endScale = 1;
    this.endScaleVar = 0;
    this.startColor = this.startColor || [];
    this.startColor[0] = 0;
    this.startColor[1] = 0;
    this.startColor[2] = 0;
    this.startColor[3] = 1;
    this.startColorVar = this.startColorVar || [];
    this.startColorVar[0] = 0;
    this.startColorVar[1] = 0;
    this.startColorVar[2] = 0;
    this.startColorVar[3] = 0;
    this.endColor = this.endColor || [];
    this.endColor[0] = 0;
    this.endColor[1] = 0;
    this.endColor[2] = 0;
    this.endColor[3] = 1;
    this.endColorVar = this.endColorVar || [];
    this.endColorVar[0] = 0;
    this.endColorVar[1] = 0;
    this.endColorVar[2] = 0;
    this.endColorVar[3] = 0;
    this.gravity = this.gravity || {};
    this.gravity.x = 0;
    this.gravity.y = 0;
    this.radialAccel = 0;
    this.radialAccelVar = 0;
    this.tangentialAccel = 0;
    this.tangentialAccelVar = 0;
    this.startRotation = 0;
    this.startRotationVar = 0;
    this.rotationCoef = 0;
    this.rotationCoefVar = 0;
    this.rotationSpeed = 0;
    this.rotationSpeedVar = 0;
    this.path = {
        points: []
    };
    ParticleSystem.Utils.recursiveExtend(this, config, ["texture"]);
    if (!this.duration) this.duration = Infinity;
    if (!this.emissionDuration) this.emissionDuration = Infinity;
    this._startDelay = this.delay;
    this.pos = this._position;
    if (this.path) {
        if (this.path.isBezier) this.path._points = Utils.getBezierCurve(this.path.points);
        else this.path._points = this.path.points;
        this.path._ease = this.path.ease;
        this._pathLen = this.getPathLen();
        this._pathPassedTime = 0;
        this._pathStartDelay = this.path.delay
    }
    this.restart()
};
ParticleSystem.Emitter.prototype.restart = function() {
    this._particlePool = [];
    for (var i = 0; i < this.totalParticles; ++i) this._particlePool.push(new ParticleSystem.Particle);
    this._particleCount = 0;
    this._particleIndex = 0;
    this._elapsed = 0;
    this._emitCounter = 0
};
ParticleSystem.Emitter.prototype.reset = function() {
    this.reconfigure(this._baseSystem)
};
ParticleSystem.Emitter.prototype._isFull = function() {
    return this._particleCount === this.totalParticles
};
ParticleSystem.Emitter.prototype._getDisplayObject = function() {
    if (!this.displayObjects) return null;
    if (this.displayObjects.length == 0) return null;
    return this.displayObjects[Math.floor(Math.random() * this.displayObjects.length)]
};
ParticleSystem.Emitter.prototype._addParticle = function() {
    if (this._isFull()) return false;
    var p = this._particlePool[this._particleCount];
    this._initParticle(p); ++this._particleCount;
    return true
};
ParticleSystem.Emitter.prototype.setStatic = function(val) {
    val = !!val;
    for (var i = 0; i < this._particlePool.length; i++) if (this._particlePool[i].displayObject) this._particlePool[i].displayObject.setStatic(val)
};
ParticleSystem.Emitter.prototype._initParticle = function(particle) {
    particle.texture = this.texture;
    particle.textureEnabled = this.textureEnabled;
    particle.textureAdditive = this.textureAdditive;
    var displayObject = this._getDisplayObject();
    if (displayObject) {
        displayObject = displayObject.clone();
        displayObject.stage = null;
        particle.displayObject = displayObject
    }
    var posVar = {
        x: this.posVar.x * ParticleSystem.Utils.random11(),
        y: this.posVar.y * ParticleSystem.Utils.random11()
    };
    if (this.posVarTransformFn) posVar = this.posVarTransformFn(posVar, ParticleSystem.Utils);
    particle.pos.x = this.pos.x + posVar.x;
    particle.pos.y = this.pos.y + posVar.y;
    var angle = this.angle + this.angleVar * ParticleSystem.Utils.random11();
    var speed = this.speed + this.speedVar * ParticleSystem.Utils.random11();
    particle.setVelocity(angle, speed);
    particle.radialAccel = this.radialAccel + this.radialAccelVar * ParticleSystem.Utils.random11() || 0;
    particle.tangentialAccel = this.tangentialAccel + this.tangentialAccelVar * ParticleSystem.Utils.random11() || 0;
    var life = this.life + this.lifeVar * ParticleSystem.Utils.random11() || 0;
    particle.life = Math.max(0, life);
    particle.scale = ParticleSystem.Utils.isNumber(this.startScale) ? this.startScale: 1;
    particle.scale += ParticleSystem.Utils.isNumber(this.startScaleVar) ? this.startScaleVar * ParticleSystem.Utils.random11() : 0;
    var endScale = ParticleSystem.Utils.isNumber(this.endScale) ? this.endScale: 1;
    endScale += ParticleSystem.Utils.isNumber(this.endScaleVar) ? this.endScaleVar * ParticleSystem.Utils.random11() : 0;
    particle.deltaScale = endScale - this.startScale;
    particle.deltaScale /= particle.life;
    particle.radius = ParticleSystem.Utils.isNumber(this.radius) ? this.radius + (this.radiusVar || 0) * ParticleSystem.Utils.random11() : 0;
    particle.rotation = ParticleSystem.Utils.isNumber(this.startRotation) ? this.startRotation: 0;
    particle.rotation += ParticleSystem.Utils.isNumber(this.startRotationVar) ? this.startRotationVar * ParticleSystem.Utils.random11() : 0;
    particle.rotationSpeed = ParticleSystem.Utils.isNumber(this.rotationSpeed) ? this.rotationSpeed: 0;
    particle.rotationSpeed += ParticleSystem.Utils.isNumber(this.rotationSpeedVar) ? this.rotationSpeedVar * ParticleSystem.Utils.random11() : 0;
    particle.rotationCoef = ParticleSystem.Utils.isNumber(this.rotationCoef) ? this.rotationCoef: 0;
    particle.rotationCoef += ParticleSystem.Utils.isNumber(this.rotationCoefVar) ? this.rotationCoefVar * ParticleSystem.Utils.random11() : 0;
    if (this.startColor) {
        var startColor = [this.startColor[0] + this.startColorVar[0] * ParticleSystem.Utils.random11(), this.startColor[1] + this.startColorVar[1] * ParticleSystem.Utils.random11(), this.startColor[2] + this.startColorVar[2] * ParticleSystem.Utils.random11(), this.startColor[3] + this.startColorVar[3] * ParticleSystem.Utils.random11()];
        var endColor = startColor;
        if (this.endColor) endColor = [this.endColor[0] + this.endColorVar[0] * ParticleSystem.Utils.random11(), this.endColor[1] + this.endColorVar[1] * ParticleSystem.Utils.random11(), this.endColor[2] + this.endColorVar[2] * ParticleSystem.Utils.random11(), this.endColor[3] + this.endColorVar[3] * ParticleSystem.Utils.random11()];
        particle.color = startColor;
        particle.deltaColor = [(endColor[0] - startColor[0]) / particle.life, (endColor[1] - startColor[1]) / particle.life, (endColor[2] - startColor[2]) / particle.life, (endColor[3] - startColor[3]) / particle.life]
    }
    if (particle.displayObject && particle.displayObject.dispatchEvent) particle.displayObject.dispatchEvent("particleInit", {
        type: "particleInit",
        target: particle.displayObject,
        particle: particle
    })
};
ParticleSystem.Emitter.prototype._updateParticle = function(p, delta, i) {
    if (p.life > 0) {
        p.forces = p.forces || {
            x: 0,
            y: 0
        };
        p.forces.x = 0;
        p.forces.y = 0;
        p.radial = p.radial || {
            x: 0,
            y: 0
        };
        p.radial.x = 0;
        p.radial.y = 0;
        if ((p.pos.x !== this.pos.x || p.pos.y !== this.pos.y) && (p.radialAccel || p.tangentialAccel)) {
            p.radial.x = p.pos.x - this.pos.x;
            p.radial.y = p.pos.y - this.pos.y;
            ParticleSystem.Utils.normalize(p.radial)
        }
        p.tangential = p.tangential || {
            x: 0,
            y: 0
        };
        p.tangential.x = p.radial.x;
        p.tangential.y = p.radial.y;
        p.radial.x *= p.radialAccel;
        p.radial.y *= p.radialAccel;
        var newy = p.tangential.x;
        p.tangential.x = -p.tangential.y;
        p.tangential.y = newy;
        p.tangential.x *= p.tangentialAccel;
        p.tangential.y *= p.tangentialAccel;
        p.forces.x = p.radial.x + p.tangential.x + this.gravity.x;
        p.forces.y = p.radial.y + p.tangential.y + this.gravity.y;
        p.forces.x *= delta;
        p.forces.y *= delta;
        p.vel.x += p.forces.x;
        p.vel.y += p.forces.y;
        p.pos.x += p.vel.x * delta;
        p.pos.y += p.vel.y * delta;
        p.life -= delta;
        p.scale += p.deltaScale * delta;
        p.rotationSpeed += p.rotationCoef * delta;
        p.rotation += p.rotationSpeed;
        if (p.color) {
            p.color[0] += p.deltaColor[0] * delta;
            p.color[1] += p.deltaColor[1] * delta;
            p.color[2] += p.deltaColor[2] * delta;
            p.color[3] += p.deltaColor[3] * delta
        }
        if (p.displayObject && p.displayObject.dispatchEvent) {
            var evt = p.life > 0 ? "particleUpdate": "particleDestroy";
            p.displayObject.dispatchEvent(evt, {
                type: evt,
                target: p.displayObject,
                particle: p,
                delta: delta
            })
        }++this._particleIndex
    } else {
        var temp = this._particlePool[i];
        this._particlePool[i] = this._particlePool[this._particleCount - 1];
        this._particlePool[this._particleCount - 1] = temp; --this._particleCount
    }
};
ParticleSystem.Emitter.prototype.stop = function() {
    this.paused = true
};
ParticleSystem.Emitter.prototype.play = function() {
    this.paused = false
};
ParticleSystem.Emitter.prototype.clear = function() {
    for (var i = 0; i < this._particlePool.length; i++) if (this._particlePool[i].displayObject) this._particlePool[i].displayObject.destroy = true;
    this._particlePool = [];
    this._particleCount = 0;
    this._particleIndex = 0;
    this._elapsed = 0;
    this._emitCounter = 0
};
ParticleSystem.Emitter.prototype.update = function(delta) {
    if (this.paused) return;
    if (this._startDelay > 0) this._startDelay -= delta;
    if (this._startDelay > 0) return;
    delta /= 1E3;
    this._elapsed += delta;
    this.active = this._elapsed < this.duration;
    if (this._elapsed >= this.emissionDuration) this.emissionRate = 0;
    if (!this.active) return;
    if (this.path) {
        if (this._pathStartDelay > 0) this._pathStartDelay -= delta * 1E3;
        if (this._pathStartDelay <= 0) {
            this._pathPassedTime += delta * 1E3;
            if (this._pathPassedTime > this.path.duration) if (this.path.loop) this._pathPassedTime -= Math.floor(this._pathPassedTime / this.path.duration) * this.path.duration;
            else this._pathPassedTime = this.path.duration;
            if (typeof this.path._ease == "string") if (this.path._ease == "null") this.path._ease = null;
            else {
                var parts = this.path._ease.split(".");
                var ease = parts[0] == "Easing" ? window: Easing,
                part = "";
                while (parts.length) {
                    part = parts.shift();
                    ease = ease[part];
                    if (!ease) {
                        ease = null;
                        break
                    }
                }
                this.path._ease = ease
            }
            var f = this.path._ease ? this.path._ease: Easing.linear.easeIn;
            var len = f(this._pathPassedTime, 0, this._pathLen, this.path.duration);
            var p = this.getPoint(len);
            this.pos = {
                x: p.x,
                y: p.y
            }
        }
    }
    if (this.emissionRate) {
        var rate = 1 / this.emissionRate;
        this._emitCounter += delta;
        while (!this._isFull() && this._emitCounter > rate) {
            this._addParticle();
            this._emitCounter -= rate
        }
    }
    this._particleIndex = 0;
    while (this._particleIndex < this._particleCount) {
        var p = this._particlePool[this._particleIndex];
        this._updateParticle(p, delta, this._particleIndex)
    }
};
Object.defineProperty(ParticleSystem.Emitter.prototype, "particles", {
    get: function() {
        return this._particlePool
    }
});
Object.defineProperty(ParticleSystem.Emitter.prototype, "totalParticles", {
    get: function() {
        return this._totalParticles
    },
    set: function(tp) {
        tp = tp | 0;
        if (tp !== this._totalParticles) {
            this._totalParticles = tp;
            this.restart()
        }
    }
});
Object.defineProperty(ParticleSystem.Emitter.prototype, "transformFn", {
    get: function() {
        return this._transformFnSrc || ""
    },
    set: function(src) {
        this._transformFnSrc = src;
        try {
            this.posVarTransformFn = new Function("value", "util", src)
        } catch(e) {
            this.posVarTransformFn = null
        }
    }
});
Object.defineProperty(ParticleSystem.Emitter.prototype, "predefinedSystem", {
    get: function() {
        return this._predefinedSystemName
    },
    set: function(ps) {
        if (this._predefinedSystemName !== ps) {
            this._predefinedSystemName = ps;
            this._baseSystem = ParticleSystem.PredefinedSystems.getSystem(ps).system;
            this.reset()
        }
    }
});
Object.defineProperty(ParticleSystem.Emitter.prototype, "textureFile", {
    get: function() {
        return this._file && this._file.name || ""
    },
    set: function(file) {
        try {
            TextureLoader.load(this, "texture", file);
            this._file = file
        } catch(e) {}
    }
});
ParticleSystem.Particle = function() {
    this.pos = {
        x: 0,
        y: 0
    };
    this.setVelocity(0, 0);
    this.life = 0;
    this.displayObject = null
};
ParticleSystem.Particle.prototype.setVelocity = function(angle, speed) {
    this.vel = {
        x: Math.cos(angle) * speed,
        y: -Math.sin(angle) * speed
    }
};
ParticleSystem.PredefinedSystems = {};
ParticleSystem.PredefinedSystems.posFuncs = {
    center: function(size) {
        return {
            x: size.width / 2 | 0,
            y: size.height / 2 | 0
        }
    },
    centerBottom: function(size) {
        return {
            x: size.width / 2 | 0,
            y: size.height * 2 / 3 | 0
        }
    },
    centerOffBottom: function(size) {
        return {
            x: size.width / 2 | 0,
            y: size.height + 20
        }
    },
    centerAboveTop: function(size) {
        return {
            x: size.width / 2 | 0,
            y: 0
        }
    },
    bottomLeft: function(size) {
        return {
            x: 0,
            y: size.height + 5
        }
    }
};
ParticleSystem.PredefinedSystems.getSystem = function(name) {
    var system = this.systems[0];
    for (var i = 0; i < this.systems.length; ++i) {
        var ps = this.systems[i];
        if (ps.name === name) {
            system = ps;
            break
        }
    }
    return ParticleSystem.Utils.deepClone(system, ["texture"])
};
ParticleSystem.PredefinedSystems.positionSystems = function(size) {
    for (var i = 0; i < this.systems.length; ++i) {
        var pos = this.systems[i].system.pos;
        this.systems[i].system.pos = ParticleSystem.PredefinedSystems.posFuncs[pos](size)
    }
};
ParticleSystem.PredefinedSystems.setTexture = function(texture) {
    for (var i = 0; i < this.systems.length; ++i) this.systems[i].system.texture = texture
};
ParticleSystem.PredefinedSystems.deleteSystem = function(systemName) {
    var index;
    for (var i = 0; i < this.systems.length; ++i) if (this.systems[i].name === systemName) {
        this.systems.splice(i, 1);
        return
    }
};
ParticleSystem.PredefinedSystems.systems = [{
    name: "meteor",
    system: {
        totalParticles: 30,
        emissionRate: 150 / 2,
        pos: "center",
        gravity: {
            x: -200,
            y: -200
        },
        angle: Math.PI / 2,
        angleVar: Math.PI * 2,
        speed: 15,
        speedVar: 5,
        life: 2,
        lifeVar: 1,
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 0,
        tangentialAccelVar: 0,
        textureEnabled: true,
        textureAdditive: true,
        radius: 12,
        radiusVar: 2,
        startScale: 1,
        endScale: 1,
        startColor: [51, 102, 178.5, 1],
        startColorVar: [0, 0, 51, .1],
        endColor: [0, 0, 0, 1],
        active: true,
        duration: Infinity
    }
},
{
    name: "fireworks",
    system: {
        totalParticles: 50,
        emissionRate: 1500 / 3.5,
        pos: "centerBottom",
        angle: Math.PI / 2,
        angleVar: Utils.grad2radian(20),
        gravity: {
            x: 0,
            y: -90
        },
        speed: 180,
        speedVar: 50,
        life: 3.5,
        lifeVar: 1,
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 0,
        tangentialAccelVar: 0,
        radius: 8,
        radiusVar: 2,
        startScale: 1,
        endScale: 1,
        startColor: [127.5, 127.5, 127.5, 1],
        startColorVar: [127.5, 127.5, 127.5, 0],
        endColor: [25.5, 25.5, 25.5, .2],
        endColorVar: [25.5, 25.5, 25.5, .2],
        active: true,
        duration: Infinity
    }
},
{
    name: "fire",
    system: {
        totalParticles: 250,
        emissionRate: 250 / 7,
        pos: "centerBottom",
        posVar: {
            x: 40,
            y: 20
        },
        angle: Math.PI / 2,
        angleVar: Utils.grad2radian(10),
        speed: 60,
        speedVar: 20,
        life: 7,
        lifeVar: 4,
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 0,
        tangentialAccelVar: 0,
        textureEnabled: true,
        textureAdditive: true,
        radius: 10,
        radiusVar: 1,
        startScale: 1,
        endScale: 1,
        startColor: [193.8, 63.75, 30.6, 1],
        endColor: [0, 0, 0, 0],
        active: true,
        duration: Infinity
    }
},
{
    name: "galaxy",
    system: {
        totalParticles: 50,
        emissionRate: 200 / 4,
        pos: "center",
        angle: Math.PI / 2,
        angleVar: Math.PI * 2,
        speed: 60,
        speedVar: 10,
        life: 4,
        lifeVar: 1,
        radialAccel: -80,
        radialAccelVar: 0,
        tangentialAccel: 80,
        tangentialAccelVar: 0,
        textureEnabled: true,
        textureAdditive: true,
        radius: 10,
        radiusVar: 2,
        startScale: 1,
        endScale: 1,
        startRotation: 0,
        startRotationVar: Math.PI * 2,
        rotationSpeed: .1,
        rotationSpeedVar: .1,
        rotationCoef: 1.005,
        rotationCoefVar: .005,
        startColor: [30.6, 63.75, 193.8, 1],
        endColor: [0, 0, 0, .3],
        active: true,
        duration: Infinity
    }
},
{
    name: "snow",
    system: {
        totalParticles: 50,
        emissionRate: 10,
        pos: "centerAboveTop",
        posVar: {
            x: 175,
            y: 0
        },
        gravity: {
            x: 0,
            y: 8
        },
        angle: -Math.PI / 2,
        angleVar: Utils.grad2radian(10),
        speed: 9,
        speedVar: 1,
        life: 45,
        lifeVar: 15,
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 0,
        tangentialAccelVar: 0,
        textureEnabled: false,
        textureAdditive: false,
        radius: 3,
        radiusVar: 2,
        startScale: 1,
        endScale: .3,
        startColor: [255, 255, 255, 1],
        endColor: [255, 255, 255, 0],
        active: true,
        duration: Infinity
    }
},
{
    name: "bubbles",
    system: {
        totalParticles: 50,
        emissionRate: 200,
        active: true,
        duration: Infinity,
        pos: "centerOffBottom",
        posVar: {
            x: 150,
            y: 0
        },
        angle: Math.PI / 2,
        angleVar: Utils.grad2radian(20),
        life: 3.5,
        lifeVar: 1,
        radius: 8,
        radiusVar: 2,
        textureEnabled: false,
        textureAdditive: true,
        startScale: 1,
        startScaleVar: 0,
        endScale: 1,
        endScaleVar: 0,
        startColor: [198.9, 198.9, 255, 1],
        startColorVar: [0, 0, 38, .1],
        endColor: [25.5, 25.5, 25.5, .2],
        endColorVar: [25.5, 25.5, 25.5, .2],
        gravity: {
            x: 0,
            y: -90
        },
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 0,
        tangentialAccelVar: 0,
        speed: 180,
        speedVar: 50
    }
},
{
    name: "watergeyser",
    system: {
        totalParticles: 50,
        emissionRate: 100,
        active: true,
        duration: Infinity,
        pos: "centerBottom",
        posVar: {
            x: 0,
            y: 0
        },
        angle: Math.PI / 2,
        angleVar: Utils.grad2radian(10),
        life: 2.5,
        lifeVar: 1,
        radius: 5,
        radiusVar: 3,
        textureEnabled: false,
        textureAdditive: false,
        startScale: 1,
        startScaleVar: 0,
        endScale: 1,
        endScaleVar: 0,
        startColor: [19.89, 59.93, 255, 1],
        startColorVar: [0, 0, 48, .3],
        endColor: [198.9, 198.9, 255, 0],
        endColorVar: [0, 0, 0, 0],
        gravity: {
            x: 0,
            y: 150
        },
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 0,
        tangentialAccelVar: 0,
        speed: 180,
        speedVar: 50
    }
},
{
    name: "ribbon",
    system: {
        totalParticles: 200,
        emissionRate: 40,
        active: true,
        duration: Infinity,
        pos: "bottomLeft",
        posVar: {
            x: 30,
            y: 0
        },
        angle: Utils.grad2radian(55),
        angleVar: 0,
        life: 2.5,
        lifeVar: 0,
        radius: 10,
        radiusVar: 5,
        textureEnabled: false,
        textureAdditive: false,
        startScale: 1,
        startScaleVar: 0,
        endScale: 1,
        endScaleVar: 0,
        startColor: [255, 0, 0, 1],
        startColorVar: [0, 0, 0, 0],
        endColor: [0, 0, 255, 1],
        endColorVar: [0, 0, 0, 0],
        gravity: {
            x: 0,
            y: -45
        },
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 60,
        tangentialAccelVar: 0,
        speed: 180,
        speedVar: 50
    }
},
{
    name: "ringoffire",
    system: {
        totalParticles: 400,
        emissionRate: 180,
        active: true,
        duration: Infinity,
        pos: "center",
        posVar: {
            x: 180,
            y: 20
        },
        angle: 90,
        angleVar: 10,
        life: 1,
        lifeVar: 1,
        radius: 10,
        radiusVar: 1,
        textureEnabled: true,
        textureAdditive: true,
        startScale: 1,
        startScaleVar: 0,
        endScale: 1,
        endScaleVar: 0,
        startColor: [193.8, 63.75, 30.6, 1],
        endColor: [0, 0, 0, 0],
        gravity: {
            x: 0,
            y: 0
        },
        radialAccel: 0,
        radialAccelVar: 0,
        tangentialAccel: 0,
        tangentialAccelVar: 0,
        speed: 60,
        speedVar: 20
    }
}];
ParticleSystem.Renderer = {};
ParticleSystem.Renderer.render = function(parent, particles) {
    for (var i = 0; i < particles.length; ++i) {
        var p = particles[i];
        if (p.life > 0 && (p.color || p.displayObject)) {
            if (p.displayObject) {
                if (!p.displayObject.stage) parent.addChild(p.displayObject);
                p.displayObject.setPosition(p.pos.x, p.pos.y);
                p.displayObject.scaleX = p.displayObject.scaleY = p.scale;
                p.displayObject.rotation = p.rotation;
                if (p.displayObject instanceof Graphics) {
                    p.displayObject.color = ParticleSystem.Utils.colorArrayToString(p.color, 1);
                    p.displayObject.fillColor = p.displayObject.color
                }
                p.displayObject.opacity = p.color[3]
            }
        } else if (p.displayObject) p.displayObject.destroy = true
    }
};
var DataCache = {};
DataCache.cache = {};
DataCache.load = function(url, callback, dataType, params, method) {
    if (DataCache.cache[url]) {
        if (callback) callback(DataCache.cache[url]);
        return
    }
    if (!dataType) dataType = "json";
    if (!params) params = {};
    if (!method) method = "get";
    Utils.ajax(url, method, params, dataType,
    function(data) {
        DataCache.cache[url] = data;
        if (callback) callback(data)
    })
};
DataCache.clear = function(url) {
    if (url) DataCache.cache[url] = null;
    else DataCache.cache = {}
};
DataCache.batch = function(batch, completeCallback) {
    var item, itemsCount = batch.length,
    itemsLoaded = 0;
    for (var i = 0; i < itemsCount; i++) {
        item = batch[i];
        DataCache.load(item.url,
        function(cb) {
            var handler = function(data) {
                if (cb) cb(data);
                itemsLoaded++;
                if (itemsLoaded >= itemsCount && completeCallback) completeCallback()
            };
            return handler
        } (item.callback), item.dataType, item.params, item.method)
    }
};
var LinksProcessor = {};
LinksProcessor.get = function(url) {
    var tmp = url.split(".");
    var ext = tmp[tmp.length - 1];
    if (ext == "xml") ext = "json";
    if (ext == "wav") ext = "mp3";
    tmp[tmp.length - 1] = ext;
    url = tmp.join(".");
    if (ext == "json") url = "data/" + url;
    if (ext == "mp3" || ext == "ogg") url = "sounds/" + url;
    if (ext == "jpg" || ext == "jpeg" || ext == "png") url = "images/" + Utils.globalScale + "/" + url;
    return url
};
function Path() {
    this.m_id = -1;
    this.m_base_index = 0;
    this.m_base = [];
    this.m_path = []
}
Path.prototype.clear = function() {
    this.m_base = [];
    this.m_path = []
};
Path.prototype.addPoint = function(_point) {
    this.m_base.push(_point)
};
Path.prototype.insertPoint = function(_point) {
    var distance = 999999999999;
    var idx = -1;
    for (var i = 0; i < this.m_base.length; i++) {
        var w = this.m_base[i].x - _point.x;
        var h = this.m_base[i].y - _point.y;
        var dist = Math.sqrt(w * w + h * h);
        if (dist < distance) {
            distance = dist;
            idx = i
        }
    }
    if (idx != -1) {
        this.m_base.splice(idx + 1, 0, _point);
        return idx + 1
    } else {
        this.addPoint(_point);
        return this.m_base.length - 1
    }
};
Path.prototype.deleteBasePoint = function(_index) {
    if (_index < 0 || _index >= this.m_base.length) return;
    this.m_base.splice(_index, 1)
};
Path.prototype.changeBasePointPosition = function(_index, _new_pos) {
    if (_index < 0 || _index >= this.m_base.length) return;
    this.m_base[_index] = _new_pos
};
Path.prototype.makePath = function() {
    var size = this.m_base.length;
    if (size >= 3) {
        var b0 = this.m_base[0];
        var b1 = this.m_base[1];
        var b = {
            x: 2 * b0.x - b1.x,
            y: 2 * b0.y - b1.y
        };
        var e1 = this.m_base[size - 1];
        var e2 = this.m_base[size - 2];
        var e = {
            x: 2 * e1.x - e2.x,
            y: 2 * e1.y - e2.y
        };
        this.m_base.splice(0, 0, b);
        this.m_base.push(e)
    }
    size = this.m_base.length;
    this.m_path = [];
    if (size >= 4) {
        for (var idx = 0; idx < size - 3; idx++) for (var t = 0; t <= 1; t += .05) {
            var pos = this.bSpline(idx, t);
            var s = this.m_path.length;
            if (s == 0 || (Math.abs(this.m_path[s - 1].x - pos.x) >= .5 || Math.abs(this.m_path[s - 1].y - pos.y) >= .5)) this.m_path.push(pos)
        }
        return true
    }
    console.log("** Path should contain 4 or more base points!");
    return true
};
Path.prototype.makePathWithoutAddingTwoBorderBasePoints = function() {
    var tempBase = this.m_base;
    this.m_path = [];
    var result = this.makePath();
    this.m_base = tempBase;
    return result
};
Path.prototype.getLength = function() {
    return this.m_path.length
};
Path.prototype.getBaseLength = function() {
    return this.m_base.length
};
Path.PATH_SMOOTH = false;
Path.prototype.getPoint = function(_distance) {
    var index = Math.floor(_distance);
    if (index < this.getLength()) {
        var _pos;
        if (Path.PATH_SMOOTH) {
            var t = _distance - Math.floor(_distance);
            var next = index + 1;
            if (next >= this.m_path.length) next = index;
            var a = this.m_path[index];
            var b = this.m_path[next];
            _pos = a + (b - a) * t
        } else _pos = m_path[index];
        return _pos
    }
    return false
};
Path.prototype.bSpline = function(_idx, _t) {
    var _pos = {};
    var s = 1 - _t;
    var t2 = _t * _t;
    var t3 = t2 * _t;
    var x0 = s * s * s * this.m_base[_idx].x;
    var y0 = s * s * s * this.m_base[_idx].y;
    var x1 = (3 * t3 - 6 * t2 + 4) * this.m_base[_idx + 1].x;
    var y1 = (3 * t3 - 6 * t2 + 4) * this.m_base[_idx + 1].y;
    var x2 = ( - 3 * t3 + 3 * t2 + 3 * _t + 1) * this.m_base[_idx + 2].x;
    var y2 = ( - 3 * t3 + 3 * t2 + 3 * _t + 1) * this.m_base[_idx + 2].y;
    var x3 = t3 * this.m_base[_idx + 3].x;
    var y3 = t3 * this.m_base[_idx + 3].y;
    _pos.x = (x0 + x1 + x2 + x3) / 6;
    _pos.y = (y0 + y1 + y2 + y3) / 6;
    return _pos
};
var TD = {};
TD.stage = null;
TD.gameField = null;
TD.onReady = null;
TD.gameData = {};
TD.currentLevel = 0;
TD.currentWorld = 0;
TD.currentWorldData = null;
TD.levelPreloader = null;
TD.currentWindow = null;
TD.configs = {};
TD.ui = {};
TD.ADDITIONAL_SLOT_PRICE = 500;
TD.WORLDS_COUNT = 4;
TD.LEVELS_ON_CHAPTER = 24;
TD.init = function(stage, callback) {
    TD.stage = stage;
    DataCache.load("data/game/worlds.json",
    function(data) {
        TD.configs.worlds = data;
        TD.load(callback)
    })
};
TD.clear = function() {
    TD.currentWindow = null;
    TD.stage.clear();
    if (TD.gameField) {
        TD.gameField.pause();
        TD.gameField.destroy = true;
        TD.gameField = null
    }
    TD.ui = {};
    TD.stage.refreshBackground()
};
TD.getWorldConfig = function(id) {
    var worlds = TD.configs.worlds.worlds.world;
    for (var i = 0; i < worlds.length; i++) if (TD.getAttr(worlds[i], "world_number") == id) return worlds[i];
    return null
};
TD.startLevel = function(worldId, id) {
    ExternalAPI.exec("showAds");
    TD.clear();
    TD.ui.preloader = new LevelPreloader;
    TD.stage.addChild(TD.ui.preloader);
    TD.currentWorld = worldId;
    TD.currentLevel = id;
    var config = TD.getWorldConfig(worldId);
    if (!config) throw Error("World " + worldId + " not found");
    var worldData, unitsData;
    var batchConfig = [{
        url: LinksProcessor.get(TD.getAttr(config, "path")),
        callback: function(data) {
            worldData = data
        }
    },
    {
        url: LinksProcessor.get(TD.getAttr(config, "units_path")),
        callback: function(data) {
            unitsData = data
        }
    },
    {
        url: "data/game/towers.json",
        callback: function(data) {
            TD.configs.towers = data
        }
    },
    {
        url: "data/game/towers_bar.json",
        callback: function(data) {
            TD.configs.towersBar = data
        }
    },
    {
        url: "data/game/bullets.json",
        callback: function(data) {
            TD.configs.bullets = data
        }
    }];
    DataCache.batch(batchConfig,
    function() {
        TD.ui.preloader.showProgress(20);
        TD.currentWorldData = worldData;
        UI.assetsLibrary.addAssets(Utils.clone(GAME_ASSETS));
        UI.assetsLibrary.load(function() {
            TD.ui.preloader.showProgress(50);
            TD.gameField = new GameField;
            TD.gameField.visible = true;
            TD.stage.addChild(TD.gameField);
            TD.gameField.setPosition((stage.screenWidth - MIN_LAYOUT_WIDTH) / 2, 0);
            TD.gameField.addEventListener("ready", TD.createUI);
            TD.gameField.init(worldData.mission[id - 1], unitsData);
            var sound = TD.getAttr(worldData, "sound");
            if (sound) SoundsManager.play(sound, true);
            else SoundsManager.pauseMusic()
        },
        TD.ui.preloader.showProgress, 20, 50)
    })
};
TD.restartLevel = function() {
    TD.startLevel(TD.currentWorld, TD.currentLevel)
};
TD.startNextLevel = function() {
    if (TD.currentWorldData.mission[TD.currentLevel]) TD.startLevel(TD.currentWorld, TD.currentLevel + 1);
    else TD.showChapterSelect()
};
TD.getTowerButtonConfig = function(towerId, slot, experience) {
    if (towerId < 0) return {
        costX: 0,
        costY: 0
    };
    var id = 0,
    towers = TD.configs.towersBar.slots;
    for (var i in towers) {
        if (id == towerId) {
            pos = TD.parsePositionString(TD.getAttr(towers[i].price, "position"));
            return {
                texture: TD.getAttr(towers[i].button.out, "texture"),
                disabledTexture: TD.getAttr(towers[i].button.disabled, "texture"),
                cost: TowersHierarchy.get(id, 0).getCost(0),
                experience: experience,
                towerId: id,
                opened: true,
                costX: pos.x,
                costY: pos.y
            }
        }
        id++
    }
};
TD.createUI = function() {
    TD.ui.preloader.destroy = true;
    TD.gameField.pause();
    TD.ui.towersBar = new Sprite(null, 1, 1);
    var towers = TD.configs.towersBar.slots,
    config, button, pos;
    var id = 0;
    for (var i in towers) {
        button = new TowerButton({
            towerId: id,
            experience: 0,
            opened: true,
            stored: false
        });
        button.addEventListener("mousedown", TD.startSelectTower);
        TD.ui.towersBar.addChild(button);
        button.setPosition((3 - id) * 60, 60);
        id++
    }
    TD.ui.towersBar.setPosition(270, 260);
    TD.gameField.addChild(TD.ui.towersBar);
    TD.ui.savedTowersBar = new Sprite(null, 1, 1);
    var savedUnit;
    for (var i = 0; i < 4; i++) {
        savedUnit = TD.gameData.savedTowers[i];
        var config;
        if (savedUnit) config = {
            towerId: savedUnit.id,
            experience: savedUnit.experience,
            opened: true,
            stored: true
        };
        else config = {
            towerId: -1,
            experience: 0,
            opened: i < 3 || TD.gameData.additionalSaveSlot,
            stored: true
        };
        button = new TowerButton(config);
        button.setPosition(i * 60, 60);
        button.addEventListener("mousedown", TD.startSelectTower);
        TD.ui.savedTowersBar.addChild(button)
    }
    TD.ui.savedTowersBar.setPosition(5, 260);
    TD.gameField.addChild(TD.ui.savedTowersBar);
    TD.ui.moveyView = new UITextNumbers(8, 22, "");
    TD.ui.moveyView.textPrefix = "@";
    TD.ui.moveyView.view.scale = .8;
    TD.ui.moveyView.view.charSpacing = 2;
    TD.gameField.addChild(TD.ui.moveyView);
    TD.ui.lifeView = new UITextNumbersSmall(18, 50, "");
    TD.ui.lifeView.textPrefix = "_";
    TD.ui.lifeView.view.charSpacing = 2;
    TD.gameField.addChild(TD.ui.lifeView);
    TD.ui.nextWave = new NextWaveView;
    TD.ui.nextWave.setPosition(240, 20);
    TD.gameField.addChild(TD.ui.nextWave);
    TD.gameField.addEventListener("startwave", TD.updateNextWave);
    TD.gameField.addEventListener("wavefinished", TD.clearWaveIcons);
    TD.gameField.addEventListener("towerselect", TD.onTowerSelected);
    TD.gameField.addEventListener("levelcomplete", TD.onLevelComplete);
    TD.gameField.addEventListener("levelloose", TD.onLevelLoose);
    TD.gameField.gameViews.back.addEventListener("click", TD.hideTowerMenu);
    TD.updateNextWave();
    TD.ui.optionsButton = UI.assetsLibrary.getSprite("game/infobar/infobar_3");
    TD.ui.optionsButton.setPosition(410, 20);
    TD.ui.optionsButton.onclick = TD.showInGameMenu;
    TD.ui.optionsButton.addEventListener("click", SoundsManager.click);
    TD.gameField.addChild(TD.ui.optionsButton);
    TD.ui.speedScaleButton = UI.assetsLibrary.getSprite("game/infobar/infobar_7");
    TD.ui.speedScaleButton.setPosition(450, 20);
    TD.ui.speedScaleButton.onclick = TD.speedScale;
    TD.ui.speedScaleButton.addEventListener("click", SoundsManager.click);
    TD.gameField.addChild(TD.ui.speedScaleButton);
    TD.ui.playPauseButton = UI.assetsLibrary.getSprite("game/infobar/infobar_6");
    TD.ui.playPauseButton.setPosition(490, 20);
    TD.ui.playPauseButton.onclick = TD.toggleGame;
    TD.ui.playPauseButton.addEventListener("click", SoundsManager.click);
    TD.gameField.addChild(TD.ui.playPauseButton);
    Hint.show(Hint.BUILD_HINT)
};
TD.speedScale = function() {
    if (TD.gameField.ended) return;
    var asset;
    if (TD.gameField.speedScale == 1) {
        asset = UI.assetsLibrary.getAsset("game/infobar/infobar_8");
        TD.gameField.setSpeedScale(4)
    } else {
        asset = UI.assetsLibrary.getAsset("game/infobar/infobar_7");
        TD.gameField.setSpeedScale(1)
    }
    TD.ui.speedScaleButton.bitmap = asset.bitmap;
    TD.ui.speedScaleButton.width = asset.width;
    TD.ui.speedScaleButton.height = asset.height;
    if (TD.gameField.paused) TD.toggleGame()
};
TD.toggleGame = function() {
    if (!TD.gameField || TD.gameField.ended) return;
    if (TD.gameField.paused) TD.resumeGame();
    else TD.pauseGame()
};
TD.pauseGame = function() {
    if (!TD.gameField || TD.gameField.ended) return;
    var asset = UI.assetsLibrary.getAsset("game/infobar/infobar_6");
    TD.ui.playPauseButton.bitmap = asset.bitmap;
    TD.ui.playPauseButton.width = asset.width;
    TD.ui.playPauseButton.height = asset.height;
    TD.gameField.pause()
};
TD.resumeGame = function() {
    if (!TD.gameField || TD.gameField.ended) return;
    var asset = UI.assetsLibrary.getAsset("game/infobar/infobar_5");
    TD.ui.playPauseButton.bitmap = asset.bitmap;
    TD.ui.playPauseButton.width = asset.width;
    TD.ui.playPauseButton.height = asset.height;
    TD.gameField.resume()
};
TD.clearWaveIcons = function() {
    if (TD.ui.waveIcons) for (var i = 0; i < TD.ui.waveIcons.length; i++) TD.ui.waveIcons[i].destroy = true;
    TD.ui.waveIcons = []
};
TD.updateNextWave = function() {
    TD.ui.nextWave.setWave(TD.gameField.currentWave, TD.gameField.currentWaveId, TD.gameField.wavesCount);
    TD.clearWaveIcons();
    var pathes = TD.gameField.getActivePathes(),
    icon;
    for (var i = 0; i < pathes.length; i++) {
        icon = new WaveIcon(pathes[i]);
        TD.gameField.addChild(icon);
        TD.ui.waveIcons.push(icon)
    }
};
TD.updateTowersBar = function() {
    var b, pos;
    if (TD.ui.towersBar.visible) for (var i = 0; i < TD.ui.towersBar.objects.length; i++) {
        b = TD.ui.towersBar.objects[i];
        if (b instanceof TowerButton) b.setEnabled(b.config.cost <= TD.gameField.money)
    }
    if (TD.ui.savedTowersBar.visible) {
        pos = 0;
        for (var i = 0; i < TD.ui.savedTowersBar.objects.length; i++) {
            b = TD.ui.savedTowersBar.objects[i];
            if (b instanceof TowerButton) {
                b.setEnabled(b.config.cost <= TD.gameField.money || !b.config.opened);
                b.visible = TD.gameField.ended || b.config.towerId >= 0;
                if (b.visible) {
                    b.x = pos;
                    pos += 60;
                    b.showBack = TD.gameField.ended;
                    b.refresh()
                }
            }
        }
    }
};
TD.startSelectTower = function(e) {
    TD.hideTowerMenu();
    var button = e.target;
    if (!button.config.opened) {
        TD.buyAdditionalSaveSlot();
        return
    }
    if (button.config.towerId < 0) return false;
    var pos = e.target.getAbsolutePosition();
    pos.x -= TD.gameField.x;
    pos.y -= TD.gameField.y;
    var config = button.config;
    button.oldConfig = Utils.clone(button.config);
    var towerPlace = new TowerPlace({
        id: config.towerId,
        level: 0,
        experience: config.experience,
        cost: config.cost,
        from: button
    });
    towerPlace.setPosition(e.x + pos.x, e.y + pos.y);
    TD.gameField.addChild(towerPlace);
    towerPlace.startDrag(0, 0);
    towerPlace.onplace = TD.onTowerPlace;
    if (config.stored) config.towerId = -1;
    TD.ui.towersBar.moveTo(TD.ui.towersBar.x, stageProps.height - 50, 500);
    TD.ui.savedTowersBar.moveTo(TD.ui.savedTowersBar.x, stageProps.height - 50, 500);
    TD.gameField.highLightSpots(true)
};
TD.buyAdditionalSaveSlot = function() {
    if (TD.gameData.stars >= TD.ADDITIONAL_SLOT_PRICE) {
        var text = I18.f("\u0416\u0435\u043b\u0430\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438/n\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u043b\u043e\u0442 \u0437\u0430 %d\u00a9?/n\u0423 \u0432\u0430\u0441 \u0432\u0441\u0435\u0433\u043e %d\u00a9.", TD.ADDITIONAL_SLOT_PRICE, TD.gameData.stars);
        Alert.create(text, TD.processBuyAdditionalSaveSlot, true)
    } else Alert.create(I18.f("\u0423 \u0432\u0430\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u00a9. \u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f %d\u00a9", TD.ADDITIONAL_SLOT_PRICE))
};
TD.processBuyAdditionalSaveSlot = function(result) {
    if (result) {
        TD.gameData.additionalSaveSlot = true;
        TD.gameData.stars -= TD.ADDITIONAL_SLOT_PRICE;
        TD.save();
        TD.ui.savedTowersBar.objects[3].config.opened = true
    }
};
TD.onTowerPlace = function(target, config) {
    TD.ui.towersBar.moveTo(TD.ui.towersBar.x, 260, 500);
    TD.ui.savedTowersBar.moveTo(TD.ui.savedTowersBar.x, 260, 500);
    if (config.forSave) if (target) {
        target.config.towerId = config.from.id;
        target.config.experience = config.from.experience;
        TD.gameField.removeTower(config.from)
    } else config.from.visible = true;
    else {
        TD.gameField.highLightSpots(false);
        if (target && TD.gameField.money >= config.cost) {
            var tower = TD.gameField.addTower(target, config.id, 0, 0);
            tower.experience = config.experience;
            tower.updateUpIcon();
            TD.gameField.spentMoney(config.cost)
        }
        if (!target && config.from.config.stored) config.from.config.towerId = config.from.oldConfig.towerId
    }
};
TD.getStoreGameId = function() {
    return "playtomax_" + Utils.getGameID() + "_data"
};
TD.save = function() {
    Utils.setCookie(TD.getStoreGameId(), JSON.stringify(TD.gameData))
};
TD.getDefaultGameData = function(complexity) {
    return {
        complexity: complexity ? complexity: 0,
        stars: 0,
        savedTowers: [],
        additionalSaveSlot: false,
        levelResults: [[], [], [], []],
        openedWorlds: [true],
        upgrades: [[0], [0], [0], [0]],
        achievements: [],
        soundsDisabled: false,
        musicDisabled: false,
        comixViewed: false,
        viewedHints: []
    }
};
TD.load = function(callback) {
    if (ExternalAPI.externalStorage) ExternalAPI.exec("load",
    function(data) {
        TD.loadComplete(data, callback)
    });
    else {
        var str = Utils.getCookie(TD.getStoreGameId());
        var data = null;
        if (str) data = JSON.parse(str);
        if (!data) data = TD.getDefaultGameData();
        TD.loadComplete(data, callback)
    }
};
TD.refreshGameData = function(data) {
    TD.gameData = data
};
TD.loadComplete = function(data, callback) {
    TD.refreshGameData(data);
    if (callback) callback()
};
TD.hideTowerMenu = function() {
    if (TD.ui.towerMenu) {
        TD.ui.towerMenu.destroy = true;
        TD.ui.towerMenu.visible = false
    }
    TD.ui.towerMenu = null
};
TD.showTowerMenu = function(tower) {
    TD.ui.towerMenu = new TowerMenu(tower);
    TD.ui.towerMenu.setPosition(tower.x, tower.y);
    TD.gameField.addChild(TD.ui.towerMenu)
};
TD.onTowerSelected = function(e) {
    TD.hideTowerMenu();
    var tower = e.target;
    if (TD.gameField.ended) {
        var pos = e.target.getAbsolutePosition();
        pos.x -= TD.gameField.x;
        pos.y -= TD.gameField.y;
        var towerPlace = new TowerPlace({
            id: tower.id,
            level: tower.level,
            experience: tower.experience,
            cost: 0,
            from: tower,
            forSave: true
        });
        towerPlace.setPosition(e.x + pos.x, e.y + pos.y);
        TD.gameField.addChild(towerPlace);
        towerPlace.startDrag(0, 0);
        towerPlace.onplace = TD.onTowerPlace;
        tower.visible = false
    } else TD.showTowerMenu(tower);
    return false
};
TD.showWin1Banner = function() {
    if (!TD.gameField) return;
    var banner = new LevelBanner("collect_hero_towers_0", I18.f("\u041f\u041e\u0411\u0415\u0414\u0410!"), TD.showWin2Banner);
    banner.setPosition(256, 192);
    TD.gameField.addChild(banner)
};
TD.showWin2Banner = function() {
    if (!TD.gameField) return;
    var banner = new LevelBanner("collect_hero_towers_2", I18.f("\u0421\u041e\u0425\u0420\u0410\u041d\u0415\u041d\u0418\u0415/n\u0413\u0415\u0420\u041e\u0415\u0412!"));
    banner.setPosition(256, 192);
    TD.gameField.addChild(banner);
    Hint.show(Hint.SAVE_HINT, TD.gameField.towers[0])
};
TD.onLevelComplete = function() {
    TD.clearWaveIcons();
    TD.hideTowerMenu();
    TD.showWin1Banner();
    var b = new CommonButton("button_medium_square", "next");
    b.setPosition(480, 355);
    TD.gameField.addChild(b);
    b.onclick = TD.afterLevelComleted;
    TD.ui.levelCompleteButton = b;
    TD.ui.towersBar.visible = false
};
TD.afterLevelComleted = function() {
    var buttons = TD.ui.savedTowersBar.objects;
    var savedTowers = [];
    var savedTowersCount = 0;
    var savedTowersSlots = 0;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].config.towerId >= 0) {
            savedTowers[i] = {
                id: buttons[i].config.towerId,
                experience: buttons[i].config.experience
            };
            savedTowersCount++
        }
        if (buttons[i].config.opened) savedTowersSlots++
    }
    if (savedTowersCount >= savedTowersSlots || !TD.gameField.towers.length) TD.processLevelComlete(savedTowers);
    else Alert.create(I18.f("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435/n\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0433\u0435\u0440\u043e\u0439\u0441\u043a\u0438\u0435 \u0431\u0430\u0448\u043d\u0438?"),
    function(res) {
        if (res) TD.processLevelComlete(savedTowers)
    },
    true)
};
TD.processLevelComlete = function(savedTowers) {
    TD.gameData.savedTowers = savedTowers || [];
    TD.save();
    TD.ui.levelCompleteButton.destroy = true;
    TD.ui.savedTowersBar.visible = false;
    AchievementsManager.event(AchievementsManager.EVENT_LEVEL_COMPLETE);
    TD.showLevelWinWindow()
};
TD.onLevelLoose = function() {
    TD.clearWaveIcons();
    TD.hideTowerMenu();
    TD.ui.savedTowersBar.visible = false;
    TD.ui.towersBar.visible = false;
    TD.showLevelLooseWindow()
};
TD.updateTowerMenu = function() {
    if (TD.ui.towerMenu) if (TD.ui.towerMenu.tower.health <= 0 || !TD.ui.towerMenu.tower.parent) TD.hideTowerMenu();
    else TD.ui.towerMenu.update()
};
TD.showMainMenu = function() {
    TD.clear();
    var w = new MainMenu;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    TD.currentWindow = w
};
TD.showChapterSelect = function() {
    TD.clear();
    var w = new ChapterSelect;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    TD.currentWindow = w
};
TD.showLevelSelect = function(chapter) {
    TD.clear();
    var w = new LevelSelect(chapter);
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    TD.currentWindow = w
};
TD.showLevelSelectInCurrentChapter = function() {
    TD.showLevelSelect(TD.currentWorld)
};
TD.showLevelWinWindow = function() {
    var w = new LevelWin;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0)
};
TD.showLevelLooseWindow = function() {
    var w = new LevelLoose;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0)
};
TD.showShop = function(forceClear) {
    if (TD.gameField && !forceClear) {
        TD.pauseGame();
        TD.gameField.visible = false
    } else TD.clear();
    var w = new Shop;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    TD.currentWindow = w;
    return w
};
TD.showAchievements = function() {
    var w = new Achievements;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    return w
};
TD.showOptions = function() {
    var w = new Options;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    return w
};
TD.showInGameMenu = function() {
    TD.pauseGame();
    var w = new InGameMenu;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    return w
};
TD.showComics = function() {
    TD.clear();
    var w = new Comics;
    TD.stage.addChild(w);
    w.setRelativePosition(0, 0);
    TD.currentWindow = w
};
TD.resizeImages = function(images, width, height) {
    var cns, ctx, bitmap, w = width * Utils.globalScale,
    h = height * Utils.globalScale;
    for (var i in images) {
        bitmap = images[i];
        cns = document.createElement("canvas");
        cns.width = w;
        cns.height = h;
        ctx = cns.getContext("2d");
        ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, w, h);
        images[i] = cns
    }
    return images
};
TD.parseRectString = function(rectStr) {
    if (!rectStr) rectStr = "";
    var tmp = TD.parseNumbersString(rectStr);
    for (var i = 0; i < 4; i++) if (!tmp[i]) tmp[i] = 0;
    var res = {};
    res.left = Math.round(tmp[0] * TD.metrics.scale);
    res.top = Math.round(tmp[1] * TD.metrics.scale);
    res.right = Math.round(tmp[2] * TD.metrics.scale);
    res.bottom = Math.round(tmp[3] * TD.metrics.scale);
    res.width = Math.abs(res.right - res.left);
    res.height = Math.abs(res.bottom - res.top);
    return res
};
TD.parsePositionString = function(positionStr) {
    if (!positionStr) positionStr = "";
    var tmp = TD.parseNumbersString(positionStr);
    for (var i = 0; i < 2; i++) if (!tmp[i]) tmp[i] = 0;
    var res = {};
    res.x = Math.round(tmp[0] * TD.metrics.scale);
    res.y = Math.round(tmp[1] * TD.metrics.scale);
    return res
};
TD.getValFromString = function(str, subLevel) {
    var vals = TD.parseNumbersString(str);
    if (typeof vals[subLevel] == "undefined") return vals[0];
    return vals[subLevel]
};
TD.parseNumbersString = function(str) {
    if (!str) str = "";
    var tmp = str.split(" ");
    for (var i = 0; i < tmp.length; i++) tmp[i] *= 1;
    return tmp
};
TD.getAttr = function(data, name, isNumber) {
    if (data && data["@attributes"]) {
        var val = data["@attributes"][name];
        if (isNumber) {
            if (!val) val = 0;
            val *= 1
        }
        return val
    }
    return null
};
TD.tick = function(delta) {
    if (TD.gameField && TD.gameField.ready) {
        if (!TD.gameField.ended && !TD.gameField.paused) TD.gameField.tick(delta);
        TD.updateTowerMenu();
        TD.updateTowersBar();
        if (TD.ui.moveyView.text == "") TD.ui.moveyView.update(TD.gameField.money);
        else TD.ui.moveyView.animatedNumericUpdate(TD.gameField.money);
        if (TD.ui.lifeView.text == "") TD.ui.lifeView.update(TD.gameField.life);
        else TD.ui.lifeView.animatedNumericUpdate(TD.gameField.life)
    }
};
TD.postTick = function() {
    if (!TD.gameField || TD.gameField.ended) return
};
TD.normalizeAngle = function(angle) {
    while (angle < 0) angle += Math.PI * 2;
    while (angle > Math.PI * 2) angle -= Math.PI * 2;
    return angle
};
TD.setHotSpot = function(sprite, hotspot) {
    var p = TD.parsePositionString(hotspot);
    sprite.anchor.x = p.x - sprite.width / 2;
    sprite.anchor.y = p.y - sprite.height / 2
};
TD.getPerk = function(name) {
    var perks = TD.configs.perks.perks.perk;
    for (var i = 0; i < perks.length; i++) if (TD.getAttr(perks[i], "name") == name) return perks[i];
    return null
};
TD.metrics = {};
TD.metrics.scale = .5;
var Complexity = {};
Complexity.getFactor = function(name) {
    var params = Complexity.params[TD.gameData.complexity];
    return params ? params[name] : 1
};
Complexity.getFactorHealth = function() {
    return Complexity.getFactor("factorHealth")
};
Complexity.getFactorHitPower = function() {
    return Complexity.getFactor("factorHitPower")
};
Complexity.getFactorSpeedAttack = function() {
    return Complexity.getFactor("factorSpeedAttack")
};
Complexity.getFactorSpeedMove = function() {
    return Complexity.getFactor("factorSpeedMove")
};
Complexity.params = [{
    factorHealth: .6,
    factorHitPower: .3,
    factorSpeedAttack: .8,
    factorSpeedMove: .7
},
{
    factorHealth: .9,
    factorHitPower: 1,
    factorSpeedAttack: 1,
    factorSpeedMove: 1
}];
function GameField() {
    Utils.callSuperConstructor(GameField, this, null, 1, 1);
    this.zIndex = 2;
    this.ready = false;
    this.paused = false;
    this.ended = false;
    this.levelData = null;
    this.speedScale = 1;
    this.mission = null;
    this.unitsConfigs = null;
    this.gameViews = {};
    this.pathes = [];
    this.separator = null;
    this.spots = [];
    this.towers = [];
    this.mobs = [];
    this.bullets = [];
    this.mobsPortals = [];
    this.waves = [];
    this.wavesCount = 0;
    this.currentWave = null;
    this.currentWaveId = 0;
    this.money = 0;
    this.startLife = 0;
    this.life = 0;
    this.isWin = false;
    this.stats = {
        killed: 0,
        built: 0,
        spent: 0
    };
    this.onBulletHit = Utils.proxy(this.onBulletHit, this);
    this.onTowerSelect = Utils.proxy(this.onTowerSelect, this)
}
Utils.extend(GameField, Sprite);
GameField.prototype.pause = function() {
    this.paused = true;
    for (var i = 0; i < this.towers.length; i++) this.towers[i].stop();
    for (var i = 0; i < this.mobs.length; i++) this.mobs[i].stop()
};
GameField.prototype.resume = function() {
    this.paused = false;
    for (var i = 0; i < this.mobs.length; i++) this.mobs[i].play()
};
GameField.prototype.toggle = function() {
    if (this.ended) return;
    if (this.paused) this.resume();
    else this.pause()
};
GameField.prototype.setSpeedScale = function(val) {
    if (this.speedScale == val) return;
    this.speedScale = val
};
GameField.prototype.spentMoney = function(val) {
    this.money -= val;
    this.stats.spent += val
};
GameField.prototype.getImage = function(data) {
    var texture = TD.getAttr(data, "texture");
    if (texture) return {
        name: texture,
        src: LinksProcessor.get(texture),
        rect: TD.getAttr(data, "rect"),
        position: TD.getAttr(data, "position"),
        fps: TD.getAttr(data, "fps"),
        frames: TD.getAttr(data, "frames"),
        use_filter: TD.getAttr(data, "use_filter")
    };
    else {
        console.log(data);
        throw Error("Image not found");
    }
};
GameField.prototype.init = function(mission, unitsConfigs) {
    this.mission = mission;
    this.unitsConfigs = unitsConfigs;
    this.money = TD.getAttr(this.mission, "money_start", true);
    this.startLife = TD.getAttr(this.mission, "lives", true);
    this.life = this.startLife;
    Mob.reset();
    for (var i in unitsConfigs.units) if (i != "comment") Mob.typeNames.push(i);
    var preloader = new ImagesPreloader;
    this.gameViews = {};
    this.gameViews.back = this.getImage(this.mission.background.background);
    var base = this.mission.background.base ? this.mission.background.base: this.mission.background.bases.base_01;
    this.gameViews.base = this.getImage(base.box);
    this.gameViews.overlay = this.getImage(base.overlay);
    this.gameViews.ruins = this.getImage(base.ruins);
    var images = [this.gameViews.back, this.gameViews.base, this.gameViews.ruins, this.gameViews.overlay];
    if (this.mission.background.bases) {
        i = 0;
        for (var k in this.mission.background.bases) {
            if (i > 0) images.push(this.getImage(this.mission.background.bases[k].box));
            i++
        }
    }
    var objects = this.mission.background.objects;
    if (!Utils.isArray(objects)) objects = [objects.object];
    var objectsList = this.mission.background.objectslist;
    if (!Utils.isArray(objectsList)) objectsList = [objectsList.object];
    for (var i = 0; i < objects.length; i++) {
        var img = this.getImage(objectsList[i]);
        img.position = TD.getAttr(objects[i], "position");
        images.push(img)
    }
    preloader.minProgressVal = 70;
    preloader.maxProgressVal = 30;
    preloader.load(images, Utils.proxy(function(bitmaps) {
        TD.ui.preloader.showProgress(100);
        var mc, img, rect, pos;
        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            rect = TD.parseRectString(img.rect);
            pos = TD.parsePositionString(img.position);
            if (img == this.gameViews.back) {
                rect.width = 683;
                pos.x = -86
            }
            if (img.name == "game/worlds/flag_anim_0.png" && Utils.globalScale == 1.5) rect.width = 43.33;
            mc = new TilesSprite(bitmaps[img.name], rect.width, rect.height, img.frames > 0 ? img.frames: 1, 1, img.frames > 0 ? img.frames: 1);
            mc.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP);
            mc.setPosition(pos.x, pos.y);
            if (img.fps > 0) mc.changeFrameDelay = 1E3 / img.fps;
            mc.zIndex = 100;
            if (img == this.gameViews.back) {
                mc.setStatic(true);
                mc.zIndex = 1;
                this.gameViews.back = mc
            }
            if (img == this.gameViews.base) {
                TD.setHotSpot(mc, TD.getAttr(base.box, "hotspot"));
                this.gameViews.base = mc
            }
            if (img == this.gameViews.ruins) {
                mc.visible = false;
                this.gameViews.ruins = mc
            }
            if (img == this.gameViews.overlay) {
                TD.setHotSpot(mc, TD.getAttr(base.overlay, "hotspot"));
                mc.visible = false;
                this.gameViews.overlay = mc
            }
            this.addChild(mc)
        }
        this.spots = [];
        var mask = TD.getAttr(this.mission.background, "mask");
        for (var y = 0; y < 20; y++) for (var x = 0; x < 26; x++) {
            var s = mask.substr(y * 26 + x, 1);
            if (s == "1") {
                mc = new Spot;
                mc.setPosition(x * mc.width + 6, y * mc.height + 2);
                this.addChild(mc);
                this.spots.push(mc)
            }
        }
        this.buildPathes();
        this.waves = Utils.clone(this.mission.waves.wave);
        this.wavesCount = this.waves.length;
        this.startNextWave();
        this.ready = true;
        this.dispatchEvent("ready");
        TD.stage.refreshBackground()
    },
    this), TD.ui.preloader.showProgress)
};
GameField.prototype.buildPathes = function() {
    var pathes = TD.gameField.mission.background.pathes.path;
    if (!Utils.isArray(pathes)) pathes = [pathes];
    this.pathes = [];
    for (var i = 0; i < pathes.length; i++) {
        var path = pathes[i];
        var res = new Path;
        res.m_id = TD.getAttr(path, "id") * 1;
        for (var n = 0; n < path.point.length; n++) res.addPoint(TD.parsePositionString(TD.getAttr(path.point[n], "point")));
        res.makePath();
        this.pathes.push(res)
    }
    this.separator = new Path;
    var sep = this.mission.background.separator.point;
    for (var i = 0; i < sep.length; i++) this.separator.addPoint(TD.parsePositionString(TD.getAttr(sep[i], "point")));
    this.separator.makePath()
};
GameField.prototype.startNextWave = function() {
    if (!this.waves.length) {
        this.ended = true;
        this.dispatchEvent("end");
        return false
    } else {
        this.currentWave = this.waves.shift();
        this.currentWaveId++;
        var chr = new WaveCounterView(this.currentWaveId);
        chr.setPosition(256, 192);
        chr.zIndex = 1E3;
        this.addChild(chr);
        chr.startAnimation();
        if (!Utils.isArray(this.currentWave.enemies.enemy)) this.currentWave.enemies.enemy = [this.currentWave.enemies.enemy];
        var enemy;
        for (var i = 0; i < this.currentWave.enemies.enemy.length; i++) {
            enemy = this.currentWave.enemies.enemy[i];
            enemy.spawnDelta = TD.getAttr(enemy, "start_time") * 1E3;
            enemy.spawnCount = 0;
            enemy.finished = false
        }
        this.dispatchEvent("startwave");
        return true
    }
};
GameField.prototype.tickWave = function(delta) {
    if (!this.currentWave) return;
    var enemy, spawnDelta = 0,
    finished = true;
    for (var i = 0; i < this.currentWave.enemies.enemy.length; i++) {
        enemy = this.currentWave.enemies.enemy[i];
        if (enemy.spawnCount < TD.getAttr(enemy, "count") * 1) {
            enemy.spawnDelta -= delta * this.speedScale;
            if (enemy.spawnDelta <= 0) {
                enemy.spawnCount++;
                enemy.spawnDelta += TD.getAttr(enemy, "delta_time") * 1E3;
                this.addMob(enemy)
            }
            finished = false
        }
    }
    return finished
};
GameField.prototype.getActivePathes = function() {
    var enemy, id, pathes = [];
    for (var i = 0; i < this.currentWave.enemies.enemy.length; i++) {
        enemy = this.currentWave.enemies.enemy[i];
        id = TD.getAttr(enemy, "path_id");
        if (pathes.indexOf(id) < 0) pathes.push(id)
    }
    for (var i = 0; i < pathes.length; i++) pathes[i] = this.getPathById(pathes[i]);
    return pathes
};
GameField.prototype.getPathById = function(id) {
    for (var i = 0; i < this.pathes.length; i++) if (this.pathes[i].m_id == id) return this.pathes[i];
    return null
};
GameField.prototype.addMob = function(config) {
    var id = TD.getAttr(config, "enemy_id");
    var unitConfig = this.unitsConfigs.units[id];
    var pathId = TD.getAttr(config, "path_id", true);
    var path = this.getPathById(pathId);
    var mobView = new Mob(config, unitConfig, path);
    mobView.pathId = pathId;
    mobView.changeFrameDelay /= this.speedScale;
    mobView.zIndex = mobView.aircraft ? 150 : 5;
    this.mobs.push(mobView);
    this.addChild(mobView);
    mobView.playStartSound();
    return mobView
};
GameField.prototype.hitBaseByMob = function(mob) {
    this.life -= 1;
    this.gameViews.overlay.removeTweens();
    this.gameViews.overlay.visible = true;
    this.gameViews.overlay.opacity = 1;
    this.gameViews.overlay.fadeTo(0, 1E3);
    if (this.life <= 0) {
        this.life = 0;
        this.loose()
    }
};
GameField.prototype.highLightSpots = function(val) {
    var state = val ? Spot.STATE_HIGHLIGHT: Spot.STATE_NORMAL;
    for (var i = 0; i < this.spots.length; i++) if (this.spots[i].state != Spot.STATE_FAILED && !this.spots[i].tower) this.spots[i].setState(state)
};
GameField.prototype.addTower = function(spot, id, level, subLevel) {
    this.stats.built++;
    var tower = new Tower(id, level, subLevel);
    this.towers.push(tower);
    tower.zIndex = 10;
    this.addChild(tower);
    tower.setPosition(spot.x, spot.y);
    tower.onmousedown = this.onTowerSelect;
    spot.tower = tower;
    tower.spot = spot;
    tower.updateLevelIcon();
    AchievementsManager.event(AchievementsManager.EVENT_BUILD_TOWER, id);
    SoundsManager.play("build_tower");
    return tower
};
GameField.prototype.onTowerSelect = function(e) {
    this.dispatchEvent("towerselect", e);
    return false
};
GameField.prototype.addBullet = function(id, from, to, hitCoefficient) {
    var bullet = Bullet.create(id, hitCoefficient, from.subLevel);
    bullet.setProps(from.x, from.y, to.x, to.y);
    bullet.target = to;
    bullet.zIndex = 8;
    this.addChild(bullet);
    this.bullets.push(bullet);
    return bullet
};
GameField.prototype.onBulletHit = function(bullet) {
    var targets = [bullet.target];
    if (bullet.range > 1) {
        var stack, w, h, l;
        if (bullet.target instanceof Mob) stack = this.mobs;
        if (bullet.target instanceof Tower) stack = this.towers;
        for (var i = 0; i < stack.length; i++) if (targets.indexOf(stack[i]) < 0) {
            w = stack[i].x - bullet.x;
            h = stack[i].y - bullet.y;
            l = Math.sqrt(w * w + h * h);
            if (l <= bullet.range) targets.push(stack[i])
        }
    }
    var target;
    for (var i = 0; i < targets.length; i++) {
        target = targets[i];
        if (target.health > 0) {
            target.applyDamageFromBullet(bullet);
            if (target.health <= 0) {
                if (bullet.target instanceof Mob) this.killMob(target);
                if (bullet.target instanceof Tower) this.destroyTower(target)
            }
        }
    }
};
GameField.prototype.addMobsPortalFromMob = function(mob) {
    var portal = new MobsPortal(mob.config.unitConfig.troop_carrier);
    portal.pathId = mob.pathId;
    portal.pathPos = Utils.clone(mob.position);
    portal.rotation = mob.baseView.rotation;
    portal.setPosition(mob.x, mob.y);
    portal.zIndex = 2;
    this.mobsPortals.push(portal);
    this.addChild(portal)
};
GameField.prototype.removeMobsPortal = function(portal) {
    portal.destroy = true;
    this.mobsPortals = Utils.removeFromArray(this.mobsPortals, portal)
};
GameField.prototype.killMob = function(mob) {
    this.stats.killed++;
    this.money += mob.money;
    if (mob.config.unitConfig.troop_carrier) this.addMobsPortalFromMob(mob);
    this.mobs = Utils.removeFromArray(this.mobs, mob);
    mob.destroy = true;
    mob.playKillSound();
    var hint = new CostView(mob.money);
    hint.setPosition(mob.x, mob.y - 10);
    this.addChild(hint);
    hint.bubble();
    AchievementsManager.event(AchievementsManager.EVENT_MOB_KILL)
};
GameField.prototype.destroyTower = function(tower) {
    this.removeTower(tower);
    SoundsManager.play("explode_tower")
};
GameField.prototype.removeTower = function(tower) {
    this.towers = Utils.removeFromArray(this.towers, tower);
    tower.spot.tower = null;
    tower.destroy = true
};
GameField.prototype.tickChildren = function(children, delta, destroyCallback) {
    for (i = 0; i < this[children].length; i++) {
        this[children][i].tick(delta, this.speedScale);
        if (this.ended) return
    }
    for (i = 0; i < this[children].length; i++) {
        if (this[children][i].destroy) {
            if (destroyCallback) destroyCallback(this[children][i]);
            this[children] = Utils.removeFromArray(this[children], this[children][i]);
            i--
        }
        if (this.ended) return
    }
};
GameField.prototype.clearBullets = function() {
    for (var i = 0; i < this.bullets.length; i++) this.bullets[i].destroy = true;
    this.bullets = []
};
GameField.prototype.win = function() {
    this.ended = true;
    this.isWin = true;
    this.clearBullets();
    this.pause();
    this.dispatchEvent("levelcomplete");
    SoundsManager.play("mission_completed")
};
GameField.prototype.loose = function() {
    this.gameViews.base.visible = false;
    this.gameViews.ruins.visible = true;
    this.ended = true;
    this.isWin = false;
    this.clearBullets();
    this.pause();
    this.dispatchEvent("levelloose");
    SoundsManager.play("game_over")
};
GameField.prototype.tick = function(delta) {
    if (!this.ready || this.ended || this.paused) return;
    if (this.tickWave(delta)) {
        this.dispatchEvent("wavefinished");
        if (!this.mobs.length && !this.mobsPortals.length) if (!this.startNextWave()) {
            this.win();
            return
        }
    }
    this.tickChildren("mobsPortals", delta);
    this.tickChildren("mobs", delta);
    this.tickChildren("towers", delta);
    this.tickChildren("bullets", delta, this.onBulletHit)
};
GameField.prototype.debugDraw = function() {
    var colors = ["#f33", "#33f", "#f3f", "#990", "#393", "ff3", "#fff", "#000"],
    obj;
    for (var n = 0; n < this.pathes.length; n++) {
        for (var i = 0; i < this.pathes[n].m_path.length - 1; i++) stage.drawLine(this.x + this.pathes[n].m_path[i].x, this.y + this.pathes[n].m_path[i].y, this.x + this.pathes[n].m_path[i + 1].x, this.y + this.pathes[n].m_path[i + 1].y, 1, colors[n]);
        for (var i = 0; i < this.pathes[n].m_base.length; i++) stage.drawCircle(this.x + this.pathes[n].m_base[i].x, this.y + this.pathes[n].m_base[i].y, 2, 1, colors[n])
    }
    if (this.separator) {
        for (var i = 0; i < this.separator.m_path.length - 1; i++) stage.drawLine(this.x + this.separator.m_path[i].x, this.y + this.separator.m_path[i].y, this.x + this.separator.m_path[i + 1].x, this.y + this.separator.m_path[i + 1].y, 1, "#fff");
        for (var i = 0; i < this.separator.m_base.length; i++) stage.drawCircle(this.x + this.separator.m_base[i].x, this.y + this.separator.m_base[i].y, 2, 1, "#fff")
    }
};
GameField.isTargetInRadius = function(obj, target, r) {
    if (obj.x - r > target.x || obj.x + r < target.x || obj.y - r > target.y || obj.y + r < target.y) return false;
    var w = obj.x - target.x;
    var h = obj.y - target.y;
    return Math.sqrt(w * w + h * h) <= r
};
function ProgressBarView(maxVal) {
    Utils.callSuperConstructor(ProgressBarView, this, null, 18, 3);
    this.fillColor = "#f00";
    this.visible = false;
    this.maxVal = maxVal;
    this.val = 0;
    this.progressView = new Sprite(null, 0, 3);
    this.progressView.fillColor = "#fff";
    this.addChild(this.progressView)
}
Utils.extend(ProgressBarView, Sprite);
ProgressBarView.prototype.update = function(val) {
    this.val = val
};
ProgressBarView.prototype.render = function(cns, drawStatic, delta) {
    this.progressView.width = this.width - this.width * (Math.min(this.val, this.maxVal) / this.maxVal);
    this.progressView.x = this.width / 2 - this.progressView.width / 2;
    Utils.callSuperMethod(ProgressBarView, this, "render", cns, drawStatic, delta)
};
function Spot(state) {
    this.state = state || Spot.STATE_NORMAL;
    var asset = UI.assetsLibrary.getAsset("game/worlds/cell_0");
    Utils.callSuperConstructor(Spot, this, asset.bitmap, asset.width, asset.height, asset.frames, asset.layers);
    this.stop();
    this.currentLayer = this.state;
    this.zIndex = 10;
    this.tower = null;
    this.radiusView = null;
    this.setStatic(true)
}
Utils.extend(Spot, Sprite);
Spot.STATE_HIGHLIGHT = 0;
Spot.STATE_FAILED = 1;
Spot.STATE_NORMAL = 2;
Spot.prototype.setState = function(state) {
    this.state = state;
    this.currentLayer = this.state;
    if (this.stage) this.stage.refreshBackground()
};
function Mob(missionConfig, unitConfig, path) {
    Utils.callSuperConstructor(Mob, this, null, 10, 10);
    this.config = {
        missionConfig: missionConfig,
        unitConfig: unitConfig
    };
    this.pathId = 0;
    this.internalId = Mob.getInternalId(TD.getAttr(missionConfig, "enemy_id"));
    this.money = TD.getAttr(unitConfig, "money", true);
    this.subLevel = 0;
    this.path = path;
    this.position = null;
    this.prevPosition = null;
    this.distance = 0;
    var shootPeriod = TD.getAttr(unitConfig, "shoot_period");
    if (!shootPeriod) shootPeriod = 1;
    this.selfRadius = TD.getAttr(unitConfig, "self_radius", true) * TD.metrics.scale;
    if (!Mob.shootPeriod[this.internalId]) Mob.shootPeriod[this.internalId] = 0;
    this.canShoot = Mob.shootPeriod[this.internalId] % shootPeriod == 0;
    Mob.shootPeriod[this.internalId]++;
    this.stopTimeBeforeShoot = TD.getAttr(unitConfig, "time_stop_before_shoot", true) * 1E3;
    this.stopBeforeShootDelay = 0;
    this.health = TD.getAttr(unitConfig, "health") * this.getFactor(missionConfig, "factor_health");
    this.health *= Complexity.getFactorHealth();
    this.factorHitPower = this.getFactor(missionConfig, "factor_hit_power");
    this.factorHitPower *= Complexity.getFactorHitPower();
    this.factorSpeedAttack = this.getFactor(missionConfig, "factor_speed_attack");
    this.factorSpeedAttack *= Complexity.getFactorSpeedAttack();
    this.setPosition(path.m_path[0].x, path.m_path[0].y);
    this.dx = Math.floor(Math.random() * 10) - 5;
    this.dy = Math.floor(Math.random() * 10) - 5;
    this.speed = TD.getAttr(unitConfig, "speed", true) * this.getFactor(missionConfig, "factor_speed_move") * TD.metrics.scale;
    this.speed *= Complexity.getFactorSpeedMove();
    this.slowCoef = 1;
    this.slowTime = 0;
    this.defenseCoef = 1;
    this.defenseTime = 0;
    this.aircraft = !!unitConfig.aircraft;
    this.zIndex = this.aircraft ? 150 : 50;
    var asset = UI.getAssetByTexture(TD.getAttr(unitConfig.base, "texture"));
    var frames = TD.getAttr(unitConfig.base, "frames", true);
    if (!frames) frames = 1;
    this.baseView = new TilesSprite(asset.bitmap, asset.width, asset.height, frames, 1, frames);
    this.baseView.changeFrameDelay = 1E3 / TD.getAttr(unitConfig.base, "fps", true);
    this.baseView.zIndex = 5;
    this.addChild(this.baseView);
    TD.setHotSpot(this.baseView, TD.getAttr(unitConfig.base, "hotspot"));
    this.shadow = null;
    if (this.aircraft) {
        var tmp = TD.getAttr(unitConfig.base, "texture").split(".");
        tmp[tmp.length - 2] = tmp[tmp.length - 2] + "_shadow";
        var asset = UI.getAssetByTexture(tmp.join("."));
        this.altitude = TD.getAttr(unitConfig.aircraft, "altitude", true) * TD.metrics.scale;
        this.altitudeHigher = this.altitude;
        this.altitudeLower = TD.getAttr(unitConfig.aircraft, "altitude_lower", true) * TD.metrics.scale;
        this.shadow = new TilesSprite(asset.bitmap, asset.width, asset.height, frames, 1, frames);
        this.shadow.changeFrameDelay = 1E3 / TD.getAttr(unitConfig.base, "fps", true);
        this.shadow.zIndex = 1;
        this.shadow.setPosition(0, this.altitude);
        this.addChild(this.shadow)
    }
    this.cannons = [];
    if (unitConfig.cannons) {
        var cannonsList = Utils.isArray(unitConfig.cannons.cannon) ? unitConfig.cannons.cannon: [unitConfig.cannons.cannon];
        var cannon;
        for (var i = 0; i < cannonsList.length; i++) {
            cannon = new Cannon(cannonsList[i]);
            cannon.canShoot = this.canShoot;
            cannon.attackSpeed *= this.factorSpeedAttack;
            this.baseView.addChild(cannon);
            this.cannons.push(cannon)
        }
    }
    this.animations = [];
    if (unitConfig.animations) {
        if (!Utils.isArray(unitConfig.animations.animation)) unitConfig.animations.animation = [unitConfig.animations.animation];
        var animation, animSprite;
        for (var i = 0; i < unitConfig.animations.animation.length; i++) {
            animation = unitConfig.animations.animation[i];
            asset = UI.getAssetByTexture(TD.getAttr(animation, "texture"));
            frames = TD.getAttr(animation, "frames", true);
            animSprite = new TilesSprite(asset.bitmap, asset.width, asset.height, frames, 1, frames);
            animSprite.changeFrameDelay = 1E3 / TD.getAttr(animation, "fps", true);
            var pos = TD.parsePositionString(TD.getAttr(animation, "position"));
            animSprite.setPosition(pos.x, pos.y);
            TD.setHotSpot(animSprite, TD.getAttr(animation, "hotspot"));
            this.baseView.addChild(animSprite);
            this.animations.push(animSprite)
        }
    }
    this.healthView = new MobHealthView(this.health);
    var p = TD.parseNumbersString(TD.getAttr(unitConfig, "health_delta"));
    this.healthView.x = p[0] * TD.metrics.scale;
    this.healthView.y = p[1] * TD.metrics.scale;
    this.healthView.zIndex = 100;
    this.addChild(this.healthView)
}
Utils.extend(Mob, Sprite);
Mob.prototype.getFactor = function(config, name) {
    var f = TD.getAttr(config, name) * 1;
    if (!f) f = 1;
    return f
};
Mob.prototype.setSlow = function(config) {
    if (!config || this.slowTime > 0) return;
    this.slowCoef = config.val;
    this.slowTime = config.time * 1E3
};
Mob.prototype.setDefense = function(config) {
    if (!config || this.defenseTime > 0) return;
    this.defenseCoef = config.val;
    this.defenseTime = config.time * 1E3
};
Mob.prototype.getSpeed = function() {
    return this.speed * this.slowCoef
};
Mob.prototype.getWalkStepLength = function(delta) {
    return this.getSpeed() / 1E3 * delta
};
Mob.prototype.getNextPosition = function(delta) {
    if (!this.position) {
        this.position = {
            id: 0,
            x: this.path.m_path[0].x,
            y: this.path.m_path[0].y,
            ended: false
        };
        this.prevPosition = {
            x: this.position.x,
            y: this.position.y
        };
        return
    }
    if (delta <= 0) return;
    this.prevPosition.x = this.position.x;
    this.prevPosition.y = this.position.y;
    var needLen = this.getWalkStepLength(delta);
    var point = {
        id: this.position.id,
        x: this.position.x,
        y: this.position.y
    };
    var pathLen = 0,
    ok = true,
    len = 0,
    w = 0,
    h = 0;
    while (ok) {
        point.id++;
        if (point.id >= this.path.m_path.length) {
            point.id--;
            this.position.x = this.path.m_path[point.id].x;
            this.position.y = this.path.m_path[point.id].y;
            this.position.id = point.id;
            this.position.ended = true;
            ok = false
        } else {
            w = point.x - this.path.m_path[point.id].x;
            h = point.y - this.path.m_path[point.id].y;
            len = Math.sqrt(w * w + h * h);
            if (pathLen + len >= needLen) {
                var angle = Math.atan2(this.path.m_path[point.id].y - point.y, this.path.m_path[point.id].x - point.x);
                len = needLen - pathLen;
                point.x += Math.cos(angle) * len;
                point.y += Math.sin(angle) * len;
                point.id--;
                this.position.x = point.x;
                this.position.y = point.y;
                this.position.id = point.id;
                ok = false
            } else {
                pathLen += len;
                point.x = this.path.m_path[point.id].x;
                point.y = this.path.m_path[point.id].y
            }
        }
    }
    return this.position
};
Mob.prototype.getRadius = function() {
    return this.radius
};
Mob.prototype.applyDamageFromBullet = function(bullet) {
    var power = bullet.power * (bullet.hitCoefficient[this.internalId] ? bullet.hitCoefficient[this.internalId] : 0);
    power /= this.defenseTime > 0 ? this.defenseCoef: 1;
    this.applyDamage(power)
};
Mob.prototype.applyDamage = function(val) {
    this.health -= val;
    if (this.health < 0) this.health = 0;
    this.healthView.update(this.health)
};
Mob.prototype.startShoot = function(cannon) {
    this.stopBeforeShootDelay = this.stopTimeBeforeShoot;
    cannon.shootDelay = this.stopTimeBeforeShoot
};
Mob.prototype.addBulletFromCannon = function(cannon) {
    if (this.internalId == Mob.ENEMY_TYPE_TANK_LIGHT || this.internalId == Mob.ENEMY_TYPE_TANK_HEAVY) SoundsManager.play("fire_unit_tank_hit");
    this.parent.addBullet(cannon.bulletName, this, cannon.target, this.factorHitPower)
};
Mob.prototype.stop = function() {
    for (var i = 0; i < this.animations.length; i++) this.animations[i].stop();
    this.baseView.stop();
    if (this.shadow) this.shadow.stop();
    Utils.callSuperMethod(Mob, this, "stop")
};
Mob.prototype.play = function() {
    for (var i = 0; i < this.animations.length; i++) this.animations[i].play();
    this.baseView.play();
    if (this.shadow) this.shadow.play();
    Utils.callSuperMethod(Mob, this, "play")
};
Mob.prototype.playKillSound = function() {
    var names = [];
    switch (this.internalId) {
    case Mob.ENEMY_TYPE_SOLDIER:
        names.push("explode_unit_soldier_bonus0");
        break;
    case Mob.ENEMY_TYPE_TRUCK:
        names.push("explode_unit_ground");
        names.push("explode_unit_truck_bonus");
        break;
    case Mob.ENEMY_TYPE_CAR:
    case Mob.ENEMY_TYPE_TANK_LIGHT:
    case Mob.ENEMY_TYPE_TANK_HEAVY:
    case Mob.ENEMY_TYPE_TROOPCARRIER:
        names.push("explode_unit_ground");
        break;
    case Mob.ENEMY_TYPE_FIGHTER:
    case Mob.ENEMY_TYPE_AIRSHIP:
    case Mob.ENEMY_TYPE_BOMBER:
        names.push("explode_unit_air");
        break
    }
    for (var i = 0; i < names.length; i++) SoundsManager.play(names[i])
};
Mob.prototype.playStartSound = function() {
    var name = "";
    switch (this.internalId) {
    case Mob.ENEMY_TYPE_SOLDIER:
        name = "unit_soldier_step";
        break;
    case Mob.ENEMY_TYPE_TRUCK:
        name = "unit_machine_engine_2";
        break;
    case Mob.ENEMY_TYPE_CAR:
        name = "unit_machine_engine_1";
        break;
    case Mob.ENEMY_TYPE_TANK_LIGHT:
        name = "unit_tank_light_engine";
        break;
    case Mob.ENEMY_TYPE_TANK_HEAVY:
        name = "unit_tank_heavy_engine";
        break;
    case Mob.ENEMY_TYPE_TROOPCARRIER:
        name = "unit_tank_heavy_engine";
        break;
    case Mob.ENEMY_TYPE_FIGHTER:
        name = "unit_aircraft_engine";
        break
    }
    if (name) SoundsManager.play(name)
};
Mob.prototype.tick = function(delta, speedScale) {
    for (var i = 0; i < this.cannons.length; i++) this.cannons[i].tick(delta, speedScale);
    delta *= speedScale ? speedScale: 1;
    if (this.slowTime > 0) this.slowTime -= delta;
    if (this.defenseTime > 0) this.defenseTime -= delta;
    if (this.stopBeforeShootDelay > 0) this.stopBeforeShootDelay -= delta;
    if (this.stopBeforeShootDelay > 0) {
        this.baseView.gotoAndStop(0);
        return
    }
    this.stopBeforeShootDelay = 0;
    this.baseView.play();
    var sm = 1;
    this.getNextPosition(delta * sm);
    this.distance += this.getWalkStepLength(delta * sm);
    this.setPosition(this.position.x + this.dx, this.position.y + this.dy);
    if (this.prevPosition.x != this.position.x || this.prevPosition.y != this.position.y) {
        var w = this.prevPosition.x - this.position.x;
        var h = this.prevPosition.y - this.position.y;
        var a = Math.atan2(h, w) + Math.PI;
        this.baseView.rotation = a;
        if (this.shadow) this.shadow.rotation = a
    }
    if (this.position.ended) {
        this.destroy = true;
        this.health = 0;
        this.parent.hitBaseByMob(this)
    }
};
Mob.ENEMY_TYPE_SOLDIER = 0;
Mob.ENEMY_TYPE_TRUCK = 1;
Mob.ENEMY_TYPE_CAR = 2;
Mob.ENEMY_TYPE_TANK_LIGHT = 3;
Mob.ENEMY_TYPE_TANK_HEAVY = 4;
Mob.ENEMY_TYPE_TROOPCARRIER = 5;
Mob.ENEMY_TYPE_FIGHTER = 6;
Mob.ENEMY_TYPE_AIRSHIP = 7;
Mob.ENEMY_TYPE_BOMBER = 8;
Mob.ENEMY_TYPE_PRIZE_BOX = 9;
Mob.typeNames = [];
Mob.shootPeriod = [];
Mob.reset = function() {
    Mob.typeNames = [];
    Mob.shootPeriod = []
};
Mob.getInternalId = function(id) {
    return Mob.typeNames.indexOf(id)
};
function Cannon(config) {
    var texture = TD.getAttr(config, "texture"),
    asset = {
        bitmap: null,
        width: 1,
        height: 1,
        frames: 1,
        layers: 1
    };
    if (texture) asset = UI.getAssetByTexture(TD.getAttr(config, "texture"));
    Utils.callSuperConstructor(Cannon, this, asset.bitmap, asset.width, asset.height, asset.frames, asset.layers);
    if (!asset.bitmap) this.visible = false;
    var pos = TD.parsePositionString(TD.getAttr(config, "position"));
    this.setPosition(pos.x, pos.y);
    TD.setHotSpot(this, TD.getAttr(config, "hotspot"));
    this.attackRadius = TD.getAttr(config, "attack_radius", true) * TD.metrics.scale;
    this.attackSpeed = 1 / TD.getAttr(config, "attack_speed", true) * 1E3;
    this.attackDelay = 0;
    this.bulletName = TD.getAttr(config, "bullet_name");
    this.rotationSpeed = TD.getAttr(config, "rotation_speed", true);
    if (!this.rotationSpeed) this.rotationSpeed = 10;
    this.rotationSpeed = this.rotationSpeed / 180 * Math.PI * 16;
    this.canShoot = false;
    this.shootDelay = 0;
    this.shootState = false;
    this.target = null
}
Utils.extend(Cannon, Sprite);
Cannon.prototype.getAttackRadius = function() {
    return this.attackRadius
};
Cannon.prototype.checkTarget = function() {
    return this.target && this.target.health > 0 && GameField.isTargetInRadius(this.parent.parent, this.target, this.getAttackRadius())
};
Cannon.prototype.findTarget = function() {
    var mob = this.parent.parent;
    var field = mob.parent;
    var exclude = [];
    for (var i = 0; i < mob.cannons.length; i++) if (mob.cannons[i] != this && mob.cannons[i].target) exclude.push(mob.cannons[i].target);
    var tower, target = null;
    for (var i = 0; i < field.towers.length; i++) {
        tower = field.towers[i];
        if (exclude.indexOf(tower) < 0 && tower.health > 0 && GameField.isTargetInRadius(mob, tower, this.getAttackRadius())) {
            target = tower;
            break
        }
    }
    return target
};
Cannon.prototype.tick = function(delta, speedScale) {
    delta *= speedScale ? speedScale: 1;
    if (this.attackDelay >= 0) this.attackDelay -= delta;
    if (!this.checkTarget()) this.target = this.findTarget();
    var mob = this.parent.parent;
    var angle = 0;
    if (this.target) angle = TD.normalizeAngle(Math.atan2(this.target.y - mob.y, this.target.x - mob.x) - this.parent.rotation);
    this.rotation = TD.normalizeAngle(this.rotation);
    var diff = angle - this.rotation;
    var rr = diff > 0 ? diff: Math.PI * 2 - this.rotation + angle;
    var rl = diff < 0 ? -diff: this.rotation + Math.PI * 2 - angle;
    diff = Math.abs(diff) * (rr < rl ? 1 : -1);
    var step = this.rotationSpeed * (delta / 1E3) * Utils.sign(diff);
    if (Math.abs(step) > Math.abs(diff)) step = diff;
    this.rotation += step;
    if (this.target && this.canShoot && this.rotation == angle && this.attackDelay <= 0) if (this.shootState) {
        this.shootDelay -= delta;
        if (this.shootDelay <= 0) {
            this.attackDelay = this.attackSpeed;
            this.shootDelay = 0;
            this.shootState = false;
            mob.addBulletFromCannon(this)
        }
    } else {
        this.shootState = true;
        mob.startShoot(this)
    }
    if (!this.target) {
        this.shootState = false;
        this.shootDelay = 0
    }
};
function MobHealthView(maxVal) {
    Utils.callSuperConstructor(MobHealthView, this, maxVal)
}
Utils.extend(MobHealthView, ProgressBarView);
MobHealthView.prototype.update = function(val) {
    Utils.callSuperMethod(MobHealthView, this, "update", val);
    this.visible = this.val < this.maxVal
};
function Tower(id, level, subLevel) {
    Utils.callSuperConstructor(Tower, this, null, 20, 20);
    this.config = {
        baseConfig: Tower.getByIdAndLevel(id, level),
        levelConfig: TowersHierarchy.get(id, level)
    };
    this.spot = null;
    this.internalId = 0;
    this.platform = null;
    this.head = null;
    this.guns = [];
    this.id = id;
    this.level = level;
    this.subLevel = subLevel;
    this.radius = 0;
    this.attackSpeed = 0;
    this.experience = 0;
    this.prevExperience = 0;
    this.nextExperience = 0;
    this.health = 0;
    this.maxHealth = 0;
    this.cost = 0;
    this.costShop = 0;
    this.selfRadius = 0;
    this.hitCoefficient = [];
    this.levelIcon = null;
    this.healthView = new TowerHealthView(this.health);
    this.healthView.y = 11;
    this.healthView.zIndex = 3;
    this.addChild(this.healthView);
    this.upIcon = UI.assetsLibrary.getSprite("game/towers/towers_6");
    this.upIcon.setPosition(0, -14);
    this.addChild(this.upIcon);
    this.upIcon.visible = false;
    this.reconfigure();
    this.health = this.maxHealth
}
Utils.extend(Tower, Sprite);
Tower.prototype.reconfigure = function() {
    this.selfRadius = TD.getAttr(this.config.baseConfig, "self_radius", true) * TD.metrics.scale;
    this.radius = this.config.levelConfig.getAttackRadius(this.subLevel) * TD.metrics.scale;
    this.attackSpeed = 1 / this.config.levelConfig.getAttackSpeed(this.subLevel) * 1E3;
    this.nextExperience = this.config.levelConfig.getExperience(this.subLevel);
    this.maxHealth = this.config.levelConfig.getHealth(this.subLevel);
    this.cost = this.config.levelConfig.getPlainCost(this.subLevel);
    this.costShop = this.config.levelConfig.getCostShop(this.subLevel);
    this.hitCoefficient = this.config.levelConfig.hitCoefficient;
    if (this.platform) this.platform.destroy = true;
    if (this.head) this.head.destroy = true;
    var gunsRotation = [];
    for (var i = 0; i < this.guns.length; i++) {
        gunsRotation[i] = this.guns[i].rotation;
        this.guns[i].destroy = true
    }
    this.platform = null;
    this.head = null;
    this.guns = [];
    if (this.config.baseConfig.platform) {
        this.platform = UI.getSpriteByTexture(TD.getAttr(this.config.baseConfig.platform, "texture"));
        this.addChild(this.platform)
    }
    var angle = 0,
    gun, gunsList = Utils.isArray(this.config.baseConfig.guns.gun) ? this.config.baseConfig.guns.gun: [this.config.baseConfig.guns.gun];
    for (var i = 0; i < gunsList.length; i++) {
        gun = new Gun(gunsList[i]);
        if (gunsRotation[i]) gun.rotation = gunsRotation[i];
        else gun.rotation = angle;
        this.guns.push(gun);
        this.addChild(gun);
        angle += Math.PI / 2
    }
    if (this.config.baseConfig.head) {
        this.head = UI.getSpriteByTexture(TD.getAttr(this.config.baseConfig.head, "texture"));
        this.addChild(this.head)
    }
    this.healthView.maxVal = this.maxHealth
};
Tower.prototype.stop = function() {
    Utils.callSuperMethod(Tower, this, "stop");
    for (var i = 0; i < this.guns.length; i++) if (this.guns[i].flameView) this.guns[i].flameView.visible = false
};
Tower.prototype.updateLevelIcon = function() {
    if (this.levelIcon) this.levelIcon.destroy = true;
    var perk = TD.getPerk(this.config.levelConfig.iconName);
    this.levelIcon = UI.getSpriteByTexture(TD.getAttr(perk.icon_rank, "texture"));
    this.levelIcon.setPosition(8, -8);
    this.levelIcon.currentLayer = this.subLevel;
    this.addChild(this.levelIcon)
};
Tower.prototype.getSlowEffect = function(mobId) {
    return this.config.levelConfig.getSlowEffect(this.subLevel, mobId)
};
Tower.prototype.getDefenseEffect = function() {
    return this.config.levelConfig.getDefenseEffect(this.subLevel)
};
Tower.prototype.getSellCost = function() {
    return Math.floor(this.config.levelConfig.getSellCost(this.subLevel) * (this.health / this.maxHealth))
};
Tower.prototype.getRepairCost = function() {
    return Math.round(this.config.levelConfig.getRepairCost(this.subLevel) * (1 - this.health / this.maxHealth))
};
Tower.prototype.repair = function() {
    var cost = this.getRepairCost();
    if (this.parent.money >= cost) {
        this.health = this.maxHealth;
        this.healthView.update(this.health);
        this.parent.money -= cost;
        SoundsManager.play("repair_tower")
    }
};
Tower.prototype.sell = function() {
    this.parent.money += this.getSellCost();
    this.parent.removeTower(this);
    SoundsManager.play("sell_tower")
};
Tower.prototype.isUpOpened = function(level, subLevel) {
    return UpgradesManager.check(this.id, level, subLevel)
};
Tower.prototype.isReadyToUp = function() {
    if (this.experience >= this.nextExperience) {
        var nextLevel = this.getNextLevelProps();
        return nextLevel.length
    }
    return false
};
Tower.prototype.getNextLevelProps = function() {
    var level = this.level,
    subLevel = this.subLevel;
    if (this.subLevel < 2) if (this.isUpOpened(level, subLevel + 1)) return [{
        level: level,
        subLevel: subLevel + 1
    }];
    else return [];
    else {
        var ret = [];
        if (this.config.levelConfig.children[0] && this.isUpOpened(this.config.levelConfig.children[0].level, 0)) ret.push({
            level: this.config.levelConfig.children[0].level,
            subLevel: 0
        });
        if (this.config.levelConfig.children[1] && this.isUpOpened(this.config.levelConfig.children[1].level, 0)) ret.push({
            level: this.config.levelConfig.children[1].level,
            subLevel: 0
        });
        return ret
    }
};
Tower.prototype.getUpgradeCost = function(ix) {
    var nextLevel = this.getNextLevelProps();
    var config = TowersHierarchy.get(this.id, nextLevel[ix].level);
    return config.getPlainCost(nextLevel[ix].subLevel)
};
Tower.prototype.upgrade = function(ix) {
    this.parent.spentMoney(this.getUpgradeCost(ix));
    var nextLevel = this.getNextLevelProps();
    this.level = nextLevel[ix].level;
    this.subLevel = nextLevel[ix].subLevel;
    this.config.baseConfig = Tower.getByIdAndLevel(this.id, this.level);
    this.config.levelConfig = TowersHierarchy.get(this.id, this.level);
    this.prevExperience = this.nextExperience;
    this.reconfigure();
    this.updateLevelIcon();
    this.updateUpIcon();
    this.healthView.update(this.health);
    SoundsManager.play("upgrade_tower")
};
Tower.prototype.getRadius = function() {
    return this.radius
};
Tower.prototype.applyDamageFromBullet = function(bullet) {
    this.applyDamage(bullet.power * bullet.hitCoefficient)
};
Tower.prototype.applyDamage = function(val) {
    this.health -= val;
    if (this.health < 0) this.health = 0;
    this.healthView.update(this.health);
    Hint.show(Hint.REPAIR_HINT, this)
};
Tower.prototype.addBulletFromGun = function(gun) {
    var bullet = this.parent.addBullet(gun.bulletName, this, gun.target, this.hitCoefficient);
    this.addExperience(bullet.power)
};
Tower.prototype.addExperience = function(val) {
    if (this.experience < this.nextExperience) this.experience += val;
    this.updateUpIcon()
};
Tower.prototype.updateUpIcon = function() {
    this.upIcon.visible = this.isReadyToUp();
    if (this.upIcon.visible) Hint.show(Hint.UPGRADE_HINT, this)
};
Tower.prototype.tick = function(delta, speedScale) {
    for (var i = 0; i < this.guns.length; i++) this.guns[i].tick(delta, speedScale)
};
Tower.getByIdAndLevel = function(id, level) {
    var config = null;
    if (id == 0) config = TD.configs.towers.towers.tower_a["level_" + level];
    if (id == 1) config = TD.configs.towers.towers.tower_b["level_" + level];
    if (id == 2) config = TD.configs.towers.towers.tower_c["level_" + level];
    if (id == 3) config = TD.configs.towers.towers.tower_d["level_" + level];
    return config
};
function TowerHealthView(maxVal) {
    Utils.callSuperConstructor(TowerHealthView, this, maxVal);
    this.fillColor = "#0f0"
}
Utils.extend(TowerHealthView, ProgressBarView);
TowerHealthView.prototype.update = function(val) {
    Utils.callSuperMethod(TowerHealthView, this, "update", val);
    this.visible = this.val < this.maxVal
};
function TowerExpView(maxVal) {
    Utils.callSuperConstructor(TowerExpView, this, maxVal);
    this.fillColor = "#66f"
}
Utils.extend(TowerExpView, ProgressBarView);
function Gun(config) {
    var asset = UI.getAssetByTexture(TD.getAttr(config, "texture"));
    Utils.callSuperConstructor(Gun, this, asset.bitmap, asset.width, asset.height, asset.frames, asset.layers);
    TD.setHotSpot(this, TD.getAttr(config, "hotspot"));
    this.flamethrower = !!TD.getAttr(config, "flamethrower");
    this.flameView = null;
    if (this.flamethrower) {
        this.flameView = UI.assetsLibrary.getSprite("game/towers/flamethrower");
        this.flameView.visible = false;
        this.flameView.rotation = -Math.PI / 2;
        this.flameView.setPosition(24, 0);
        this.addChild(this.flameView)
    }
    this.fireShotView = null;
    this.target = null;
    this.rotationSpeed = TD.getAttr(config, "rotation_speed") * Math.PI / 180;
    this.rotationSpeed *= 10;
    this.attackDelay = 0;
    this.bulletName = TD.getAttr(config, "bullet_name");
    this.fireName = TD.getAttr(config, "fire_name")
}
Utils.extend(Gun, Sprite);
Gun.prototype.checkTarget = function() {
    return this.target && this.target.health > 0 && GameField.isTargetInRadius(this.parent, this.target, this.parent.getRadius())
};
Gun.prototype.findTarget = function() {
    var targetsInRadius = [];
    var usedTargets = [];
    var mob;
    for (var i = 0; i < this.parent.parent.mobs.length; i++) {
        mob = this.parent.parent.mobs[i];
        if (GameField.isTargetInRadius(this.parent, mob, this.parent.getRadius()) && this.parent.hitCoefficient[mob.internalId] > 0 && mob.health > 0) targetsInRadius.push(mob)
    }
    for (var i = 0; i < this.parent.guns.length; i++) if (this.parent.guns[i] != this && this.parent.guns[i].target) usedTargets.push(this.parent.guns[i].target);
    var target = null,
    maxLenPath = -1;
    for (var i = 0; i < targetsInRadius.length; i++) {
        mob = targetsInRadius[i];
        if (usedTargets.indexOf(mob) < 0 && mob.position.id > maxLenPath) {
            target = mob;
            maxLenPath = mob.position.id
        }
    }
    return target
};
Gun.prototype.tick = function(delta, speedScale) {
    delta *= speedScale ? speedScale: 1;
    if (this.attackDelay >= 0) this.attackDelay -= delta;
    if (this.flamethrower && this.flameView.visible && this.attackDelay <= 0) this.flameView.visible = false;
    if (!this.checkTarget()) this.target = this.findTarget();
    if (this.target) {
        var angle = TD.normalizeAngle(Math.atan2(this.target.y - this.parent.y, this.target.x - this.parent.x));
        this.rotation = TD.normalizeAngle(this.rotation);
        var diff = angle - this.rotation;
        var rr = diff > 0 ? diff: Math.PI * 2 - this.rotation + angle;
        var rl = diff < 0 ? -diff: this.rotation + Math.PI * 2 - angle;
        diff = Math.abs(diff) * (rr < rl ? 1 : -1);
        var step = this.rotationSpeed * (delta / 1E3) * Utils.sign(diff);
        if (Math.abs(step) > Math.abs(diff)) step = diff;
        this.rotation += step;
        if (this.rotation == angle && this.attackDelay <= 0) {
            this.attackDelay += this.parent.attackSpeed;
            if (this.flamethrower) this.flameView.visible = true;
            else if (!this.fireShotView || this.fireShotView.destroy) {
                this.fireShotView = new GunFire;
                this.fireShotView.setPosition(17, 0);
                this.fireShotView.rotation = Math.PI / 2;
                this.addChild(this.fireShotView)
            }
            this.parent.addBulletFromGun(this);
            this.target.setSlow(this.parent.getSlowEffect(this.target.internalId));
            this.target.setDefense(this.parent.getDefenseEffect())
        }
    }
};
function TowerPlace(config) {
    this.config = config;
    var levelConfig = TowersHierarchy.get(config.id, config.level);
    var radius = levelConfig.getAttackRadius(0) * TD.metrics.scale;
    Utils.callSuperConstructor(TowerPlace, this, null, radius * 2, radius * 2);
    this.radiusView = new Graphics.circle(0, 0, radius);
    this.radiusView.lineWidth = 0;
    this.addChild(this.radiusView);
    this.addEventListener("mouseup", Utils.proxy(this.place, this));
    this.addEventListener("mousemove", Utils.proxy(this.checkPlace, this));
    this.onclick = UI.preventEvent;
    this.onplace = null;
    this.valid = false;
    this.selectedTarget = null;
    this.pointer = new Sprite(null, 3, 3);
    this.addChild(this.pointer);
    this.addChild(new Tower(config.id, 0, 0));
    this.update()
}
Utils.extend(TowerPlace, Sprite);
TowerPlace.prototype.place = function() {
    this.stopDrag();
    if (this.onplace) this.onplace(this.selectedTarget, this.config);
    this.destroy = true;
    return false
};
TowerPlace.prototype.checkPlace = function() {
    this.valid = false;
    this.selectedTarget = null;
    if (this.config.forSave) {
        var buttons = TD.ui.savedTowersBar.objects;
        for (var i = 0; i < buttons.length; i++) if (buttons[i].config.towerId < 0 && buttons[i].config.opened && this.pointer.hitTest(buttons[i])) {
            this.valid = true;
            this.selectedTarget = buttons[i];
            break
        }
    } else {
        var spots = this.parent.spots;
        for (var i = 0; i < spots.length; i++) if (spots[i].state != Spot.STATE_FAILED && !spots[i].tower && this.pointer.hitTest(spots[i])) {
            this.valid = true;
            this.selectedTarget = spots[i];
            break
        }
    }
    this.update()
};
TowerPlace.prototype.update = function() {
    this.radiusView.fillColor = this.valid ? "rgba(0,255,0,0.5)": "rgba(255,0,0,0.5)"
};
function Bullet(id, hitCoefficient, subLevel) {
    this.config = Bullet.getConfigById(id);
    if (!subLevel) subLevel = 0;
    this.subLevel = subLevel;
    Utils.callSuperConstructor(Bullet, this, null, 1, 1);
    this.hitCoefficient = hitCoefficient;
    var texture = TD.getAttr(this.config.bullet, "texture");
    if (texture) {
        var asset = UI.getAssetByTexture(texture);
        this.bitmap = asset.bitmap;
        this.width = asset.width;
        this.height = asset.height;
        this.frames = asset.frames;
        this.layers = asset.layers
    }
    TD.setHotSpot(this, TD.getAttr(this.config.bullet, "hotspot"));
    this.rotateSpeed = TD.getAttr(this.config.bullet, "rotate_speed", true);
    if (!this.rotateSpeed) this.rotateSpeed = 0;
    else {
        this.rotation = Math.random() * Math.PI * 2;
        this.rotateSpeed = this.rotateSpeed * Math.PI
    }
    this.scaleMax = TD.getAttr(this.config.bullet, "scale_max", true);
    if (!this.scaleMax) this.scaleMax = 0;
    this.scaleMin = TD.getAttr(this.config.bullet, "scale_min", true);
    if (!this.scaleMin) this.scaleMin = 0;
    this.target = null;
    this.fromX = 0;
    this.fromY = 0;
    this.toX = 0;
    this.toY = 0;
    this.speed = TD.getValFromString(TD.getAttr(this.config, "speed"), this.subLevel);
    this.power = TD.getValFromString(TD.getAttr(this.config, "power"), this.subLevel);
    this.range = TD.getValFromString(TD.getAttr(this.config, "range"), this.subLevel) * TD.metrics.scale / 2;
    if (this.range < 1) this.range = 1;
    this.flame = !!this.config.flame;
    this.sound = TD.getAttr(this.config.sound, "name");
    this.pathLen = 0;
    this.pathTraversed = 0;
    this.pathAngle = 0;
    if (this.config.sound && TD.getAttr(this.config.sound, "sound_at_end") != 1) SoundsManager.play(TD.getAttr(this.config.sound, "name"))
}
Utils.extend(Bullet, Sprite);
Bullet.prototype.setProps = function(fromX, fromY, toX, toY) {
    this.fromX = fromX;
    this.fromY = fromY;
    this.toX = toX;
    this.toY = toY;
    var w = this.toX - this.fromX;
    var h = this.toY - this.fromY;
    this.pathLen = Math.sqrt(w * w + h * h);
    this.pathAngle = Math.atan2(h, w);
    this.rotation = this.pathAngle;
    this.setPosition(this.fromX, this.fromY)
};
Bullet.prototype.tick = function(delta, speedScale) {
    delta *= speedScale ? speedScale: 1;
    var len = delta / 1E3 * this.speed;
    this.pathTraversed += len;
    if (this.pathTraversed >= this.pathLen) {
        this.setPosition(this.toX, this.toY);
        this.destroy = true;
        if (this.config.sound && TD.getAttr(this.config.sound, "sound_at_end") == 1) SoundsManager.play(TD.getAttr(this.config.sound, "name"));
        return true
    } else if (this.scaleMax > 0) this.scaleX = this.scaleY = this.scaleMin + Math.sin(Math.PI * (this.pathTraversed / this.pathLen)) * this.scaleMax;
    this.setPosition(this.x + Math.cos(this.pathAngle) * len, this.y + Math.sin(this.pathAngle) * len);
    this.rotation += delta / 1E3 * this.rotateSpeed;
    return false
};
Bullet.create = function(id, hitCoefficient, subLevel) {
    return new Bullet(id, hitCoefficient, subLevel)
};
Bullet.getConfigById = function(id) {
    for (var i in TD.configs.bullets) if (i == id) return TD.configs.bullets[i];
    throw Error("Bullet config [id=" + id + "] not found");
};
function TowersHierarchy(parent, config) {
    this.parent = parent;
    this.children = [];
    this.attackRadius = TD.parseNumbersString(TD.getAttr(config, "attack_radius"));
    this.attackSpeed = TD.parseNumbersString(TD.getAttr(config, "attack_speed"));
    this.experience = TD.parseNumbersString(TD.getAttr(config, "experience"));
    this.health = TD.parseNumbersString(TD.getAttr(config, "health"));
    this.hitCoefficient = TD.parseNumbersString(TD.getAttr(config, "hit_coefficient"));
    this.iconName = TD.getAttr(config, "icon_name");
    this.price = TD.parseNumbersString(TD.getAttr(config, "price"));
    this.priceShop = TD.parseNumbersString(TD.getAttr(config, "price_shop"));
    this.repair = TD.parseNumbersString(TD.getAttr(config, "repair"));
    this.sell = TD.parseNumbersString(TD.getAttr(config, "sell"));
    this.towerName = TD.getAttr(config, "tower_name");
    this.slow = TD.parseNumbersString(TD.getAttr(config, "slow"));
    this.slowProbability = TD.parseNumbersString(TD.getAttr(config, "slow_probability"));
    this.slowTime = TD.parseNumbersString(TD.getAttr(config, "slow_time"));
    this.slowUnitId = TD.parseNumbersString(TD.getAttr(config, "slow_unit_id"));
    this.defense = TD.parseNumbersString(TD.getAttr(config, "defense"));
    this.defenseTime = TD.parseNumbersString(TD.getAttr(config, "defense_time"));
    this.level = this.towerName.replace("level_", "") * 1;
    for (var i in config) if (i != "@attributes" && i != "comment") this.children.push(new TowersHierarchy(this, config[i]))
}
TowersHierarchy.prototype.getSlowEffect = function(subLevel, unitId) {
    if (this.slowTime[subLevel] > 0 && this.slowUnitId[unitId]) if (Math.random() <= this.slowProbability[subLevel]) return {
        val: this.slow[subLevel],
        time: this.slowTime[subLevel]
    };
    return null
};
TowersHierarchy.prototype.getDefenseEffect = function(subLevel) {
    if (!this.defenseTime[subLevel]) return null;
    return {
        val: this.defense[subLevel],
        time: this.defenseTime[subLevel]
    }
};
TowersHierarchy.prototype.get = function(level) {
    var ret = null;
    if (this.level == level) ret = this;
    else for (var i = 0; i < this.children.length; i++) {
        ret = this.children[i].get(level);
        if (ret) break
    }
    return ret
};
TowersHierarchy.prototype.getCost = function(subLevel) {
    var cost = 0;
    for (var i = 0; i <= subLevel; i++) cost += this.price[i];
    if (this.parent) cost += this.parent.getCost(2);
    return cost
};
TowersHierarchy.prototype.getSellCost = function(subLevel) {
    return Math.floor(this.getCost(subLevel) * TowersHierarchy.sellCoefficient)
};
TowersHierarchy.prototype.getRepairCost = function(subLevel) {
    return Math.floor(this.getCost(subLevel) * TowersHierarchy.repairCoefficient)
};
TowersHierarchy.prototype.getVal = function(prop, subLevel) {
    if (!this[prop]) return 0;
    if (!this[prop][subLevel]) return 0;
    return this[prop][subLevel]
};
TowersHierarchy.prototype.getAttackRadius = function(subLevel) {
    return this.getVal("attackRadius", subLevel)
};
TowersHierarchy.prototype.getAttackSpeed = function(subLevel) {
    return this.getVal("attackSpeed", subLevel)
};
TowersHierarchy.prototype.getExperience = function(subLevel) {
    return this.getVal("experience", subLevel)
};
TowersHierarchy.prototype.getHealth = function(subLevel) {
    return this.getVal("health", subLevel)
};
TowersHierarchy.prototype.getPlainCost = function(subLevel) {
    return this.getVal("price", subLevel)
};
TowersHierarchy.prototype.getCostShop = function(subLevel) {
    return this.getVal("priceShop", subLevel)
};
TowersHierarchy.heroTowerPriceCoefficient = 1;
TowersHierarchy.repairCoefficient = 1;
TowersHierarchy.sellCoefficient = 1;
TowersHierarchy.towers = [];
TowersHierarchy.load = function(data) {
    TowersHierarchy.heroTowerPriceCoefficient = TD.getAttr(data.towers, "hero_tower_price_coefficient", true);
    TowersHierarchy.repairCoefficient = TD.getAttr(data.towers, "repair_coefficient", true);
    TowersHierarchy.sellCoefficient = TD.getAttr(data.towers, "sell_coefficient", true);
    TowersHierarchy.towers = [];
    var towers = data.towers.level_0;
    for (var i in towers) TowersHierarchy.towers.push(new TowersHierarchy(null, towers[i]))
};
TowersHierarchy.get = function(id, level) {
    return TowersHierarchy.towers[id].get(level)
};
function MobsPortal(config) {
    this.config = config;
    this.pathId = 0;
    this.pathPos = {};
    var asset = UI.getAssetByTexture(TD.getAttr(config.base_destroyed.enemy, "texture"));
    Utils.callSuperConstructor(MobsPortal, this, asset.bitmap, asset.width, asset.height);
    this.spawnBaseDelay = TD.getAttr(config, "delta_time", true) * 1E3;
    this.spawnDelay = this.spawnBaseDelay;
    this.mobsId = TD.getAttr(config, "contain_id");
    this.mobsCount = TD.getAttr(config, "count", true)
}
Utils.extend(MobsPortal, Sprite);
MobsPortal.prototype.tick = function(delta, speedScale) {
    delta *= speedScale ? speedScale: 1;
    this.spawnDelay -= delta;
    if (this.spawnDelay <= 0) {
        this.spawnDelay += this.spawnBaseDelay;
        var config = {
            "@attributes": {
                enemy_id: this.mobsId,
                path_id: this.pathId,
                factor_health: 1,
                factor_hit_power: 1,
                factor_speed_attack: 1,
                factor_speed_move: 1
            }
        };
        var mob = this.parent.addMob(config);
        mob.position = Utils.clone(this.pathPos);
        mob.prevPosition = {
            x: mob.position.x,
            y: mob.position.y
        };
        this.mobsCount--;
        if (this.mobsCount <= 0) this.parent.removeMobsPortal(this)
    }
};
var UpgradesManager = {};
UpgradesManager.check = function(id, level, subLevel) {
    var tower = TD.gameData.upgrades[id];
    if (!tower) return false;
    var subLevelVal = tower[level];
    if (subLevelVal == null || typeof subLevelVal == "undefined") return false;
    return subLevelVal >= subLevel
};
UpgradesManager.getSubLevel = function(id, level) {
    var tower = TD.gameData.upgrades[id];
    if (!tower) return - 1;
    var subLevelVal = tower[level];
    if (subLevelVal == null || typeof subLevelVal == "undefined") return - 1;
    return subLevelVal
};
UpgradesManager.open = function(id, level, subLevel) {
    if (!TD.gameData.upgrades[id]) TD.gameData.upgrades[id] = [];
    TD.gameData.upgrades[id][level] = subLevel
};
UpgradesManager.checkComplete = function(id, level) {
    if (!UpgradesManager.check(id, level, 2)) return false;
    var config = TowersHierarchy.get(id, level);
    for (var i = 0; i < config.children.length; i++) if (!UpgradesManager.checkComplete(id, config.children[i].level)) return false;
    return true
};
UpgradesManager.isComplete = function(id) {
    return UpgradesManager.checkComplete(id, 0)
};
var AchievementsManager = {};
AchievementsManager.ENEMY_WILL_BE_HELD = 0;
AchievementsManager.GREEN_BERET = 1;
AchievementsManager.CONQUEST_OF_SNOW = 2;
AchievementsManager.WAR_IN_THE_SANDBOX = 3;
AchievementsManager.TOTAL_SWEEP = 4;
AchievementsManager.UNDER_THE_COVER_OF_SNOWFALL = 5;
AchievementsManager.STORM_IN_THE_SANDBOX = 6;
AchievementsManager.ELITE_GUNNERS = 7;
AchievementsManager.ELITE_FLAMETHROWER = 8;
AchievementsManager.ELITE_ARTILLERY = 9;
AchievementsManager.ELITE_ANTIAIRCRAFT_GUNNERS = 10;
AchievementsManager.INCREDIBLE_ARMY = 11;
AchievementsManager.SOLDIERS_AFTER = 12;
AchievementsManager.BIG_BARRELS = 13;
AchievementsManager.NO_CHANCE_TO_THE_ENEMY = 14;
AchievementsManager.PERFECTION = 15;
AchievementsManager.ALL_ACHIEVEMENTS = [AchievementsManager.ENEMY_WILL_BE_HELD, AchievementsManager.GREEN_BERET, AchievementsManager.CONQUEST_OF_SNOW, AchievementsManager.WAR_IN_THE_SANDBOX, AchievementsManager.TOTAL_SWEEP, AchievementsManager.UNDER_THE_COVER_OF_SNOWFALL, AchievementsManager.STORM_IN_THE_SANDBOX, AchievementsManager.ELITE_GUNNERS, AchievementsManager.ELITE_FLAMETHROWER, AchievementsManager.ELITE_ARTILLERY, AchievementsManager.ELITE_ANTIAIRCRAFT_GUNNERS, AchievementsManager.INCREDIBLE_ARMY, AchievementsManager.SOLDIERS_AFTER, AchievementsManager.BIG_BARRELS, AchievementsManager.NO_CHANCE_TO_THE_ENEMY, AchievementsManager.PERFECTION];
AchievementsManager.EVENT_LEVEL_COMPLETE = 0;
AchievementsManager.EVENT_MOB_KILL = 1;
AchievementsManager.EVENT_BUILD_TOWER = 2;
AchievementsManager.EVENT_BUY_UP = 3;
AchievementsManager.event = function(type, val) {
    var achievement = null;
    if (type == AchievementsManager.EVENT_LEVEL_COMPLETE) {
        if (TD.gameField.life >= TD.gameField.startLife) AchievementsManager.complete(AchievementsManager.ENEMY_WILL_BE_HELD);
        var completedLevels = [0, 0, 0, 0];
        var maxStartOnLevels = [0, 0, 0, 0];
        for (var i = 0; i < 4; i++) for (var n = 0; n < TD.gameData.levelResults[i].length; n++) {
            completedLevels[i]++;
            if (TD.gameData.levelResults[i][n] && TD.gameData.levelResults[i][n].award >= 2) maxStartOnLevels[i]++
        }
        if (completedLevels[0] >= TD.LEVELS_ON_CHAPTER) AchievementsManager.complete(AchievementsManager.GREEN_BERET);
        if (completedLevels[1] >= TD.LEVELS_ON_CHAPTER) AchievementsManager.complete(AchievementsManager.CONQUEST_OF_SNOW);
        if (completedLevels[2] >= TD.LEVELS_ON_CHAPTER) AchievementsManager.complete(AchievementsManager.WAR_IN_THE_SANDBOX);
        if (maxStartOnLevels[0] >= TD.LEVELS_ON_CHAPTER) AchievementsManager.complete(AchievementsManager.TOTAL_SWEEP);
        if (maxStartOnLevels[1] >= TD.LEVELS_ON_CHAPTER) AchievementsManager.complete(AchievementsManager.UNDER_THE_COVER_OF_SNOWFALL);
        if (maxStartOnLevels[2] >= TD.LEVELS_ON_CHAPTER) AchievementsManager.complete(AchievementsManager.STORM_IN_THE_SANDBOX);
        achievement = AchievementsManager.get(AchievementsManager.NO_CHANCE_TO_THE_ENEMY);
        if (!achievement.completed) {
            var towers = TD.gameField.towers,
            ok = true,
            config;
            if (towers.length) {
                for (var i = 0; i < towers.length; i++) {
                    if (towers[i].subLevel < 2) {
                        ok = false;
                        break
                    }
                    config = TowersHierarchy.get(towers[i].id, towers[i].level);
                    if (config.children.length) {
                        ok = false;
                        break
                    }
                }
                if (ok) AchievementsManager.complete(AchievementsManager.NO_CHANCE_TO_THE_ENEMY)
            }
        }
    }
    if (type == AchievementsManager.EVENT_MOB_KILL) {
        achievement = AchievementsManager.get(AchievementsManager.SOLDIERS_AFTER);
        if (!achievement.completed) {
            AchievementsManager.update(AchievementsManager.SOLDIERS_AFTER);
            if (achievement.counter >= 1E3) AchievementsManager.complete(AchievementsManager.SOLDIERS_AFTER)
        }
    }
    if (type == AchievementsManager.EVENT_BUILD_TOWER && val == 3) {
        achievement = AchievementsManager.get(AchievementsManager.BIG_BARRELS);
        if (!achievement.completed) {
            AchievementsManager.update(AchievementsManager.BIG_BARRELS);
            if (achievement.counter >= 50) AchievementsManager.complete(AchievementsManager.BIG_BARRELS)
        }
    }
    if (type == AchievementsManager.EVENT_BUY_UP) {
        if (val == 0 && UpgradesManager.isComplete(val)) AchievementsManager.complete(AchievementsManager.ELITE_GUNNERS);
        if (val == 1 && UpgradesManager.isComplete(val)) AchievementsManager.complete(AchievementsManager.ELITE_FLAMETHROWER);
        if (val == 2 && UpgradesManager.isComplete(val)) AchievementsManager.complete(AchievementsManager.ELITE_ARTILLERY);
        if (val == 3 && UpgradesManager.isComplete(val)) AchievementsManager.complete(AchievementsManager.ELITE_ANTIAIRCRAFT_GUNNERS);
        if (UpgradesManager.isComplete(0) && UpgradesManager.isComplete(1) && UpgradesManager.isComplete(2) && UpgradesManager.isComplete(3)) AchievementsManager.complete(AchievementsManager.INCREDIBLE_ARMY)
    }
    var cnt = 0;
    for (var i = 0; i < AchievementsManager.ALL_ACHIEVEMENTS.length; i++) if (AchievementsManager.ALL_ACHIEVEMENTS[i] != AchievementsManager.PERFECTION) {
        achievement = AchievementsManager.get(AchievementsManager.ALL_ACHIEVEMENTS[i]);
        if (achievement.completed) cnt++
    }
    if (cnt >= AchievementsManager.ALL_ACHIEVEMENTS.length - 1) AchievementsManager.complete(AchievementsManager.PERFECTION)
};
AchievementsManager.get = function(id) {
    if (!TD.gameData.achievements[id]) AchievementsManager.register(id);
    return TD.gameData.achievements[id]
};
AchievementsManager.check = function(id) {
    return AchievementsManager.get(id).completed
};
AchievementsManager.update = function(id) {
    var achievement = AchievementsManager.get(id);
    if (achievement.completed) return;
    achievement.counter++;
    TD.save()
};
AchievementsManager.complete = function(id) {
    var achievement = AchievementsManager.get(id);
    if (achievement.completed) return;
    achievement.completed = true;
    TD.save();
    Notification.show(id)
};
AchievementsManager.register = function(id) {
    TD.gameData.achievements[id] = {
        counter: 0,
        completed: false
    }
};
var SoundsManager = {};
SoundsManager.mixer = null;
SoundsManager.playedMusicFile = null;
SoundsManager.lastMusicFile = null;
SoundsManager.soundsPath = "sounds";
SoundsManager.config = null;
SoundsManager.load = function(sounds, endCallback, progressCallback, minProgressVal, maxProgressVal) {
    var soundsPreloader = new SoundsPreloader;
    soundsPreloader.minProgressVal = typeof minProgressVal == "undefined" ? 0 : minProgressVal;
    soundsPreloader.maxProgressVal = typeof maxProgressVal == "undefined" ? 100 : maxProgressVal;
    soundsPreloader.load(sounds, endCallback, progressCallback)
};
SoundsManager.start = function(config) {
    if (config) SoundsManager.config = config;
    SoundsManager.mixer = new AudioMixer("sounds", 15);
    SoundsManager.mixer.channels[0].locked = true;
    ExternalAPI.exec("setMixer", SoundsManager.mixer)
};
SoundsManager.click = function() {
    SoundsManager.play("sounds/ui_button_click.mp3")
};
SoundsManager.getSoundConfig = function(name) {
    for (var i = 0; i < SoundsManager.config.length; i++) if (TD.getAttr(SoundsManager.config[i], "name") == name) return SoundsManager.config[i]
};
SoundsManager.getSoundName = function(url) {
    url = url.replace("sounds/", "");
    url = url.split(".");
    url.pop();
    return url.join(".")
};
SoundsManager.play = function(name, isMusic) {
    if (isMusic && SoundsManager.playedMusicFile == name) return;
    if (isMusic) SoundsManager.lastMusicFile = name;
    if (isMusic && TD.gameData.musicDisabled) return;
    if (!isMusic && TD.gameData.soundsDisabled) return;
    if (!isMusic && !AudioMixer.isWebAudioSupport()) return;
    if (isMusic) SoundsManager.playedMusicFile = name;
    var fileName = name;
    var config = SoundsManager.getSoundConfig(name);
    if (config) {
        fileName = TD.getAttr(config, "filename");
        if (config.sound) {
            var ix = Math.floor(Math.random() * config.sound.length);
            if (ix > 1) fileName = TD.getAttr(config.sound[ix], "filename")
        }
    }
    fileName = SoundsManager.getSoundName(fileName);
    var timeout = 0;
    if (config) {
        var maxCount = TD.getAttr(config, "max_count", true);
        if (maxCount > 0) {
            var cnt = 0;
            for (var i = 0; i < SoundsManager.mixer.channels.length; i++) if (SoundsManager.mixer.channels[i].busy && SoundsManager.mixer.channels[i].playedFileName == fileName) cnt++;
            if (cnt >= maxCount) return
        }
        timeout = TD.getAttr(config, "timeout", true)
    }
    var channel = SoundsManager.mixer.play(fileName, isMusic, true, isMusic ? 0 : null);
    if (channel) channel.playedFileName = fileName
};
SoundsManager.pauseMusic = function() {
    SoundsManager.mixer.channels[0].stop();
    SoundsManager.playedMusicFile = null
};
SoundsManager.resumeMusic = function() {
    if (!SoundsManager.playedMusicFile && SoundsManager.lastMusicFile) SoundsManager.play(SoundsManager.lastMusicFile, true);
    SoundsManager.mixer.channels[0].resume()
};
SoundsManager.stopAllSounds = function() {
    for (var i = 1; i < SoundsManager.mixer.channels.length; i++) SoundsManager.mixer.channels[i].stop()
};
var UI = {};
UI.assetsLibrary = null;
UI.fonts = {};
UI.init = function(endCallback, progressCallback, minProgressVal, maxProgressVal) {
    BitmapText.LINES_DELIMITER = "/n";
    UI.assetsLibrary = new AssetsLibrary("images", Utils.globalScale, ASSETS);
    UI.assetsLibrary.load(endCallback, progressCallback, minProgressVal, maxProgressVal)
};
UI.getAssetByTexture = function(texture) {
    var tmp = texture.split(".");
    tmp.pop();
    return UI.assetsLibrary.getAsset(tmp.join("."))
};
UI.getSpriteByTexture = function(texture) {
    var tmp = texture.split(".");
    tmp.pop();
    return UI.assetsLibrary.getSprite(tmp.join("."))
};
UI.preventEvent = function() {
    return false
};
UI.preventAllEvents = function(obj) {
    obj.onclick = UI.preventEvent;
    obj.onmousedown = UI.preventEvent;
    obj.onmouseup = UI.preventEvent;
    obj.onmousemove = UI.preventEvent
};
UI.playSimpleSound = function() {};
function CommonButton(back, icon) {
    var asset = UI.assetsLibrary.getAsset("common/buttons/" + back);
    Utils.callSuperConstructor(CommonButton, this, asset.bitmap, asset.width, asset.height);
    this.icon = null;
    if (icon) {
        this.icon = UI.assetsLibrary.getSprite("common/icons/" + icon);
        this.icon.setPosition( - 1, -1);
        this.addChild(this.icon)
    }
    this.addEventListener("click", SoundsManager.click)
}
Utils.extend(CommonButton, Sprite);
function TextButton(back, text, textClass) {
    var asset = UI.assetsLibrary.getAsset("common/buttons/" + back);
    Utils.callSuperConstructor(TextButton, this, asset.bitmap, asset.width, asset.height);
    if (!textClass) textClass = "UITextRed";
    this.textView = new window[textClass](0, 0, text, true);
    this.addChild(this.textView);
    this.addEventListener("click", SoundsManager.click)
}
Utils.extend(TextButton, Sprite);
TextButton.prototype.update = function(text) {
    this.textView.update(text)
};
function CheckBox(val) {
    var asset = UI.assetsLibrary.getSprite("common/checkbox");
    Utils.callSuperConstructor(CheckBox, this, asset.bitmap, asset.width, asset.height, 2);
    this.checked = !!val;
    this.onchange = null;
    this.addEventListener("click", Utils.proxy(this.handleClick, this));
    this.update()
}
Utils.extend(CheckBox, Sprite);
CheckBox.prototype.setChecked = function(val) {
    this.checked = !!val;
    this.update();
    this.dispatchEvent("change", {
        target: this
    })
};
CheckBox.prototype.handleClick = function() {
    this.checked = !this.checked;
    this.update();
    this.dispatchEvent("change", {
        target: this
    });
    SoundsManager.click()
};
CheckBox.prototype.update = function() {
    this.gotoAndStop(this.checked ? 1 : 0);
    if (this.static && this.stage) this.stage.refreshBackground()
};
function ScrollBar(min, max) {
    Utils.callSuperConstructor(ScrollBar, this, null, 1, 1);
    this.min = min;
    this.pos = 0;
    this.max = max;
    this.pointer = null;
    this.lastPoinerY = 0;
    this.ochange = null;
    this.startScroll = Utils.proxy(this.startScroll, this);
    this.endScroll = Utils.proxy(this.endScroll, this);
    this.onadd = this.createChildren
}
Utils.extend(ScrollBar, Sprite);
ScrollBar.prototype.createChildren = function() {
    var bar = UI.assetsLibrary.getSprite("common/scroll_bg");
    bar.onclick = this.onBarClick;
    this.addChild(bar);
    this.pointer = UI.assetsLibrary.getSprite("common/scroll_point");
    this.pointer.onmousedown = this.startScroll;
    this.pointer.onenterframe = this.alignScroll;
    this.pointer.onmouseup = this.endScroll;
    this.addChild(this.pointer);
    this.setPointerPosition(this.pos)
};
ScrollBar.prototype.onBarClick = function(e) {
    var y = e.y;
    e.target.parent.pointer.y = y;
    e.target.parent.alignScroll({
        target: e.target.parent.pointer
    })
};
ScrollBar.prototype.setPointerPosition = function(val) {
    if (val < this.min) val = this.min;
    if (val > this.max) val = this.max;
    var diff = this.max - this.min;
    var len = ScrollBar.MAX_POINER_POS - ScrollBar.MIN_POINER_POS;
    var p1 = diff ? val / diff: 0;
    var p2 = len * p1 + ScrollBar.MIN_POINER_POS;
    this.pos = p1;
    this.lastPoinerY = p2;
    this.pointer.setPosition(0, p2)
};
ScrollBar.prototype.startScroll = function(e) {
    this.pointer.startDrag(e.x, e.y);
    return false
};
ScrollBar.prototype.endScroll = function(e) {
    this.pointer.stopDrag();
    return false
};
ScrollBar.prototype.alignScroll = function(e) {
    var pointer = e.target,
    self = e.target.parent;
    if (pointer.y > ScrollBar.MAX_POINER_POS) pointer.y = ScrollBar.MAX_POINER_POS;
    if (pointer.y < ScrollBar.MIN_POINER_POS) pointer.y = ScrollBar.MIN_POINER_POS;
    pointer.x = 0;
    if (self.lastPoinerY != pointer.y) {
        var pos = pointer.y - ScrollBar.MIN_POINER_POS;
        pos = pos / (ScrollBar.MAX_POINER_POS - ScrollBar.MIN_POINER_POS);
        self.pos = pos;
        if (self.onchange) self.onchange({
            target: self,
            pos: pos
        });
        self.lastPoinerY = pointer.y
    }
};
ScrollBar.MIN_POINER_POS = -72;
ScrollBar.MAX_POINER_POS = 72;
function Alert(text, confirmMode) {
    Utils.callSuperConstructor(Alert, this, null, 1, 1);
    this.onadd = this.createChildren;
    this.text = text;
    this.confirmMode = confirmMode;
    this.callback = null;
    this.onYesClick = Utils.proxy(this.onYesClick, this);
    this.onNoClick = Utils.proxy(this.onNoClick, this)
}
Utils.extend(Alert, Sprite);
Alert.prototype.createChildren = function() {
    this.setRelativePosition(0, 0);
    var shader = new Sprite(null, this.stage.screenWidth, this.stage.screenHeight);
    shader.fillColor = "rgba(0,0,0,0.7)";
    UI.preventAllEvents(shader);
    this.addChild(shader);
    var back = UI.assetsLibrary.getSprite("dialogs/message");
    this.addChild(back);
    var txt = new UITextColor(0, -12, this.text, UITextColor.defaultColor, true);
    txt.view.maxWidth = 280;
    txt.view.valign = BitmapText.VALIGN_MIDDLE;
    txt.setScale(.6);
    this.addChild(txt);
    var yesButton = new CommonButton("button_confirm_no", "ico_yes_red");
    yesButton.setPosition(this.confirmMode ? 80 : 0, 32);
    yesButton.onclick = this.onYesClick;
    this.addChild(yesButton);
    if (this.confirmMode) {
        var noButton = new CommonButton("button_confirm_no", "ico_no");
        noButton.setPosition( - 80, 32);
        noButton.onclick = this.onNoClick;
        this.addChild(noButton)
    }
};
Alert.prototype.onYesClick = function() {
    SoundsManager.click();
    if (this.callback) this.callback(true);
    this.destroy = true
};
Alert.prototype.onNoClick = function() {
    if (this.callback) this.callback(false);
    this.destroy = true
};
Alert.create = function(text, callback, confirmMode) {
    var w = new Alert(text, confirmMode);
    w.callback = callback;
    TD.stage.addChild(w);
    return w
};
function TowerButton(config) {
    this.config = config;
    this.oldConfig = config;
    Utils.callSuperConstructor(TowerButton, this, null, 50, 50);
    this.enabled = true;
    this.showBack = false;
    this.costView = new UITextSmall(0, 0, "", true);
    this.addChild(this.costView);
    this.checkEvent = Utils.proxy(this.checkEvent, this);
    this.addEventListener("click", this.checkEvent);
    this.addEventListener("mousedown", this.checkEvent);
    this.addEventListener("mouseup", this.checkEvent);
    this.back = new Sprite(null, 1, 1);
    this.back.setPosition(29, 44);
    this.addChild(this.back);
    this.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP);
    this.refresh()
}
Utils.extend(TowerButton, Sprite);
TowerButton.prototype.checkEvent = function() {
    return this.enabled
};
TowerButton.prototype.setEnabled = function(val) {
    if (this.enabled == val) return;
    this.enabled = val;
    this.refresh()
};
TowerButton.prototype.getTowerConfig = function() {
    var id = 0;
    for (var i in TD.configs.towersBar.slots) {
        if (id == this.config.towerId) return TD.configs.towersBar.slots[i];
        id++
    }
};
TowerButton.prototype.refresh = function() {
    if (this.config.towerId < 0) {
        this.setBitmap(null);
        this.costView.visible = false;
        var asset = UI.assetsLibrary.getAsset(this.config.opened ? "game/infobar/infobar_12": "game/infobar/infobar_13");
        this.back.bitmap = asset.bitmap;
        this.back.width = asset.width;
        this.back.height = asset.height;
        this.back.visible = this.showBack
    } else {
        var tConfig = this.getTowerConfig();
        var pos = TD.parsePositionString(TD.getAttr(tConfig.price, "position"));
        this.costView.setPosition(pos.x + 1, pos.y - 7);
        this.config.cost = TowersHierarchy.get(this.config.towerId, 0).getCost(0);
        if (this.config.stored) this.config.cost = Math.round(this.config.cost * TowersHierarchy.heroTowerPriceCoefficient);
        this.costView.update(this.config.cost);
        this.costView.setSkin(this.enabled ? "": "disabled");
        this.setBitmap(this.enabled ? TD.getAttr(tConfig.button.out, "texture") : TD.getAttr(tConfig.button.disabled, "texture"));
        this.costView.visible = true;
        this.back.visible = false
    }
};
TowerButton.prototype.setBitmap = function(texture) {
    if (!texture) {
        this.bitmap = null;
        return
    }
    var asset = UI.getAssetByTexture(texture);
    this.bitmap = asset.bitmap;
    this.width = asset.width;
    this.height = asset.height;
    this.frames = asset.frames;
    this.layers = asset.layers;
    this.alignAnchor(DisplayObjectContainer.ANCHOR_ALIGN_LEFT, DisplayObjectContainer.ANCHOR_VALIGN_TOP)
};
function CostView(v) {
    Utils.callSuperConstructor(CostView, this, null, 1, 1);
    this.textView = new UITextNumbersSmall(0, 0, "", true);
    this.textView.view.scale = .75;
    this.addChild(this.textView);
    this.update(v)
}
Utils.extend(CostView, Sprite);
CostView.prototype.update = function(v) {
    this.value = v;
    this.textView.update("@" + this.value)
};
CostView.prototype.bubble = function() {
    this.moveTo(this.x, this.y - 20, 1E3, Easing.cubic.easeOut, this.endBubbleMove)
};
CostView.prototype.endBubbleMove = function(e) {
    e.target.obj.fadeTo(0, 200, null, e.target.obj.endBubbleShow)
};
CostView.prototype.endBubbleShow = function(e) {
    e.target.obj.destroy = true
};
function NextWaveView() {
    Utils.callSuperConstructor(NextWaveView, this, null, 1, 1);
    this.icons = [];
    this.icons.push(UI.assetsLibrary.getSprite("game/infobar/infobar_9"));
    this.icons.push(UI.assetsLibrary.getSprite("game/infobar/infobar_10"));
    this.icons.push(UI.assetsLibrary.getSprite("game/infobar/infobar_11"));
    for (var i = 0; i < this.icons.length; i++) {
        this.icons[i].visible = false;
        this.addChild(this.icons[i])
    }
    this.text = new UITextNumbers(0, 20, "", true);
    this.text.view.scale = .35;
    this.addChild(this.text)
}
Utils.extend(NextWaveView, Sprite);
NextWaveView.prototype.setWave = function(wave, current, total) {
    for (var i = 0; i < this.icons.length; i++) this.icons[i].visible = false;
    var displayId = 0;
    var enemy, id;
    for (var i = 0; i < wave.enemies.enemy.length; i++) {
        enemy = wave.enemies.enemy[i];
        id = TD.getAttr(enemy, "enemy_id");
        if (id != "soldier" && displayId == 0) displayId = 1;
        if (id == "fighter" || id == "airship" || id == "bomber") displayId = 2
    }
    this.icons[displayId].visible = true;
    if (displayId == 2) SoundsManager.play("wave_start_aircraft");
    this.text.update(current + "/" + total)
};
function WaveIcon(path) {
    var asset = UI.assetsLibrary.getAsset("game/infobar/infobar_2");
    Utils.callSuperConstructor(WaveIcon, this, asset.bitmap, asset.width, asset.height);
    var p;
    for (var i = 0; i < path.m_path.length; i++) {
        p = path.m_path[i];
        if (p.x >= 0 && p.y >= 0 && p.x <= 512 && p.y <= 384) {
            this.setPosition(p.x, p.y);
            break
        }
    }
    if (this.x < 24) this.x = 24;
    if (this.x > 488) this.x = 488;
    if (this.y < 24) this.y = 24;
    if (this.y > 360) this.y = 360;
    var arrow = UI.assetsLibrary.getSprite("game/infobar/infobar_0");
    var angle = Math.atan2(p.y - this.y, p.x - this.x);
    arrow.rotation = angle;
    arrow.setPosition(Math.cos(angle) * 18, Math.sin(angle) * 18);
    this.addChild(arrow);
    this.onadd = this.startAnimation
}
Utils.extend(WaveIcon, Sprite);
WaveIcon.prototype.startAnimation = function(e) {
    e.target.fadeOut()
};
WaveIcon.prototype.fadeOut = function(e) {
    var obj = e ? e.target.obj: this;
    obj.fadeTo(0, 1E3, null, obj.fadeIn)
};
WaveIcon.prototype.fadeIn = function(e) {
    var obj = e ? e.target.obj: this;
    obj.fadeTo(1, 1E3, null, obj.fadeOut)
};
function TowerMenu(tower) {
    Utils.callSuperConstructor(TowerMenu, this, null, 1, 1);
    this.tower = tower;
    this.shader = new Graphics.circle(0, 0, 70);
    this.shader.fillColor = "rgba(255,255,255,0.5)";
    this.shader.color = "#fff";
    this.shader.lineWidth = 1;
    this.checkMouseEvent = Utils.proxy(this.checkMouseEvent, this);
    this.shader.onmousedown = this.checkMouseEvent;
    this.shader.onmouseup = this.checkMouseEvent;
    this.shader.onclick = this.checkMouseEvent;
    this.addChild(this.shader);
    this.buttons = [];
    this.addButton(new TowerMenuSellButton(tower), Math.PI / 4 * 3, Utils.proxy(this.sell, this));
    this.addButton(new TowerMenuRepairButton(tower), Math.PI / 4, Utils.proxy(this.repair, this));
    this.upButton1 = this.addButton(new TowerMenuUpgradeButton(tower, 0), Math.PI / 4 * 5, Utils.proxy(this.upgrade, this));
    this.upButton2 = this.addButton(new TowerMenuUpgradeButton(tower, 1), Math.PI / 4 * 7, Utils.proxy(this.upgrade, this));
    this.expView = new TowerExpView(tower.nextExperience - tower.prevExperience);
    this.expView.visible = true;
    this.expView.setPosition(0, 16);
    this.addChild(this.expView)
}
Utils.extend(TowerMenu, Sprite);
TowerMenu.prototype.checkMouseEvent = function(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y) > this.shader.radius
};
TowerMenu.prototype.addButton = function(view, angle, callback) {
    this.setButtonPosition(view, angle);
    this.addChild(view);
    if (callback) view.addEventListener("click", callback);
    this.buttons.push(view);
    return view
};
TowerMenu.prototype.setButtonPosition = function(view, angle) {
    var len = 48;
    view.setPosition(Math.cos(angle) * len, Math.sin(angle) * len)
};
TowerMenu.prototype.update = function() {
    for (var i = 0; i < this.buttons.length; i++) this.buttons[i].update();
    var cnt = 0;
    if (this.upButton1.visible) cnt++;
    if (this.upButton2.visible) cnt++;
    if (cnt == 2) {
        this.setButtonPosition(this.upButton1, Math.PI / 4 * 5);
        this.setButtonPosition(this.upButton2, Math.PI / 4 * 7)
    }
    if (cnt == 1) {
        if (this.upButton1.visible) this.setButtonPosition(this.upButton1, Math.PI / 4 * 6);
        if (this.upButton2.visible) this.setButtonPosition(this.upButton2, Math.PI / 4 * 6)
    }
    this.expView.maxVal = this.tower.nextExperience - this.tower.prevExperience;
    this.expView.update(this.tower.experience - this.tower.prevExperience)
};
TowerMenu.prototype.sell = function() {
    var paused = TD.gameField.paused;
    TD.pauseGame();
    Alert.create(I18.f("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b,/n\u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u0430\u0442\u044c \u0431\u0430\u0448\u043d\u044e?"), Utils.proxy(function(res) {
        if (res) {
            this.tower.sell();
            TD.hideTowerMenu()
        }
        if (!paused) TD.resumeGame()
    },
    this), true)
};
TowerMenu.prototype.repair = function() {
    this.tower.repair()
};
TowerMenu.prototype.upgrade = function(e) {
    this.tower.upgrade(e.target.ix)
};
function TowerMenuButton(normalTexture, disabledTexture, icon) {
    Utils.callSuperConstructor(TowerMenuButton, this, null, 45, 45);
    this.icon = new Sprite(null, 1, 1);
    this.icon.setPosition(0, -3);
    this.addChild(this.icon);
    if (icon) this.updateIcon(icon);
    this.normalTexture = UI.assetsLibrary.getSprite("game/infobar/" + normalTexture);
    this.addChild(this.normalTexture);
    this.disabledTexture = UI.assetsLibrary.getSprite("game/infobar/" + disabledTexture);
    this.addChild(this.disabledTexture);
    this.disabledTexture.visible = false;
    this.costView = new UITextSmall(1, 6, "", true);
    this.addChild(this.costView);
    this.enabled = true;
    this.onclick = Utils.proxy(this.controlEvents, this)
}
Utils.extend(TowerMenuButton, Sprite);
TowerMenuButton.prototype.controlEvents = function() {
    return this.enabled
};
TowerMenuButton.prototype.update = function(cost, enabled) {
    if (this.enabled != enabled) {
        this.normalTexture.visible = enabled;
        this.disabledTexture.visible = !enabled;
        if (this.icon && this.icon.totalLayers > 1) this.icon.currentLayer = enabled ? 0 : 1;
        this.costView.setSkin(enabled ? "normal": "disabled");
        this.enabled = enabled
    }
    this.costView.update(cost)
};
TowerMenuButton.prototype.updateIcon = function(icon) {
    var asset = UI.getAssetByTexture(icon);
    this.icon.bitmap = asset.bitmap;
    this.icon.width = asset.width;
    this.icon.height = asset.height;
    this.icon.totalFrames = asset.frames;
    this.icon.totalLayers = asset.layers
};
function TowerMenuSellButton(tower) {
    Utils.callSuperConstructor(TowerMenuSellButton, this, "tower_button_26", "tower_button_28");
    this.tower = tower;
    this.costView.y = 7
}
Utils.extend(TowerMenuSellButton, TowerMenuButton);
TowerMenuSellButton.prototype.update = function() {
    var cost = this.tower.getSellCost();
    Utils.callSuperMethod(TowerMenuSellButton, this, "update", cost, cost > 0)
};
function TowerMenuRepairButton(tower) {
    Utils.callSuperConstructor(TowerMenuRepairButton, this, "tower_button_23", "tower_button_25");
    this.tower = tower
}
Utils.extend(TowerMenuRepairButton, TowerMenuButton);
TowerMenuRepairButton.prototype.update = function() {
    var cost = this.tower.getRepairCost();
    Utils.callSuperMethod(TowerMenuSellButton, this, "update", cost, cost > 0 && this.tower.parent.money >= cost)
};
function TowerMenuUpgradeButton(tower, ix) {
    this.tower = tower;
    this.ix = ix;
    Utils.callSuperConstructor(TowerMenuUpgradeButton, this, "tower_button_21", "tower_button_22");
    this.costView.x = -1.5;
    this.costView.y = 14
}
Utils.extend(TowerMenuUpgradeButton, TowerMenuButton);
TowerMenuUpgradeButton.prototype.update = function() {
    var nextLevelProps = this.tower.getNextLevelProps();
    if (nextLevelProps[this.ix] && this.tower.isReadyToUp()) {
        this.visible = true;
        var config = TowersHierarchy.get(this.tower.id, nextLevelProps[this.ix].level);
        var perk = TD.getPerk(config.iconName);
        this.updateIcon(TD.getAttr(perk.icon_game, "texture"));
        var cost = this.tower.getUpgradeCost(this.ix);
        Utils.callSuperMethod(TowerMenuUpgradeButton, this, "update", cost, this.tower.parent.money >= cost)
    } else this.visible = false
};
function WaveCounterView(val) {
    Utils.callSuperConstructor(WaveCounterView, this, null, 1, 1);
    val = val + "";
    var chars = [],
    chr,
    width = 0;
    for (var i = 0; i < val.length; i++) {
        chr = UI.assetsLibrary.getSprite("game/digits/digits_0_9_" + val.substr(i, 1));
        chars.push(chr);
        width += chr.width
    }
    var x = -(width / 2);
    for (var i = 0; i < chars.length; i++) {
        chr = chars[i];
        chr.setPosition(x + chr.width / 2, 0);
        this.addChild(chr);
        x += chr.width
    }
    this.scaleX = this.scaleY = .3
}
Utils.extend(WaveCounterView, Sprite);
WaveCounterView.prototype.startAnimation = function() {
    this.scaleTo(1, 250, null, this.fadeOut)
};
WaveCounterView.prototype.fadeOut = function(e) {
    e.target.obj.fadeTo(0, 750, null, e.target.obj.endEnimation)
};
WaveCounterView.prototype.endEnimation = function(e) {
    e.target.obj.destroy = true
};
function ScreenScroller(pages) {
    if (!pages) pages = 2;
    Utils.callSuperConstructor(ScreenScroller, this, null, 512, 384);
    this.scroller = new Sprite(null, (pages + 1) * 512, 384);
    this.addChild(this.scroller);
    this.currentPage = 0;
    this.pages = pages;
    this.startScrollX = 0;
    this.scroller.onmousedown = Utils.proxy(this.startScroll, this);
    this.scroller.onmouseup = Utils.proxy(this.stopScroll, this);
    this.scroller.onmousemove = Utils.proxy(this.contollScroll, this);
    this.pagesDots = [];
    var dot, x = -(pages * 16 / 2) + 8;
    for (var i = 0; i < pages; i++) {
        dot = UI.assetsLibrary.getSprite("missionselector/dots_0");
        dot.currentLayer = i == 0 ? 0 : 1;
        dot.setPosition(x, 180);
        this.addChild(dot);
        this.pagesDots.push(dot);
        x += 16
    }
    this.pageWidth = 512
}
Utils.extend(ScreenScroller, Sprite);
ScreenScroller.prototype.addItem = function(obj) {
    this.scroller.addChild(obj)
};
ScreenScroller.prototype.startScroll = function(e) {
    this.startScrollX = this.scroller.x;
    this.scroller.startDrag(e.x, e.y)
};
ScreenScroller.prototype.contollScroll = function() {
    this.scroller.y = 0
};
ScreenScroller.prototype.setPage = function(page) {
    this.currentPage = page;
    this.scroller.x = -(page * this.pageWidth);
    this.updateDots()
};
ScreenScroller.prototype.updateDots = function() {
    for (var i = 0; i < this.pages; i++) this.pagesDots[i].currentLayer = this.currentPage == i ? 0 : 1
};
ScreenScroller.prototype.stopScroll = function() {
    this.scroller.stopDrag();
    var page = 0;
    var diff = this.startScrollX - this.scroller.x;
    if (Math.abs(diff) >= 50) {
        page = this.currentPage + Utils.sign(diff);
        if (page < 0) page = 0;
        if (page >= this.pages) page = this.pages - 1
    } else page = this.currentPage;
    this.currentPage = page;
    this.updateDots();
    this.scroller.moveTo( - (page * this.pageWidth), 0, 300)
};
function MainMenu() {
    Utils.callSuperConstructor(MainMenu, this, null, 1, 1);
    this.particlesLayer = null;
    this.particlesEmitters = [];
    this.onadd = this.createChildren
}
Utils.extend(MainMenu, Sprite);
MainMenu.prototype.createChildren = function() {
    var back = UI.assetsLibrary.getSprite("mainmenu/background_0");
    this.addChild(back);
    back.setStatic(true);
    this.particlesLayer = new Sprite(null, 1, 1);
    this.addChild(this.particlesLayer);
    this.showEffects();
    var logo = UI.assetsLibrary.getSprite("mainmenu/logo_btns_0");
    logo.setPosition(0, -20);
    this.addChild(logo);
    var logoText = UI.assetsLibrary.getSprite("mainmenu/logo_text");
    logoText.setPosition(0, 10);
    this.addChild(logoText);
    var b = UI.assetsLibrary.getSprite("mainmenu/main_button_0");
    b.setPosition(0, 148);
    b.addEventListener("click", SoundsManager.click);
    b.addEventListener("click", this.onPlayClick);
    this.addChild(b);
    var txt = new UITextGold(0, 0, I18.f("\u0418\u0413\u0420\u0410\u0422\u042c"), true);
    b.addChild(txt);
    b = new CommonButton("button_medium_square", "more_games");
    b.setPosition( - 165, 150);
    b.onclick = showMoreGames;
    this.addChild(b);
    b = new CommonButton("button_medium_square", "options");
    b.setPosition( - 100, 150);
    b.onclick = TD.showOptions;
    this.addChild(b);
    b = new CommonButton("button_medium_square", "achievements");
    b.setPosition(100, 150);
    b.onclick = TD.showAchievements;
    this.addChild(b);
    b = new CommonButton("button_medium_square", "fullscreen");
    b.setPosition(165, 150);
    b.onclick = Utils.toggleFullScreen;
    this.addChild(b);
    SoundsManager.play("music_menu", true)
};
MainMenu.prototype.onPlayClick = function() {
    if (TD.gameData.comixViewed) TD.showChapterSelect();
    else {
        TD.showComics();
        TD.gameData.comixViewed = true;
        TD.save()
    }
};
MainMenu.prototype.addEffect = function(config, particleName) {
    var emitter = new ParticleSystem.Emitter(config, {
        x: config._position.x,
        y: config._position.y
    },
    UI.assetsLibrary.getSprite(particleName));
    this.particlesEmitters.push(emitter)
};
MainMenu.prototype.showEffects = function() {
    var config = {
        "delay": 0,
        "_position": {
            "x": 0,
            "y": 0
        },
        "posVar": {
            "x": 90,
            "y": 13
        },
        "life": 2,
        "lifeVar": 1,
        "totalParticles": 30,
        "emissionRate": 75,
        "startColor": [51, 102, 178.5, .77],
        "startColorVar": [0, 0, 51, .1],
        "endColor": [0, 0, 0, .01],
        "endColorVar": [0, 0, 0, 0],
        "radius": 12,
        "radiusVar": 2,
        "speed": 15,
        "speedVar": 5,
        "angle": 1.5707963267949,
        "angleVar": 6.2831853071796,
        "gravity": {
            "x": 0,
            "y": -40
        },
        "radialAccel": 0,
        "radialAccelVar": 0,
        "tangentialAccel": 0,
        "tangentialAccelVar": 0,
        "startScale": 2.6,
        "startScaleVar": .5,
        "endScale": .01,
        "endScaleVar": 0,
        "startRotation": 0,
        "startRotationVar": 0,
        "rotationSpeed": 0,
        "rotationSpeedVar": 0,
        "rotationCoef": 0,
        "rotationCoefVar": 0
    };
    this.addEffect(config, "particles/fire");
    config = {
        "delay": 0,
        "_position": {
            "x": -1,
            "y": -31
        },
        "posVar": {
            "x": 0,
            "y": 0
        },
        "life": 7,
        "lifeVar": 1.7,
        "totalParticles": 42,
        "emissionRate": 75,
        "startColor": [51, 102, 178.5, .23],
        "startColorVar": [0, 0, 51, .1],
        "endColor": [0, 0, 0, .01],
        "endColorVar": [0, 0, 0, 0],
        "radius": 12,
        "radiusVar": 2,
        "speed": 15,
        "speedVar": 5,
        "angle": 1.5707963267949,
        "angleVar": 6.2831853071796,
        "gravity": {
            "x": 0,
            "y": -10
        },
        "radialAccel": 8,
        "radialAccelVar": 0,
        "tangentialAccel": 0,
        "tangentialAccelVar": 0,
        "startScale": .48,
        "startScaleVar": .04,
        "endScale": .1,
        "endScaleVar": 0,
        "startRotation": 0,
        "startRotationVar": 0,
        "rotationSpeed": 0,
        "rotationSpeedVar": 0,
        "rotationCoef": 0,
        "rotationCoefVar": 0
    };
    this.addEffect(config, "particles/back_glow");
    this.onenterframe = Utils.proxy(this.updateParticles, this)
};
MainMenu.prototype.updateParticles = function(e) {
    for (var i = 0; i < this.particlesEmitters.length; i++) {
        this.particlesEmitters[i].update(e.delta);
        ParticleSystem.Renderer.render(this.particlesLayer, this.particlesEmitters[i].particles)
    }
};
function ChapterSelect() {
    Utils.callSuperConstructor(ChapterSelect, this, null, 1, 1);
    this.onadd = this.createChildren;
    this.onChapterSelect = Utils.proxy(this.onChapterSelect, this)
}
Utils.extend(ChapterSelect, Sprite);
ChapterSelect.worldsToDisplay = [0, 1, 2, 3];
ChapterSelect.prototype.createChildren = function() {
    var back = UI.assetsLibrary.getSprite("missionselector/background_1");
    this.addChild(back);
    back.setStatic(true);
    var scroller = new ScreenScroller(2);
    this.addChild(scroller);
    var worlds = TD.configs.worlds.worlds.world,
    world, displayWorlds = [];
    for (var i = 0; i < worlds.length; i++) {
        world = worlds[i];
        if (ChapterSelect.worldsToDisplay.indexOf(TD.getAttr(world, "world_number", true)) >= 0) displayWorlds.push(world)
    }
    var lastOpened = -1;
    for (i = 0; i < displayWorlds.length; i++) {
        var icon = new ChapterIcon(displayWorlds[i]);
        icon.setPosition( - 120 + i * 240, 0);
        scroller.addItem(icon);
        if (icon.enabled) lastOpened++;
        icon.addEventListener("click", this.onChapterSelect)
    }
    scroller.setPage(Math.floor(lastOpened / 2));
    var b = new CommonButton("button_medium_square", "back");
    b.setStatic(true);
    b.setPosition( - 220, 160);
    b.addEventListener("click", TD.showMainMenu);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "shop");
    b.setStatic(true);
    b.setPosition(220, 160);
    b.addEventListener("click", this.onShowShop);
    this.addChild(b);
    SoundsManager.play("music_menu", true)
};
ChapterSelect.prototype.onShowShop = function() {
    var w = TD.showShop();
    w.closeCallback = TD.showChapterSelect
};
ChapterSelect.prototype.onChapterSelect = function(e) {
    var button = e.target;
    if (button.enabled) {
        TD.showLevelSelect(button.worldId);
        SoundsManager.click()
    }
};
function ChapterIcon(world) {
    Utils.callSuperConstructor(ChapterIcon, this, null, 230, 200);
    this.world = world;
    this.worldId = TD.getAttr(world, "world_number", true);
    var icon = UI.getSpriteByTexture(TD.getAttr(world.icon, "texture"));
    this.addChild(icon);
    var caption = new UITextGold2(0, -75, "", true);
    caption.view.scale = .7;
    caption.update(I18.f(TD.getAttr(world.title, "string")));
    this.addChild(caption);
    this.enabled = !!TD.gameData.openedWorlds[this.worldId];
    if (!this.enabled) {
        var lock = UI.assetsLibrary.getSprite("missionselector/worlds_icons_3");
        this.addChild(lock)
    }
    this.onadd = this.loadData
}
Utils.extend(ChapterIcon, Sprite);
ChapterIcon.prototype.loadData = function() {
    DataCache.load(LinksProcessor.get(TD.getAttr(this.world, "path")), Utils.proxy(this.displayStars, this))
};
ChapterIcon.prototype.displayStars = function(data) {
    var totalStars = 0,
    mission;
    for (var i = 0; i < data.mission.length; i++) {
        mission = data.mission[i];
        totalStars += TD.getValFromString(TD.getAttr(mission, "money_finish"), 0)
    }
    var gainedStars = 0,
    results = TD.gameData.levelResults[this.worldId];
    if (results) for (i = 0; i < results.length; i++) if (results[i]) gainedStars += results[i].stars;
    var stars = new UITextGold2(0, 75, "", true);
    stars.view.scale = .7;
    stars.update(gainedStars + "/" + totalStars + " \u00a9");
    this.addChild(stars);
    var buffer = document.createElement("canvas");
    buffer.width = this.width * Utils.globalScale;
    buffer.height = this.height * Utils.globalScale;
    buffer.ctx = buffer.getContext("2d");
    var x = this.x,
    y = this.y,
    parent = this.parent;
    this.parent = null;
    this.x = this.width / 2;
    this.y = this.height / 2;
    this.render(buffer);
    this.bitmap = buffer;
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.clear()
};
function LevelSelect(chapter) {
    Utils.callSuperConstructor(LevelSelect, this, null, 1, 1);
    if (typeof chapter == "undefined") chapter = LevelSelect.lastChapter;
    this.chapter = chapter;
    LevelSelect.lastChapter = chapter;
    this.world = null;
    var worlds = TD.configs.worlds.worlds.world,
    world;
    for (var i = 0; i < worlds.length; i++) {
        world = worlds[i];
        if (TD.getAttr(world, "world_number", true) == chapter) {
            this.world = world;
            break
        }
    }
    this.onadd = this.createChildren;
    this.startLevel = Utils.proxy(this.startLevel, this)
}
Utils.extend(LevelSelect, Sprite);
LevelSelect.lastChapter = 0;
LevelSelect.prototype.createChildren = function() {
    var back = UI.assetsLibrary.getSprite("missionselector/background_1");
    this.addChild(back);
    back.setStatic(true);
    var caption = new UITextGold2(0, -120, "", true);
    caption.view.scale = .7;
    caption.update(I18.f(TD.getAttr(this.world.title, "string")));
    this.addChild(caption);
    var b = new CommonButton("button_medium_square", "back");
    b.setPosition( - 220, 160);
    b.addEventListener("click", TD.showChapterSelect);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "shop");
    b.setPosition(220, 160);
    b.addEventListener("click", this.onShowShop);
    this.addChild(b);
    DataCache.load(LinksProcessor.get(TD.getAttr(this.world, "path")), Utils.proxy(this.showWorldUI, this));
    SoundsManager.play("music_menu", true)
};
LevelSelect.prototype.onShowShop = function() {
    var w = TD.showShop();
    w.closeCallback = TD.showLevelSelect
};
LevelSelect.prototype.showWorldUI = function(data) {
    var results = TD.gameData.levelResults[this.chapter];
    if (!results) results = [];
    var lastLevel = results.length,
    col = 0,
    row = 0,
    score = 0,
    gainedStars = 0,
    totalStars = 0,
    txt = null;
    for (var i = 0; i < data.mission.length; i++) {
        var b = new LevelButton(i + 1, lastLevel >= i, results[i]);
        b.setPosition(col * 70 - 180, row * 60 - 80);
        this.addChild(b);
        b.addEventListener("click", this.startLevel);
        col++;
        if (col >= 6) {
            col = 0;
            row++
        }
        if (results[i]) {
            score += results[i].score;
            gainedStars += results[i].stars
        }
        totalStars += TD.getValFromString(TD.getAttr(data.mission[i], "money_finish"), 0)
    }
    txt = new UITextGold2( - 80, 160, "", true);
    txt.view.scale = .6;
    txt.update(gainedStars + "/" + totalStars + " \u00a9");
    this.addChild(txt);
    txt = new UITextGold2(80, 160, "", true);
    txt.view.scale = .6;
    txt.update(I18.f("\u0421\u0427\u0415\u0422:") + score);
    this.addChild(txt)
};
LevelSelect.prototype.startLevel = function(e) {
    if (e.target.enabled) TD.startLevel(this.chapter, e.target.levelId)
};
function LevelButton(levelId, enabled, result) {
    var asset = UI.assetsLibrary.getAsset("missionselector/background_2");
    Utils.callSuperConstructor(LevelButton, this, asset.bitmap, asset.width, asset.height);
    this.levelId = levelId;
    this.enabled = enabled;
    if (this.enabled) {
        var txt = new UITextGold2(0, 0, "", true);
        txt.view.scale = .5;
        txt.update(this.levelId);
        this.addChild(txt);
        this.currentLayer = result ? result.award + 2 : 1
    } else this.currentLayer = 0;
    switch (this.currentLayer) {
    case 1:
        txt.x = -2.5;
        break;
    case 2:
        txt.x = -2.5;
        break;
    case 3:
        txt.x = -4;
        break;
    case 4:
        txt.x = -4.5;
        break
    }
    this.addEventListener("click", SoundsManager.click)
}
Utils.extend(LevelButton, Sprite);
function LevelWin() {
    var asset = UI.assetsLibrary.getSprite("dialogs/win");
    Utils.callSuperConstructor(LevelWin, this, asset.bitmap, asset.width, asset.height);
    this.onadd = this.createChildren;
    this.valsToAnimate = [];
    this.currentAnimatedVal = -1;
    this.animateVals = Utils.proxy(this.animateVals, this)
}
Utils.extend(LevelWin, Sprite);
LevelWin.prototype.createChildren = function() {
    var field = TD.gameField;
    var missionScore = field.stats.built + field.stats.killed + field.stats.spent + field.money;
    if (!TD.gameData.levelResults[TD.currentWorld]) TD.gameData.levelResults[TD.currentWorld] = [];
    var results = TD.gameData.levelResults[TD.currentWorld][TD.currentLevel - 1];
    if (!results) results = {
        award: -1,
        stars: 0,
        score: 0
    };
    var coef = TD.gameField.life / TD.gameField.startLife;
    var award = 0;
    if (coef >= 1) award = 2;
    else if (coef >= .45) award = 1;
    var stars = 0,
    addStars = 0;
    if (award > results.award) {
        stars = TD.getValFromString(TD.getAttr(field.mission, "money_finish"), 2 - award);
        addStars = stars - results.stars;
        results.stars += addStars;
        results.award = award;
        TD.gameData.stars += addStars
    }
    if (missionScore > results.score) results.score = missionScore;
    TD.gameData.levelResults[TD.currentWorld][TD.currentLevel - 1] = results;
    if (TD.currentLevel >= TD.LEVELS_ON_CHAPTER && TD.currentWorld < TD.WORLDS_COUNT - 1) TD.gameData.openedWorlds[TD.currentWorld + 1] = true;
    TD.save();
    var icon = new LevelButton(TD.currentLevel, true, {
        award: award
    });
    icon.setPosition( - 110, -30);
    icon.scaleX = icon.scaleY = 1.3;
    this.addChild(icon);
    var title = new UITextGold2(0, -107, I18.f("\u041f\u041e\u0411\u0415\u0414\u0410!"), true);
    this.addChild(title);
    this.addCaption( - 30, -81, I18.f("\u0423\u0411\u0418\u0422\u041e"));
    this.addValue(110, -81, field.stats.killed);
    this.addCaption( - 30, -66, I18.f("\u041f\u041e\u0421\u0422\u0420\u041e\u0415\u041d\u041e"));
    this.addValue(110, -66, field.stats.built);
    this.addCaption( - 30, -51, I18.f("\u041f\u041e\u0422\u0420\u0410\u0427\u0415\u041d\u041e"));
    this.addValue(110, -51, field.stats.spent);
    this.addCaption( - 30, -35, I18.f("\u0421\u042d\u041a\u041e\u041d\u041e\u041c\u041b\u0415\u041d\u041e"));
    this.addValue(110, -35, field.money);
    this.addCaption(140, -19, I18.f("\u0421\u0427\u0415\u0422:"), true);
    this.addCaption( - 30, -4, I18.f("\u041c\u0418\u0421\u0421\u0418\u042f"));
    this.addValue(110, -4, missionScore);
    this.addCaption( - 30, 11, I18.f("\u041c\u0418\u0420"));
    var worldResults = TD.gameData.levelResults[TD.currentWorld];
    var worldScore = 0;
    for (var i = 0; i < worldResults.length; i++) if (worldResults[i]) worldScore += worldResults[i].score;
    this.addValue(110, 11, worldScore);
    this.addCaption(140, 27, I18.f("\u041d\u0410\u0413\u0420\u0410\u0414\u0410:"), true);
    var txt = this.addValue(135, 47, addStars, "\u00a9");
    txt.view.scale = .8;
    txt.view.align = BitmapText.ALIGN_RIGHT;
    txt.update(stars);
    this.animateVals();
    var b = new CommonButton("button_medium_square", "restart");
    b.setPosition( - 50, 95);
    b.addEventListener("click", TD.restartLevel);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "main_menu");
    b.setPosition(10, 95);
    b.addEventListener("click", TD.showMainMenu);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "ch_mission");
    b.setPosition(70, 95);
    b.addEventListener("click", TD.showLevelSelectInCurrentChapter);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "next");
    b.setPosition(130, 95);
    b.addEventListener("click", Utils.proxy(this.next, this));
    this.addChild(b)
};
LevelWin.prototype.addCaption = function(x, y, text, alignRight) {
    var txt = new UITextGold2(x, y, "");
    txt.view.scale = .5;
    if (alignRight) txt.view.align = BitmapText.ALIGN_RIGHT;
    txt.update(text);
    this.addChild(txt)
};
LevelWin.prototype.addValue = function(x, y, val, textPrefix) {
    var txt = new UITextGold2(x, y, "", true);
    txt.view.scale = .5;
    txt.valToAnimate = val;
    if (textPrefix) txt.textPrefix = textPrefix;
    txt.update("0");
    this.addChild(txt);
    this.valsToAnimate.push(txt);
    return txt
};
LevelWin.prototype.animateVals = function() {
    this.currentAnimatedVal++;
    if (this.currentAnimatedVal == 6) SoundsManager.play("next_mission_final_effect");
    else SoundsManager.play("next_mission_count_effect");
    if (this.currentAnimatedVal >= this.valsToAnimate.length) return;
    var val = this.valsToAnimate[this.currentAnimatedVal];
    val.animatedNumericUpdate(val.valToAnimate, this.animateVals)
};
LevelWin.prototype.next = function() {
    var w = TD.showShop(true);
    w.closeCallback = TD.startNextLevel;
    w.addNextButton();
    this.destroy = true
};
function LevelLoose() {
    var asset = UI.assetsLibrary.getAsset("dialogs/loose");
    Utils.callSuperConstructor(LevelLoose, this, asset.bitmap, asset.width, asset.height);
    this.onShowShop = Utils.proxy(this.onShowShop, this);
    this.onadd = this.createChildren
}
Utils.extend(LevelLoose, Sprite);
LevelLoose.prototype.createChildren = function() {
    var icon = new LevelButton(TD.currentLevel, true, null);
    icon.setPosition(0, -10);
    icon.scaleX = icon.scaleY = 1.3;
    this.addChild(icon);
    var title = new UITextGold2(0, -75, I18.f("\u041f\u041e\u0420\u0410\u0416\u0415\u041d\u0418\u0415!"), true);
    this.addChild(title);
    var b = new CommonButton("button_medium_square", "restart");
    b.setPosition( - 85, 65);
    b.addEventListener("click", TD.restartLevel);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "main_menu");
    b.setPosition( - 25, 65);
    b.addEventListener("click", TD.showMainMenu);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "ch_mission");
    b.setPosition(35, 65);
    b.addEventListener("click", TD.showLevelSelectInCurrentChapter);
    this.addChild(b);
    b = new CommonButton("button_medium_square", "shop");
    b.setPosition(95, 65);
    b.addEventListener("click", this.onShowShop);
    this.addChild(b)
};
LevelLoose.prototype.onShowShop = function() {
    var w = TD.showShop();
    var self = this;
    this.visible = false;
    w.closeCallback = function() {
        TD.gameField.visible = true;
        self.visible = true;
        TD.stage.refreshBackground()
    }
};
function Notification(id) {
    var asset = UI.assetsLibrary.getAsset("dialogs/notification");
    Utils.callSuperConstructor(Notification, this, asset.bitmap, asset.width, asset.height);
    this.startMoveOut = Utils.proxy(this.startMoveOut, this);
    this.moveOut = Utils.proxy(this.moveOut, this);
    this.moveEnd = Utils.proxy(this.moveEnd, this);
    this.createChildren = Utils.proxy(this.createChildren, this);
    this.id = id;
    this.setPosition( - 1024, -1024);
    this.onadd = this.loadConfig
}
Utils.extend(Notification, Sprite);
Notification.prototype.loadConfig = function() {
    DataCache.load("data/game/notifications.json", this.createChildren)
};
Notification.prototype.createChildren = function(config) {
    this.setPosition(this.stage.screenWidth / 2, -25);
    if (typeof this.id == "number") for (var i = 0; i < config.achievements.a.length; i++) if (TD.getAttr(config.achievements.a[i], "id", true) == this.id) {
        this.id = TD.getAttr(config.achievements.a[i], "name");
        break
    }
    var data = null;
    for (var i = 0; i < config.items.item.length; i++) if (TD.getAttr(config.items.item[i], "name") == this.id) {
        data = config.items.item[i];
        break
    }
    if (data) {
        if (data.image) {
            var icon = UI.getSpriteByTexture(TD.getAttr(data.image, "texture"));
            icon.setPosition( - 90, 0);
            this.addChild(icon)
        }
        if (data.title) {
            var text = new UITextColor( - 70, -12, I18.f(TD.getAttr(data.title, "string")), UITextColor.defaultColor);
            text.setScale(.7);
            this.addChild(text)
        }
        if (data.message) {
            var text = new UITextColor( - 70, 0, I18.f(TD.getAttr(data.message, "string")), UITextColor.defaultColor);
            text.view.maxWidth = 340;
            this.addChild(text);
            text.setScale(.5)
        }
    }
    this.moveTo(this.x, 25, 500, null, this.startMoveOut)
};
Notification.prototype.startMoveOut = function() {
    this.stage.setTimeout(this.moveOut, 2E3)
};
Notification.prototype.moveOut = function() {
    this.moveTo(this.x, -25, 500, null, this.moveEnd)
};
Notification.prototype.moveEnd = function() {
    this.destroy = true
};
Notification.show = function(id) {
    var view = new Notification(id);
    TD.stage.addChild(view)
};
function Shop() {
    Utils.callSuperConstructor(Shop, this, null, 1, 1);
    this.config = null;
    this.pages = [];
    this.closeCallback = null;
    this.onTowerButtonClick = Utils.proxy(this.onTowerButtonClick, this);
    this.shopPanel = null;
    this.onadd = this.loadConfig;
    this.selectFrame = null
}
Utils.extend(Shop, Sprite);
Shop.prototype.loadConfig = function() {
    DataCache.load("data/shop/shop.json", Utils.proxy(this.configLoaded, this))
};
Shop.prototype.configLoaded = function(data) {
    this.config = data;
    this.createChildren()
};
Shop.prototype.createChildren = function() {
    var back = UI.getSpriteByTexture(TD.getAttr(this.config.background, "texture"));
    this.addChild(back);
    back.setStatic(true);
    this.selectFrame = UI.assetsLibrary.getSprite("shop/panel_towers_9");
    this.addChild(this.selectFrame);
    var closeBtn = UI.assetsLibrary.getSprite("common/buttons/button_close");
    closeBtn.setPosition(220, -139);
    closeBtn.onclick = Utils.proxy(this.close, this);
    this.addChild(closeBtn);
    this.pagesContainer = new Sprite(null, 1, 1);
    this.addChild(this.pagesContainer);
    var caption = new UITextGold2(0, -125, "", true);
    caption.view.scale = .75;
    caption.view.static = true;
    caption.update(I18.f("\u041c\u0410\u0413\u0410\u0417\u0418\u041d \u0423\u041b\u0423\u0427\u0428\u0415\u041d\u0418\u0419"));
    this.addChild(caption);
    this.shopPanel = new ShopPanel;
    this.shopPanel.setPosition(147, -2);
    this.addChild(this.shopPanel);
    for (var i = 0; i < 4; i++) this.addTowerPage(i);
    this.onTowerButtonClick({
        target: this.pages[0].buttons[0]
    })
};
Shop.prototype.addNextButton = function() {
    var b = new CommonButton("button_medium_square", "next");
    b.setPosition(200, 126);
    b.addEventListener("click", Utils.proxy(this.close, this));
    this.addChild(b)
};
Shop.prototype.close = function() {
    if (this.closeCallback) this.closeCallback();
    this.destroy = true;
    SoundsManager.click()
};
Shop.prototype.getPageConfig = function(id) {
    var ix = 0,
    page = null;
    for (var i in this.config.page_towers.pages) {
        if (ix == id) {
            page = this.config.page_towers.pages[i];
            break
        }
        ix++
    }
    return page
};
Shop.prototype.addTowerPage = function(id) {
    var view = new ShopTowersPanel(this.getPageConfig(id), id, this.onTowerButtonClick);
    this.addChild(view);
    this.pages[id] = view
};
Shop.prototype.hideAllPages = function() {
    for (var i = 0; i < this.pages.length; i++) this.pages[i].setVisible(false)
};
Shop.prototype.showPage = function(id) {
    if (this.pages[id].isVisible) return;
    this.hideAllPages();
    this.pages[id].setVisible(true)
};
Shop.prototype.onTowerButtonClick = function(e) {
    var b = e.target;
    this.showPage(b.towerId);
    this.shopPanel.update(b);
    var config = this.getPageConfig(b.towerId);
    this.shopPanel.updateAbilityIcons(config.tower_type.icon);
    var pos = b.getAbsolutePosition();
    pos.x -= this.x;
    pos.y -= this.y;
    this.selectFrame.setPosition(pos)
};
Shop.prototype.buy = function(towerId, level, subLevel, price) {
    if (price > TD.gameData.stars) return;
    UpgradesManager.open(towerId, level, subLevel);
    TD.gameData.stars -= price;
    TD.save();
    this.pages[towerId].update();
    this.shopPanel.refresh();
    AchievementsManager.event(AchievementsManager.EVENT_BUY_UP)
};
function ShopTowersPanel(config, id, buttonCallback) {
    Utils.callSuperConstructor(ShopTowersPanel, this, null, 1, 1);
    this.active = true;
    this.back = UI.getSpriteByTexture(TD.getAttr(config.background, "texture"));
    var pos = TD.parsePositionString(TD.getAttr(config.background, "position"));
    this.back.setPosition(pos.x - .5, pos.y - (id == 1 ? .5 : 0));
    TD.setHotSpot(this.back, TD.getAttr(config.background, "hotspot"));
    this.back.setStatic(true);
    this.addChild(this.back);
    this.buttons = [];
    var b, tConfig;
    ix = 0;
    for (i in config.towers) {
        tConfig = config.towers[i];
        b = new ShopTowerButton(tConfig, id, ix);
        this.addChild(b);
        this.buttons.push(b);
        b.onclick = buttonCallback;
        ix++
    }
    this.isVisible = false;
    this.update()
}
Utils.extend(ShopTowersPanel, Sprite);
ShopTowersPanel.prototype.setVisible = function(val) {
    val = !!val;
    this.isVisible = val;
    for (var i = 1; i < this.buttons.length; i++) this.buttons[i].visible = val;
    this.buttons[0].arrow.visible = val;
    this.back.visible = val;
    this.stage.refreshBackground()
};
ShopTowersPanel.prototype.update = function() {
    for (var i = 0; i < this.buttons.length; i++) this.buttons[i].update()
};
function ShopTowerButton(config, towerId, towerLevel) {
    this.config = config;
    this.towerId = towerId;
    this.towerLevel = towerLevel;
    Utils.callSuperConstructor(ShopTowerButton, this, null, 1, 1);
    var towerConfig = TowersHierarchy.get(towerId, towerLevel);
    var perk = TD.getPerk(towerConfig.iconName);
    this.icon = UI.getSpriteByTexture(TD.getAttr(perk.icon_shop, "texture"));
    this.addChild(this.icon);
    this.setPosition(TD.parsePositionString(TD.getAttr(this.config.button.out, "position")));
    this.arrow = null;
    if (config.arrow) {
        this.arrow = UI.getSpriteByTexture(TD.getAttr(config.arrow, "texture"));
        this.arrow.setPosition(0, 0);
        TD.setHotSpot(this.arrow, TD.getAttr(config.arrow, "hotspot"));
        this.addChild(this.arrow)
    }
    this.frame = new Sprite(null, 1, 1);
    this.addChild(this.frame);
    this.subLevelIcons = [];
    var icon;
    for (var i = 0; i < 3; i++) {
        icon = UI.getSpriteByTexture(TD.getAttr(perk.icon_rank_big, "texture"));
        icon.setPosition( - 14 + i * 10, 26);
        icon.setPropScale(.6);
        icon.currentLayer = i;
        this.addChild(icon);
        this.subLevelIcons.push(icon)
    }
    this.updateSublevels();
    this.setStatic(true);
    this.enabled = null;
    this.setEnabled(true);
    this.addEventListener("click", SoundsManager.click)
}
Utils.extend(ShopTowerButton, Sprite);
ShopTowerButton.prototype.showArrow = function(val) {
    if (this.arrow) this.arrow.visible = !!val;
    this.stage.refreshBackground()
};
ShopTowerButton.prototype.setEnabled = function(val) {
    if (this.enabled === !!val) return;
    this.enabled = !!val;
    var texture = TD.getAttr(this.config.button.out, "texture");
    texture = texture.split(".").shift();
    if (!this.enabled) texture += "_d";
    var asset = UI.assetsLibrary.getAsset(texture);
    this.frame.bitmap = asset.bitmap;
    this.frame.width = asset.width;
    this.frame.height = asset.height;
    this.width = asset.width;
    this.height = asset.height;
    this.setArrowEnabled(val);
    if (!this.enabled && this.icon.totalLayers > 1) this.icon.currentLayer = 1;
    else this.icon.currentLayer = 0
};
ShopTowerButton.prototype.setArrowEnabled = function(val) {
    if (this.arrow) {
        var texture = TD.getAttr(this.config.arrow, "texture");
        texture = texture.split(".").shift();
        if (!val) texture += "_d";
        asset = UI.assetsLibrary.getAsset(texture);
        this.arrow.bitmap = asset.bitmap;
        this.arrow.width = asset.width;
        this.arrow.height = asset.height
    }
};
ShopTowerButton.prototype.updateSublevels = function() {
    var subLevel = UpgradesManager.getSubLevel(this.towerId, this.towerLevel);
    for (var i = 0; i < 3; i++) this.subLevelIcons[i].visible = subLevel >= i
};
ShopTowerButton.prototype.update = function() {
    var enabled = UpgradesManager.check(this.towerId, this.towerLevel, 0);
    if (!enabled) {
        var config = TowersHierarchy.get(this.towerId, this.towerLevel);
        enabled = config.parent && UpgradesManager.check(this.towerId, config.parent.level, 2)
    }
    this.setEnabled(enabled);
    this.setArrowEnabled(UpgradesManager.check(this.towerId, this.towerLevel, 2));
    this.updateSublevels()
};
function ShopPanel() {
    Utils.callSuperConstructor(ShopPanel, this, null, 154, 190);
    this.abilityIcons = [];
    this.title = null;
    this.description = null;
    this.errorText = null;
    this.rankIcon = null;
    this.buyButton = null;
    this.stars = null;
    this.source = null;
    this.subLevel = -1;
    this.price = 0;
    this.onBuy = Utils.proxy(this.onBuy, this)
}
Utils.extend(ShopPanel, Sprite);
ShopPanel.prototype.update = function(source) {
    this.source = source;
    if (this.title) this.title.destroy = true;
    if (this.description) this.description.destroy = true;
    if (this.errorText) this.errorText.destroy = true;
    if (this.rankIcon) this.rankIcon.destroy = true;
    if (this.buyButton) this.buyButton.destroy = true;
    if (this.stars) this.stars.destroy = true;
    this.title = new UITextColor( - 75, -68, I18.f(TD.getAttr(this.source.config, "title")), UITextColor.defaultColor, false);
    this.title.setScale(.7);
    this.title.view.static = true;
    this.addChild(this.title);
    var subLevel = UpgradesManager.getSubLevel(this.source.towerId, this.source.towerLevel) + 1;
    if (subLevel > 2) subLevel = 2;
    var descrId = "description";
    if (subLevel == 1) descrId = "description_1";
    if (subLevel == 2) descrId = "description_2";
    this.subLevel = subLevel;
    this.description = new UITextColor( - 75, -50, I18.f(TD.getAttr(this.source.config, descrId)), UITextColor.defaultColor, false);
    this.description.view.maxWidth = 300;
    this.description.view.static = true;
    this.description.setScale(.5);
    this.addChild(this.description);
    this.stars = new UITextGold2(70, 86, "\u00a9" + TD.gameData.stars);
    this.addChild(this.stars);
    this.stars.view.align = BitmapText.ALIGN_RIGHT;
    this.stars.view.refresh();
    var towerConfig = TowersHierarchy.get(this.source.towerId, this.source.towerLevel);
    var perk = TD.getPerk(towerConfig.iconName);
    this.rankIcon = UI.getSpriteByTexture(TD.getAttr(perk.icon_rank_big, "texture"));
    this.rankIcon.currentLayer = subLevel;
    this.rankIcon.setStatic(true);
    this.rankIcon.setPosition( - 47, 45);
    this.addChild(this.rankIcon);
    var levelConfig = TowersHierarchy.get(this.source.towerId, this.source.towerLevel);
    var valid = !levelConfig.parent || UpgradesManager.getSubLevel(this.source.towerId, levelConfig.parent.level) >= 2;
    if (!valid) {
        this.errorText = new UITextColor( - 75, 10, I18.f("\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043a\u0443\u043f\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f"), "#ff5050", false);
        this.errorText.view.maxWidth = 300;
        this.errorText.view.static = true;
        this.errorText.setScale(.5);
        this.addChild(this.errorText)
    }
    if (UpgradesManager.getSubLevel(this.source.towerId, this.source.towerLevel) < 2) {
        var tConfig = TowersHierarchy.get(this.source.towerId, this.source.towerLevel);
        this.price = tConfig.priceShop[subLevel];
        this.buyButton = new TextButton("button_shop_small", "\u00a9" + this.price);
        this.buyButton.setPosition(29, 45);
        this.addChild(this.buyButton);
        this.buyButton.setStatic(true);
        this.buyButton.onclick = this.onBuy;
        if (TD.gameData.stars < this.price) this.buyButton.enabled = false;
        else this.buyButton.enabled = valid;
        this.buyButton.opacity = this.buyButton.enabled ? 1 : .5;
        Hint.show(Hint.SHOP_HINT, this.buyButton)
    }
    this.stage.refreshBackground()
};
ShopPanel.prototype.updateAbilityIcons = function(list) {
    if (!Utils.isArray(list)) list = [list];
    for (var i = 0; i < this.abilityIcons.length; i++) this.abilityIcons[i].destroy = true;
    this.abilityIcons = [];
    for (i = 0; i < list.length; i++) {
        var icon = UI.getSpriteByTexture(TD.getAttr(list[i], "texture"));
        icon.setPosition( - 65 + i * 18, -85);
        this.addChild(icon);
        icon.setStatic(true);
        this.abilityIcons.push(icon)
    }
    this.stage.refreshBackground()
};
ShopPanel.prototype.refresh = function() {
    this.update(this.source)
};
ShopPanel.prototype.onBuy = function() {
    if (this.price > TD.gameData.stars || !this.buyButton.enabled) return;
    this.parent.buy(this.source.towerId, this.source.towerLevel, this.subLevel, this.price)
};
function Achievements() {
    Utils.callSuperConstructor(Achievements, this, null, 1, 1);
    this.createChildren = Utils.proxy(this.createChildren, this);
    this.update = Utils.proxy(this.update, this);
    this.itemsView = null;
    this.scrollBar = null;
    this.onadd = this.loadConfig
}
Utils.extend(Achievements, Sprite);
Achievements.prototype.loadConfig = function() {
    DataCache.load("data/game/notifications.json", this.createChildren)
};
Achievements.prototype.getConfigById = function(config, id) {
    for (var i = 0; i < config.achievements.a.length; i++) if (TD.getAttr(config.achievements.a[i], "id", true) == id) {
        id = TD.getAttr(config.achievements.a[i], "name");
        break
    }
    for (var i = 0; i < config.items.item.length; i++) if (TD.getAttr(config.items.item[i], "name") == id) return config.items.item[i]
};
Achievements.prototype.createChildren = function(config) {
    var shader = new Sprite(null, this.stage.screenWidth, this.stage.screenHeight);
    shader.fillColor = "rgba(0,0,0,0.7)";
    UI.preventAllEvents(shader);
    this.addChild(shader);
    this.addChild(UI.assetsLibrary.getSprite("dialogs/achives"));
    var closeBtn = UI.assetsLibrary.getSprite("common/buttons/button_close");
    closeBtn.setPosition(180, -100);
    closeBtn.onclick = Utils.proxy(this.close, this);
    this.addChild(closeBtn);
    var text = new UITextGold2(0, -92, I18.f("\u041d\u0410\u0413\u0420\u0410\u0414\u042b"), true);
    this.addChild(text);
    var holder = new Sprite(null, 1, 1);
    var item;
    for (var i = 0; i < AchievementsManager.ALL_ACHIEVEMENTS.length; i++) {
        item = new AchievementItem(this.getConfigById(config, AchievementsManager.ALL_ACHIEVEMENTS[i]), AchievementsManager.check(AchievementsManager.ALL_ACHIEVEMENTS[i]));
        item.setPosition(175, i * item.height + 15);
        holder.addChild(item)
    }
    stage.addChild(holder);
    var width = item.width,
    height = AchievementsManager.ALL_ACHIEVEMENTS.length * item.height;
    this.itemsView = new Sprite(holder.cacheAsBitmap(), width, height);
    this.itemsView.setPosition(0, 10);
    this.itemsView._height = height;
    this.addChild(this.itemsView);
    this.scrollBar = new ScrollBar(0, height);
    this.scrollBar.setPosition(160, 12);
    this.scrollBar.onchange = this.update;
    this.addChild(this.scrollBar);
    shader.onmouseup = this.scrollBar.endScroll;
    this.update();
    holder.destroy = true
};
Achievements.prototype.update = function() {
    var y = (this.itemsView._height - 168) * this.scrollBar.pos;
    this.itemsView.height = 168;
    this.itemsView.offset.top = y
};
Achievements.prototype.close = function() {
    this.destroy = true;
    this.stage.refreshBackground();
    SoundsManager.click()
};
function AchievementItem(config, completed) {
    Utils.callSuperConstructor(AchievementItem, this, null, 350, 34);
    if (config) {
        if (config.image) {
            var icon = UI.getSpriteByTexture(TD.getAttr(config.image, "texture"));
            icon.setPosition( - 160, 0);
            this.addChild(icon)
        }
        if (config.title) {
            var text = new UITextColor( - 140, -8, I18.f(TD.getAttr(config.title, "string")), completed ? UITextColor.defaultColor: "#aaa");
            text.setScale(.7);
            this.addChild(text)
        }
        if (config.message) {
            var text = new UITextColor( - 140, 3, I18.f(TD.getAttr(config.message, "string")), completed ? UITextColor.defaultColor: "#aaa");
            this.addChild(text);
            text.view.maxWidth = 600;
            text.view.lineSpacing = -8;
            text.setScale(.5)
        }
    }
    if (!completed) this.opacity = .6
}
Utils.extend(AchievementItem, Sprite);
function Options() {
    Utils.callSuperConstructor(Options, this, null, 1, 1);
    this.onadd = this.createChildren
}
Utils.extend(Options, Sprite);
Options.prototype.createChildren = function() {
    var shader = new Sprite(null, this.stage.screenWidth, this.stage.screenHeight);
    shader.fillColor = "rgba(0,0,0,0.7)";
    UI.preventAllEvents(shader);
    this.addChild(shader);
    this.addChild(UI.assetsLibrary.getSprite("dialogs/options"));
    var closeBtn = UI.assetsLibrary.getSprite("common/buttons/button_close");
    closeBtn.setPosition(162, -78);
    closeBtn.addEventListener("click", Utils.proxy(this.close, this));
    this.addChild(closeBtn);
    var text = new UITextGold2( - 120, -34, I18.f("\u041c\u0443\u0437\u044b\u043a\u0430:"));
    this.addChild(text);
    var cb = new CheckBox(!TD.gameData.musicDisabled);
    cb.setPosition(100, -34);
    cb.onchange = Utils.proxy(this.toggleMusic, this);
    this.addChild(cb);
    text = new UITextGold2( - 120, 10, I18.f("\u0417\u0432\u0443\u043a\u0438:"));
    this.addChild(text);
    cb = new CheckBox(!TD.gameData.soundsDisabled);
    cb.setPosition(100, 10);
    cb.onchange = Utils.proxy(this.toggleSounds, this);
    this.addChild(cb);
    var b = new TextButton("button_medium_long", I18.f("\u0418\u0433\u0440\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430"));
    b.textView.setScale(.8);
    b.textView.y = -2;
    b.setPosition(0, 67);
    b.onclick = Utils.proxy(this.onNewGame, this);
    this.addChild(b)
};
Options.prototype.close = function() {
    this.destroy = true;
    SoundsManager.click()
};
Options.prototype.toggleMusic = function(e) {
    TD.gameData.musicDisabled = !e.target.checked;
    TD.save();
    if (TD.gameData.musicDisabled) SoundsManager.pauseMusic();
    else if (!TD.gameField) SoundsManager.resumeMusic()
};
Options.prototype.toggleSounds = function(e) {
    TD.gameData.soundsDisabled = !e.target.checked;
    TD.save()
};
Options.prototype.onNewGame = function() {
    var w = new NewGame;
    this.stage.addChild(w)
};
function LevelBanner(back, text, callback) {
    var asset = UI.assetsLibrary.getAsset("game/infobar/" + back);
    Utils.callSuperConstructor(LevelBanner, this, asset.bitmap, asset.width, asset.height);
    var textView = new UITextGold(0, 3, text, true);
    textView.view.valign = BitmapText.VALIGN_MIDDLE;
    textView.view.lineSpacing = -8;
    textView.setScale(.8);
    this.addChild(textView);
    this.callback = callback;
    this.opacity = 0;
    this.onadd = Utils.proxy(this.startAnimation, this)
}
Utils.extend(LevelBanner, Sprite);
LevelBanner.prototype.startAnimation = function() {
    this.fadeTo(1, 1E3, null, Utils.proxy(this.wait, this))
};
LevelBanner.prototype.wait = function() {
    this.stage.setTimeout(Utils.proxy(this.hide, this), 1E3)
};
LevelBanner.prototype.hide = function() {
    this.fadeTo(0, 1E3, null, Utils.proxy(this.endAnimation, this))
};
LevelBanner.prototype.endAnimation = function() {
    if (this.callback) this.callback();
    this.destroy = true
};
function InGameMenu() {
    Utils.callSuperConstructor(InGameMenu, this, null, 1, 1);
    this.onadd = this.createChildren
}
Utils.extend(InGameMenu, Sprite);
InGameMenu.prototype.createChildren = function() {
    var shader = new Sprite(null, this.stage.screenWidth, this.stage.screenHeight);
    shader.fillColor = "rgba(0,0,0,0.7)";
    UI.preventAllEvents(shader);
    this.addChild(shader);
    this.addChild(UI.assetsLibrary.getSprite("dialogs/ingame"));
    var closeBtn = UI.assetsLibrary.getSprite("common/buttons/button_close");
    closeBtn.setPosition(166, -44);
    closeBtn.addEventListener("click", Utils.proxy(this.close, this));
    this.addChild(closeBtn);
    b = new CommonButton("button_medium_square", "main_menu");
    b.setPosition( - 117, 20);
    b.addEventListener("click", Utils.proxy(this.onExit, this));
    this.addChild(b);
    var b = new CommonButton("button_medium_square", "restart");
    b.setPosition( - 57, 20);
    b.addEventListener("click", Utils.proxy(this.onRestartLevel, this));
    this.addChild(b);
    b = new CommonButton("button_medium_square", "ch_mission");
    b.setPosition(3, 20);
    b.addEventListener("click", Utils.proxy(this.onLevelSelect, this));
    this.addChild(b);
    b = new CommonButton("button_medium_square", "options");
    b.setPosition(63, 20);
    b.onclick = TD.showOptions;
    this.addChild(b);
    b = new CommonButton("button_medium_square", "shop");
    b.setPosition(123, 20);
    b.onclick = Utils.proxy(this.onShowShop, this);
    this.addChild(b)
};
InGameMenu.prototype.onExit = function() {
    Alert.create(I18.f("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b,/n\u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u0438\u0433\u0440\u0443?"), this.processExit, true)
};
InGameMenu.prototype.processExit = function(res) {
    if (res) TD.showMainMenu()
};
InGameMenu.prototype.onRestartLevel = function() {
    Alert.create(I18.f("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b,\u0447\u0442\u043e/n\u0445\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u043c\u0438\u0441\u0441\u0438\u044e \u0437\u0430\u043d\u043e\u0432\u043e?"), this.processRestartLevel, true)
};
InGameMenu.prototype.processRestartLevel = function(res) {
    if (res) TD.restartLevel()
};
InGameMenu.prototype.onLevelSelect = function() {
    Alert.create(I18.f("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b,/n\u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043a\u0438\u043d\u0443\u0442\u044c \u0438\u0433\u0440\u0443?"), this.processLevelSelect, true)
};
InGameMenu.prototype.processLevelSelect = function(res) {
    if (res) TD.showLevelSelectInCurrentChapter()
};
InGameMenu.prototype.close = function() {
    this.destroy = true;
    SoundsManager.click()
};
InGameMenu.prototype.onShowShop = function() {
    var w = TD.showShop();
    var self = this;
    this.visible = false;
    w.closeCallback = function() {
        TD.gameField.visible = true;
        self.visible = true;
        TD.stage.refreshBackground()
    }
};
function NewGame() {
    Utils.callSuperConstructor(NewGame, this, null, 1, 1);
    this.onadd = this.createChildren;
    this.checkBoxEasy = null;
    this.checkBoxHard = null;
    this.changeComplexity = Utils.proxy(this.changeComplexity, this);
    this.complexity = TD.gameData.complexity
}
Utils.extend(NewGame, Sprite);
NewGame.prototype.createChildren = function() {
    this.setRelativePosition(0, 0);
    var shader = new Sprite(null, this.stage.screenWidth, this.stage.screenHeight);
    shader.fillColor = "rgba(0,0,0,0.7)";
    UI.preventAllEvents(shader);
    this.addChild(shader);
    var back = UI.assetsLibrary.getSprite("dialogs/new_game");
    this.addChild(back);
    var txt = new UITextColor(0, -52, I18.f("\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e? \u0412\u0435\u0441\u044c \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u0442\u0435\u0440\u044f\u043d."), UITextColor.defaultColor, true);
    txt.view.maxWidth = 280;
    txt.view.valign = BitmapText.VALIGN_MIDDLE;
    txt.setScale(.7);
    this.addChild(txt);
    txt = new UITextColor(0, -20, I18.f("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043c \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438"), UITextColor.defaultColor, true);
    txt.view.maxWidth = 280;
    txt.setScale(.7);
    this.addChild(txt);
    txt = new UITextColor( - 10, 5, I18.f("\u041b\u0435\u0433\u043a\u0438\u0439"), UITextColor.defaultColor);
    txt.view.align = BitmapText.ALIGN_RIGHT;
    txt.setScale(.7);
    this.addChild(txt);
    txt = new UITextColor( - 10, 35, I18.f("\u0421\u043b\u043e\u0436\u043d\u044b\u0439"), UITextColor.defaultColor);
    txt.view.align = BitmapText.ALIGN_RIGHT;
    txt.setScale(.7);
    this.addChild(txt);
    var cb = new CheckBox(this.complexity == 0);
    cb.setPosition(30, 5);
    cb.addEventListener("click", this.changeComplexity);
    this.addChild(cb);
    this.checkBoxEasy = cb;
    var cb = new CheckBox(this.complexity == 1);
    cb.setPosition(30, 35);
    cb.addEventListener("click", this.changeComplexity);
    this.addChild(cb);
    this.checkBoxHard = cb;
    var yesButton = new CommonButton("button_confirm_no", "ico_yes_red");
    yesButton.setPosition(80, 75);
    yesButton.onclick = Utils.proxy(this.onYesClick, this);
    this.addChild(yesButton);
    var noButton = new CommonButton("button_confirm_no", "ico_no");
    noButton.setPosition( - 80, 75);
    noButton.onclick = Utils.proxy(this.onNoClick, this);
    this.addChild(noButton)
};
NewGame.prototype.onYesClick = function() {
    this.destroy = true;
    TD.gameData = TD.getDefaultGameData(this.complexity);
    TD.save();
    TD.showMainMenu()
};
NewGame.prototype.onNoClick = function() {
    this.destroy = true
};
NewGame.prototype.changeComplexity = function(e) {
    if (e.target == this.checkBoxEasy) {
        this.checkBoxEasy.setChecked(true);
        this.checkBoxHard.setChecked(false);
        this.complexity = 0
    }
    if (e.target == this.checkBoxHard) {
        this.checkBoxEasy.setChecked(false);
        this.checkBoxHard.setChecked(true);
        this.complexity = 1
    }
};
function Hint(text) {
    Utils.callSuperConstructor(Hint, this, null, 1, 1);
    this.hintId = 0;
    this.text = text;
    this.back = null;
    this.arrow = null;
    this.towerView = null;
    this.towerViewFromX = 0;
    this.towerViewFromY = 0;
    this.towerViewToX = 0;
    this.towerViewToY = 0;
    this.playTowerAnimation = Utils.proxy(this.playTowerAnimation, this);
    this.replayTowerAnimation = Utils.proxy(this.replayTowerAnimation, this);
    this.onadd = this.createChildren
}
Utils.extend(Hint, Sprite);
Hint.SHOP_HINT = 2;
Hint.UPGRADE_HINT = 3;
Hint.REPAIR_HINT = 4;
Hint.SAVE_HINT = 5;
Hint.BUILD_HINT = 10;
Hint.prototype.createChildren = function() {
    this.setRelativePosition(0, 0);
    var shader = new Sprite(null, this.stage.screenWidth, this.stage.screenHeight);
    shader.onmousedown = Utils.proxy(this.close, this);
    this.addChild(shader);
    if (this.text) {
        this.back = UI.assetsLibrary.getSprite("dialogs/tooltip");
        this.addChild(this.back);
        var text = new UITextColor(2, 5, this.text, "#b00e06", true);
        text.view.valign = BitmapText.VALIGN_MIDDLE;
        text.view.maxWidth = 310;
        text.setScale(.6);
        this.back.addChild(text);
        this.arrow = UI.assetsLibrary.getSprite("common/hint_arrow");
        this.arrow.setPosition(0, -38);
        this.back.addChild(this.arrow)
    }
};
Hint.prototype.setBackPosition = function(x, y) {
    if (!this.back) return;
    this.back.setPosition(x, y)
};
Hint.prototype.setArrowPosition = function(x, yPos) {
    if (!this.back) return;
    this.arrow.x = x;
    if (yPos == "top") {
        this.arrow.scaleY = 1;
        this.arrow.y = -38
    } else {
        this.arrow.scaleY = -1;
        this.arrow.y = 38
    }
};
Hint.prototype.addTowerAnimation = function(fromX, fromY, toX, toY) {
    this.towerView = UI.assetsLibrary.getSprite("common/tower_hint");
    this.addChild(this.towerView);
    this.towerViewFromX = fromX;
    this.towerViewFromY = fromY;
    this.towerViewToX = toX;
    this.towerViewToY = toY;
    this.playTowerAnimation()
};
Hint.prototype.playTowerAnimation = function() {
    this.towerView.setPosition(this.towerViewFromX, this.towerViewFromY);
    this.towerView.moveTo(this.towerViewToX, this.towerViewToY, 1E3, null, this.replayTowerAnimation)
};
Hint.prototype.replayTowerAnimation = function() {
    if (this.stage) this.stage.setTimeout(this.playTowerAnimation, 500)
};
Hint.prototype.close = function() {
    this.destroy = true
};
Hint.show = function(id, obj, arrowPos) {
    if (TD.gameData.viewedHints[id]) return;
    DataCache.load("data/game/tooltip.json",
    function(data) {
        var config = data.tips.tip[id];
        var text = config ? I18.f(TD.getAttr(config, "text")) : "";
        var hint = new Hint(text);
        hint.hintId = id;
        TD.stage.addChild(hint);
        var p = {};
        if (obj) {
            p = obj.getAbsoluteCenter();
            p.x -= this.stage.screenWidth / 2;
            p.y -= this.stage.screenHeight / 2 - 6
        }
        if (id == Hint.REPAIR_HINT || id == Hint.UPGRADE_HINT) {
            hint.setBackPosition(p.x, p.y - 60);
            hint.setArrowPosition(0, "bottom")
        }
        if (id == Hint.SHOP_HINT) {
            hint.setBackPosition(p.x - 40, p.y - 70);
            hint.setArrowPosition(40, "bottom")
        }
        if (id == Hint.SAVE_HINT) {
            hint.addTowerAnimation(p.x, p.y, -222, 172);
            hint.setBackPosition( - 150, 110);
            hint.setArrowPosition( - 70, "bottom")
        }
        if (id == Hint.BUILD_HINT) hint.addTowerAnimation(225, 172, 30, -42)
    });
    TD.gameData.viewedHints[id] = 1;
    TD.save()
};
function Comics() {
    var asset = UI.assetsLibrary.getSprite("comics/back");
    Utils.callSuperConstructor(Comics, this, asset.bitmap, asset.width, asset.height);
    var anim = UI.assetsLibrary.getSprite("comics/anim");
    anim.setPosition(98, -18);
    anim.rotation = -.18;
    anim.play();
    anim.changeFrameDelay = 500;
    this.addChild(anim);
    this.onclick = TD.showChapterSelect;
    this.onadd = Utils.proxy(this.startAnimation, this)
}
Utils.extend(Comics, Sprite);
Comics.prototype.startAnimation = function() {
    this.stage.setTimeout(Utils.proxy(this.fadeComics, this), 1E3)
};
Comics.prototype.fadeComics = function() {
    this.fadeTo(0, 1E3, null, TD.showChapterSelect)
};
function LevelPreloader() {
    Utils.callSuperConstructor(LevelPreloader, this, null, 1, 1);
    this.showProgress = Utils.proxy(this.showProgress, this);
    this.onadd = this.createChildren
}
Utils.extend(LevelPreloader, Sprite);
LevelPreloader.prototype.createChildren = function() {
    var back = UI.assetsLibrary.getSprite("mainmenu/background_0");
    this.addChild(back);
    back.setStatic(true);
    var logo = UI.assetsLibrary.getSprite("mainmenu/logo_btns_0");
    logo.setPosition(0, -20);
    this.addChild(logo);
    logo.setStatic(true);
    var logoText = UI.assetsLibrary.getSprite("mainmenu/logo_text");
    logoText.setPosition(0, 10);
    this.addChild(logoText);
    logoText.setStatic(true);
    var color = "#fee57c";
    var frame = new Graphics.rectangle(0, 130, 300, 20);
    frame.color = color;
    this.addChild(frame);
    this.bar = new Graphics.rectangle(0, 130, 0, 16);
    this.bar.color = color;
    this.bar.fillColor = color;
    this.addChild(this.bar);
    this.setRelativePosition(0, 0);
    this.showProgress(0)
};
LevelPreloader.prototype.showProgress = function(val) {
    if (val < 0) val = 0;
    if (val > 100) val = 100;
    this.bar.width = 296 * (val / 100);
    this.bar.x = -148 + this.bar.width / 2
};
function GunFire() {
    var asset = UI.assetsLibrary.getAsset("game/enemies/animation/fire_shot");
    Utils.callSuperConstructor(GunFire, this, asset.bitmap, asset.width, asset.height, asset.frames, asset.layers);
    this.setPropScale(.5);
    this.onenterframe = GunFire.controlAnimation
}
Utils.extend(GunFire, Sprite);
GunFire.controlAnimation = function(e) {
    if (e.target.currentFrame == 4) e.target.destroy = true
};
function UIText(x, y, text, alignCenter, font, charMap) {
    Utils.callSuperConstructor(UIText, this, null, 1, 1);
    this.view = new BitmapText(font, charMap);
    this.view.parent = this;
    this.setPosition(x, y);
    if (alignCenter) this.view.align = BitmapText.ALIGN_CENTER;
    this.textTo = "";
    this.animateTween = null;
    this.onAnimateFinish = null;
    this.maxWidth = 0;
    this.verticalAlignMiddle = true;
    this.skin = "default";
    this.textPrefix = "";
    this.text = "";
    this.update(text)
}
Utils.extend(UIText, Sprite);
UIText.prototype.update = function(text) {
    if (this.text === text) return;
    this.text = text;
    this.view.write(this.textPrefix + text)
};
UIText.prototype.setScale = function(val) {
    this.view.scale = val;
    this.view.refresh()
};
UIText.prototype.animatedNumericUpdate = function(val, finishCallback) {
    if (this.text === val || this.textTo === val) return;
    var diff = Math.abs(val * 1 - this.text * 1);
    if (this.animateTween) {
        this.animateTween.pause();
        this.animateTween.destroy = true;
        if (this.onAnimateFinish) this.onAnimateFinish();
        this.text = this.textTo
    }
    this.textTo = val;
    this.onAnimateFinish = finishCallback;
    this.animateTween = this.stage.createTween(this, "text", this.text * 1, val * 1, diff * 2, null);
    this.animateTween.onchange = this.updateOnTween;
    this.animateTween.onfinish = this.updateOnTweenFinish;
    this.animateTween.play()
};
UIText.prototype.updateOnTween = function(e) {
    e.target.obj.text = Math.floor(e.target.obj.text);
    e.target.obj.view.write(e.target.obj.textPrefix + e.target.obj.text)
};
UIText.prototype.updateOnTweenFinish = function(e) {
    e.target.obj.updateOnTween(e);
    if (e.target.obj.onAnimateFinish) e.target.obj.onAnimateFinish()
};
UIText.prototype.setStatic = function(val) {
    Utils.callSuperMethod(UIText, this, "setStatic", val);
    this.view.static = val
};
UIText.prototype.setSkin = function(val) {};
UIText.prototype.cacheAsBitmap = function() {
    var box = {
        left: Number.MAX_VALUE,
        top: Number.MAX_VALUE,
        right: Number.MIN_VALUE,
        bottom: Number.MIN_VALUE
    }
};
function UITextNumbers(x, y, text, alignCenter) {
    Utils.callSuperConstructor(UITextNumbers, this, x, y, text, alignCenter, UI.assetsLibrary.getBitmap("fonts/number_font"), UI.fonts.number_font)
}
Utils.extend(UITextNumbers, UIText);
function UITextNumbersSmall(x, y, text, alignCenter) {
    Utils.callSuperConstructor(UITextNumbersSmall, this, x, y, text, alignCenter, UI.assetsLibrary.getBitmap("fonts/number_font_small"), UI.fonts.number_font_small)
}
Utils.extend(UITextNumbersSmall, UIText);
function UITextSmall(x, y, text, alignCenter) {
    Utils.callSuperConstructor(UITextSmall, this, x, y, text, alignCenter, UI.assetsLibrary.getBitmap("fonts/font_shilda1"), UI.fonts.font_shilda1)
}
Utils.extend(UITextSmall, UIText);
UITextSmall.prototype.setSkin = function(val) {
    var bmpName = "fonts/font_shilda1";
    if (val == "disabled") bmpName = "fonts/font_shilda1_disabled";
    var bmp = UI.assetsLibrary.getBitmap(bmpName);
    this.view.font = [bmp];
    this.view.write(this.text)
};
function UITextSmallBlack(x, y, text, alignCenter) {
    Utils.callSuperConstructor(UITextSmallBlack, this, x, y, text, alignCenter, UI.assetsLibrary.getBitmap("fonts/font_shilda"), UI.fonts.font_shilda)
}
Utils.extend(UITextSmallBlack, UIText);
function UITextGold(x, y, text, alignCenter) {
    Utils.callSuperConstructor(UITextGold, this, x, y, text, alignCenter, UI.assetsLibrary.getBitmap("fonts/soldier_font3"), UI.fonts.soldier_font3)
}
Utils.extend(UITextGold, UIText);
function UITextGold2(x, y, text, alignCenter) {
    Utils.callSuperConstructor(UITextGold2, this, x, y, text, alignCenter, UI.assetsLibrary.getBitmap("fonts/soldier_font4"), UI.fonts.soldier_font4)
}
Utils.extend(UITextGold2, UIText);
function UITextColor(x, y, text, color, alignCenter) {
    Utils.callSuperConstructor(UITextColor, this, x, y, text, alignCenter, UITextColor.getBitmap(color), UI.fonts.soldier_font5);
    this.view.lineSpacing = -4;
    this.view.refresh()
}
Utils.extend(UITextColor, UIText);
UITextColor.defaultColor = "#eecd6e";
UITextColor.bitmapsCahce = {};
UITextColor.getBitmap = function(color) {
    if (UITextColor.bitmapsCahce[color]) return UITextColor.bitmapsCahce[color];
    var bitmap = UI.assetsLibrary.getBitmap("fonts/soldier_font5");
    var canvas = document.createElement("canvas");
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(bitmap, 0, 0);
    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, bitmap.width, bitmap.height);
    ctx.globalCompositeOperation = "source-over";
    bitmap = UI.assetsLibrary.getBitmap("fonts/soldier_font5_rect");
    ctx.drawImage(bitmap, 0, 0);
    UITextColor.bitmapsCahce[color] = canvas;
    return canvas
};
function UITextRed(x, y, text, alignCenter) {
    Utils.callSuperConstructor(UITextRed, this, x, y, text, alignCenter, UI.assetsLibrary.getBitmap("fonts/soldier_font1"), UI.fonts.soldier_font1)
}
Utils.extend(UITextRed, UIText);
UI.fonts.font_shilda = [{
    "id": 37,
    "x": 0,
    "y": 0,
    "width": 18,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 48,
    "x": 18.5,
    "y": 0,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 49,
    "x": 33.5,
    "y": 0,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 50,
    "x": 48.5,
    "y": 0,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 51,
    "x": 0,
    "y": 15,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 52,
    "x": 15,
    "y": 15,
    "width": 15,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 53,
    "x": 30.5,
    "y": 15,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 54,
    "x": 45.5,
    "y": 15,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 55,
    "x": 0,
    "y": 30,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 56,
    "x": 15,
    "y": 30,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 57,
    "x": 30,
    "y": 30,
    "width": 14.5,
    "height": 14.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
}];
UI.fonts.font_shilda1 = [{
    "id": 37,
    "x": 0,
    "y": 0,
    "width": 13.5,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 48,
    "x": 14,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 49,
    "x": 24.5,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 50,
    "x": 35,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 51,
    "x": 45.5,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 52,
    "x": 0,
    "y": 13.5,
    "width": 10.5,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 53,
    "x": 11,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 54,
    "x": 21.5,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 55,
    "x": 32,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 56,
    "x": 42.5,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 57,
    "x": 53,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
}];
UI.fonts.font_shilda1_disabled = [{
    "id": 37,
    "x": 0,
    "y": 0,
    "width": 13.5,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 48,
    "x": 14,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 49,
    "x": 24.5,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 50,
    "x": 35,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 51,
    "x": 45.5,
    "y": 0,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 52,
    "x": 0,
    "y": 13.5,
    "width": 10.5,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 53,
    "x": 11,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 54,
    "x": 21.5,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 55,
    "x": 32,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 56,
    "x": 42.5,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 57,
    "x": 53,
    "y": 13.5,
    "width": 10,
    "height": 13,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
}];
UI.fonts.number_font = [{
    "id": 43,
    "x": 153.5,
    "y": 56.5,
    "width": 34,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 27.5
},
{
    "id": 45,
    "x": 188,
    "y": 56.5,
    "width": 26.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 47,
    "x": 215,
    "y": 56.5,
    "width": 26.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 48,
    "x": 0,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 49,
    "x": 34.5,
    "y": 113,
    "width": 26,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 50,
    "x": 32,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 51,
    "x": 64,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 52,
    "x": 96,
    "y": 0,
    "width": 32.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 26
},
{
    "id": 53,
    "x": 129,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 54,
    "x": 161,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 55,
    "x": 193,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 56,
    "x": 0,
    "y": 56.5,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 57,
    "x": 32,
    "y": 56.5,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 61,
    "x": 0,
    "y": 113,
    "width": 34,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 27.5
},
{
    "id": 64,
    "x": 64,
    "y": 56.5,
    "width": 46,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 37
},
{
    "id": 95,
    "x": 110.5,
    "y": 56.5,
    "width": 42.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 34
}];
UI.fonts.number_font_small = [{
    "id": 43,
    "x": 153.5,
    "y": 56.5,
    "width": 34,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 27.5
},
{
    "id": 45,
    "x": 188,
    "y": 56.5,
    "width": 26.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 47,
    "x": 215,
    "y": 56.5,
    "width": 26.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 48,
    "x": 0,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 49,
    "x": 34.5,
    "y": 113,
    "width": 26,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 50,
    "x": 32,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 51,
    "x": 64,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 52,
    "x": 96,
    "y": 0,
    "width": 32.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 26
},
{
    "id": 53,
    "x": 129,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 54,
    "x": 161,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 55,
    "x": 193,
    "y": 0,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 56,
    "x": 0,
    "y": 56.5,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 57,
    "x": 32,
    "y": 56.5,
    "width": 31.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 61,
    "x": 0,
    "y": 113,
    "width": 34,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 27.5
},
{
    "id": 64,
    "x": 64,
    "y": 56.5,
    "width": 46,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 37
},
{
    "id": 95,
    "x": 110.5,
    "y": 56.5,
    "width": 42.5,
    "height": 56,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 34
}]; (function() {
    var font = UI.fonts.number_font_small;
    var chr;
    for (var i in font) {
        chr = font[i];
        chr.x /= 2;
        chr.y /= 2;
        chr.width /= 2;
        chr.height /= 2;
        chr.xoffset /= 2;
        chr.yoffset /= 2;
        chr.xadvance /= 2
    }
})();
UI.fonts.soldier_font1 = [
//����
{
    "id": 25034,
    "x": 10,
    "y": 260,
    "width": 60,
    "height": 30,
    "xoffset": -25,
    "yoffset": 5,
    "page": 0,
    "xadvance": 0
},
{
    "id": 32,
    "x": 241,
    "y": 150,
    "width": 7.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 33,
    "x": 249,
    "y": 150,
    "width": 9.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 34,
    "x": 259,
    "y": 150,
    "width": 9,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 35,
    "x": 268.5,
    "y": 150,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 36,
    "x": 282.5,
    "y": 150,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 37,
    "x": 296.5,
    "y": 150,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 38,
    "x": 316,
    "y": 150,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 39,
    "x": 335.5,
    "y": 150,
    "width": 6.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6
},
{
    "id": 40,
    "x": 342.5,
    "y": 150,
    "width": 8,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 41,
    "x": 351,
    "y": 150,
    "width": 8,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 42,
    "x": 359.5,
    "y": 150,
    "width": 11,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 43,
    "x": 371,
    "y": 150,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 44,
    "x": 386,
    "y": 150,
    "width": 8,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 45,
    "x": 394.5,
    "y": 150,
    "width": 11.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 46,
    "x": 406.5,
    "y": 150,
    "width": 8,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 47,
    "x": 415,
    "y": 150,
    "width": 11.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 48,
    "x": 220.5,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 49,
    "x": 235.5,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 50,
    "x": 250.5,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 51,
    "x": 265.5,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 52,
    "x": 280.5,
    "y": 210,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 53,
    "x": 296,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 54,
    "x": 311,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 55,
    "x": 326,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 56,
    "x": 341,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 57,
    "x": 356,
    "y": 210,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 58,
    "x": 427,
    "y": 150,
    "width": 8,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 59,
    "x": 435.5,
    "y": 150,
    "width": 8,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 60,
    "x": 444,
    "y": 150,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 61,
    "x": 459,
    "y": 150,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 62,
    "x": 474,
    "y": 150,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 63,
    "x": 489,
    "y": 150,
    "width": 11.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 64,
    "x": 0,
    "y": 180,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 65,
    "x": 0,
    "y": 0,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 66,
    "x": 18.5,
    "y": 0,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 67,
    "x": 34,
    "y": 0,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 68,
    "x": 51,
    "y": 0,
    "width": 17,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 69,
    "x": 68.5,
    "y": 0,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 70,
    "x": 82.5,
    "y": 0,
    "width": 12,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 71,
    "x": 95,
    "y": 0,
    "width": 16,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 72,
    "x": 111.5,
    "y": 0,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 73,
    "x": 128.5,
    "y": 0,
    "width": 9.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 74,
    "x": 138.5,
    "y": 0,
    "width": 9.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 75,
    "x": 148.5,
    "y": 0,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 76,
    "x": 165.5,
    "y": 0,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 77,
    "x": 179.5,
    "y": 0,
    "width": 21,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 78,
    "x": 201,
    "y": 0,
    "width": 17.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 79,
    "x": 219,
    "y": 0,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 80,
    "x": 238.5,
    "y": 0,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 81,
    "x": 433,
    "y": 210,
    "width": 21,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 82,
    "x": 253,
    "y": 0,
    "width": 16,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 83,
    "x": 269.5,
    "y": 0,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 84,
    "x": 284,
    "y": 0,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 85,
    "x": 298,
    "y": 0,
    "width": 17,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 86,
    "x": 315.5,
    "y": 0,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 87,
    "x": 332.5,
    "y": 0,
    "width": 23.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 88,
    "x": 356.5,
    "y": 0,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 89,
    "x": 373.5,
    "y": 0,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 90,
    "x": 388.5,
    "y": 0,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 91,
    "x": 18.5,
    "y": 180,
    "width": 8.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 92,
    "x": 27.5,
    "y": 180,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 93,
    "x": 42,
    "y": 180,
    "width": 8.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 94,
    "x": 51,
    "y": 180,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 95,
    "x": 66,
    "y": 180,
    "width": 17.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 96,
    "x": 84,
    "y": 180,
    "width": 11,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 97,
    "x": 404.5,
    "y": 0,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 98,
    "x": 419,
    "y": 0,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 99,
    "x": 435,
    "y": 0,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 100,
    "x": 449,
    "y": 0,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 101,
    "x": 465,
    "y": 0,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 102,
    "x": 480,
    "y": 0,
    "width": 10.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 103,
    "x": 491,
    "y": 0,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 104,
    "x": 0,
    "y": 30,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 105,
    "x": 15.5,
    "y": 30,
    "width": 9,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 106,
    "x": 25,
    "y": 30,
    "width": 8.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 107,
    "x": 34,
    "y": 30,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 108,
    "x": 233.5,
    "y": 150,
    "width": 7,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 5
},
{
    "id": 109,
    "x": 49,
    "y": 30,
    "width": 21,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 110,
    "x": 70.5,
    "y": 30,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 111,
    "x": 86,
    "y": 30,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 112,
    "x": 101.5,
    "y": 30,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 113,
    "x": 117.5,
    "y": 30,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 114,
    "x": 133.5,
    "y": 30,
    "width": 11.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 115,
    "x": 145.5,
    "y": 30,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 116,
    "x": 159,
    "y": 30,
    "width": 10.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 117,
    "x": 170,
    "y": 30,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 118,
    "x": 185.5,
    "y": 30,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 119,
    "x": 198.5,
    "y": 30,
    "width": 19.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 120,
    "x": 218.5,
    "y": 30,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 121,
    "x": 233,
    "y": 30,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 122,
    "x": 246.5,
    "y": 30,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 123,
    "x": 95.5,
    "y": 180,
    "width": 8.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 124,
    "x": 104.5,
    "y": 180,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 125,
    "x": 119.5,
    "y": 180,
    "width": 8.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 126,
    "x": 128.5,
    "y": 180,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 161,
    "x": 143.5,
    "y": 180,
    "width": 9.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 162,
    "x": 153.5,
    "y": 180,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 163,
    "x": 167.5,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 164,
    "x": 180.5,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 165,
    "x": 193.5,
    "y": 180,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 166,
    "x": 209,
    "y": 180,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 167,
    "x": 224,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 168,
    "x": 237,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 169,
    "x": 371,
    "y": 210,
    "width": 20,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 170,
    "x": 250,
    "y": 180,
    "width": 10,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 171,
    "x": 260.5,
    "y": 180,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 172,
    "x": 274,
    "y": 180,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 173,
    "x": 289,
    "y": 180,
    "width": 11.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 174,
    "x": 391.5,
    "y": 210,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 175,
    "x": 301,
    "y": 180,
    "width": 12,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 176,
    "x": 313.5,
    "y": 180,
    "width": 9,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 177,
    "x": 323,
    "y": 180,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 180,
    "x": 338,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 181,
    "x": 351,
    "y": 180,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 187,
    "x": 365.5,
    "y": 180,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 191,
    "x": 379,
    "y": 180,
    "width": 11,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 192,
    "x": 260,
    "y": 30,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 193,
    "x": 278.5,
    "y": 30,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 194,
    "x": 297,
    "y": 30,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 195,
    "x": 315.5,
    "y": 30,
    "width": 17.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 196,
    "x": 333.5,
    "y": 30,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 197,
    "x": 352,
    "y": 30,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 198,
    "x": 370.5,
    "y": 30,
    "width": 23.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 199,
    "x": 394.5,
    "y": 30,
    "width": 16,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 200,
    "x": 411,
    "y": 30,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 201,
    "x": 424.5,
    "y": 30,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 202,
    "x": 438.5,
    "y": 30,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 203,
    "x": 452.5,
    "y": 30,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 204,
    "x": 466,
    "y": 30,
    "width": 9.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 205,
    "x": 476,
    "y": 30,
    "width": 10,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 206,
    "x": 486.5,
    "y": 30,
    "width": 11,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 207,
    "x": 498,
    "y": 30,
    "width": 10,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 209,
    "x": 0,
    "y": 60,
    "width": 17.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 210,
    "x": 18,
    "y": 60,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 211,
    "x": 37.5,
    "y": 60,
    "width": 18.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 212,
    "x": 56.5,
    "y": 60,
    "width": 18.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 213,
    "x": 75.5,
    "y": 60,
    "width": 19.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 214,
    "x": 95.5,
    "y": 60,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 215,
    "x": 390.5,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 217,
    "x": 115,
    "y": 60,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 218,
    "x": 132,
    "y": 60,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 219,
    "x": 149,
    "y": 60,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 220,
    "x": 166,
    "y": 60,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 223,
    "x": 183,
    "y": 60,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 224,
    "x": 198,
    "y": 60,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 225,
    "x": 212.5,
    "y": 60,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 226,
    "x": 227.5,
    "y": 60,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 227,
    "x": 242.5,
    "y": 60,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 228,
    "x": 258,
    "y": 60,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 229,
    "x": 273,
    "y": 60,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 230,
    "x": 288,
    "y": 60,
    "width": 21.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 231,
    "x": 310,
    "y": 60,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 232,
    "x": 323.5,
    "y": 60,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 233,
    "x": 337,
    "y": 60,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 234,
    "x": 351,
    "y": 60,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 235,
    "x": 365,
    "y": 60,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 236,
    "x": 380,
    "y": 60,
    "width": 8.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 237,
    "x": 389,
    "y": 60,
    "width": 9.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 238,
    "x": 399,
    "y": 60,
    "width": 11,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 239,
    "x": 410.5,
    "y": 60,
    "width": 10,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 241,
    "x": 421,
    "y": 60,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 242,
    "x": 436.5,
    "y": 60,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 243,
    "x": 451,
    "y": 60,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 244,
    "x": 465.5,
    "y": 60,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 245,
    "x": 480,
    "y": 60,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 246,
    "x": 495.5,
    "y": 60,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 247,
    "x": 403.5,
    "y": 180,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 248,
    "x": 0,
    "y": 90,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 249,
    "x": 14.5,
    "y": 90,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 250,
    "x": 29.5,
    "y": 90,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 251,
    "x": 44,
    "y": 90,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 252,
    "x": 58.5,
    "y": 90,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 255,
    "x": 73.5,
    "y": 90,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 338,
    "x": 88,
    "y": 90,
    "width": 22,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 339,
    "x": 110.5,
    "y": 90,
    "width": 22.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 376,
    "x": 133.5,
    "y": 90,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1040,
    "x": 149,
    "y": 90,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1041,
    "x": 167.5,
    "y": 90,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1042,
    "x": 183,
    "y": 90,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1043,
    "x": 198.5,
    "y": 90,
    "width": 12,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1044,
    "x": 211,
    "y": 90,
    "width": 17,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1045,
    "x": 228.5,
    "y": 90,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1046,
    "x": 242.5,
    "y": 90,
    "width": 23.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1047,
    "x": 266.5,
    "y": 90,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1048,
    "x": 281.5,
    "y": 90,
    "width": 17,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1049,
    "x": 299,
    "y": 90,
    "width": 17,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1050,
    "x": 316.5,
    "y": 90,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1051,
    "x": 333.5,
    "y": 90,
    "width": 17,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1052,
    "x": 351,
    "y": 90,
    "width": 21,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1053,
    "x": 372.5,
    "y": 90,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1054,
    "x": 389.5,
    "y": 90,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1055,
    "x": 409,
    "y": 90,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1056,
    "x": 426,
    "y": 90,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1057,
    "x": 440.5,
    "y": 90,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1058,
    "x": 457.5,
    "y": 90,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1059,
    "x": 471.5,
    "y": 90,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1060,
    "x": 488.5,
    "y": 90,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1061,
    "x": 0,
    "y": 120,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1062,
    "x": 17,
    "y": 120,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1063,
    "x": 34,
    "y": 120,
    "width": 16,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1064,
    "x": 50.5,
    "y": 120,
    "width": 22,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1065,
    "x": 73,
    "y": 120,
    "width": 22,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1066,
    "x": 95.5,
    "y": 120,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1067,
    "x": 111.5,
    "y": 120,
    "width": 20,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1068,
    "x": 132,
    "y": 120,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1069,
    "x": 146.5,
    "y": 120,
    "width": 16.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1070,
    "x": 163.5,
    "y": 120,
    "width": 24.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1071,
    "x": 188.5,
    "y": 120,
    "width": 16,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1072,
    "x": 205,
    "y": 120,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1073,
    "x": 219.5,
    "y": 120,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1074,
    "x": 235,
    "y": 120,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1075,
    "x": 250,
    "y": 120,
    "width": 11.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 1076,
    "x": 262,
    "y": 120,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1077,
    "x": 277,
    "y": 120,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1078,
    "x": 292,
    "y": 120,
    "width": 20,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1079,
    "x": 312.5,
    "y": 120,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1080,
    "x": 325.5,
    "y": 120,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1081,
    "x": 341.5,
    "y": 120,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1082,
    "x": 357.5,
    "y": 120,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1083,
    "x": 372.5,
    "y": 120,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1084,
    "x": 387,
    "y": 120,
    "width": 18,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1085,
    "x": 405.5,
    "y": 120,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1086,
    "x": 421,
    "y": 120,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1087,
    "x": 436.5,
    "y": 120,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1088,
    "x": 452,
    "y": 120,
    "width": 15.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1089,
    "x": 468,
    "y": 120,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1090,
    "x": 482,
    "y": 120,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1091,
    "x": 495.5,
    "y": 120,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1092,
    "x": 0,
    "y": 150,
    "width": 21.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1093,
    "x": 22,
    "y": 150,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1094,
    "x": 36.5,
    "y": 150,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1095,
    "x": 52,
    "y": 150,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1096,
    "x": 67,
    "y": 150,
    "width": 19.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1097,
    "x": 87,
    "y": 150,
    "width": 19.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1098,
    "x": 107,
    "y": 150,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1099,
    "x": 121.5,
    "y": 150,
    "width": 19,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1100,
    "x": 141,
    "y": 150,
    "width": 13,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1101,
    "x": 154.5,
    "y": 150,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1102,
    "x": 168.5,
    "y": 150,
    "width": 20,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1103,
    "x": 189,
    "y": 150,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1104,
    "x": 204,
    "y": 150,
    "width": 14,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1105,
    "x": 218.5,
    "y": 150,
    "width": 14.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8211,
    "x": 417.5,
    "y": 180,
    "width": 13.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 8212,
    "x": 431.5,
    "y": 180,
    "width": 22.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 8217,
    "x": 454.5,
    "y": 180,
    "width": 8,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 8220,
    "x": 463,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8221,
    "x": 476,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8222,
    "x": 489,
    "y": 180,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8226,
    "x": 0,
    "y": 210,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8230,
    "x": 13,
    "y": 210,
    "width": 22.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 8232,
    "x": 36,
    "y": 210,
    "width": 12,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 8364,
    "x": 48.5,
    "y": 210,
    "width": 12.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8470,
    "x": 61.5,
    "y": 210,
    "width": 24,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 8658,
    "x": 410,
    "y": 210,
    "width": 22.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 12289,
    "x": 86,
    "y": 210,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 65281,
    "x": 101.5,
    "y": 210,
    "width": 21.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 65286,
    "x": 123.5,
    "y": 210,
    "width": 21.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 65288,
    "x": 145.5,
    "y": 210,
    "width": 12,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 65289,
    "x": 158,
    "y": 210,
    "width": 12,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 65292,
    "x": 170.5,
    "y": 210,
    "width": 15,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 65306,
    "x": 186,
    "y": 210,
    "width": 12,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 65311,
    "x": 198.5,
    "y": 210,
    "width": 21.5,
    "height": 29.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
}];
UI.fonts.soldier_font3 = [
//��ʼ��Ϸ
{
    "id": 25040,
    "x": 0,
    "y": 512,
    "width": 70,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25143,
    "x": 85,
    "y": 512,
    "width": 70,
    "height": 35,
    "xoffset": -20,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25151,
    "x": 165,
    "y": 512,
    "width": 140,
    "height": 35,
    "xoffset": -40,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 33,
    "x": 73.5,
    "y": 252,
    "width": 12.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 34,
    "x": 86.5,
    "y": 252,
    "width": 12,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 37,
    "x": 99,
    "y": 252,
    "width": 25,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 39,
    "x": 124.5,
    "y": 252,
    "width": 9,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 40,
    "x": 134,
    "y": 252,
    "width": 11,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 41,
    "x": 145.5,
    "y": 252,
    "width": 11,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 43,
    "x": 157,
    "y": 252,
    "width": 19.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 44,
    "x": 177,
    "y": 252,
    "width": 11,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 45,
    "x": 188.5,
    "y": 252,
    "width": 15,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 46,
    "x": 204,
    "y": 252,
    "width": 11,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 47,
    "x": 215.5,
    "y": 252,
    "width": 15,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 48,
    "x": 0,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 49,
    "x": 23,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 50,
    "x": 46,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 51,
    "x": 69,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 52,
    "x": 92,
    "y": 0,
    "width": 23,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 53,
    "x": 115.5,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 54,
    "x": 138.5,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 55,
    "x": 161.5,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 56,
    "x": 184.5,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 57,
    "x": 207.5,
    "y": 0,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 58,
    "x": 231,
    "y": 252,
    "width": 11,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 59,
    "x": 242.5,
    "y": 252,
    "width": 11,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 63,
    "x": 254,
    "y": 252,
    "width": 15.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 64,
    "x": 131,
    "y": 288,
    "width": 31,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 31.5
},
{
    "id": 65,
    "x": 230.5,
    "y": 0,
    "width": 26.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 66,
    "x": 257.5,
    "y": 0,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 67,
    "x": 280,
    "y": 0,
    "width": 24.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 68,
    "x": 305,
    "y": 0,
    "width": 24.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 69,
    "x": 330,
    "y": 0,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 70,
    "x": 351,
    "y": 0,
    "width": 18,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 71,
    "x": 369.5,
    "y": 0,
    "width": 23,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 72,
    "x": 393,
    "y": 0,
    "width": 24,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 73,
    "x": 417.5,
    "y": 0,
    "width": 14.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 74,
    "x": 432.5,
    "y": 0,
    "width": 15,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 75,
    "x": 448,
    "y": 0,
    "width": 24.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 76,
    "x": 473,
    "y": 0,
    "width": 20,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 77,
    "x": 0,
    "y": 36,
    "width": 29.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 78,
    "x": 30,
    "y": 36,
    "width": 25,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 79,
    "x": 55.5,
    "y": 36,
    "width": 27,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 80,
    "x": 83,
    "y": 36,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 81,
    "x": 104,
    "y": 36,
    "width": 25.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 82,
    "x": 130,
    "y": 36,
    "width": 23.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 83,
    "x": 154,
    "y": 36,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 84,
    "x": 175,
    "y": 36,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 85,
    "x": 196,
    "y": 36,
    "width": 24.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 86,
    "x": 221,
    "y": 36,
    "width": 24,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 87,
    "x": 245.5,
    "y": 36,
    "width": 32,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22.5
},
{
    "id": 88,
    "x": 278,
    "y": 36,
    "width": 25,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 89,
    "x": 303.5,
    "y": 36,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 90,
    "x": 326.5,
    "y": 36,
    "width": 23.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 92,
    "x": 270,
    "y": 252,
    "width": 19,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 97,
    "x": 350.5,
    "y": 36,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 98,
    "x": 372.5,
    "y": 36,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 99,
    "x": 395,
    "y": 36,
    "width": 19.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 100,
    "x": 415,
    "y": 36,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 101,
    "x": 437.5,
    "y": 36,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 102,
    "x": 458.5,
    "y": 36,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 103,
    "x": 475.5,
    "y": 36,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 104,
    "x": 0,
    "y": 72,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 105,
    "x": 22.5,
    "y": 72,
    "width": 14,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 106,
    "x": 37,
    "y": 72,
    "width": 13.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 107,
    "x": 51,
    "y": 72,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 108,
    "x": 73,
    "y": 72,
    "width": 14,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 109,
    "x": 87.5,
    "y": 72,
    "width": 28.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 110,
    "x": 116.5,
    "y": 72,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 111,
    "x": 138.5,
    "y": 72,
    "width": 21,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 112,
    "x": 160,
    "y": 72,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 113,
    "x": 182.5,
    "y": 72,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 114,
    "x": 205,
    "y": 72,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 115,
    "x": 222,
    "y": 72,
    "width": 19,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 116,
    "x": 241.5,
    "y": 72,
    "width": 16,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 117,
    "x": 258,
    "y": 72,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 118,
    "x": 280.5,
    "y": 72,
    "width": 19.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 119,
    "x": 300.5,
    "y": 72,
    "width": 27.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 120,
    "x": 328.5,
    "y": 72,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 121,
    "x": 350.5,
    "y": 72,
    "width": 20,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 122,
    "x": 371,
    "y": 72,
    "width": 20,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 126,
    "x": 289.5,
    "y": 252,
    "width": 19.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 160,
    "x": 309.5,
    "y": 252,
    "width": 11.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 161,
    "x": 321.5,
    "y": 252,
    "width": 12.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 169,
    "x": 162.5,
    "y": 288,
    "width": 29.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 30
},
{
    "id": 171,
    "x": 334.5,
    "y": 252,
    "width": 17.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 174,
    "x": 192.5,
    "y": 288,
    "width": 29.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 30
},
{
    "id": 187,
    "x": 352.5,
    "y": 252,
    "width": 17.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 191,
    "x": 370.5,
    "y": 252,
    "width": 15.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 193,
    "x": 391.5,
    "y": 72,
    "width": 26.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 195,
    "x": 418.5,
    "y": 72,
    "width": 26.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 196,
    "x": 445.5,
    "y": 72,
    "width": 27.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 197,
    "x": 473.5,
    "y": 72,
    "width": 26.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 201,
    "x": 0,
    "y": 108,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 202,
    "x": 21,
    "y": 108,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 203,
    "x": 42,
    "y": 108,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 209,
    "x": 63,
    "y": 108,
    "width": 25.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 211,
    "x": 89,
    "y": 108,
    "width": 27,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 214,
    "x": 116.5,
    "y": 108,
    "width": 27.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 217,
    "x": 144.5,
    "y": 108,
    "width": 24.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 223,
    "x": 169.5,
    "y": 108,
    "width": 23.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 224,
    "x": 193.5,
    "y": 108,
    "width": 21,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 225,
    "x": 215,
    "y": 108,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 226,
    "x": 237.5,
    "y": 108,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 227,
    "x": 260,
    "y": 108,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 228,
    "x": 283,
    "y": 108,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 229,
    "x": 305.5,
    "y": 108,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 231,
    "x": 328,
    "y": 108,
    "width": 20,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 232,
    "x": 348.5,
    "y": 108,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 233,
    "x": 369.5,
    "y": 108,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 234,
    "x": 390.5,
    "y": 108,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 235,
    "x": 411.5,
    "y": 108,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 237,
    "x": 434,
    "y": 108,
    "width": 15.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 238,
    "x": 450,
    "y": 108,
    "width": 17.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 241,
    "x": 468,
    "y": 108,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 243,
    "x": 0,
    "y": 144,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 245,
    "x": 22,
    "y": 144,
    "width": 22.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 246,
    "x": 45,
    "y": 144,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 249,
    "x": 67,
    "y": 144,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 251,
    "x": 89.5,
    "y": 144,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 252,
    "x": 111.5,
    "y": 144,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1040,
    "x": 134,
    "y": 144,
    "width": 26,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 1041,
    "x": 160.5,
    "y": 144,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1042,
    "x": 183,
    "y": 144,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1043,
    "x": 205.5,
    "y": 144,
    "width": 18,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1044,
    "x": 224,
    "y": 144,
    "width": 25.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1045,
    "x": 250,
    "y": 144,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1046,
    "x": 271,
    "y": 144,
    "width": 34,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 24
},
{
    "id": 1047,
    "x": 305.5,
    "y": 144,
    "width": 21,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1048,
    "x": 327,
    "y": 144,
    "width": 25,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 1049,
    "x": 352.5,
    "y": 144,
    "width": 25,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 1050,
    "x": 378,
    "y": 144,
    "width": 24,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1051,
    "x": 402.5,
    "y": 144,
    "width": 25.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1052,
    "x": 428.5,
    "y": 144,
    "width": 30.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 1053,
    "x": 459.5,
    "y": 144,
    "width": 24,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1054,
    "x": 484,
    "y": 144,
    "width": 27,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1055,
    "x": 0,
    "y": 180,
    "width": 25,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 1056,
    "x": 25.5,
    "y": 180,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1057,
    "x": 47.5,
    "y": 180,
    "width": 24.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 1058,
    "x": 72.5,
    "y": 180,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1059,
    "x": 93.5,
    "y": 180,
    "width": 24.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 1061,
    "x": 118.5,
    "y": 180,
    "width": 25,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 1063,
    "x": 144,
    "y": 180,
    "width": 23,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1064,
    "x": 167.5,
    "y": 180,
    "width": 32,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22.5
},
{
    "id": 1065,
    "x": 200,
    "y": 180,
    "width": 32,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22.5
},
{
    "id": 1067,
    "x": 232.5,
    "y": 180,
    "width": 29,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20.5
},
{
    "id": 1068,
    "x": 262,
    "y": 180,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1069,
    "x": 283,
    "y": 180,
    "width": 24,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1071,
    "x": 307.5,
    "y": 180,
    "width": 24,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1072,
    "x": 332,
    "y": 180,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1073,
    "x": 354,
    "y": 180,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1074,
    "x": 376,
    "y": 180,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1075,
    "x": 397,
    "y": 180,
    "width": 17,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1076,
    "x": 414.5,
    "y": 180,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1077,
    "x": 437,
    "y": 180,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1078,
    "x": 458,
    "y": 180,
    "width": 29,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20.5
},
{
    "id": 1079,
    "x": 487.5,
    "y": 180,
    "width": 18,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1080,
    "x": 0,
    "y": 216,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1081,
    "x": 22.5,
    "y": 216,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1082,
    "x": 45,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1083,
    "x": 67,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1084,
    "x": 89,
    "y": 216,
    "width": 25.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1085,
    "x": 115,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1086,
    "x": 137,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1087,
    "x": 159,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1088,
    "x": 181,
    "y": 216,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1089,
    "x": 203.5,
    "y": 216,
    "width": 19.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1090,
    "x": 223.5,
    "y": 216,
    "width": 20,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1091,
    "x": 244,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1092,
    "x": 266,
    "y": 216,
    "width": 29.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 1093,
    "x": 296,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1094,
    "x": 318,
    "y": 216,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1095,
    "x": 340.5,
    "y": 216,
    "width": 21.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1096,
    "x": 362.5,
    "y": 216,
    "width": 27,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1097,
    "x": 390,
    "y": 216,
    "width": 27.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 1099,
    "x": 418,
    "y": 216,
    "width": 27,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1100,
    "x": 445.5,
    "y": 216,
    "width": 20,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1101,
    "x": 466,
    "y": 216,
    "width": 20,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1102,
    "x": 0,
    "y": 252,
    "width": 28,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 1103,
    "x": 28.5,
    "y": 252,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1105,
    "x": 51,
    "y": 252,
    "width": 22,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 8211,
    "x": 386.5,
    "y": 252,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 8220,
    "x": 403.5,
    "y": 252,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 8221,
    "x": 420.5,
    "y": 252,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 8222,
    "x": 437.5,
    "y": 252,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 8232,
    "x": 454.5,
    "y": 252,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 65281,
    "x": 471.5,
    "y": 252,
    "width": 29,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 29.5
},
{
    "id": 65286,
    "x": 0,
    "y": 288,
    "width": 29,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 29.5
},
{
    "id": 65288,
    "x": 29.5,
    "y": 288,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 65289,
    "x": 46.5,
    "y": 288,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 65292,
    "x": 63.5,
    "y": 288,
    "width": 20.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 65306,
    "x": 84.5,
    "y": 288,
    "width": 16.5,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 65311,
    "x": 101.5,
    "y": 288,
    "width": 29,
    "height": 35.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 29.5
}];
UI.fonts.soldier_font4 = [
//����
{
    "id": 25032,
    "x": 0,
    "y": 512,
    "width": 80,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25033,
    "x": 103,
    "y": 512,
    "width": 80,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
//�ɾ�
{
    "id": 25041,
    "x": 210,
    "y": 512,
    "width": 75,
    "height": 35,
    "xoffset": -35,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0
},
//ѡ��
{
    "id": 25042,
    "x": 290,
    "y": 512,
    "width": 122,
    "height": 35,
    "xoffset": -67,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0
},
{
    "id": 25043,
    "x": 440,
    "y": 512,
    "width": 122,
    "height": 35,
    "xoffset": -67,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0
},
{
    "id": 25044,
    "x": 590,
    "y": 512,
    "width": 122,
    "height": 35,
    "xoffset": -67,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0
},
{
    "id": 25045,
    "x": 740,
    "y": 512,
    "width": 122,
    "height": 35,
    "xoffset": -60,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0
},
{
    "id": 25046,
    "x": 890,
    "y": 512,
    "width": 75,
    "height": 35,
    "xoffset": -70,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0
},
//�̵�
{
    "id": 25049,
    "x": 0,
    "y": 565,
    "width": 172,
    "height": 35,
    "xoffset": -86,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0
},
{
    "id": 25143,
    "x": 215,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": -30,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25144,
    "x": 300,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": 3,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25145,
    "x": 387,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": 9,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25146,
    "x": 466,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25147,
    "x": 548,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25148,
    "x": 630,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25149,
    "x": 715,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25150,
    "x": 800,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": -55,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25153,
    "x": 890,
    "y": 565,
    "width": 60,
    "height": 35,
    "xoffset": -30,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 32,
    "x": 0,
    "y": 0,
    "width": 10,
    "height": 0,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 33,
    "x": 80,
    "y": 300,
    "width": 13,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 34,
    "x": 93.5,
    "y": 300,
    "width": 12.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 35,
    "x": 106.5,
    "y": 300,
    "width": 19,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 36,
    "x": 126,
    "y": 300,
    "width": 19,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 37,
    "x": 145.5,
    "y": 300,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 38,
    "x": 172.5,
    "y": 300,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 39,
    "x": 199.5,
    "y": 300,
    "width": 9,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 40,
    "x": 209,
    "y": 300,
    "width": 11.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 41,
    "x": 221,
    "y": 300,
    "width": 11.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 42,
    "x": 233,
    "y": 300,
    "width": 15.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 43,
    "x": 249,
    "y": 300,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 44,
    "x": 270,
    "y": 300,
    "width": 11.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 45,
    "x": 282,
    "y": 300,
    "width": 16,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 46,
    "x": 298.5,
    "y": 300,
    "width": 11.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 47,
    "x": 310.5,
    "y": 300,
    "width": 16,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 48,
    "x": 0,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 49,
    "x": 25,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 50,
    "x": 50,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 51,
    "x": 75,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 52,
    "x": 100,
    "y": 0,
    "width": 25,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 53,
    "x": 125.5,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 54,
    "x": 150.5,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 55,
    "x": 175.5,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 56,
    "x": 200.5,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 57,
    "x": 225.5,
    "y": 0,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 58,
    "x": 327,
    "y": 300,
    "width": 11.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 59,
    "x": 339,
    "y": 300,
    "width": 11.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 60,
    "x": 351,
    "y": 300,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 61,
    "x": 372,
    "y": 300,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 62,
    "x": 393,
    "y": 300,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 63,
    "x": 414,
    "y": 300,
    "width": 16.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 64,
    "x": 426,
    "y": 375,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21.5
},
{
    "id": 65,
    "x": 250.5,
    "y": 0,
    "width": 29,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 66,
    "x": 280,
    "y": 0,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 67,
    "x": 304.5,
    "y": 0,
    "width": 27,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 68,
    "x": 332,
    "y": 0,
    "width": 27,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 69,
    "x": 359.5,
    "y": 0,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 70,
    "x": 382.5,
    "y": 0,
    "width": 20,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 71,
    "x": 403,
    "y": 0,
    "width": 25.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 72,
    "x": 429,
    "y": 0,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 73,
    "x": 456,
    "y": 0,
    "width": 16.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 74,
    "x": 473,
    "y": 0,
    "width": 17,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 75,
    "x": 0,
    "y": 37.5,
    "width": 27,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 76,
    "x": 27.5,
    "y": 37.5,
    "width": 22,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 77,
    "x": 50,
    "y": 37.5,
    "width": 32.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22
},
{
    "id": 78,
    "x": 83,
    "y": 37.5,
    "width": 27.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 79,
    "x": 111,
    "y": 37.5,
    "width": 29.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 80,
    "x": 141,
    "y": 37.5,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 81,
    "x": 164.5,
    "y": 37.5,
    "width": 28,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 82,
    "x": 193,
    "y": 37.5,
    "width": 25.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 83,
    "x": 219,
    "y": 37.5,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 84,
    "x": 242.5,
    "y": 37.5,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 85,
    "x": 266,
    "y": 37.5,
    "width": 27,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 86,
    "x": 293.5,
    "y": 37.5,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 87,
    "x": 320.5,
    "y": 37.5,
    "width": 35,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 24
},
{
    "id": 88,
    "x": 356,
    "y": 37.5,
    "width": 27.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 89,
    "x": 384,
    "y": 37.5,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 90,
    "x": 409,
    "y": 37.5,
    "width": 26,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 91,
    "x": 431,
    "y": 300,
    "width": 12,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 92,
    "x": 443.5,
    "y": 300,
    "width": 19.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 93,
    "x": 463.5,
    "y": 300,
    "width": 12,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 94,
    "x": 476,
    "y": 300,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 95,
    "x": 0,
    "y": 337.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 96,
    "x": 24.5,
    "y": 337.5,
    "width": 15.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 97,
    "x": 435.5,
    "y": 37.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 98,
    "x": 459.5,
    "y": 37.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 99,
    "x": 484,
    "y": 37.5,
    "width": 21.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 100,
    "x": 0,
    "y": 75,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 101,
    "x": 25,
    "y": 75,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 102,
    "x": 48,
    "y": 75,
    "width": 18.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 103,
    "x": 67,
    "y": 75,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 104,
    "x": 91,
    "y": 75,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 105,
    "x": 115.5,
    "y": 75,
    "width": 15.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 106,
    "x": 131.5,
    "y": 75,
    "width": 15.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 107,
    "x": 147.5,
    "y": 75,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 108,
    "x": 172,
    "y": 75,
    "width": 16,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 109,
    "x": 188.5,
    "y": 75,
    "width": 31,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 110,
    "x": 220,
    "y": 75,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 111,
    "x": 244.5,
    "y": 75,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 112,
    "x": 268.5,
    "y": 75,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 113,
    "x": 293.5,
    "y": 75,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 114,
    "x": 318.5,
    "y": 75,
    "width": 18.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 115,
    "x": 337.5,
    "y": 75,
    "width": 21.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 116,
    "x": 359.5,
    "y": 75,
    "width": 18,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 117,
    "x": 378,
    "y": 75,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 118,
    "x": 402.5,
    "y": 75,
    "width": 22,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 119,
    "x": 425,
    "y": 75,
    "width": 30,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20.5
},
{
    "id": 120,
    "x": 455.5,
    "y": 75,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 121,
    "x": 479.5,
    "y": 75,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 122,
    "x": 0,
    "y": 112.5,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 123,
    "x": 40.5,
    "y": 337.5,
    "width": 12,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 124,
    "x": 53,
    "y": 337.5,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 125,
    "x": 74,
    "y": 337.5,
    "width": 12,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 126,
    "x": 86.5,
    "y": 337.5,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 160,
    "x": 107.5,
    "y": 337.5,
    "width": 10.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 161,
    "x": 118.5,
    "y": 337.5,
    "width": 13,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 162,
    "x": 132,
    "y": 337.5,
    "width": 19,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 163,
    "x": 151.5,
    "y": 337.5,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 164,
    "x": 169.5,
    "y": 337.5,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 165,
    "x": 187.5,
    "y": 337.5,
    "width": 21,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 166,
    "x": 209,
    "y": 337.5,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 167,
    "x": 230,
    "y": 337.5,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 168,
    "x": 248,
    "y": 337.5,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 169,
    "x": 453,
    "y": 375,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 170,
    "x": 266,
    "y": 337.5,
    "width": 14,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 171,
    "x": 280.5,
    "y": 337.5,
    "width": 18,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 172,
    "x": 299,
    "y": 337.5,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 173,
    "x": 320,
    "y": 337.5,
    "width": 16,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 175,
    "x": 336.5,
    "y": 337.5,
    "width": 16.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 176,
    "x": 353.5,
    "y": 337.5,
    "width": 12.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 177,
    "x": 366.5,
    "y": 337.5,
    "width": 20.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 180,
    "x": 387.5,
    "y": 337.5,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 181,
    "x": 405.5,
    "y": 337.5,
    "width": 19.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 187,
    "x": 425.5,
    "y": 337.5,
    "width": 18,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 191,
    "x": 444,
    "y": 337.5,
    "width": 15,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 193,
    "x": 23,
    "y": 112.5,
    "width": 29,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 195,
    "x": 52.5,
    "y": 112.5,
    "width": 29,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 196,
    "x": 82,
    "y": 112.5,
    "width": 30.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 197,
    "x": 113,
    "y": 112.5,
    "width": 29,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 201,
    "x": 142.5,
    "y": 112.5,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 202,
    "x": 165.5,
    "y": 112.5,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 203,
    "x": 189,
    "y": 112.5,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 209,
    "x": 212,
    "y": 112.5,
    "width": 28.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 211,
    "x": 241,
    "y": 112.5,
    "width": 30,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20.5
},
{
    "id": 214,
    "x": 271.5,
    "y": 112.5,
    "width": 30.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 215,
    "x": 459.5,
    "y": 337.5,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 217,
    "x": 302.5,
    "y": 112.5,
    "width": 27,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 223,
    "x": 330,
    "y": 112.5,
    "width": 26,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 224,
    "x": 356.5,
    "y": 112.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 225,
    "x": 380.5,
    "y": 112.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 226,
    "x": 405,
    "y": 112.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 227,
    "x": 429.5,
    "y": 112.5,
    "width": 25,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 228,
    "x": 455,
    "y": 112.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 229,
    "x": 479.5,
    "y": 112.5,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 231,
    "x": 0,
    "y": 150,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 232,
    "x": 23,
    "y": 150,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 233,
    "x": 46.5,
    "y": 150,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 234,
    "x": 70,
    "y": 150,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 235,
    "x": 93,
    "y": 150,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 237,
    "x": 117.5,
    "y": 150,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 238,
    "x": 135.5,
    "y": 150,
    "width": 19.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 241,
    "x": 155.5,
    "y": 150,
    "width": 25,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 243,
    "x": 181,
    "y": 150,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 245,
    "x": 205,
    "y": 150,
    "width": 25,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 246,
    "x": 230.5,
    "y": 150,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 247,
    "x": 477.5,
    "y": 337.5,
    "width": 18.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 249,
    "x": 254.5,
    "y": 150,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 251,
    "x": 279,
    "y": 150,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 252,
    "x": 303.5,
    "y": 150,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1040,
    "x": 328,
    "y": 150,
    "width": 28.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 1041,
    "x": 357,
    "y": 150,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1042,
    "x": 382,
    "y": 150,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1043,
    "x": 406.5,
    "y": 150,
    "width": 20,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1044,
    "x": 427,
    "y": 150,
    "width": 28,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1045,
    "x": 455.5,
    "y": 150,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1046,
    "x": 0,
    "y": 187.5,
    "width": 37,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 1047,
    "x": 37.5,
    "y": 187.5,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1048,
    "x": 61,
    "y": 187.5,
    "width": 27.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1049,
    "x": 89,
    "y": 187.5,
    "width": 27.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1050,
    "x": 117,
    "y": 187.5,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1051,
    "x": 144,
    "y": 187.5,
    "width": 28,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1052,
    "x": 172.5,
    "y": 187.5,
    "width": 33,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22.5
},
{
    "id": 1053,
    "x": 206,
    "y": 187.5,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1054,
    "x": 233,
    "y": 187.5,
    "width": 29.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 1055,
    "x": 263,
    "y": 187.5,
    "width": 27.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1056,
    "x": 291,
    "y": 187.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1057,
    "x": 315,
    "y": 187.5,
    "width": 27,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 1058,
    "x": 342.5,
    "y": 187.5,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1059,
    "x": 366,
    "y": 187.5,
    "width": 27,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 1060,
    "x": 393.5,
    "y": 187.5,
    "width": 30.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 1061,
    "x": 424.5,
    "y": 187.5,
    "width": 27.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1062,
    "x": 452.5,
    "y": 187.5,
    "width": 27.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1063,
    "x": 480.5,
    "y": 187.5,
    "width": 25.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 1064,
    "x": 0,
    "y": 225,
    "width": 35,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 24
},
{
    "id": 1065,
    "x": 35.5,
    "y": 225,
    "width": 35,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 24
},
{
    "id": 1066,
    "x": 71,
    "y": 225,
    "width": 26,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1067,
    "x": 97.5,
    "y": 225,
    "width": 32,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22
},
{
    "id": 1068,
    "x": 130,
    "y": 225,
    "width": 23,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1069,
    "x": 153.5,
    "y": 225,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1070,
    "x": 180.5,
    "y": 225,
    "width": 37.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 1071,
    "x": 218.5,
    "y": 225,
    "width": 26.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 1072,
    "x": 245.5,
    "y": 225,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1073,
    "x": 269.5,
    "y": 225,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1074,
    "x": 293.5,
    "y": 225,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1075,
    "x": 316.5,
    "y": 225,
    "width": 19,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1076,
    "x": 336,
    "y": 225,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1077,
    "x": 360.5,
    "y": 225,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1078,
    "x": 383.5,
    "y": 225,
    "width": 32,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22
},
{
    "id": 1079,
    "x": 416,
    "y": 225,
    "width": 20,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1080,
    "x": 436.5,
    "y": 225,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1081,
    "x": 461.5,
    "y": 225,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1082,
    "x": 486.5,
    "y": 225,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1083,
    "x": 0,
    "y": 262.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1084,
    "x": 24,
    "y": 262.5,
    "width": 28,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 1085,
    "x": 52.5,
    "y": 262.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1086,
    "x": 77,
    "y": 262.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1087,
    "x": 101,
    "y": 262.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1088,
    "x": 125.5,
    "y": 262.5,
    "width": 24.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1089,
    "x": 150.5,
    "y": 262.5,
    "width": 22,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1090,
    "x": 173,
    "y": 262.5,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1091,
    "x": 196,
    "y": 262.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1092,
    "x": 220,
    "y": 262.5,
    "width": 32.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22
},
{
    "id": 1093,
    "x": 253,
    "y": 262.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1094,
    "x": 277,
    "y": 262.5,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1095,
    "x": 301.5,
    "y": 262.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1096,
    "x": 325.5,
    "y": 262.5,
    "width": 30,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20.5
},
{
    "id": 1097,
    "x": 356,
    "y": 262.5,
    "width": 30,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20.5
},
{
    "id": 1098,
    "x": 386.5,
    "y": 262.5,
    "width": 23.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1099,
    "x": 410.5,
    "y": 262.5,
    "width": 29.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 20
},
{
    "id": 1100,
    "x": 440.5,
    "y": 262.5,
    "width": 22.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1101,
    "x": 463.5,
    "y": 262.5,
    "width": 22,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1102,
    "x": 0,
    "y": 300,
    "width": 30.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 21
},
{
    "id": 1103,
    "x": 31,
    "y": 300,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 1105,
    "x": 55.5,
    "y": 300,
    "width": 24,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 8211,
    "x": 0,
    "y": 375,
    "width": 18.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 8212,
    "x": 19,
    "y": 375,
    "width": 31.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 8217,
    "x": 51,
    "y": 375,
    "width": 11.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 8220,
    "x": 63,
    "y": 375,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 8221,
    "x": 81,
    "y": 375,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 8222,
    "x": 99,
    "y": 375,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 8226,
    "x": 117,
    "y": 375,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 8230,
    "x": 135,
    "y": 375,
    "width": 31.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 25.5
},
{
    "id": 8232,
    "x": 167,
    "y": 375,
    "width": 17,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 8364,
    "x": 184.5,
    "y": 375,
    "width": 17.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 8470,
    "x": 202.5,
    "y": 375,
    "width": 33.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 27
},
{
    "id": 12289,
    "x": 236.5,
    "y": 375,
    "width": 21.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 65281,
    "x": 258.5,
    "y": 375,
    "width": 30.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 24.5
},
{
    "id": 65286,
    "x": 289.5,
    "y": 375,
    "width": 30.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 24.5
},
{
    "id": 65288,
    "x": 320.5,
    "y": 375,
    "width": 17,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 65289,
    "x": 338,
    "y": 375,
    "width": 17,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 65292,
    "x": 355.5,
    "y": 375,
    "width": 21.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17.5
},
{
    "id": 65306,
    "x": 377.5,
    "y": 375,
    "width": 17,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 65311,
    "x": 395,
    "y": 375,
    "width": 30.5,
    "height": 37,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 24.5
}];
UI.fonts.soldier_font4_small = [{
    "id": 33,
    "x": 167,
    "y": 180,
    "width": 6.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 5.5
},
{
    "id": 34,
    "x": 174,
    "y": 180,
    "width": 6.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 5.5
},
{
    "id": 37,
    "x": 181,
    "y": 180,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 39,
    "x": 195.5,
    "y": 180,
    "width": 4.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4
},
{
    "id": 40,
    "x": 200.5,
    "y": 180,
    "width": 5.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4.5
},
{
    "id": 41,
    "x": 206.5,
    "y": 180,
    "width": 5.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4.5
},
{
    "id": 42,
    "x": 212.5,
    "y": 180,
    "width": 8,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 43,
    "x": 221,
    "y": 180,
    "width": 10.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 44,
    "x": 232,
    "y": 180,
    "width": 5.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4.5
},
{
    "id": 45,
    "x": 238,
    "y": 180,
    "width": 8,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 46,
    "x": 246.5,
    "y": 180,
    "width": 5.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4.5
},
{
    "id": 47,
    "x": 0,
    "y": 202.5,
    "width": 8,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 48,
    "x": 0,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 49,
    "x": 13.5,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 50,
    "x": 27,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 51,
    "x": 40.5,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 52,
    "x": 54,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 53,
    "x": 67.5,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 54,
    "x": 81,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 55,
    "x": 94.5,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 56,
    "x": 108,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 57,
    "x": 121.5,
    "y": 0,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 58,
    "x": 8.5,
    "y": 202.5,
    "width": 5.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4.5
},
{
    "id": 59,
    "x": 14.5,
    "y": 202.5,
    "width": 5.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4.5
},
{
    "id": 61,
    "x": 20.5,
    "y": 202.5,
    "width": 10.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 63,
    "x": 31.5,
    "y": 202.5,
    "width": 8.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 64,
    "x": 240,
    "y": 202.5,
    "width": 15,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 65,
    "x": 135,
    "y": 0,
    "width": 15.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 66,
    "x": 151,
    "y": 0,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 67,
    "x": 164,
    "y": 0,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 68,
    "x": 178.5,
    "y": 0,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 69,
    "x": 193,
    "y": 0,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 70,
    "x": 205.5,
    "y": 0,
    "width": 10.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 71,
    "x": 216.5,
    "y": 0,
    "width": 13.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 72,
    "x": 230.5,
    "y": 0,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 73,
    "x": 245,
    "y": 0,
    "width": 8.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6
},
{
    "id": 74,
    "x": 0,
    "y": 22.5,
    "width": 8.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6
},
{
    "id": 75,
    "x": 9,
    "y": 22.5,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 76,
    "x": 23.5,
    "y": 22.5,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 77,
    "x": 35.5,
    "y": 22.5,
    "width": 17,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 78,
    "x": 53,
    "y": 22.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 79,
    "x": 68,
    "y": 22.5,
    "width": 15.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 80,
    "x": 84,
    "y": 22.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 81,
    "x": 96.5,
    "y": 22.5,
    "width": 15,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 82,
    "x": 112,
    "y": 22.5,
    "width": 13.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 83,
    "x": 126,
    "y": 22.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 84,
    "x": 138.5,
    "y": 22.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 85,
    "x": 151,
    "y": 22.5,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 86,
    "x": 165.5,
    "y": 22.5,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 87,
    "x": 180,
    "y": 22.5,
    "width": 18.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 88,
    "x": 199,
    "y": 22.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 89,
    "x": 214,
    "y": 22.5,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 90,
    "x": 227.5,
    "y": 22.5,
    "width": 13.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 92,
    "x": 40.5,
    "y": 202.5,
    "width": 10,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 97,
    "x": 241.5,
    "y": 22.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 98,
    "x": 0,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 99,
    "x": 13,
    "y": 45,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 100,
    "x": 25,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 101,
    "x": 38,
    "y": 45,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 102,
    "x": 50.5,
    "y": 45,
    "width": 9.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 103,
    "x": 60.5,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 104,
    "x": 73.5,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 105,
    "x": 86.5,
    "y": 45,
    "width": 8,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 5.5
},
{
    "id": 106,
    "x": 95,
    "y": 45,
    "width": 8,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 5.5
},
{
    "id": 107,
    "x": 103.5,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 108,
    "x": 116.5,
    "y": 45,
    "width": 8,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 5.5
},
{
    "id": 109,
    "x": 125,
    "y": 45,
    "width": 16.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 110,
    "x": 142,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 111,
    "x": 155,
    "y": 45,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 112,
    "x": 167.5,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 113,
    "x": 180.5,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 114,
    "x": 193.5,
    "y": 45,
    "width": 9.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 115,
    "x": 203.5,
    "y": 45,
    "width": 11,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 116,
    "x": 215,
    "y": 45,
    "width": 9.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 117,
    "x": 225,
    "y": 45,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 118,
    "x": 238,
    "y": 45,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 119,
    "x": 0,
    "y": 67.5,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 120,
    "x": 16.5,
    "y": 67.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 121,
    "x": 29.5,
    "y": 67.5,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 122,
    "x": 41.5,
    "y": 67.5,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 126,
    "x": 51,
    "y": 202.5,
    "width": 10.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 160,
    "x": 62,
    "y": 202.5,
    "width": 5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 4
},
{
    "id": 161,
    "x": 67.5,
    "y": 202.5,
    "width": 6.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 5.5
},
{
    "id": 169,
    "x": 0,
    "y": 225,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 171,
    "x": 74.5,
    "y": 202.5,
    "width": 9.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 187,
    "x": 84.5,
    "y": 202.5,
    "width": 9.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 191,
    "x": 94.5,
    "y": 202.5,
    "width": 7.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6
},
{
    "id": 193,
    "x": 53.5,
    "y": 67.5,
    "width": 15,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 195,
    "x": 69,
    "y": 67.5,
    "width": 15,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 196,
    "x": 84.5,
    "y": 67.5,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 197,
    "x": 101,
    "y": 67.5,
    "width": 15.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 201,
    "x": 117,
    "y": 67.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 202,
    "x": 129.5,
    "y": 67.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 203,
    "x": 142,
    "y": 67.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 209,
    "x": 154.5,
    "y": 67.5,
    "width": 15,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 211,
    "x": 170,
    "y": 67.5,
    "width": 15.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 214,
    "x": 186,
    "y": 67.5,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 217,
    "x": 202.5,
    "y": 67.5,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 223,
    "x": 217,
    "y": 67.5,
    "width": 13.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 224,
    "x": 231,
    "y": 67.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 225,
    "x": 0,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 226,
    "x": 13,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 227,
    "x": 26,
    "y": 90,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 228,
    "x": 39.5,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 229,
    "x": 52.5,
    "y": 90,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 231,
    "x": 66,
    "y": 90,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 232,
    "x": 78,
    "y": 90,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 233,
    "x": 90.5,
    "y": 90,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 234,
    "x": 103,
    "y": 90,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 235,
    "x": 115.5,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 237,
    "x": 128.5,
    "y": 90,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6
},
{
    "id": 238,
    "x": 138,
    "y": 90,
    "width": 10,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 241,
    "x": 148.5,
    "y": 90,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 243,
    "x": 162,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 245,
    "x": 175,
    "y": 90,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 246,
    "x": 188.5,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 249,
    "x": 201.5,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 251,
    "x": 214.5,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 252,
    "x": 227.5,
    "y": 90,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1040,
    "x": 240.5,
    "y": 90,
    "width": 15,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1041,
    "x": 0,
    "y": 112.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1042,
    "x": 13,
    "y": 112.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1043,
    "x": 26,
    "y": 112.5,
    "width": 10.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 1044,
    "x": 37,
    "y": 112.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1045,
    "x": 52,
    "y": 112.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1046,
    "x": 64.5,
    "y": 112.5,
    "width": 19.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1047,
    "x": 84.5,
    "y": 112.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1048,
    "x": 97,
    "y": 112.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1049,
    "x": 112,
    "y": 112.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1050,
    "x": 127,
    "y": 112.5,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1051,
    "x": 141.5,
    "y": 112.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1052,
    "x": 156.5,
    "y": 112.5,
    "width": 17.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1053,
    "x": 174.5,
    "y": 112.5,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1054,
    "x": 189,
    "y": 112.5,
    "width": 15.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1055,
    "x": 205,
    "y": 112.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1056,
    "x": 220,
    "y": 112.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1057,
    "x": 233,
    "y": 112.5,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1058,
    "x": 0,
    "y": 135,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1059,
    "x": 12.5,
    "y": 135,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1060,
    "x": 27,
    "y": 135,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1061,
    "x": 43.5,
    "y": 135,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1062,
    "x": 58.5,
    "y": 135,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1063,
    "x": 73.5,
    "y": 135,
    "width": 13,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 1064,
    "x": 87,
    "y": 135,
    "width": 18.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1065,
    "x": 106,
    "y": 135,
    "width": 18.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1066,
    "x": 125,
    "y": 135,
    "width": 13.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1067,
    "x": 139,
    "y": 135,
    "width": 17,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1068,
    "x": 156.5,
    "y": 135,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1069,
    "x": 169,
    "y": 135,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1070,
    "x": 183.5,
    "y": 135,
    "width": 20,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1071,
    "x": 204,
    "y": 135,
    "width": 14,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1072,
    "x": 218.5,
    "y": 135,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1073,
    "x": 231.5,
    "y": 135,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1074,
    "x": 0,
    "y": 157.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1075,
    "x": 12.5,
    "y": 157.5,
    "width": 9.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 1076,
    "x": 22.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1077,
    "x": 35.5,
    "y": 157.5,
    "width": 12,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1078,
    "x": 48,
    "y": 157.5,
    "width": 17,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1079,
    "x": 65.5,
    "y": 157.5,
    "width": 10.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 1080,
    "x": 76.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1081,
    "x": 89.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1082,
    "x": 102.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1083,
    "x": 115.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1084,
    "x": 128.5,
    "y": 157.5,
    "width": 14.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1085,
    "x": 143.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1086,
    "x": 156.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1087,
    "x": 169.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1088,
    "x": 182.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1089,
    "x": 195.5,
    "y": 157.5,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 1090,
    "x": 207.5,
    "y": 157.5,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 1091,
    "x": 219.5,
    "y": 157.5,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1092,
    "x": 232.5,
    "y": 157.5,
    "width": 17,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1093,
    "x": 0,
    "y": 180,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1094,
    "x": 13,
    "y": 180,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1095,
    "x": 26,
    "y": 180,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1096,
    "x": 39,
    "y": 180,
    "width": 15.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1097,
    "x": 55,
    "y": 180,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1098,
    "x": 71.5,
    "y": 180,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1099,
    "x": 84.5,
    "y": 180,
    "width": 15.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1100,
    "x": 100.5,
    "y": 180,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 1101,
    "x": 112.5,
    "y": 180,
    "width": 11.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 1102,
    "x": 124.5,
    "y": 180,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1103,
    "x": 141,
    "y": 180,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1105,
    "x": 154,
    "y": 180,
    "width": 12.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 8211,
    "x": 102.5,
    "y": 202.5,
    "width": 9.5,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 8220,
    "x": 112.5,
    "y": 202.5,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 8221,
    "x": 122,
    "y": 202.5,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 8222,
    "x": 131.5,
    "y": 202.5,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 8232,
    "x": 141,
    "y": 202.5,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 65281,
    "x": 150.5,
    "y": 202.5,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 65286,
    "x": 167,
    "y": 202.5,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 65288,
    "x": 183.5,
    "y": 202.5,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 65289,
    "x": 193,
    "y": 202.5,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 65292,
    "x": 202.5,
    "y": 202.5,
    "width": 11,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 65306,
    "x": 214,
    "y": 202.5,
    "width": 9,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 65311,
    "x": 223.5,
    "y": 202.5,
    "width": 16,
    "height": 22,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
}];
UI.fonts.soldier_font5 = [
//�ɾ�
{
    "id": 25000,
    "x": 0,
    "y": 249,
    "width": 70,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25001,
    "x": 72,
    "y": 247,
    "width": 280,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25002,
    "x": 354,
    "y": 249,
    "width": 85,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25003,
    "x": 443,
    "y": 247,
    "width": 167,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25004,
    "x": 616,
    "y": 249,
    "width": 75,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25005,
    "x": 691,
    "y": 247,
    "width": 132,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25006,
    "x": 831,
    "y": 249,
    "width": 75,
    "height": 35,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25007,
    "x": 0,
    "y": 285,
    "width": 160,
    "height": 20,
    "xoffset": 4,
    "yoffset": 10,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25008,
    "x": 170,
    "y": 285,
    "width": 75,
    "height": 20,
    "xoffset": 0,
    "yoffset": 6,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25009,
    "x": 248,
    "y": 285,
    "width": 240,
    "height": 20,
    "xoffset": 4,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25010,
    "x": 493,
    "y": 285,
    "width": 75,
    "height": 20,
    "xoffset": 0,
    "yoffset": 6,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25011,
    "x": 567,
    "y": 285,
    "width": 215,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25012,
    "x": 786,
    "y": 285,
    "width": 75,
    "height": 20,
    "xoffset": 0,
    "yoffset": 6,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25013,
    "x": 0,
    "y": 307,
    "width": 215,
    "height": 20,
    "xoffset": 2,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25014,
    "x": 221,
    "y": 307,
    "width": 85,
    "height": 20,
    "xoffset": 0,
    "yoffset": -3,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25015,
    "x": 314,
    "y": 307,
    "width": 165,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25016,
    "x": 490,
    "y": 307,
    "width": 90,
    "height": 20,
    "xoffset": 0,
    "yoffset": -3,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25017,
    "x": 583,
    "y": 307,
    "width": 165,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25018,
    "x": 758,
    "y": 307,
    "width": 90,
    "height": 20,
    "xoffset": 0,
    "yoffset": -3,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25019,
    "x": 850,
    "y": 307,
    "width": 165,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25020,
    "x": 0,
    "y": 335,
    "width": 85,
    "height": 20,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25021,
    "x": 93,
    "y": 335,
    "width": 165,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25022,
    "x": 270,
    "y": 335,
    "width": 75,
    "height": 20,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25023,
    "x": 348,
    "y": 335,
    "width": 175,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25024,
    "x": 523,
    "y": 335,
    "width": 75,
    "height": 20,
    "xoffset": 0,
    "yoffset": 2,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25025,
    "x": 600,
    "y": 335,
    "width": 165,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25026,
    "x": 760,
    "y": 335,
    "width": 110,
    "height": 20,
    "xoffset": 0,
    "yoffset": 2,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25027,
    "x": 867,
    "y": 335,
    "width": 123,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25028,
    "x": 0,
    "y": 360,
    "width": 115,
    "height": 20,
    "xoffset": -1,
    "yoffset": -1,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25029,
    "x": 110,
    "y": 360,
    "width": 295,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25030,
    "x": 412,
    "y": 360,
    "width": 70,
    "height": 20,
    "xoffset": 0,
    "yoffset": -2,
    "page": 0,
    "xadvance": 70
},
{
    "id": 25031,
    "x": 488,
    "y": 360,
    "width": 180,
    "height": 20,
    "xoffset": 0,
    "yoffset": 12,
    "page": 0,
    "xadvance": 70
},
//���ã�����Ϸ
{
    "id": 25035,
    "x": 0,
    "y": 390,
    "width": 50,
    "height": 35,
    "xoffset": -40,
    "yoffset": 15,
    "page": 0,
    "xadvance": 0
},
{
    "id": 25036,
    "x": 50,
    "y": 390,
    "width": 50,
    "height": 35,
    "xoffset": -32,
    "yoffset": 15,
    "page": 0,
    "xadvance": 10
},
{
    "id": 25037,
    "x": 105,
    "y": 390,
    "width": 120,
    "height": 35,
    "xoffset": -55,
    "yoffset": 15,
    "page": 0,
    "xadvance": 10
},
{
    "id": 25038,
    "x": 235,
    "y": 390,
    "width": 110,
    "height": 35,
    "xoffset": -45,
    "yoffset": 10,
    "page": 0,
    "xadvance": 0
},
{
    "id": 25039,
    "x": 350,
    "y": 390,
    "width": 160,
    "height": 35,
    "xoffset": -70,
    "yoffset": -10,
    "page": 0,
    "xadvance": 0
},
//��Ϸ����ͣ���
{
    "id": 25047,
    "x": 656,
    "y": 378,
    "width": 265,
    "height": 40,
    "xoffset": -130,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25048,
    "x": 0,
    "y": 420,
    "width": 265,
    "height": 40,
    "xoffset": -130,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
//�̵�
{
    "id": 25050,
    "x": 520,
    "y": 0,
    "width": 65,
    "height": 25,
    "xoffset": -2,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25051,
    "x": 595,
    "y": 0,
    "width": 65,
    "height": 25,
    "xoffset": -2,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25052,
    "x": 670,
    "y": 0,
    "width": 65,
    "height": 25,
    "xoffset": -2,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25053,
    "x": 745,
    "y": 0,
    "width": 65,
    "height": 25,
    "xoffset": -3,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25054,
    "x": 825,
    "y": 0,
    "width": 65,
    "height": 25,
    "xoffset": 1,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25055,
    "x": 900,
    "y": 0,
    "width": 115,
    "height": 25,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25056,
    "x": 520,
    "y": 35,
    "width": 80,
    "height": 25,
    "xoffset": -2,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25057,
    "x": 615,
    "y": 35,
    "width": 80,
    "height": 25,
    "xoffset": -2,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25058,
    "x": 705,
    "y": 35,
    "width": 80,
    "height": 25,
    "xoffset": 1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25059,
    "x": 795,
    "y": 35,
    "width": 80,
    "height": 25,
    "xoffset": 0,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25060,
    "x": 890,
    "y": 35,
    "width": 80,
    "height": 25,
    "xoffset": 3,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25061,
    "x": 520,
    "y": 70,
    "width": 80,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25062,
    "x": 615,
    "y": 70,
    "width": 80,
    "height": 25,
    "xoffset": 0,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25063,
    "x": 705,
    "y": 70,
    "width": 80,
    "height": 25,
    "xoffset": 0,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25064,
    "x": 795,
    "y": 70,
    "width": 80,
    "height": 25,
    "xoffset": 0,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25065,
    "x": 890,
    "y": 70,
    "width": 80,
    "height": 25,
    "xoffset": 3,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25066,
    "x": 520,
    "y": 97,
    "width": 80,
    "height": 25,
    "xoffset": -1,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25067,
    "x": 615,
    "y": 97,
    "width": 80,
    "height": 25,
    "xoffset": 1,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25068,
    "x": 705,
    "y": 97,
    "width": 80,
    "height": 25,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25069,
    "x": 795,
    "y": 97,
    "width": 80,
    "height": 25,
    "xoffset": -1,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25070,
    "x": 890,
    "y": 97,
    "width": 80,
    "height": 25,
    "xoffset": 3,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25071,
    "x": 520,
    "y": 135,
    "width": 80,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25072,
    "x": 0,
    "y": 462,
    "width": 270,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25073,
    "x": 452,
    "y": 462,
    "width": 140,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25074,
    "x": 270,
    "y": 462,
    "width": 180,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25075,
    "x": 593,
    "y": 462,
    "width": 140,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25076,
    "x": 734,
    "y": 462,
    "width": 210,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25077,
    "x": 942,
    "y": 462,
    "width": 95,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25078,
    "x": 1033,
    "y": 462,
    "width": 270,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25079,
    "x": 1304,
    "y": 462,
    "width": 290,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25080,
    "x": 1590,
    "y": 462,
    "width": 150,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25081,
    "x": 1744,
    "y": 462,
    "width": 120,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25082,
    "x": 1870,
    "y": 462,
    "width": 150,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25083,
    "x": 0,
    "y": 488,
    "width": 155,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25084,
    "x": 153,
    "y": 488,
    "width": 89,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25085,
    "x": 240,
    "y": 488,
    "width": 89,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25086,
    "x": 330,
    "y": 488,
    "width": 89,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25087,
    "x": 415,
    "y": 488,
    "width": 155,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25088,
    "x": 570,
    "y": 488,
    "width": 240,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25089,
    "x": 813,
    "y": 488,
    "width": 240,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25090,
    "x": 1050,
    "y": 488,
    "width": 235,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25091,
    "x": 1280,
    "y": 488,
    "width": 122,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25092,
    "x": 1400,
    "y": 488,
    "width": 122,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25093,
    "x": 1522,
    "y": 488,
    "width": 122,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25094,
    "x": 1650,
    "y": 488,
    "width": 115,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25095,
    "x": 1770,
    "y": 488,
    "width": 115,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25096,
    "x": 1880,
    "y": 488,
    "width": 115,
    "height": 25,
    "xoffset": -1,
    "yoffset": 9,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25097,
    "x": 0,
    "y": 515,
    "width": 170,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25098,
    "x": 180,
    "y": 515,
    "width": 75,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25099,
    "x": 260,
    "y": 515,
    "width": 175,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25100,
    "x": 450,
    "y": 515,
    "width": 250,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25101,
    "x": 711,
    "y": 515,
    "width": 200,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25102,
    "x": 910,
    "y": 515,
    "width": 250,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25103,
    "x": 1157,
    "y": 515,
    "width": 102,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25104,
    "x": 1260,
    "y": 515,
    "width": 250,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25105,
    "x": 1507,
    "y": 515,
    "width": 102,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25106,
    "x": 1614,
    "y": 515,
    "width": 210,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25107,
    "x": 1840,
    "y": 515,
    "width": 210,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25108,
    "x": 0,
    "y": 550,
    "width": 265,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25109,
    "x": 274,
    "y": 550,
    "width": 200,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25110,
    "x": 484,
    "y": 550,
    "width": 200,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25111,
    "x": 710,
    "y": 550,
    "width": 255,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25112,
    "x": 970,
    "y": 550,
    "width": 255,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25113,
    "x": 1240,
    "y": 550,
    "width": 240,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25114,
    "x": 1500,
    "y": 550,
    "width": 240,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25115,
    "x": 1770,
    "y": 550,
    "width": 240,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25116,
    "x": 0,
    "y": 575,
    "width": 150,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25117,
    "x": 158,
    "y": 575,
    "width": 170,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25118,
    "x": 335,
    "y": 575,
    "width": 150,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25119,
    "x": 490,
    "y": 575,
    "width": 150,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25120,
    "x": 650,
    "y": 575,
    "width": 205,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25121,
    "x": 870,
    "y": 575,
    "width": 200,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25122,
    "x": 1090,
    "y": 575,
    "width": 200,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25123,
    "x": 1300,
    "y": 575,
    "width": 180,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25124,
    "x": 1495,
    "y": 575,
    "width": 275,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25125,
    "x": 1773,
    "y": 575,
    "width": 275,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25126,
    "x": 0,
    "y": 605,
    "width": 265,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25127,
    "x": 160,
    "y": 605,
    "width": 105,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25128,
    "x": 277,
    "y": 605,
    "width": 200,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25129,
    "x": 485,
    "y": 605,
    "width": 195,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25130,
    "x": 690,
    "y": 605,
    "width": 170,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25131,
    "x": 870,
    "y": 605,
    "width": 170,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25132,
    "x": 1050,
    "y": 605,
    "width": 200,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25133,
    "x": 1265,
    "y": 605,
    "width": 280,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25134,
    "x": 1556,
    "y": 605,
    "width": 280,
    "height": 25,
    "xoffset": -1,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25135,
    "x": 0,
    "y": 640,
    "width": 250,
    "height": 25,
    "xoffset": -140,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25136,
    "x": 260,
    "y": 640,
    "width": 135,
    "height": 25,
    "xoffset": 10,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25137,
    "x": 415,
    "y": 640,
    "width": 100,
    "height": 25,
    "xoffset": -140,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25138,
    "x": 530,
    "y": 640,
    "width": 195,
    "height": 25,
    "xoffset": -140,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25139,
    "x": 745,
    "y": 640,
    "width": 100,
    "height": 25,
    "xoffset": -140,
    "yoffset": 4,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25140,
    "x": 850,
    "y": 640,
    "width": 105,
    "height": 25,
    "xoffset": -100,
    "yoffset": -2,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25141,
    "x": 970,
    "y": 640,
    "width": 35,
    "height": 25,
    "xoffset": -30,
    "yoffset": -2,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25142,
    "x": 1025,
    "y": 640,
    "width": 185,
    "height": 25,
    "xoffset": -120,
    "yoffset": -2,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 25152,
    "x": 1445,
    "y": 640,
    "width": 185,
    "height": 25,
    "xoffset": -120,
    "yoffset": 0,
    "page": 0,
    "xadvance": 0,
},
{
    "id": 32,
    "x": 0,
    "y": 0,
    "width": 0,
    "height": 0,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 33,
    "x": 386.5,
    "y": 159,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 34,
    "x": 397,
    "y": 159,
    "width": 9.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 35,
    "x": 407,
    "y": 159,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 36,
    "x": 211,
    "y": 212,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 37,
    "x": 421.5,
    "y": 159,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 38,
    "x": 440.5,
    "y": 159,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 39,
    "x": 459.5,
    "y": 159,
    "width": 7.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 40,
    "x": 467.5,
    "y": 159,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 41,
    "x": 477,
    "y": 159,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 42,
    "x": 486.5,
    "y": 159,
    "width": 11.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 43,
    "x": 0,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 44,
    "x": 15,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 45,
    "x": 24.5,
    "y": 185.5,
    "width": 11.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 46,
    "x": 36.5,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 47,
    "x": 46,
    "y": 185.5,
    "width": 11.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 48,
    "x": 346,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 49,
    "x": 485.5,
    "y": 212,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 50,
    "x": 361.5,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 51,
    "x": 377,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 52,
    "x": 392.5,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 53,
    "x": 408,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 54,
    "x": 423.5,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 55,
    "x": 439,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 56,
    "x": 454.5,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 57,
    "x": 470,
    "y": 212,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 58,
    "x": 58,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 59,
    "x": 67.5,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 60,
    "x": 77,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 61,
    "x": 92,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 62,
    "x": 107,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 63,
    "x": 122,
    "y": 185.5,
    "width": 12,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 64,
    "x": 241.5,
    "y": 212,
    "width": 19.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 65,
    "x": 0,
    "y": 0,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 66,
    "x": 18,
    "y": 0,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 67,
    "x": 33.5,
    "y": 0,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 68,
    "x": 50.5,
    "y": 0,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 69,
    "x": 68,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 70,
    "x": 82.5,
    "y": 0,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 71,
    "x": 95.5,
    "y": 0,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 72,
    "x": 112,
    "y": 0,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 73,
    "x": 129,
    "y": 0,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 74,
    "x": 139.5,
    "y": 0,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 75,
    "x": 150,
    "y": 0,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 76,
    "x": 167,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 77,
    "x": 181.5,
    "y": 0,
    "width": 20.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 78,
    "x": 202.5,
    "y": 0,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 79,
    "x": 220,
    "y": 0,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 80,
    "x": 239,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 81,
    "x": 327,
    "y": 212,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 82,
    "x": 253.5,
    "y": 0,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 83,
    "x": 270,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 84,
    "x": 284.5,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 85,
    "x": 299,
    "y": 0,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 86,
    "x": 316.5,
    "y": 0,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 87,
    "x": 333,
    "y": 0,
    "width": 22.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 88,
    "x": 356,
    "y": 0,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 89,
    "x": 373,
    "y": 0,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 90,
    "x": 388.5,
    "y": 0,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 91,
    "x": 134.5,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 92,
    "x": 144,
    "y": 185.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 93,
    "x": 158.5,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 94,
    "x": 168,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 95,
    "x": 183,
    "y": 185.5,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 96,
    "x": 200.5,
    "y": 185.5,
    "width": 11.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 97,
    "x": 404.5,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 98,
    "x": 419,
    "y": 0,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 99,
    "x": 435,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 100,
    "x": 449.5,
    "y": 0,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 101,
    "x": 465.5,
    "y": 0,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 102,
    "x": 480.5,
    "y": 0,
    "width": 11,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 103,
    "x": 492,
    "y": 0,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 104,
    "x": 0,
    "y": 26.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 105,
    "x": 15.5,
    "y": 26.5,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 106,
    "x": 26,
    "y": 26.5,
    "width": 9.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 107,
    "x": 36,
    "y": 26.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 108,
    "x": 51.5,
    "y": 26.5,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 109,
    "x": 62,
    "y": 26.5,
    "width": 20.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 110,
    "x": 83,
    "y": 26.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 111,
    "x": 98.5,
    "y": 26.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 112,
    "x": 114,
    "y": 26.5,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 113,
    "x": 130,
    "y": 26.5,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 114,
    "x": 146,
    "y": 26.5,
    "width": 12,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 115,
    "x": 158.5,
    "y": 26.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 116,
    "x": 172.5,
    "y": 26.5,
    "width": 11,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 117,
    "x": 184,
    "y": 26.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 118,
    "x": 199.5,
    "y": 26.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 119,
    "x": 213,
    "y": 26.5,
    "width": 19,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 120,
    "x": 232.5,
    "y": 26.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 121,
    "x": 247,
    "y": 26.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 122,
    "x": 261,
    "y": 26.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 123,
    "x": 212.5,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 124,
    "x": 222,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 125,
    "x": 237,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 126,
    "x": 246.5,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 160,
    "x": 275,
    "y": 26.5,
    "width": 9.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 161,
    "x": 261.5,
    "y": 185.5,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 162,
    "x": 285,
    "y": 26.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 164,
    "x": 272,
    "y": 185.5,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 166,
    "x": 285,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 167,
    "x": 300,
    "y": 185.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 169,
    "x": 261.5,
    "y": 212,
    "width": 20.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18.5
},
{
    "id": 170,
    "x": 313.5,
    "y": 185.5,
    "width": 10.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 171,
    "x": 324.5,
    "y": 185.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 172,
    "x": 338,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 174,
    "x": 282.5,
    "y": 212,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 176,
    "x": 353,
    "y": 185.5,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 177,
    "x": 363.5,
    "y": 185.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 180,
    "x": 378.5,
    "y": 185.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 187,
    "x": 392,
    "y": 185.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 191,
    "x": 405.5,
    "y": 185.5,
    "width": 11,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 192,
    "x": 300,
    "y": 26.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 193,
    "x": 318,
    "y": 26.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 194,
    "x": 336,
    "y": 26.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 195,
    "x": 354,
    "y": 26.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 196,
    "x": 372,
    "y": 26.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 197,
    "x": 390,
    "y": 26.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 198,
    "x": 408,
    "y": 26.5,
    "width": 22.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 199,
    "x": 431,
    "y": 26.5,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 200,
    "x": 447.5,
    "y": 26.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 201,
    "x": 461.5,
    "y": 26.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 202,
    "x": 475.5,
    "y": 26.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 203,
    "x": 489.5,
    "y": 26.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 204,
    "x": 0,
    "y": 53,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 205,
    "x": 10.5,
    "y": 53,
    "width": 11,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 206,
    "x": 22,
    "y": 53,
    "width": 11.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 207,
    "x": 34,
    "y": 53,
    "width": 11,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 209,
    "x": 45.5,
    "y": 53,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 210,
    "x": 63,
    "y": 53,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 211,
    "x": 82,
    "y": 53,
    "width": 18,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 212,
    "x": 100.5,
    "y": 53,
    "width": 18,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 213,
    "x": 119,
    "y": 53,
    "width": 19,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 214,
    "x": 138.5,
    "y": 53,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 215,
    "x": 417,
    "y": 185.5,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 216,
    "x": 157.5,
    "y": 53,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 217,
    "x": 176.5,
    "y": 53,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 218,
    "x": 193,
    "y": 53,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 219,
    "x": 210,
    "y": 53,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 220,
    "x": 226.5,
    "y": 53,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 221,
    "x": 243.5,
    "y": 53,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 223,
    "x": 259,
    "y": 53,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 224,
    "x": 274,
    "y": 53,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 225,
    "x": 289,
    "y": 53,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 226,
    "x": 304,
    "y": 53,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 227,
    "x": 319,
    "y": 53,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 228,
    "x": 334.5,
    "y": 53,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 229,
    "x": 349.5,
    "y": 53,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 230,
    "x": 364.5,
    "y": 53,
    "width": 20.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 231,
    "x": 385.5,
    "y": 53,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 232,
    "x": 399.5,
    "y": 53,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 233,
    "x": 413.5,
    "y": 53,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 234,
    "x": 427.5,
    "y": 53,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 235,
    "x": 441.5,
    "y": 53,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 236,
    "x": 456.5,
    "y": 53,
    "width": 9.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 237,
    "x": 466.5,
    "y": 53,
    "width": 10.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 238,
    "x": 477.5,
    "y": 53,
    "width": 11.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 239,
    "x": 489.5,
    "y": 53,
    "width": 11,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 241,
    "x": 0,
    "y": 79.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 242,
    "x": 15.5,
    "y": 79.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 243,
    "x": 30,
    "y": 79.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 244,
    "x": 44.5,
    "y": 79.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 245,
    "x": 59,
    "y": 79.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 246,
    "x": 74.5,
    "y": 79.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 248,
    "x": 89,
    "y": 79.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 249,
    "x": 104,
    "y": 79.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 250,
    "x": 119,
    "y": 79.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 251,
    "x": 134,
    "y": 79.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 252,
    "x": 149,
    "y": 79.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 253,
    "x": 164,
    "y": 79.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 255,
    "x": 178.5,
    "y": 79.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 258,
    "x": 193,
    "y": 79.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 260,
    "x": 211,
    "y": 79.5,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 261,
    "x": 229,
    "y": 79.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 262,
    "x": 244,
    "y": 79.5,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 263,
    "x": 260.5,
    "y": 79.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 268,
    "x": 274,
    "y": 79.5,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 269,
    "x": 290.5,
    "y": 79.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 270,
    "x": 304,
    "y": 79.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 271,
    "x": 321,
    "y": 79.5,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 280,
    "x": 338.5,
    "y": 79.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 281,
    "x": 352.5,
    "y": 79.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 313,
    "x": 366.5,
    "y": 79.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 314,
    "x": 380.5,
    "y": 79.5,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 323,
    "x": 391,
    "y": 79.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 324,
    "x": 408,
    "y": 79.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 327,
    "x": 423.5,
    "y": 79.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 328,
    "x": 440.5,
    "y": 79.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 336,
    "x": 456,
    "y": 79.5,
    "width": 18,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 337,
    "x": 474.5,
    "y": 79.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 338,
    "x": 489,
    "y": 79.5,
    "width": 21,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 339,
    "x": 0,
    "y": 106,
    "width": 21.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 340,
    "x": 22,
    "y": 106,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 341,
    "x": 38.5,
    "y": 106,
    "width": 11.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 346,
    "x": 50.5,
    "y": 106,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 347,
    "x": 65,
    "y": 106,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 350,
    "x": 78.5,
    "y": 106,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 352,
    "x": 93,
    "y": 106,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 353,
    "x": 107.5,
    "y": 106,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 354,
    "x": 121,
    "y": 106,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 356,
    "x": 135.5,
    "y": 106,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 357,
    "x": 150,
    "y": 106,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 368,
    "x": 165,
    "y": 106,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 369,
    "x": 181.5,
    "y": 106,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 376,
    "x": 196.5,
    "y": 106,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 377,
    "x": 212,
    "y": 106,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 378,
    "x": 228,
    "y": 106,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 379,
    "x": 242,
    "y": 106,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 380,
    "x": 258,
    "y": 106,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 381,
    "x": 272,
    "y": 106,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 382,
    "x": 288,
    "y": 106,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1025,
    "x": 302,
    "y": 106,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1040,
    "x": 316.5,
    "y": 106,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1041,
    "x": 334.5,
    "y": 106,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1042,
    "x": 350,
    "y": 106,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1043,
    "x": 365.5,
    "y": 106,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 1044,
    "x": 378.5,
    "y": 106,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1045,
    "x": 396,
    "y": 106,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1046,
    "x": 410.5,
    "y": 106,
    "width": 22.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1047,
    "x": 433.5,
    "y": 106,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1048,
    "x": 448.5,
    "y": 106,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1049,
    "x": 466,
    "y": 106,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1050,
    "x": 483.5,
    "y": 106,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1051,
    "x": 0,
    "y": 132.5,
    "width": 17,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1052,
    "x": 17.5,
    "y": 132.5,
    "width": 20.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1053,
    "x": 38.5,
    "y": 132.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1054,
    "x": 55.5,
    "y": 132.5,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1055,
    "x": 74.5,
    "y": 132.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1056,
    "x": 91.5,
    "y": 132.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1057,
    "x": 106,
    "y": 132.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1058,
    "x": 123,
    "y": 132.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1059,
    "x": 137.5,
    "y": 132.5,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1060,
    "x": 154,
    "y": 132.5,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1061,
    "x": 173,
    "y": 132.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1062,
    "x": 190,
    "y": 132.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1063,
    "x": 207,
    "y": 132.5,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1064,
    "x": 223.5,
    "y": 132.5,
    "width": 21,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1065,
    "x": 245,
    "y": 132.5,
    "width": 21,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15
},
{
    "id": 1066,
    "x": 266.5,
    "y": 132.5,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1067,
    "x": 282.5,
    "y": 132.5,
    "width": 19.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1068,
    "x": 302.5,
    "y": 132.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1069,
    "x": 317,
    "y": 132.5,
    "width": 16.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1070,
    "x": 334,
    "y": 132.5,
    "width": 23,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1071,
    "x": 357.5,
    "y": 132.5,
    "width": 16,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1072,
    "x": 374,
    "y": 132.5,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1073,
    "x": 388.5,
    "y": 132.5,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1074,
    "x": 404,
    "y": 132.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1075,
    "x": 419,
    "y": 132.5,
    "width": 12,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 1076,
    "x": 431.5,
    "y": 132.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1077,
    "x": 446.5,
    "y": 132.5,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1078,
    "x": 461.5,
    "y": 132.5,
    "width": 19.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1079,
    "x": 481.5,
    "y": 132.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 1080,
    "x": 495,
    "y": 132.5,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1081,
    "x": 0,
    "y": 159,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1082,
    "x": 16,
    "y": 159,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1083,
    "x": 31.5,
    "y": 159,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1084,
    "x": 46,
    "y": 159,
    "width": 17.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1085,
    "x": 64,
    "y": 159,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1086,
    "x": 79.5,
    "y": 159,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1087,
    "x": 95,
    "y": 159,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1088,
    "x": 110.5,
    "y": 159,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1089,
    "x": 126.5,
    "y": 159,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1090,
    "x": 141,
    "y": 159,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1091,
    "x": 155,
    "y": 159,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1092,
    "x": 169,
    "y": 159,
    "width": 20.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1093,
    "x": 190,
    "y": 159,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1094,
    "x": 204.5,
    "y": 159,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1095,
    "x": 220,
    "y": 159,
    "width": 15,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1096,
    "x": 235.5,
    "y": 159,
    "width": 19,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1097,
    "x": 255,
    "y": 159,
    "width": 19,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1098,
    "x": 274.5,
    "y": 159,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1099,
    "x": 289,
    "y": 159,
    "width": 18.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 1100,
    "x": 308,
    "y": 159,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1101,
    "x": 322,
    "y": 159,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1102,
    "x": 336.5,
    "y": 159,
    "width": 19.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1103,
    "x": 356.5,
    "y": 159,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1105,
    "x": 371.5,
    "y": 159,
    "width": 14.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1523,
    "x": 430,
    "y": 185.5,
    "width": 7,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 1524,
    "x": 437.5,
    "y": 185.5,
    "width": 10,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 8211,
    "x": 448,
    "y": 185.5,
    "width": 13.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 8212,
    "x": 462,
    "y": 185.5,
    "width": 21.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 8217,
    "x": 484,
    "y": 185.5,
    "width": 9,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 8220,
    "x": 493.5,
    "y": 185.5,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 8221,
    "x": 0,
    "y": 212,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 8222,
    "x": 13.5,
    "y": 212,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 8226,
    "x": 27,
    "y": 212,
    "width": 13,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 8230,
    "x": 40.5,
    "y": 212,
    "width": 21.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19.5
},
{
    "id": 8232,
    "x": 62.5,
    "y": 212,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 8364,
    "x": 227,
    "y": 212,
    "width": 14,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 8470,
    "x": 301.5,
    "y": 212,
    "width": 25,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 22.5
},
{
    "id": 12289,
    "x": 75.5,
    "y": 212,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 65281,
    "x": 91.5,
    "y": 212,
    "width": 21,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 65286,
    "x": 113,
    "y": 212,
    "width": 21,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
},
{
    "id": 65288,
    "x": 134.5,
    "y": 212,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 65289,
    "x": 147.5,
    "y": 212,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 65292,
    "x": 160.5,
    "y": 212,
    "width": 15.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 65306,
    "x": 176.5,
    "y": 212,
    "width": 12.5,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 65311,
    "x": 189.5,
    "y": 212,
    "width": 21,
    "height": 26,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 19
}];
UI.fonts.soldier_font6 = [
{
    "id": 33,
    "x": 0,
    "y": 0,
    "width": 12.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 34,
    "x": 13,
    "y": 0,
    "width": 12,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8
},
{
    "id": 35,
    "x": 25.5,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 36,
    "x": 42.5,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 37,
    "x": 59.5,
    "y": 0,
    "width": 22,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 38,
    "x": 82,
    "y": 0,
    "width": 22,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 39,
    "x": 104.5,
    "y": 0,
    "width": 9.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 6.5
},
{
    "id": 40,
    "x": 114.5,
    "y": 0,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 41,
    "x": 126,
    "y": 0,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 42,
    "x": 137.5,
    "y": 0,
    "width": 14,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 43,
    "x": 152,
    "y": 0,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 44,
    "x": 170,
    "y": 0,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 45,
    "x": 181.5,
    "y": 0,
    "width": 14.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 46,
    "x": 196.5,
    "y": 0,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 47,
    "x": 208,
    "y": 0,
    "width": 14.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 48,
    "x": 223,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 49,
    "x": 240,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 50,
    "x": 257,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 51,
    "x": 274,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 52,
    "x": 291,
    "y": 0,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 53,
    "x": 308.5,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 54,
    "x": 325.5,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 55,
    "x": 342.5,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 56,
    "x": 359.5,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 57,
    "x": 376.5,
    "y": 0,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 58,
    "x": 393.5,
    "y": 0,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 59,
    "x": 405,
    "y": 0,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 60,
    "x": 416.5,
    "y": 0,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 61,
    "x": 434.5,
    "y": 0,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 62,
    "x": 452.5,
    "y": 0,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 63,
    "x": 470.5,
    "y": 0,
    "width": 14.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 64,
    "x": 485.5,
    "y": 0,
    "width": 21,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 65,
    "x": 0,
    "y": 28,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 66,
    "x": 20.5,
    "y": 28,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 67,
    "x": 38,
    "y": 28,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 68,
    "x": 57,
    "y": 28,
    "width": 19,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 69,
    "x": 76.5,
    "y": 28,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 70,
    "x": 92.5,
    "y": 28,
    "width": 14,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 71,
    "x": 107,
    "y": 28,
    "width": 18,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 72,
    "x": 125.5,
    "y": 28,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 73,
    "x": 144.5,
    "y": 28,
    "width": 11.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 74,
    "x": 156.5,
    "y": 28,
    "width": 11.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 75,
    "x": 168.5,
    "y": 28,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 76,
    "x": 187.5,
    "y": 28,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 77,
    "x": 203.5,
    "y": 28,
    "width": 23,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 78,
    "x": 227,
    "y": 28,
    "width": 19.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 79,
    "x": 247,
    "y": 28,
    "width": 21,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 80,
    "x": 268.5,
    "y": 28,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 81,
    "x": 285,
    "y": 28,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 82,
    "x": 305.5,
    "y": 28,
    "width": 18,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 83,
    "x": 324,
    "y": 28,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 84,
    "x": 340.5,
    "y": 28,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 85,
    "x": 356.5,
    "y": 28,
    "width": 19,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 86,
    "x": 376,
    "y": 28,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 87,
    "x": 395,
    "y": 28,
    "width": 25.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 88,
    "x": 421,
    "y": 28,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 89,
    "x": 440,
    "y": 28,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 90,
    "x": 457,
    "y": 28,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 91,
    "x": 475,
    "y": 28,
    "width": 11.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 92,
    "x": 487,
    "y": 28,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 93,
    "x": 0,
    "y": 56,
    "width": 11.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 94,
    "x": 12,
    "y": 56,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 95,
    "x": 30,
    "y": 56,
    "width": 20.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 97,
    "x": 51,
    "y": 56,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 98,
    "x": 67.5,
    "y": 56,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 99,
    "x": 85.5,
    "y": 56,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 100,
    "x": 101.5,
    "y": 56,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 101,
    "x": 119.5,
    "y": 56,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 102,
    "x": 136.5,
    "y": 56,
    "width": 12.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 103,
    "x": 149.5,
    "y": 56,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 104,
    "x": 166,
    "y": 56,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 105,
    "x": 183.5,
    "y": 56,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 106,
    "x": 195,
    "y": 56,
    "width": 10.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 107,
    "x": 206,
    "y": 56,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 108,
    "x": 223,
    "y": 56,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 109,
    "x": 234.5,
    "y": 56,
    "width": 23,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 110,
    "x": 258,
    "y": 56,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 111,
    "x": 275.5,
    "y": 56,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 112,
    "x": 293,
    "y": 56,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 113,
    "x": 311,
    "y": 56,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 114,
    "x": 329,
    "y": 56,
    "width": 13.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 115,
    "x": 343,
    "y": 56,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 116,
    "x": 358.5,
    "y": 56,
    "width": 12.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 117,
    "x": 371.5,
    "y": 56,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 118,
    "x": 389,
    "y": 56,
    "width": 14.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 119,
    "x": 404,
    "y": 56,
    "width": 21.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 120,
    "x": 426,
    "y": 56,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 121,
    "x": 442.5,
    "y": 56,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 122,
    "x": 458,
    "y": 56,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 123,
    "x": 473.5,
    "y": 56,
    "width": 11.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 125,
    "x": 485.5,
    "y": 56,
    "width": 11.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 126,
    "x": 0,
    "y": 84,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 160,
    "x": 18,
    "y": 84,
    "width": 10.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7
},
{
    "id": 161,
    "x": 29,
    "y": 84,
    "width": 12.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 162,
    "x": 42,
    "y": 84,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 169,
    "x": 59,
    "y": 84,
    "width": 22,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 171,
    "x": 81.5,
    "y": 84,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 173,
    "x": 98,
    "y": 84,
    "width": 14.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 174,
    "x": 113,
    "y": 84,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 177,
    "x": 133.5,
    "y": 84,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 180,
    "x": 151.5,
    "y": 84,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 181,
    "x": 167.5,
    "y": 84,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 187,
    "x": 185,
    "y": 84,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 191,
    "x": 201.5,
    "y": 84,
    "width": 14,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 193,
    "x": 216,
    "y": 84,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 195,
    "x": 236.5,
    "y": 84,
    "width": 19.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 196,
    "x": 256.5,
    "y": 84,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 197,
    "x": 277,
    "y": 84,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 201,
    "x": 297.5,
    "y": 84,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 202,
    "x": 313.5,
    "y": 84,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 203,
    "x": 329.5,
    "y": 84,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 209,
    "x": 345,
    "y": 84,
    "width": 19.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13
},
{
    "id": 211,
    "x": 365,
    "y": 84,
    "width": 20.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 214,
    "x": 386,
    "y": 84,
    "width": 21,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 217,
    "x": 407.5,
    "y": 84,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 223,
    "x": 426.5,
    "y": 84,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 224,
    "x": 443.5,
    "y": 84,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 225,
    "x": 460,
    "y": 84,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 226,
    "x": 477,
    "y": 84,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 227,
    "x": 494,
    "y": 84,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 228,
    "x": 0,
    "y": 112,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 229,
    "x": 17,
    "y": 112,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 231,
    "x": 34,
    "y": 112,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 232,
    "x": 49.5,
    "y": 112,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 233,
    "x": 65,
    "y": 112,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 234,
    "x": 81,
    "y": 112,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 235,
    "x": 97,
    "y": 112,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 237,
    "x": 114,
    "y": 112,
    "width": 11.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 238,
    "x": 126,
    "y": 112,
    "width": 13,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 8.5
},
{
    "id": 241,
    "x": 139.5,
    "y": 112,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 243,
    "x": 157,
    "y": 112,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 245,
    "x": 173.5,
    "y": 112,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 246,
    "x": 191,
    "y": 112,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 249,
    "x": 207.5,
    "y": 112,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 251,
    "x": 224.5,
    "y": 112,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 252,
    "x": 241,
    "y": 112,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1040,
    "x": 258,
    "y": 112,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1041,
    "x": 278.5,
    "y": 112,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1042,
    "x": 296,
    "y": 112,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1043,
    "x": 313.5,
    "y": 112,
    "width": 14,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1044,
    "x": 328,
    "y": 112,
    "width": 19,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1045,
    "x": 347.5,
    "y": 112,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1046,
    "x": 363.5,
    "y": 112,
    "width": 25.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 1047,
    "x": 389.5,
    "y": 112,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1048,
    "x": 406.5,
    "y": 112,
    "width": 19,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1049,
    "x": 426,
    "y": 112,
    "width": 19,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1050,
    "x": 445.5,
    "y": 112,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1051,
    "x": 464.5,
    "y": 112,
    "width": 19,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1052,
    "x": 484,
    "y": 112,
    "width": 23,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1053,
    "x": 0,
    "y": 140,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1054,
    "x": 19,
    "y": 140,
    "width": 21,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1055,
    "x": 40.5,
    "y": 140,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1056,
    "x": 59.5,
    "y": 140,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1057,
    "x": 76,
    "y": 140,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1058,
    "x": 95,
    "y": 140,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1059,
    "x": 111,
    "y": 140,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1061,
    "x": 130,
    "y": 140,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1063,
    "x": 149,
    "y": 140,
    "width": 18,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1064,
    "x": 167.5,
    "y": 140,
    "width": 24,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1065,
    "x": 192,
    "y": 140,
    "width": 24,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16
},
{
    "id": 1067,
    "x": 216.5,
    "y": 140,
    "width": 22,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1068,
    "x": 239,
    "y": 140,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1069,
    "x": 255.5,
    "y": 140,
    "width": 18.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12.5
},
{
    "id": 1071,
    "x": 274.5,
    "y": 140,
    "width": 18,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 1072,
    "x": 293,
    "y": 140,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1073,
    "x": 309.5,
    "y": 140,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1074,
    "x": 327,
    "y": 140,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1075,
    "x": 344,
    "y": 140,
    "width": 13.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9
},
{
    "id": 1076,
    "x": 358,
    "y": 140,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1077,
    "x": 375,
    "y": 140,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1078,
    "x": 392,
    "y": 140,
    "width": 22,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1079,
    "x": 414.5,
    "y": 140,
    "width": 14.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 9.5
},
{
    "id": 1080,
    "x": 429.5,
    "y": 140,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1081,
    "x": 447.5,
    "y": 140,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1082,
    "x": 465.5,
    "y": 140,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1083,
    "x": 482.5,
    "y": 140,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1084,
    "x": 0,
    "y": 168,
    "width": 20,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 13.5
},
{
    "id": 1085,
    "x": 20.5,
    "y": 168,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1086,
    "x": 38,
    "y": 168,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1087,
    "x": 55.5,
    "y": 168,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1088,
    "x": 73,
    "y": 168,
    "width": 17.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1089,
    "x": 91,
    "y": 168,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1090,
    "x": 107,
    "y": 168,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1091,
    "x": 122.5,
    "y": 168,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1092,
    "x": 138,
    "y": 168,
    "width": 23.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 15.5
},
{
    "id": 1093,
    "x": 162,
    "y": 168,
    "width": 16,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1094,
    "x": 178.5,
    "y": 168,
    "width": 17,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11.5
},
{
    "id": 1095,
    "x": 196,
    "y": 168,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1096,
    "x": 213,
    "y": 168,
    "width": 21.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1097,
    "x": 235,
    "y": 168,
    "width": 21.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1099,
    "x": 257,
    "y": 168,
    "width": 21,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14
},
{
    "id": 1100,
    "x": 278.5,
    "y": 168,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 1101,
    "x": 294,
    "y": 168,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 1102,
    "x": 310,
    "y": 168,
    "width": 22,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 14.5
},
{
    "id": 1103,
    "x": 332.5,
    "y": 168,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 1105,
    "x": 349.5,
    "y": 168,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8211,
    "x": 366.5,
    "y": 168,
    "width": 16.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 11
},
{
    "id": 8212,
    "x": 383.5,
    "y": 168,
    "width": 25.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 17
},
{
    "id": 8217,
    "x": 409.5,
    "y": 168,
    "width": 11,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 7.5
},
{
    "id": 8220,
    "x": 421,
    "y": 168,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 8221,
    "x": 437,
    "y": 168,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 8222,
    "x": 453,
    "y": 168,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 8226,
    "x": 469,
    "y": 168,
    "width": 15.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10.5
},
{
    "id": 8232,
    "x": 485,
    "y": 168,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 8470,
    "x": 0,
    "y": 196,
    "width": 27,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 18
},
{
    "id": 12289,
    "x": 27.5,
    "y": 196,
    "width": 18,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 65281,
    "x": 46,
    "y": 196,
    "width": 24.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 65286,
    "x": 71,
    "y": 196,
    "width": 24.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
},
{
    "id": 65288,
    "x": 96,
    "y": 196,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 65289,
    "x": 111.5,
    "y": 196,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 65292,
    "x": 127,
    "y": 196,
    "width": 18,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 12
},
{
    "id": 65306,
    "x": 145.5,
    "y": 196,
    "width": 15,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 10
},
{
    "id": 65311,
    "x": 161,
    "y": 196,
    "width": 24.5,
    "height": 27.5,
    "xoffset": 0,
    "yoffset": 0,
    "page": 0,
    "xadvance": 16.5
}];
var ASSETS = [{
    "name": "fonts/font_shilda",
    "src": "fonts/font_shilda.png",
    "frames": 1,
    "layers": 1,
    "width": 64,
    "height": 64
},
{
    "name": "fonts/font_shilda1",
    "src": "fonts/font_shilda1.png",
    "frames": 1,
    "layers": 1,
    "width": 64,
    "height": 64
},
{
    "name": "fonts/font_shilda1_disabled",
    "src": "fonts/font_shilda1_disabled.png",
    "frames": 1,
    "layers": 1,
    "width": 64,
    "height": 64
},
{
    "name": "fonts/number_font",
    "src": "fonts/number_font.png",
    "frames": 1,
    "layers": 1,
    "width": 256,
    "height": 256
},
{
    "name": "fonts/number_font_small",
    "src": "fonts/number_font_small.png",
    "frames": 1,
    "layers": 1,
    "width": 128,
    "height": 128
},
{
    "name": "fonts/soldier_font1",
    "src": "fonts/soldier_font1.png",
    "frames": 1,
    "layers": 1,
    "width": 512,
    "height": 256
},
{
    "name": "fonts/soldier_font3",
    "src": "fonts/soldier_font3.png",
    "frames": 1,
    "layers": 1,
    "width": 512,
    "height": 512
},
{
    "name": "fonts/soldier_font4",
    "src": "fonts/soldier_font4.png",
    "frames": 1,
    "layers": 1,
    "width": 512,
    "height": 512
},
{
    "name": "fonts/soldier_font4_small",
    "src": "fonts/soldier_font4_small.png",
    "frames": 1,
    "layers": 1,
    "width": 256,
    "height": 256
},
{
    "name": "fonts/soldier_font5",
    "src": "fonts/soldier_font5.png",
    "frames": 1,
    "layers": 1,
    "width": 512,
    "height": 256
},
{
    "name": "fonts/soldier_font5_rect",
    "src": "fonts/soldier_font5_rect.png",
    "frames": 1,
    "layers": 1,
    "width": 512,
    "height": 256
},
{
    "name": "comics/anim",
    "src": "comics/anim.png",
    "frames": 2,
    "layers": 1,
    "width": 152,
    "height": 123
},
{
    "name": "comics/back",
    "src": "comics/back.jpg",
    "frames": 1,
    "layers": 1,
    "width": 683,
    "height": 384
},
{
    "name": "particles/back_glow",
    "src": "particles/back_glow.png",
    "frames": 9,
    "layers": 9,
    "width": 70,
    "height": 70
},
{
    "name": "particles/fire",
    "src": "particles/fire.png",
    "frames": 9,
    "layers": 9,
    "width": 70,
    "height": 70
},
{
    "name": "mainmenu/background_0",
    "src": "mainmenu/background_0.png",
    "frames": 1,
    "layers": 1,
    "width": 683,
    "height": 384
},
{
    "name": "mainmenu/logo_btns_0",
    "src": "mainmenu/logo_btns_0.png",
    "frames": 1,
    "layers": 1,
    "width": 440,
    "height": 230
},
{
    "name": "mainmenu/main_button_0",
    "src": "mainmenu/main_button_0.png",
    "frames": 1,
    "layers": 1,
    "width": 121,
    "height": 51
},
{
    "name": "mainmenu/logo_text",
    "src": "mainmenu/logo_text.png",
    "frames": 1,
    "layers": 1,
    "width": 175,
    "height": 61
},
{
    "name": "missionselector/background_1",
    "src": "missionselector/background_1.png",
    "frames": 1,
    "layers": 1,
    "width": 683,
    "height": 384
},
{
    "name": "missionselector/background_2",
    "src": "missionselector/background_2.png",
    "frames": 1,
    "layers": 5,
    "width": 67,
    "height": 64
},
{
    "name": "missionselector/dots_0",
    "src": "missionselector/dots_0.png",
    "frames": 1,
    "layers": 2,
    "width": 15,
    "height": 15
},
{
    "name": "missionselector/worlds_icons_0",
    "src": "missionselector/worlds_icons_0.png",
    "frames": 1,
    "layers": 1,
    "width": 128,
    "height": 128
},
{
    "name": "missionselector/worlds_icons_1",
    "src": "missionselector/worlds_icons_1.png",
    "frames": 1,
    "layers": 1,
    "width": 128,
    "height": 128
},
{
    "name": "missionselector/worlds_icons_2",
    "src": "missionselector/worlds_icons_2.png",
    "frames": 1,
    "layers": 1,
    "width": 128,
    "height": 128
},
{
    "name": "missionselector/worlds_icons_3",
    "src": "missionselector/worlds_icons_3.png",
    "frames": 1,
    "layers": 1,
    "width": 128,
    "height": 128
},
{
    "name": "missionselector/worlds_icons_8",
    "src": "missionselector/worlds_icons_8.png",
    "frames": 1,
    "layers": 1,
    "width": 128,
    "height": 128
},
{
    "name": "shop/background_0",
    "src": "shop/background_0.png",
    "frames": 1,
    "layers": 1,
    "width": 683,
    "height": 384
},
{
    "name": "shop/panel_towers_0",
    "src": "shop/panel_towers_0.png",
    "frames": 1,
    "layers": 3,
    "width": 15,
    "height": 17
},
{
    "name": "shop/panel_towers_1",
    "src": "shop/panel_towers_1.png",
    "frames": 1,
    "layers": 3,
    "width": 18,
    "height": 22
},
{
    "name": "shop/panel_towers_10",
    "src": "shop/panel_towers_10.png",
    "frames": 1,
    "layers": 1,
    "width": 20,
    "height": 20
},
{
    "name": "shop/panel_towers_11",
    "src": "shop/panel_towers_11.png",
    "frames": 1,
    "layers": 1,
    "width": 20,
    "height": 20
},
{
    "name": "shop/panel_towers_12",
    "src": "shop/panel_towers_12.png",
    "frames": 1,
    "layers": 1,
    "width": 20,
    "height": 20
},
{
    "name": "shop/panel_towers_13",
    "src": "shop/panel_towers_13.png",
    "frames": 1,
    "layers": 1,
    "width": 51,
    "height": 120
},
{
    "name": "shop/panel_towers_14",
    "src": "shop/panel_towers_14.png",
    "frames": 1,
    "layers": 1,
    "width": 44,
    "height": 44
},
{
    "name": "shop/panel_towers_15",
    "src": "shop/panel_towers_15.png",
    "frames": 1,
    "layers": 1,
    "width": 44,
    "height": 44
},
{
    "name": "shop/panel_towers_16",
    "src": "shop/panel_towers_16.png",
    "frames": 1,
    "layers": 1,
    "width": 35,
    "height": 16
},
{
    "name": "shop/panel_towers_17",
    "src": "shop/panel_towers_17.png",
    "frames": 1,
    "layers": 1,
    "width": 34,
    "height": 103
},
{
    "name": "shop/panel_towers_19",
    "src": "shop/panel_towers_19.png",
    "frames": 1,
    "layers": 1,
    "width": 51,
    "height": 110
},
{
    "name": "shop/panel_towers_2",
    "src": "shop/panel_towers_2.png",
    "frames": 1,
    "layers": 3,
    "width": 15,
    "height": 17
},
{
    "name": "shop/panel_towers_20",
    "src": "shop/panel_towers_20.png",
    "frames": 1,
    "layers": 1,
    "width": 52,
    "height": 75
},
{
    "name": "shop/panel_towers_21",
    "src": "shop/panel_towers_21.png",
    "frames": 1,
    "layers": 1,
    "width": 34,
    "height": 104
},
{
    "name": "shop/panel_towers_22",
    "src": "shop/panel_towers_22.png",
    "frames": 1,
    "layers": 1,
    "width": 35,
    "height": 16
},
{
    "name": "shop/panel_towers_23",
    "src": "shop/panel_towers_23.png",
    "frames": 1,
    "layers": 1,
    "width": 51,
    "height": 125
},
{
    "name": "shop/panel_towers_3",
    "src": "shop/panel_towers_3.png",
    "frames": 1,
    "layers": 3,
    "width": 18,
    "height": 22
},
{
    "name": "shop/panel_towers_35",
    "src": "shop/panel_towers_35.png",
    "frames": 1,
    "layers": 1,
    "width": 110,
    "height": 260
},
{
    "name": "shop/panel_towers_36",
    "src": "shop/panel_towers_36.png",
    "frames": 1,
    "layers": 1,
    "width": 110,
    "height": 230
},
{
    "name": "shop/panel_towers_37",
    "src": "shop/panel_towers_37.png",
    "frames": 1,
    "layers": 1,
    "width": 110,
    "height": 270
},
{
    "name": "shop/panel_towers_38",
    "src": "shop/panel_towers_38.png",
    "frames": 1,
    "layers": 1,
    "width": 110,
    "height": 230
},
{
    "name": "shop/panel_towers_39",
    "src": "shop/panel_towers_39.png",
    "frames": 1,
    "layers": 1,
    "width": 110,
    "height": 220
},
{
    "name": "shop/panel_towers_4",
    "src": "shop/panel_towers_4.png",
    "frames": 1,
    "layers": 3,
    "width": 15,
    "height": 17
},
{
    "name": "shop/panel_towers_5",
    "src": "shop/panel_towers_5.png",
    "frames": 1,
    "layers": 3,
    "width": 18,
    "height": 22
},
{
    "name": "shop/panel_towers_6",
    "src": "shop/panel_towers_6.png",
    "frames": 1,
    "layers": 3,
    "width": 15,
    "height": 17
},
{
    "name": "shop/panel_towers_7",
    "src": "shop/panel_towers_7.png",
    "frames": 1,
    "layers": 3,
    "width": 18,
    "height": 22
},
{
    "name": "shop/panel_towers_9",
    "src": "shop/panel_towers_9.png",
    "frames": 1,
    "layers": 1,
    "width": 50,
    "height": 50
},
{
    "name": "shop/panel_towers_13_d",
    "src": "shop/panel_towers_13_d.png",
    "frames": 1,
    "layers": 1,
    "width": 51,
    "height": 120
},
{
    "name": "shop/panel_towers_14_d",
    "src": "shop/panel_towers_14_d.png",
    "frames": 1,
    "layers": 1,
    "width": 44,
    "height": 44
},
{
    "name": "shop/panel_towers_16_d",
    "src": "shop/panel_towers_16_d.png",
    "frames": 1,
    "layers": 1,
    "width": 35,
    "height": 16
},
{
    "name": "shop/panel_towers_17_d",
    "src": "shop/panel_towers_17_d.png",
    "frames": 1,
    "layers": 1,
    "width": 34,
    "height": 103
},
{
    "name": "shop/panel_towers_19_d",
    "src": "shop/panel_towers_19_d.png",
    "frames": 1,
    "layers": 1,
    "width": 51,
    "height": 110
},
{
    "name": "shop/panel_towers_20_d",
    "src": "shop/panel_towers_20_d.png",
    "frames": 1,
    "layers": 1,
    "width": 52,
    "height": 75
},
{
    "name": "shop/panel_towers_21_d",
    "src": "shop/panel_towers_21_d.png",
    "frames": 1,
    "layers": 1,
    "width": 34,
    "height": 104
},
{
    "name": "shop/panel_towers_22_d",
    "src": "shop/panel_towers_22_d.png",
    "frames": 1,
    "layers": 1,
    "width": 35,
    "height": 16
},
{
    "name": "shop/panel_towers_23_d",
    "src": "shop/panel_towers_23_d.png",
    "frames": 1,
    "layers": 1,
    "width": 51,
    "height": 125
},
{
    "name": "common/icons_perks_0",
    "src": "common/icons_perks_0.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_1",
    "src": "common/icons_perks_1.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_10",
    "src": "common/icons_perks_10.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_11",
    "src": "common/icons_perks_11.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_12",
    "src": "common/icons_perks_12.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_13",
    "src": "common/icons_perks_13.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_14",
    "src": "common/icons_perks_14.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_15",
    "src": "common/icons_perks_15.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_16",
    "src": "common/icons_perks_16.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_17",
    "src": "common/icons_perks_17.png",
    "frames": 1,
    "layers": 1,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_18",
    "src": "common/icons_perks_18.png",
    "frames": 1,
    "layers": 1,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_19",
    "src": "common/icons_perks_19.png",
    "frames": 1,
    "layers": 1,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_2",
    "src": "common/icons_perks_2.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_20",
    "src": "common/icons_perks_20.png",
    "frames": 1,
    "layers": 1,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_21",
    "src": "common/icons_perks_21.png",
    "frames": 1,
    "layers": 1,
    "width": 44,
    "height": 44
},
{
    "name": "common/icons_perks_3",
    "src": "common/icons_perks_3.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_4",
    "src": "common/icons_perks_4.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_5",
    "src": "common/icons_perks_5.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_6",
    "src": "common/icons_perks_6.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_7",
    "src": "common/icons_perks_7.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_8",
    "src": "common/icons_perks_8.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/icons_perks_9",
    "src": "common/icons_perks_9.png",
    "frames": 1,
    "layers": 2,
    "width": 39,
    "height": 39
},
{
    "name": "common/notifications_10",
    "src": "common/notifications_10.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_11",
    "src": "common/notifications_11.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_12",
    "src": "common/notifications_12.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_13",
    "src": "common/notifications_13.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_14",
    "src": "common/notifications_14.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_15",
    "src": "common/notifications_15.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_16",
    "src": "common/notifications_16.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_17",
    "src": "common/notifications_17.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_18",
    "src": "common/notifications_18.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_3",
    "src": "common/notifications_3.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_4",
    "src": "common/notifications_4.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_5",
    "src": "common/notifications_5.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_6",
    "src": "common/notifications_6.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_7",
    "src": "common/notifications_7.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_8",
    "src": "common/notifications_8.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/notifications_9",
    "src": "common/notifications_9.png",
    "frames": 1,
    "layers": 1,
    "width": 31,
    "height": 31
},
{
    "name": "common/buttons/button_close",
    "src": "common/buttons/button_close.png",
    "frames": 1,
    "layers": 1,
    "width": 41,
    "height": 42
},
{
    "name": "common/buttons/button_confirm_no",
    "src": "common/buttons/button_confirm_no.png",
    "frames": 1,
    "layers": 1,
    "width": 50,
    "height": 36
},
{
    "name": "common/buttons/button_medium_long",
    "src": "common/buttons/button_medium_long.png",
    "frames": 1,
    "layers": 1,
    "width": 144,
    "height": 37
},
{
    "name": "common/buttons/button_medium_square",
    "src": "common/buttons/button_medium_square.png",
    "frames": 1,
    "layers": 1,
    "width": 55,
    "height": 55
},
{
    "name": "common/buttons/button_shop_small",
    "src": "common/buttons/button_shop_small.png",
    "frames": 1,
    "layers": 1,
    "width": 99,
    "height": 37
},
{
    "name": "common/scroll_bg",
    "src": "common/scroll_bg.png",
    "frames": 1,
    "layers": 1,
    "width": 19,
    "height": 166
},
{
    "name": "common/scroll_point",
    "src": "common/scroll_point.png",
    "frames": 1,
    "layers": 1,
    "width": 23,
    "height": 24
},
{
    "name": "common/checkbox",
    "src": "common/checkbox.png",
    "frames": 2,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "common/tower_hint",
    "src": "common/tower_hint.png",
    "frames": 1,
    "layers": 1,
    "width": 27,
    "height": 35
},
{
    "name": "common/hint_arrow",
    "src": "common/hint_arrow.png",
    "frames": 1,
    "layers": 1,
    "width": 13,
    "height": 17
},
{
    "name": "dialogs/achives",
    "src": "dialogs/achives.png",
    "frames": 1,
    "layers": 1,
    "width": 387,
    "height": 229
},
{
    "name": "dialogs/loose",
    "src": "dialogs/loose.png",
    "frames": 1,
    "layers": 1,
    "width": 279,
    "height": 199
},
{
    "name": "dialogs/message",
    "src": "dialogs/message.png",
    "frames": 1,
    "layers": 1,
    "width": 225,
    "height": 114
},
{
    "name": "dialogs/options",
    "src": "dialogs/options.png",
    "frames": 1,
    "layers": 1,
    "width": 350,
    "height": 188
},
{
    "name": "dialogs/win",
    "src": "dialogs/win.png",
    "frames": 1,
    "layers": 1,
    "width": 329,
    "height": 258
},
{
    "name": "dialogs/notification",
    "src": "dialogs/notification.png",
    "frames": 1,
    "layers": 1,
    "width": 230,
    "height": 49
},
{
    "name": "dialogs/ingame",
    "src": "dialogs/ingame.png",
    "frames": 1,
    "layers": 1,
    "width": 360,
    "height": 119
},
{
    "name": "dialogs/new_game",
    "src": "dialogs/new_game.png",
    "frames": 1,
    "layers": 1,
    "width": 225,
    "height": 195
},
{
    "name": "dialogs/tooltip",
    "src": "dialogs/tooltip.png",
    "frames": 1,
    "layers": 1,
    "width": 190,
    "height": 67
},
{
    "name": "common/icons/achievements",
    "src": "common/icons/achievements.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/back",
    "src": "common/icons/back.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/ch_mission",
    "src": "common/icons/ch_mission.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/credits_big",
    "src": "common/icons/credits_big.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/ico_no",
    "src": "common/icons/ico_no.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "common/icons/ico_yes_red",
    "src": "common/icons/ico_yes_red.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "common/icons/main_menu",
    "src": "common/icons/main_menu.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/more_games",
    "src": "common/icons/more_games.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/next",
    "src": "common/icons/next.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/options",
    "src": "common/icons/options.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/restart",
    "src": "common/icons/restart.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/shop",
    "src": "common/icons/shop.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "common/icons/fullscreen",
    "src": "common/icons/fullscreen.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
}];
var GAME_ASSETS = [{
    "name": "game/worlds/cell_0",
    "src": "game/worlds/cell_0.png",
    "frames": 1,
    "layers": 3,
    "width": 20,
    "height": 20
},
{
    "name": "game/enemies/enemies_0",
    "src": "game/enemies/enemies_0.png",
    "frames": 1,
    "layers": 1,
    "width": 15,
    "height": 15
},
{
    "name": "game/enemies/enemies_1",
    "src": "game/enemies/enemies_1.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 25
},
{
    "name": "game/enemies/enemies_10",
    "src": "game/enemies/enemies_10.png",
    "frames": 1,
    "layers": 1,
    "width": 42,
    "height": 20
},
{
    "name": "game/enemies/enemies_11",
    "src": "game/enemies/enemies_11.png",
    "frames": 1,
    "layers": 8,
    "width": 21,
    "height": 21
},
{
    "name": "game/enemies/enemies_12",
    "src": "game/enemies/enemies_12.png",
    "frames": 1,
    "layers": 1,
    "width": 39,
    "height": 20
},
{
    "name": "game/enemies/enemies_13",
    "src": "game/enemies/enemies_13.png",
    "frames": 1,
    "layers": 1,
    "width": 18,
    "height": 15
},
{
    "name": "game/enemies/enemies_14",
    "src": "game/enemies/enemies_14.png",
    "frames": 1,
    "layers": 8,
    "width": 21,
    "height": 21
},
{
    "name": "game/enemies/enemies_15",
    "src": "game/enemies/enemies_15.png",
    "frames": 1,
    "layers": 4,
    "width": 30,
    "height": 33
},
{
    "name": "game/enemies/enemies_16",
    "src": "game/enemies/enemies_16.png",
    "frames": 1,
    "layers": 1,
    "width": 18,
    "height": 9
},
{
    "name": "game/enemies/enemies_17",
    "src": "game/enemies/enemies_17.png",
    "frames": 1,
    "layers": 8,
    "width": 21,
    "height": 21
},
{
    "name": "game/enemies/enemies_18",
    "src": "game/enemies/enemies_18.png",
    "frames": 1,
    "layers": 4,
    "width": 40,
    "height": 39
},
{
    "name": "game/enemies/enemies_19",
    "src": "game/enemies/enemies_19.png",
    "frames": 1,
    "layers": 1,
    "width": 3,
    "height": 3
},
{
    "name": "game/enemies/enemies_2",
    "src": "game/enemies/enemies_2.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/enemies/enemies_20",
    "src": "game/enemies/enemies_20.png",
    "frames": 1,
    "layers": 1,
    "width": 13,
    "height": 9
},
{
    "name": "game/enemies/enemies_21",
    "src": "game/enemies/enemies_21.png",
    "frames": 1,
    "layers": 1,
    "width": 48,
    "height": 25
},
{
    "name": "game/enemies/enemies_22",
    "src": "game/enemies/enemies_22.png",
    "frames": 1,
    "layers": 8,
    "width": 60,
    "height": 60
},
{
    "name": "game/enemies/enemies_23",
    "src": "game/enemies/enemies_23.png",
    "frames": 1,
    "layers": 8,
    "width": 21,
    "height": 21
},
{
    "name": "game/enemies/enemies_24",
    "src": "game/enemies/enemies_24.png",
    "frames": 1,
    "layers": 1,
    "width": 90,
    "height": 32
},
{
    "name": "game/enemies/enemies_25",
    "src": "game/enemies/enemies_25.png",
    "frames": 1,
    "layers": 1,
    "width": 5,
    "height": 2
},
{
    "name": "game/enemies/enemies_26",
    "src": "game/enemies/enemies_26.png",
    "frames": 1,
    "layers": 1,
    "width": 73,
    "height": 78
},
{
    "name": "game/enemies/enemies_27",
    "src": "game/enemies/enemies_27.png",
    "frames": 1,
    "layers": 1,
    "width": 5,
    "height": 2
},
{
    "name": "game/enemies/enemies_28",
    "src": "game/enemies/enemies_28.png",
    "frames": 1,
    "layers": 8,
    "width": 21,
    "height": 21
},
{
    "name": "game/enemies/enemies_29",
    "src": "game/enemies/enemies_29.png",
    "frames": 1,
    "layers": 1,
    "width": 17,
    "height": 5
},
{
    "name": "game/enemies/enemies_3",
    "src": "game/enemies/enemies_3.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/enemies/enemies_30",
    "src": "game/enemies/enemies_30.png",
    "frames": 1,
    "layers": 1,
    "width": 17,
    "height": 5
},
{
    "name": "game/enemies/enemies_4",
    "src": "game/enemies/enemies_4.png",
    "frames": 1,
    "layers": 1,
    "width": 15,
    "height": 15
},
{
    "name": "game/enemies/enemies_5",
    "src": "game/enemies/enemies_5.png",
    "frames": 1,
    "layers": 1,
    "width": 35,
    "height": 24
},
{
    "name": "game/enemies/enemies_6",
    "src": "game/enemies/enemies_6.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/enemies/enemies_7",
    "src": "game/enemies/enemies_7.png",
    "frames": 1,
    "layers": 1,
    "width": 33,
    "height": 33
},
{
    "name": "game/enemies/enemies_8",
    "src": "game/enemies/enemies_8.png",
    "frames": 1,
    "layers": 1,
    "width": 53,
    "height": 38
},
{
    "name": "game/enemies/enemies_9",
    "src": "game/enemies/enemies_9.png",
    "frames": 1,
    "layers": 21,
    "width": 28,
    "height": 28
},
{
    "name": "game/enemies/enemies_22_shadow",
    "src": "game/enemies/enemies_22_shadow.png",
    "frames": 1,
    "layers": 8,
    "width": 60,
    "height": 60
},
{
    "name": "game/enemies/enemies_24_shadow",
    "src": "game/enemies/enemies_24_shadow.png",
    "frames": 1,
    "layers": 1,
    "width": 90,
    "height": 32
},
{
    "name": "game/enemies/enemies_26_shadow",
    "src": "game/enemies/enemies_26_shadow.png",
    "frames": 1,
    "layers": 1,
    "width": 73,
    "height": 78
},
{
    "name": "game/enemies/animation/fire_shot",
    "src": "game/enemies/animation/fire_shot.png",
    "frames": 6,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/bullets/bullets_0",
    "src": "game/bullets/bullets_0.png",
    "frames": 1,
    "layers": 1,
    "width": 16,
    "height": 16
},
{
    "name": "game/bullets/bullets_1",
    "src": "game/bullets/bullets_1.png",
    "frames": 1,
    "layers": 1,
    "width": 4,
    "height": 1
},
{
    "name": "game/bullets/bullets_2",
    "src": "game/bullets/bullets_2.png",
    "frames": 1,
    "layers": 1,
    "width": 16,
    "height": 4
},
{
    "name": "game/bullets/bullets_3",
    "src": "game/bullets/bullets_3.png",
    "frames": 1,
    "layers": 1,
    "width": 9,
    "height": 4
},
{
    "name": "game/bullets/bullets_4",
    "src": "game/bullets/bullets_4.png",
    "frames": 1,
    "layers": 1,
    "width": 16,
    "height": 3
},
{
    "name": "game/bullets/bullets_5",
    "src": "game/bullets/bullets_5.png",
    "frames": 1,
    "layers": 1,
    "width": 16,
    "height": 16
},
{
    "name": "game/digits/digits_0_9_0",
    "src": "game/digits/digits_0_9_0.png",
    "frames": 1,
    "layers": 1,
    "width": 89,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_1",
    "src": "game/digits/digits_0_9_1.png",
    "frames": 1,
    "layers": 1,
    "width": 62,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_2",
    "src": "game/digits/digits_0_9_2.png",
    "frames": 1,
    "layers": 1,
    "width": 86,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_3",
    "src": "game/digits/digits_0_9_3.png",
    "frames": 1,
    "layers": 1,
    "width": 82,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_4",
    "src": "game/digits/digits_0_9_4.png",
    "frames": 1,
    "layers": 1,
    "width": 95,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_5",
    "src": "game/digits/digits_0_9_5.png",
    "frames": 1,
    "layers": 1,
    "width": 83,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_6",
    "src": "game/digits/digits_0_9_6.png",
    "frames": 1,
    "layers": 1,
    "width": 90,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_7",
    "src": "game/digits/digits_0_9_7.png",
    "frames": 1,
    "layers": 1,
    "width": 88,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_8",
    "src": "game/digits/digits_0_9_8.png",
    "frames": 1,
    "layers": 1,
    "width": 91,
    "height": 110
},
{
    "name": "game/digits/digits_0_9_9",
    "src": "game/digits/digits_0_9_9.png",
    "frames": 1,
    "layers": 1,
    "width": 89,
    "height": 110
},
{
    "name": "game/infobar/collect_hero_towers_0",
    "src": "game/infobar/collect_hero_towers_0.png",
    "frames": 1,
    "layers": 1,
    "width": 330,
    "height": 88
},
{
    "name": "game/infobar/collect_hero_towers_2",
    "src": "game/infobar/collect_hero_towers_2.png",
    "frames": 1,
    "layers": 1,
    "width": 272,
    "height": 108
},
{
    "name": "game/infobar/icons_hero_0",
    "src": "game/infobar/icons_hero_0.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_1",
    "src": "game/infobar/icons_hero_1.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_10",
    "src": "game/infobar/icons_hero_10.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_11",
    "src": "game/infobar/icons_hero_11.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_12",
    "src": "game/infobar/icons_hero_12.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_13",
    "src": "game/infobar/icons_hero_13.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_14",
    "src": "game/infobar/icons_hero_14.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_15",
    "src": "game/infobar/icons_hero_15.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_16",
    "src": "game/infobar/icons_hero_16.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_2",
    "src": "game/infobar/icons_hero_2.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_3",
    "src": "game/infobar/icons_hero_3.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_4",
    "src": "game/infobar/icons_hero_4.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_5",
    "src": "game/infobar/icons_hero_5.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_6",
    "src": "game/infobar/icons_hero_6.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_7",
    "src": "game/infobar/icons_hero_7.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_8",
    "src": "game/infobar/icons_hero_8.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/icons_hero_9",
    "src": "game/infobar/icons_hero_9.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/infobar_10",
    "src": "game/infobar/infobar_10.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/infobar_11",
    "src": "game/infobar/infobar_11.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/infobar_12",
    "src": "game/infobar/infobar_12.png",
    "frames": 1,
    "layers": 1,
    "width": 55,
    "height": 38
},
{
    "name": "game/infobar/infobar_13",
    "src": "game/infobar/infobar_13.png",
    "frames": 1,
    "layers": 1,
    "width": 57,
    "height": 42
},
{
    "name": "game/infobar/infobar_14",
    "src": "game/infobar/infobar_14.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_15",
    "src": "game/infobar/infobar_15.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_16",
    "src": "game/infobar/infobar_16.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_17",
    "src": "game/infobar/infobar_17.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_18",
    "src": "game/infobar/infobar_18.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_19",
    "src": "game/infobar/infobar_19.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_2",
    "src": "game/infobar/infobar_2.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/infobar/infobar_20",
    "src": "game/infobar/infobar_20.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_21",
    "src": "game/infobar/infobar_21.png",
    "frames": 1,
    "layers": 1,
    "width": 61,
    "height": 60
},
{
    "name": "game/infobar/infobar_23",
    "src": "game/infobar/infobar_23.png",
    "frames": 1,
    "layers": 1,
    "width": 40,
    "height": 40
},
{
    "name": "game/infobar/infobar_3",
    "src": "game/infobar/infobar_3.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 34
},
{
    "name": "game/infobar/infobar_35_0",
    "src": "game/infobar/infobar_35_0.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_35_1",
    "src": "game/infobar/infobar_35_1.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_36_0",
    "src": "game/infobar/infobar_36_0.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_36_1",
    "src": "game/infobar/infobar_36_1.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_37_0",
    "src": "game/infobar/infobar_37_0.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_37_1",
    "src": "game/infobar/infobar_37_1.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_38_0",
    "src": "game/infobar/infobar_38_0.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_38_1",
    "src": "game/infobar/infobar_38_1.png",
    "frames": 1,
    "layers": 1,
    "width": 65,
    "height": 65
},
{
    "name": "game/infobar/infobar_39",
    "src": "game/infobar/infobar_39.png",
    "frames": 1,
    "layers": 1,
    "width": 16,
    "height": 14
},
{
    "name": "game/infobar/infobar_4",
    "src": "game/infobar/infobar_4.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/infobar/infobar_5",
    "src": "game/infobar/infobar_5.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 34
},
{
    "name": "game/infobar/infobar_6",
    "src": "game/infobar/infobar_6.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 34
},
{
    "name": "game/infobar/infobar_7",
    "src": "game/infobar/infobar_7.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 34
},
{
    "name": "game/infobar/infobar_8",
    "src": "game/infobar/infobar_8.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 34
},
{
    "name": "game/infobar/infobar_9",
    "src": "game/infobar/infobar_9.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 25
},
{
    "name": "game/infobar/next_mission_0",
    "src": "game/infobar/next_mission_0.png",
    "frames": 1,
    "layers": 1,
    "width": 100,
    "height": 100
},
{
    "name": "game/infobar/next_mission_1",
    "src": "game/infobar/next_mission_1.png",
    "frames": 1,
    "layers": 1,
    "width": 100,
    "height": 100
},
{
    "name": "game/infobar/next_mission_2",
    "src": "game/infobar/next_mission_2.png",
    "frames": 1,
    "layers": 1,
    "width": 100,
    "height": 100
},
{
    "name": "game/infobar/tower_button_0",
    "src": "game/infobar/tower_button_0.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_1",
    "src": "game/infobar/tower_button_1.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_10",
    "src": "game/infobar/tower_button_10.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_11",
    "src": "game/infobar/tower_button_11.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_12",
    "src": "game/infobar/tower_button_12.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_13",
    "src": "game/infobar/tower_button_13.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_14",
    "src": "game/infobar/tower_button_14.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_15",
    "src": "game/infobar/tower_button_15.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_16",
    "src": "game/infobar/tower_button_16.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_17",
    "src": "game/infobar/tower_button_17.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_18",
    "src": "game/infobar/tower_button_18.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_19",
    "src": "game/infobar/tower_button_19.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_2",
    "src": "game/infobar/tower_button_2.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_20",
    "src": "game/infobar/tower_button_20.png",
    "frames": 1,
    "layers": 1,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_21",
    "src": "game/infobar/tower_button_21.png",
    "frames": 1,
    "layers": 1,
    "width": 36,
    "height": 42
},
{
    "name": "game/infobar/tower_button_22",
    "src": "game/infobar/tower_button_22.png",
    "frames": 1,
    "layers": 1,
    "width": 36,
    "height": 42
},
{
    "name": "game/infobar/tower_button_23",
    "src": "game/infobar/tower_button_23.png",
    "frames": 1,
    "layers": 1,
    "width": 43,
    "height": 37
},
{
    "name": "game/infobar/tower_button_24",
    "src": "game/infobar/tower_button_24.png",
    "frames": 1,
    "layers": 1,
    "width": 43,
    "height": 37
},
{
    "name": "game/infobar/tower_button_25",
    "src": "game/infobar/tower_button_25.png",
    "frames": 1,
    "layers": 1,
    "width": 43,
    "height": 37
},
{
    "name": "game/infobar/tower_button_26",
    "src": "game/infobar/tower_button_26.png",
    "frames": 1,
    "layers": 1,
    "width": 43,
    "height": 37
},
{
    "name": "game/infobar/tower_button_27",
    "src": "game/infobar/tower_button_27.png",
    "frames": 1,
    "layers": 1,
    "width": 43,
    "height": 37
},
{
    "name": "game/infobar/tower_button_28",
    "src": "game/infobar/tower_button_28.png",
    "frames": 1,
    "layers": 1,
    "width": 43,
    "height": 37
},
{
    "name": "game/infobar/tower_button_3",
    "src": "game/infobar/tower_button_3.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_4",
    "src": "game/infobar/tower_button_4.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_5",
    "src": "game/infobar/tower_button_5.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_6",
    "src": "game/infobar/tower_button_6.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_7",
    "src": "game/infobar/tower_button_7.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_8",
    "src": "game/infobar/tower_button_8.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/infobar/tower_button_9",
    "src": "game/infobar/tower_button_9.png",
    "frames": 1,
    "layers": 2,
    "width": 32,
    "height": 32
},
{
    "name": "game/towers/towers_0",
    "src": "game/towers/towers_0.png",
    "frames": 1,
    "layers": 3,
    "width": 10,
    "height": 9
},
{
    "name": "game/towers/towers_1",
    "src": "game/towers/towers_1.png",
    "frames": 1,
    "layers": 3,
    "width": 10,
    "height": 9
},
{
    "name": "game/towers/towers_10",
    "src": "game/towers/towers_10.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_11",
    "src": "game/towers/towers_11.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_12",
    "src": "game/towers/towers_12.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_13",
    "src": "game/towers/towers_13.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_14",
    "src": "game/towers/towers_14.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_15",
    "src": "game/towers/towers_15.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_16",
    "src": "game/towers/towers_16.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_17",
    "src": "game/towers/towers_17.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_18",
    "src": "game/towers/towers_18.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_19",
    "src": "game/towers/towers_19.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_2",
    "src": "game/towers/towers_2.png",
    "frames": 1,
    "layers": 3,
    "width": 10,
    "height": 9
},
{
    "name": "game/towers/towers_20",
    "src": "game/towers/towers_20.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_21",
    "src": "game/towers/towers_21.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_22",
    "src": "game/towers/towers_22.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_23",
    "src": "game/towers/towers_23.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_24",
    "src": "game/towers/towers_24.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_25",
    "src": "game/towers/towers_25.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_26",
    "src": "game/towers/towers_26.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_27",
    "src": "game/towers/towers_27.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_28",
    "src": "game/towers/towers_28.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_29",
    "src": "game/towers/towers_29.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_3",
    "src": "game/towers/towers_3.png",
    "frames": 1,
    "layers": 3,
    "width": 9,
    "height": 9
},
{
    "name": "game/towers/towers_30",
    "src": "game/towers/towers_30.png",
    "frames": 1,
    "layers": 1,
    "width": 25,
    "height": 30
},
{
    "name": "game/towers/towers_31",
    "src": "game/towers/towers_31.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_32",
    "src": "game/towers/towers_32.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_33",
    "src": "game/towers/towers_33.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_34",
    "src": "game/towers/towers_34.png",
    "frames": 1,
    "layers": 1,
    "width": 30,
    "height": 30
},
{
    "name": "game/towers/towers_6",
    "src": "game/towers/towers_6.png",
    "frames": 1,
    "layers": 1,
    "width": 15,
    "height": 15
},
{
    "name": "game/towers/towers_9",
    "src": "game/towers/towers_9.png",
    "frames": 1,
    "layers": 1,
    "width": 20,
    "height": 20
},
{
    "name": "game/towers/flamethrower",
    "src": "game/towers/flamethrower.png",
    "frames": 10,
    "layers": 10,
    "width": 15,
    "height": 45
}];
var I18 = {
    currentLocale: "en",
    supportedLanguage: ["en", "cz", "de", "es", "fr", "it", "nl", "pt", "ru", "sv"],
    strings: {},
    init: function(locale, callback) {
        var lang = window.navigator.userLanguage || window.navigator.language || "";
        if (!locale) locale = lang.substr(0, 2);
        if (I18.supportedLanguage.indexOf(locale) < 0) locale = I18.supportedLanguage[0];
        I18.currentLocale = locale;
        Utils.get("language/" + locale + ".json?v=" + (new Date).getTime(), null, "json",
        function(data) {
            var strings = {};
            var parts = data.s;
            for (var i = 0; i < parts.length; i++) strings[I18.trim(parts[i].text)] = I18.trim(parts[i].translation);
            I18.setup(strings);
            if (callback) callback()
        })
    },
    setup: function(data) {
        I18.strings = data
    },
    trim: function(s) {
        if (!s) return "";
        return s.replace(/^\s+|\s+$/gm, "")
    },
    arrayAntidot: function(values) {
        if (!values) return;
        if (values.length > 0 && Utils.isArray(values[0])) return values[0];
        return values
    },
    getString: function(key, values) {
        if (typeof values == "undefined") values = null;
        var str = I18.getStringOrNull(key, values);
        if (str == null) return "{" + key + "}";
        return str
    },
    getStringOrNull: function(key, args) {
        if (typeof args == "undefined") args = null;
        var value = I18.strings[key];
        if (typeof value == "undefined") value = null;
        if (args == null || value == null) return value;
        else {
            args = [value].concat(I18.arrayAntidot(args));
            return I18.sprintf.apply(I18, args)
        }
    },
    f: function(key) {
        var values = I18.arrayAntidot(Array.prototype.slice.call(arguments, 1));
        if (!Utils.isArray(values)) values = [values];
        return I18.getString(key, values)
    },
    s: function(prefix, key, values) {
        if (!Utils.isArray(values)) values = [values];
        return I18.getString(prefix + "_" + key, I18.arrayAntidot(values))
    },
    sf: function(key, suffix, values) {
        return I18.getString(key + "_" + suffix, I18.arrayAntidot(values))
    },
    psf: function(prefix, key, suffix, values, temp) {
        return I18.getString(prefix + "_" + key + "_" + suffix, I18.arrayAntidot(values))
    },
    sprintf: function() {
        var regex = /%%|%(\d+\$)?([-+\'#0]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
        var a = arguments;
        var i = 0;
        var format = a[i++];
        var pad = function(str, len, chr, leftJustify) {
            if (!chr) chr = " ";
            var padding = str.length >= len ? "": (new Array(1 + len - str.length >>> 0)).join(chr);
            return leftJustify ? str + padding: padding + str
        };
        var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
            var diff = minWidth - value.length;
            if (diff > 0) if (leftJustify || !zeroPad) value = pad(value, minWidth, customPadChar, leftJustify);
            else value = value.slice(0, prefix.length) + pad("", diff, "0", true) + value.slice(prefix.length);
            return value
        };
        var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
            var number = value >>> 0;
            prefix = prefix && number && {
                2 : "0b",
                8 : "0",
                16 : "0x"
            } [base] || "";
            value = prefix + pad(number.toString(base), precision || 0, "0", false);
            return justify(value, prefix, leftJustify, minWidth, zeroPad)
        };
        var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
            if (precision != null) value = value.slice(0, precision);
            return justify(value, "", leftJustify, minWidth, zeroPad, customPadChar)
        };
        var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
            var number, prefix, method, textTransform, value;
            if (substring === "%%") return "%";
            var leftJustify = false;
            var positivePrefix = "";
            var zeroPad = false;
            var prefixBaseX = false;
            var customPadChar = " ";
            var flagsl = flags.length;
            for (var j = 0; flags && j < flagsl; j++) switch (flags.charAt(j)) {
            case " ":
                positivePrefix = " ";
                break;
            case "+":
                positivePrefix = "+";
                break;
            case "-":
                leftJustify = true;
                break;
            case "'":
                customPadChar = flags.charAt(j + 1);
                break;
            case "0":
                zeroPad = true;
                customPadChar = "0";
                break;
            case "#":
                prefixBaseX = true;
                break
            }
            if (!minWidth) minWidth = 0;
            else if (minWidth === "*") minWidth = +a[i++];
            else if (minWidth.charAt(0) == "*") minWidth = +a[minWidth.slice(1, -1)];
            else minWidth = +minWidth;
            if (minWidth < 0) {
                minWidth = -minWidth;
                leftJustify = true
            }
            if (!isFinite(minWidth)) throw new Error("sprintf: (minimum-)width must be finite");
            if (!precision) precision = "fFeE".indexOf(type) > -1 ? 6 : type === "d" ? 0 : undefined;
            else if (precision === "*") precision = +a[i++];
            else if (precision.charAt(0) == "*") precision = +a[precision.slice(1, -1)];
            else precision = +precision;
            value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
            switch (type) {
            case "s":
                return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
            case "c":
                return formatString(String.fromCharCode( + value), leftJustify, minWidth, precision, zeroPad);
            case "b":
                return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case "o":
                return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case "x":
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case "X":
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case "u":
                return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case "i":
            case "d":
                number = +value || 0;
                number = Math.round(number - number % 1);
                prefix = number < 0 ? "-": positivePrefix;
                value = prefix + pad(String(Math.abs(number)), precision, "0", false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            case "e":
            case "E":
            case "f":
            case "F":
            case "g":
            case "G":
                number = +value;
                prefix = number < 0 ? "-": positivePrefix;
                method = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(type.toLowerCase())];
                textTransform = ["toString", "toUpperCase"]["eEfFgG".indexOf(type) % 2];
                value = prefix + Math.abs(number)[method](precision);
                return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
            default:
                return substring
            }
        };
        return format.replace(regex, doFormat)
    }
};
var GAME_ID = "toy_defense";
var stage = null;
var fps = 60;
var GET = {};
var LANDSCAPE_MODE = true;
var STATE_LOAD = 0;
var STATE_LOGO = 1;
var STATE_MENU = 2;
var STATE_GAME = 3;
var gameState = STATE_LOAD;
var MIN_LAYOUT_WIDTH = 512;
var MIN_LAYOUT_HEIGHT = 384;
var MAX_LAYOUT_WIDTH = 683;
var MAX_LAYOUT_HEIGHT = 384;
var stageProps = {
    width: 480,
    height: 320
};
window.onload = function() {
    GET = Utils.parseGet();
    Utils.addMobileListeners(LANDSCAPE_MODE, true);
    Utils.mobileCorrectPixelRatio();
    Utils.addFitLayoutListeners();
    Utils.switchToTimeMode(1E3 / 24);
    Sprite.FLOOR_VALUES_ON_RENDER = false;
    Sprite.CACHE_BITMAPS = Utils.isIOS();
    ExternalAPI.exec("init");
    setTimeout(startLoad, 600)
};
function startLoad() {
    var r = Utils.getWindowRect();
    var w = Math.max(r.width, r.height) / Utils.globalScale;
    var h = Math.min(r.width, r.height) / Utils.globalScale;
    var resolution = {};
    var ratio = window.devicePixelRatio ? window.devicePixelRatio: 1;
    var sh = Math.max(window.screen.height * ratio, document.documentElement.clientHeight, window.innerHeight);
    if (sh >= 768) resolution.scale = 2;
    else if (sh >= 576) resolution.scale = 1.5;
    else resolution.scale = 1;
    if (Utils.mobileCheckSlowDevice() && resolution.scale >= 1.5) resolution.scale = 1.5;
    Utils.globalScale = resolution.scale;
    resolution.height = MIN_LAYOUT_HEIGHT;
    resolution.width = Math.floor(resolution.height * (w / h));
    if (resolution.width > MAX_LAYOUT_WIDTH) resolution.width = MAX_LAYOUT_WIDTH;
    if (resolution.width < MIN_LAYOUT_WIDTH) resolution.width = MIN_LAYOUT_WIDTH;
    stageProps.width = resolution.width;
    stageProps.height = resolution.height;
    resolution.width = Math.floor(resolution.width * Utils.globalScale);
    resolution.height = Math.floor(resolution.height * Utils.globalScale);
    Utils.createLayout(document.getElementById(Utils.DOMMainContainerId), resolution);
    setCSSBack(null, "#140501");
    Utils.addEventListener("fitlayout",
    function() {
        if (stage) {
            stage.drawScene(stage.canvas);
            stage.drawScene(stage.backgroundCanvas, true)
        }
        resizeCSSBack()
    });
    Utils.addEventListener("lockscreen",
    function() {
        if (stage && stage.started) stage.stop()
    });
    Utils.addEventListener("unlockscreen",
    function() {
        if (stage && !stage.started) stage.start()
    });
    Utils.mobileHideAddressBar();
    if (!GET.debug) Utils.checkOrientation(LANDSCAPE_MODE);
    TTLoader.create(preloadComplete, true, false);
    UI.init(loadImagesEnd, TTLoader.showLoadProgress)
}
function loadImagesEnd() {
    var sounds = [];
    SoundsManager.load(sounds, loadSoundsEnd, TTLoader.showLoadProgress, 40, 50)
}
function loadSoundsEnd() {
    I18.init(null, loadLocalizationEnd)
}
function loadLocalizationEnd() {
    var batchConfig = [{
        url: "data/game/towers_hierarchy.json",
        callback: TowersHierarchy.load
    },
    {
        url: "data/game/perks.json",
        callback: function(data) {
            TD.configs.perks = data
        }
    },
    {
        url: "data/game/soundmanager.json",
        callback: function(data) {
            SoundsManager.config = data.sounds.sound
        }
    }];
    DataCache.batch(batchConfig, TTLoader.loadComplete)
}
function preloadComplete() {
    SoundsManager.start();
    Utils.showMainLayoutContent();
    mainStart()
}
var backgroundImage = null;
function setCSSBack(img, color) {
    var c = document.getElementById(Utils.DOMScreenBackgroundContainerId);
    if (img) {
        backgroundImage = img;
        c.style.backgroundImage = "url(" + img.src + ")"
    }
    if (color) c.style.backgroundColor = color;
    c.style.backgroundPosition = "center top";
    c.style.backgroundRepeat = "no-repeat";
    resizeCSSBack()
}
function resizeCSSBack() {
    if (!backgroundImage) return;
    var rect = Utils.getWindowRect();
    var scale = rect.height / backgroundImage.height;
    var w = Math.floor(backgroundImage.width * scale);
    var h = Math.floor(backgroundImage.height * scale);
    document.getElementById(Utils.DOMScreenBackgroundContainerId).style.backgroundSize = w + "px " + h + "px"
}
function createStage() {
    if (stage) {
        stage.destroy();
        stage.stop()
    }
    stage = new Stage("screen", stageProps.width, stageProps.height, false);
    stage.setBackgroundCanvas("screen_background");
    stage.delay = 1E3 / fps;
    stage.onpretick = preTick;
    stage.onposttick = postTick;
    stage.ceilSizes = true;
    stage.showFPS = false
}
function mainStart() {
    createStage();
    TD.init(stage,
    function() {
        TD.showMainMenu();
        stage.start();
        stage.refreshBackground()
    })
}
function getGameDataId() {
    return "playtomax_" + GAME_ID + "_data"
}
function showMoreGames() {
    var href = ExternalAPI.exec("getMoreGamesURL");
    var w = window.open(href, "_blank");
    if (!w) window.location.href = href;
    else w.focus()
}
function preTick(e) {
    TD.tick(e.delta)
}
function postTick(e) {
    TD.postTick()
};
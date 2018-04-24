;(function (document) {
    "use strict";

    if ( document.visibilityState || document.webkitVisibilityState ) {
         return;
    }

    document.hidden = false;
    document.visibilityState = 'visible';

    var event = null
    var i = 0
    var fireEvent = function () {
        if( document.createEvent ) {
            if ( !event ) {
                event = document.createEvent('HTMLEvents');
                event.initEvent('visibilitychange', true, true);
            }
            document.dispatchEvent(event);
        } else {
            if ( typeof(Visibility) == 'object' ) {
                Visibility._change.call(Visibility, { });
            }
        }
    }

    var onFocus = function () {
        document.hidden = false;
        document.visibilityState = 'visible';
        fireEvent();
    };
    var onBlur  = function () {
        document.hidden = true;
        document.visibilityState = 'hidden';
        fireEvent();
    }

    if ( document.addEventListener ) {
        window.addEventListener('focus', onFocus, true);
        window.addEventListener('blur',  onBlur,  true);
    } else {
        document.attachEvent('onfocusin',  onFocus);
        document.attachEvent('onfocusout', onBlur);
    }
})(document);

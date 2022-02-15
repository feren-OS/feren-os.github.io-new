var UA=navigator.userAgent;

function browserOptimisations() {
    if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(UA) && /Firefox\/(\S+)/.test(UA)) || (/rv:([^\)]+)\) AppleWebKit\/\d{8}/.test(UA) && /Safari\/(\S+)/.test(UA)) { /*Firefox*/
        //Use Basic theme since the browser doesn't support blur
        //TODO: Find out UAs of other non-Firefox browsers that also do not support blur effects
    } else {
        var head  = document.getElementsByTagName('head')[0];
        head.removeChild(document.getElementById("basiccss"));
    }
}

//cookie 

(function () {
    function setCookie(cName, cValue, cDay) {
        var expire = new Date();
        expire.setDate(expire.getDate() + cDay);
        cookies = cName + '=' + escape(cValue) + '; path=/ ';
        if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
        document.cookie = cookies;
    }

    function getCookie(cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if (start != -1) {
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if (end == -1) end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    }
    
    
    var cookie = getCookie("darkMode");

    if (cookie == "true") {
        setCookie("darkMode", "fales", 10000);
        window.location.reload();
    } else {
        //None
        setCookie("darkMode", "true", 10000);
    }
    
})();
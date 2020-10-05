(function() {
    var noticeButtons = document.querySelectorAll('.btn-lightgreen'), i;
    for (i = 0; i < noticeButtons.length; ++i) { noticeButtons[i].style.cssText = 'background-color: red;'; }
    document.getElementsByClassName("bg-light")[0].style.cssText = "background-color: black !important";
})();
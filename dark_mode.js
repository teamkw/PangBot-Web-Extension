(function() {
    var i;
    var noticeButtons = document.querySelectorAll('.btn-lightgreen');
    for (i = 0; i < noticeButtons.length; ++i) { noticeButtons[i].style.cssText = 'background-color: red;'; }
    var documentButtons = document.querySelectorAll('.btn-lightpurple');
    for (i = 0; i < documentButtons.length; ++i) { documentButtons[i].style.cssText = 'background-color: red;'; }
    var qnaButtons = document.querySelectorAll('.btn-lightbrown');
    for (i = 0; i < qnaButtons.length; ++i) { qnaButtons[i].style.cssText = 'background-color: red;'; }
    var toktokButtons = document.querySelectorAll('.btn-lightblue');
    for (i = 0; i < toktokButtons.length; ++i) { toktokButtons[i].style.cssText = 'background-color: red;'; }
    document.getElementsByClassName("bg-light")[0].style.cssText = "background-color: black !important";
})();
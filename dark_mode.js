(function() {
    const darkModeBlack = "#1e1f1c";
    const darkModeKw = "#b5335d";
    const darkModeLightGreen = "#008900";
    const darkModeLightPurple = "#684df6";
    const darkModeLightBrown = "#c9a876"
    const darkModeLightBlue = "#4881f6";
    //document.body.style.color = "white";
    var i;
    var noticeButtons = document.querySelectorAll('.btn-lightgreen');
    for (i = 0; i < noticeButtons.length; ++i) { noticeButtons[i].style.cssText = "background-color: " + darkModeLightGreen + ";"; }
    var documentButtons = document.querySelectorAll('.btn-lightpurple');
    for (i = 0; i < documentButtons.length; ++i) { documentButtons[i].style.cssText = "background-color: " + darkModeLightPurple + ";"; }
    var qnaButtons = document.querySelectorAll('.btn-lightbrown');
    for (i = 0; i < qnaButtons.length; ++i) { qnaButtons[i].style.cssText = "background-color: " + darkModeLightBrown + ";"; }
    var toktokButtons = document.querySelectorAll('.btn-lightblue');
    for (i = 0; i < toktokButtons.length; ++i) { toktokButtons[i].style.cssText = "background-color: " + darkModeLightBlue + ";"; }
    document.getElementsByClassName("bg-light")[0].style.cssText = "background-color: " + darkModeBlack + " !important";
    document.getElementsByClassName("bg-top")[0].style.cssText = "background-color: " + darkModeKw + " !important";
})();
(function() {
    const darkModeBlack = "#1e1f1c";
    const darkModeKw = "#b5335d";
    const darkModeLightGreen = "#008900";
    const darkModeLightPurple = "#684df6";
    const darkModeLightBrown = "#c9a876"
    const darkModeLightBlue = "#4881f6";
    //document.body.style.color = "white";

    var noticeButtonStyle;

    var i;
    var noticeButtons = document.querySelectorAll('.btn-lightgreen');
    for (i = 0; i < noticeButtons.length; ++i) {
        var curButton = noticeButtons[i];
        noticeButtonStyle = "background-color: " + darkModeLightGreen + "; ";
        curButton.style.cssText = noticeButtonStyle;
        if(curButton.lastElementChild.style.display !== "none") {
            curButton.removeChild(curButton.lastElementChild);
            noticeButtonStyle += "border-color: " + darkModeKw + "; ";
            noticeButtonStyle += "border-width: thick; ";
            curButton.style.cssText = noticeButtonStyle;
        }
    }
    var documentButtons = document.querySelectorAll('.btn-lightpurple');
    for (i = 0; i < documentButtons.length; ++i) {
        var curButton = documentButtons[i];
        curButton.style.cssText = "background-color: " + darkModeLightPurple + "; ";
    }
    var qnaButtons = document.querySelectorAll('.btn-lightbrown');
    for (i = 0; i < qnaButtons.length; ++i) {
        var curButton = qnaButtons[i];
        curButton.style.cssText = "background-color: " + darkModeLightBrown + "; ";
    }
    var toktokButtons = document.querySelectorAll('.btn-lightblue');
    for (i = 0; i < toktokButtons.length; ++i) {
        var curButton = toktokButtons[i];
        curButton.style.cssText = "background-color: " + darkModeLightBlue + "; "; 
    }
    document.getElementsByClassName("bg-light")[0].style.cssText = "background-color: " + darkModeBlack + " !important";
    document.getElementsByClassName("bg-top")[0].style.cssText = "background-color: " + darkModeKw + " !important";
    
})();
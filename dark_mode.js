(function() {
    const darkModeBlack = "#1e1f1c";
    const darkModeKw = "#b5335d";

    const darkModeLightGreen = "#008900";
    const darkModeLightPurple = "#684df6";
    const darkModeLightBrown = "#c9a876"
    const darkModeLightBlue = "#4881f6";

    // noticeButton, documentButton, qnaButton, toktokButton
    const sButtonColors = [ "#008900", "#684df6", "#c9a876", "#4881f6" ]

    //document.body.style.color = "white";

    var noticeButtonStyle;
    var documentButtonStyle;
    var qnaButtonStyle;
    var toktokButtonStyle;

    // !!!! this variable is universal for all for loops. should keep an eye on this.
    var i;

    document.getElementsByClassName("bg-light")[0].style.cssText = "background-color: " + darkModeBlack + " !important";
    document.getElementsByClassName("bg-top")[0].style.cssText = "background-color: " + darkModeKw + " !important";
    


    // ----------------------- SMALL BUTTONS --------------------------
    // ----------------------------------------------------------------
    var noticeButtons = document.querySelectorAll('.btn-lightgreen');
    for (i = 0; i < noticeButtons.length; ++i) {
        var curButton = noticeButtons[i];
        noticeButtonStyle = "background-color: " + darkModeLightGreen + "; ";
        curButton.style.cssText = noticeButtonStyle;
        if(curButton.lastElementChild.style.display !== "none") {
            //curButton.removeChild(curButton.lastElementChild);
            noticeButtonStyle += "border-color: " + darkModeKw + "; ";
            noticeButtonStyle += "border-width: thick; ";
            curButton.style.cssText = noticeButtonStyle;
        }
    }
    var documentButtons = document.querySelectorAll('.btn-lightpurple');
    for (i = 0; i < documentButtons.length; ++i) {
        var curButton = documentButtons[i];
        documentButtonStyle = "background-color: " + darkModeLightPurple + "; ";
        curButton.style.cssText = documentButtonStyle;
        if(curButton.lastElementChild.style.display !== "none") {
            //curButton.removeChild(curButton.lastElementChild);
            documentButtonStyle += "border-color: " + darkModeKw + "; ";
            documentButtonStyle += "border-width: thick; ";
            curButton.style.cssText = documentButtonStyle;
        }
    }
    var qnaButtons = document.querySelectorAll('.btn-lightbrown');
    for (i = 0; i < qnaButtons.length; ++i) {
        var curButton = qnaButtons[i];
        qnaButtonStyle = "background-color: " + darkModeLightBrown + "; ";
        curButton.style.cssText = qnaButtonStyle;
        if(curButton.lastElementChild.style.display !== "none") {
            //curButton.removeChild(curButton.lastElementChild);
            qnaButtonStyle += "border-color: " + darkModeKw + "; ";
            qnaButtonStyle += "border-width: thick; ";
            curButton.style.cssText = qnaButtonStyle;
        }
    }
    var toktokButtons = document.querySelectorAll('.btn-lightblue');
    for (i = 0; i < toktokButtons.length; ++i) {
        var curButton = toktokButtons[i];
        toktokButtonStyle = "background-color: " + darkModeLightBlue + "; ";
        curButton.style.cssText = toktokButtonStyle;
        if(curButton.lastElementChild.style.display !== "none") {
            //curButton.removeChild(curButton.lastElementChild);
            toktokButtonStyle += "border-color: " + darkModeKw + "; ";
            toktokButtonStyle += "border-width: thick; ";
            curButton.style.cssText = toktokButtonStyle;
        }
    }
    
})();
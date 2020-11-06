(function() {
    const darkModeBlack = "#1e1f1c";
    const darkModeKw = "#b5335d";
    const darkModethead = '#999999'
    const darkModetbody = '#333333'

    const darkModeLightGreen = "#008900";
    const darkModeLightPurple = "#684df6";
    const darkModeLightBrown = "#c9a876"
    const darkModeLightBlue = "#4881f6";

    // noticeButton, documentButton, qnaButton, toktokButton
    const sButtonColors = [ "#008900", "#684df6", "#c9a876", "#4881f6" ]

    var noticeButtonStyle;
    var documentButtonStyle;
    var qnaButtonStyle;
    var toktokButtonStyle;

    // !!!! this variable is universal for all for loops. should keep an eye on this.
    var i;

    // change all default font color. It was black before changing.
    document.body.style.color = "white";

    document.getElementsByClassName("bg-light")[0].style.cssText = "background-color: " + darkModeBlack + " !important";
    document.getElementsByClassName("bg-top")[0].style.cssText = "background-color: " + darkModeKw + " !important";
    
    // -------------------------- CARDS -------------------------------
    // ----------------------------------------------------------------
    var cards = document.getElementsByClassName("card");
    for(i = 0; i < cards.length; ++i) {
        //cards[i].style.backgroundColor = "#505050";
        cards[i].style.backgroundColor = "#272822";
    }
    
    // ---------------------- SUBJECT TABLE ---------------------------
    // ----------------------------------------------------------------
    var listboxes = document.querySelectorAll('.subjectlist li');
    for(i = 0; i < listboxes.length; ++i) {
        // change subject table border color
        listboxes[i].style.borderBottomColor = darkModeKw;
        listboxes[i].style.borderTopColor = darkModeKw;
    }

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
    

    // -------------------------- NOTICE ------------------------------
    // ----------------------------------------------------------------

    // -------------------------- Title -------------------------------
    var contenttitle = document.getElementsByClassName("contenttitle");
    for(i = 0; i < contenttitle.length; ++i) {
        contenttitle[i].style.color = 'white';
    }

    // -------------------------- SEARCH ------------------------------
    var search = document.getElementsByClassName("con_search");
    for(i = 0; i < search.length; ++i) {
        search[i].style.backgroundColor = "#272822";
    }

    // -------------------------- TABLE ------------------------------ 
    var tableBody = document.querySelectorAll('.AType tbody tr td');
    for (i = 0; i < tableBody.length; ++i) {
        tableBody[i].style.background = darkModetbody;
    }

    var tableHead = document.querySelectorAll('.AType thead tr th');
    for (i = 0; i < tableHead.length; ++i) {
        tableHead[i].style.background = darkModethead;

    }

    // -------------------------- PAGING -----------------------------
    var paging = document.querySelectorAll('.paging li');
    for (i = 0; i < paging.length; ++i) {
        var cur = paging[i].getElementsByTagName('a')[0];
        if (paging[i].className == 'active'){
            cur.style.color = '#000000';
        }else {
            cur.style.color = 'white';
        }
    }


    
})();
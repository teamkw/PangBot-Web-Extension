(function() {
    const darkModeBlack = "#1e1f1c";
    const darkModeLightBlack = "#272822";
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
        if(curButton.lastElementChild && curButton.lastElementChild.style.display !== "none") {
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

    // ------------------------ TITLE TEXT ----------------------------
    var title = document.getElementsByClassName('title-text');
    for(i = 0; i < title.length; i++){
        title[i].style.color = 'white';
    }
    // --------------------------- C DAY ------------------------------
    var cTitle = document.getElementsByClassName('c-title');
    if(cTitle.length > 0){
        cTitle[0].style.color = 'white';
    }
    var day = document.querySelectorAll('.c-day-content');
    for(i = 0; i < day.length; i++){
        if(day[i].style.color !== 'rgb(255, 255, 255)'){
           day[i].style.color = '#747474'
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
        search[i].style.backgroundColor = darkModeLightBlack;
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

    // --------------------- ASSIGMENT MAIN PAGE-----------------------
    // ----------------------------------------------------------------

    // ------------------------ BOTTOM TEXT ---------------------------
    var text = document.querySelectorAll('.popWindow div');
    if(text.length > 0){
        text[text.length - 1].style.color = darkModeLightBlue;
    }

    // ---------------------- DATE TEXT (BLUE) ------------------------
    var dateText = document.querySelectorAll(".AType tbody tr td font");
    for(i = 0; i < dateText.length; i++){
        var cur = dateText[i];
        if(cur.getAttribute('color') == 'blue'){
            cur.style.color = darkModeLightBlue;
        }
    }

    // ------------------------ ASSIGMENT PAGE -------------------------

    //----------------------------- TABLE ------------------------------
    var table = document.getElementsByClassName('contsubtitle icon');
    for(i = 0; i < table.length; i++){
        table[i].style.backgroundColor = darkModeLightBlack;
    }

    var tr = document.querySelectorAll('.tablegw tbody tr');
    for(i = 0; i < tr.length; i++){
        var th = tr[i].getElementsByTagName('th');
        var td = tr[i].getElementsByTagName('td');
        for(var j = 0; j < th.length; j++){
            th[j].style.backgroundColor = darkModethead;
        }
        for(var j = 0; j < td.length; j++){
            td[j].style.backgroundColor = darkModetbody;
        }
    }

    var fileherf = document.querySelectorAll('.board_viewfile a')
    for(i = 0; i < fileherf.length; i++){
        fileherf[i].style.color = "white"
    }

    
    // ------------------------ CLASS MATERIALS ------------------------
    var info = document.getElementsByClassName('board_view_header');
    if(info.length > 0){
        info[0].style.background = darkModethead;
    }

    var file  = document.getElementsByClassName('board_viewfile');
    for(i = 0; i < file.length; i++){
        var cur = file[i];
        cur.style.backgroundColor = darkModeLightBlack;
        var span = cur.getElementsByTagName('span');
        span[0].style.color = 'white';
        span[1].style.color = darkModeLightBlue;
        cur.getElementsByTagName('a')[0].style.color = 'white';
    }

    var textherf = document.querySelectorAll('.board_viewDetail div p a');
    for(i = 0; i < textherf.length; i++){
        textherf[i].style.color = "white"
    }

    var comment = document.getElementsByClassName('text first');
    for(i = 0; i < comment.length; i++){ 
        var cur = comment[i].getElementsByTagName('pre');

        if (cur.length > 0){
            cur[0].style.backgroundColor = darkModeLightBlack;
            cur[0].style.color = 'white';
        }
    }
    
})();
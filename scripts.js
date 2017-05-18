function openTab(call, tabName) {
    var i;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"; 
    }

    tabButton = document.getElementsByClassName("tabButton")
    for (i = 0; i < document.getElementsByClassName("tabButton").length; i++) {
    	tabButton[i].className = tabButton[i].className.replace(" active", "")
    }

    call.currentTarget.className += " active";
    document.getElementById(tabName).style.display = "block"; 
}
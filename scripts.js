function openTab(event, tabName) {
    var i;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabButton = document.getElementsByClassName("tabButton")
    for (i = 0; i < document.getElementsByClassName("tabButton").length; i++) {
    	tabButton[i].className = tabButton[i].className.replace(" active", " inact")
    }

    event.currentTarget.className = event.currentTarget.className.replace(" inact", " active");
    document.getElementById(tabName).style.display = "block"; 
}
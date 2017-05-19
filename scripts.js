var money = 0;

function openTab(event, tabName) {
    var i;

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabButton = document.getElementsByClassName("tabButton")
    for (i = 0; i < document.getElementsByClassName("tabButton").length; i++) {
    	tabButton[i].className = tabButton[i].className.replace(" active", " inActive")
    }

    event.currentTarget.className = event.currentTarget.className.replace(" inActive", " active");
    document.getElementById(tabName).style.display = "block"; 
}

function gameLoop() {

	money += 1;

	document.getElementById("moneyCounter").innerHTML = money;
	console.log("Done");
}
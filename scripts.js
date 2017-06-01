var money = 0;
var iq = 0;
var d = new Date();
var prev = d.getTime()-1;
var now = d.getTime();
var currentTask = "none";

function delTime() {
    d = new Date();
    prev = now;
    now = d.getTime();
    var elapse = now - prev;
    gameLoop(elapse);
}

function gameLoop(elapse) {
    money += elapse;
    iq += elapse;
    //document.getElementById("iqCounter").innerHTML = "IQ " + iq;
    document.getElementById("moneyCounter").innerHTML = "Counter: " + money;
}

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

var d = new Date();
var prev = d.getTime()-1;
var now = d.getTime();
var elapse = 0;

var money = 0;
var iq = 0;

var currentTask = "none";

function delTime() {
    d = new Date();
    prev = now;
    now = d.getTime();
    elapse = now - prev;
    gameLoop(elapse);
}

function gameLoop(elapse) {
    if(currentTask == 'work') {
        money += elapse;
    }
    else if (currentTask == 'research') {
        iq += elapse;
    }
    document.getElementById("iqCounter").innerHTML = "IQ " + iq;
    document.getElementById("moneyCounter").innerHTML = "$" + money;
}

function runButton(event, buttonName) {
    switch(buttonName) {
        case 'workButton':
            currentTask = 'work'
            break;
        case 'researchButton':
            currentTask = 'research'
            break;
    }
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
    console.log(tabName);
}

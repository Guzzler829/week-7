let darkModeSwitch = $("#darkModeSwitch");
let body = $("body");
let mainBody = $("#main-body");
let reveals = $(".reveal");
let meetBruce = $("#meetBruce")
let jumbotronSubText = $(".jumbotronSubText")
let imageList = $(".imageList");
let cookie = document.cookie;
let toggle = -1;

if(cookie){
    toggle = cookie;
}

if(toggle == -1){
    body[0].classList.add("bootstrap-dark");
    mainBody[0].classList.add("main-body-dark");
    darkModeSwitch.prop("checked", true);
} else {
    mainBody[0].classList.add("main-body-light");
}



function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}


if (detectMob) {
    mainBody.attr("class", "col-8");
} else {
    mainBody.attr("class", "col-12");
}

//on scroll down, animate jumbotron
window.addEventListener("scroll", () => {
    //revealElement(reveals, 100); 
    revealElement(meetBruce, 125);
    revealElement(jumbotronSubText, 125);
    revealElementsDelayCycle(imageList, 125, 250);
});

function revealElement(element, elementVisible) {
    let windowHeight = window.innerHeight;
    for (let i = 0; i < element.length; i++) {
        let elementTop = element[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element[i].classList.add("active");
        } else {
        element[i].classList.remove("active");
        }
    }
}

const revealElementsDelayCycle = async (element, elementVisible, delay) => {
    let windowHeight = window.innerHeight;
    for (let i = 0; i < element.length; i++) {
        let elementTop = element[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            await sleep(delay);
            element[i].classList.add("active");
        } else {
        element[i].classList.remove("active");
        }
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function darkModeToggle(){
    body[0].classList.toggle("bootstrap-dark");
    toggle *= -1;
    document.cookie = toggle;
    switch(toggle){
        case -1:
            mainBody[0].classList.add("main-body-dark");
            mainBody[0].classList.remove("main-body-light");
            break;
        case 1:
            mainBody[0].classList.add("main-body-light");
            mainBody[0].classList.remove("main-body-dark");
    }
}